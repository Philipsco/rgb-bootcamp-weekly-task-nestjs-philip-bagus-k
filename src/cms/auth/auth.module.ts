import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from 'src/model/admin.model';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt-strategy';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
const env = dotenv.parse(fs.readFileSync('.env'));

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: env.SECRET_KEY,
      signOptions: {
        expiresIn: 36000,
      },
    }),
    SequelizeModule.forFeature([Admin]),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [JwtStrategy],
})
export class AuthModule {}
