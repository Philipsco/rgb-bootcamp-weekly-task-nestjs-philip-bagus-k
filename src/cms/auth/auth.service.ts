import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from 'src/model/admin.model';
import { AuthCredentialDto } from './dto/auth-credential-dto';
import * as bcrypt from 'bcrypt';
import {
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt/dist';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Admin)
    private adminModel: typeof Admin,
    private jwtService: JwtService,
  ) {}

  async signUp(authCredentialDto: AuthCredentialDto): Promise<Admin> {
    const { username, password } = authCredentialDto;
    const checkUsername = await this.getAdminByUsername(username);

    if (checkUsername) {
      throw new BadRequestException('Username sudah ada');
    }
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    return this.adminModel.create({ username, password: hash });
  }

  async getAdminByUsername(username: any): Promise<Admin> {
    return this.adminModel.findOne({
      where: { username: username },
    });
  }

  async signIn(
    authCredentialDto: AuthCredentialDto,
  ): Promise<{ token: string }> {
    const { username, password } = authCredentialDto;
    const admin = await this.adminModel.findOne({
      where: {
        username: username,
      },
    });

    if (admin && (await bcrypt.compare(password, admin.password))) {
      const payLoad = { username };
      const token = await this.jwtService.sign(payLoad);
      return { token };
    } else {
      throw new UnauthorizedException('Silahkan cek Credential anda');
    }
  }
}
