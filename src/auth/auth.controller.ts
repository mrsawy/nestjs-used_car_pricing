import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { SignUpDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}
  @Post(`/signup`)
  async signup(@Body() body: SignUpDto) {
    const newUser = await this.userService.createUser(body);
    return newUser;
  }
}
