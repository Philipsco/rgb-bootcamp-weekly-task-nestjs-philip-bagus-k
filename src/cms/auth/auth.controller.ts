import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { Admin } from 'src/model/admin.model';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credential-dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signUp')
  async signUp(@Body() authCredentialDto: AuthCredentialDto): Promise<Admin> {
    return this.authService.signUp(authCredentialDto);
  }

  @Post('signIn')
  async signIn(
    @Body() authCredentialDto: AuthCredentialDto,
  ): Promise<{ token: string }> {
    return this.authService.signIn(authCredentialDto);
  }
}
