import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Post()
    async create(@Body() user: User) {
      this.userService.create(user);
    }
  
    @Get()
    async findAll(): Promise<User[]> {
      return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
      return this.userService.findOne(id);
    }
  
    @Put(':id')
    update(@Param('id') id: number, @Body() user: User) {
      return this.userService.update(id, user);
    }
  
    @Delete(':id')
    remove(@Param('id') id: number) {
      return this.userService.remove(id);
    }

}
