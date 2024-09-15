import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(`/`)
  @UseGuards(AuthGuard)
  async getUsers(@Query('page') page = 1) {
    let options = { limit: 10, page: page };
    const users = await this.userService.getUsers(options);
    return users;
  }
}
