import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from 'src/model/admin.model';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'PhilscoIDN',
      signOptions: {
        expiresIn: 36000,
      },
    }),
    SequelizeModule.forFeature([Admin]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
