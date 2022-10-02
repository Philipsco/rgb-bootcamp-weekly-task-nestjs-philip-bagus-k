import { Injectable } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common/exceptions/unauthorized.exception';
import { PassportStrategy } from '@nestjs/passport';
import { InjectModel } from '@nestjs/sequelize';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Admin } from 'src/model/admin.model';
import { JwtPayload } from './jwt-payload-interface';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
const env = dotenv.parse(fs.readFileSync('.env'));

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(Admin)
    private adminModel: typeof Admin,
  ) {
    super({
      secretOrKey: env.SECRET_KEY,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: JwtPayload): Promise<Admin> {
    const { username } = payload;
    const admin = await this.adminModel.findOne({
      where: { username: username },
    });

    if (!admin) {
      throw new UnauthorizedException();
    }

    return admin;
  }
}
