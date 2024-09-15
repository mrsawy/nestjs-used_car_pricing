import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { PaginateModel, PaginateOptions } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly User: PaginateModel<User>,
  ) {}
  async createUser({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) {
    const newUser = await this.User.create({ name, email, password });
    return newUser;
  }

  async getUsers(options: PaginateOptions = { limit: 10, page: 1 }) {
    const users = await this.User.paginate({}, options);
    return users;
  }
}
