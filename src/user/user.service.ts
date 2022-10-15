import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ){}

  create(user: User) {
    return this.userRepository.save(user);
  }

  async update(id: number, user: User){
    const userExisting: User = await this.findOne(id);
    if(!userExisting){
      throw new HttpException('User with Id not found', HttpStatus.BAD_REQUEST)
    }    
    user.id = id;
    if(user.email){
      userExisting.email = user.email;
    }
    if(user.hobby){
      userExisting.hobby = user.hobby;
    }
    if(user.phone){
      userExisting.phone = user.phone;
    }
    if(user.skillsets){
      userExisting.skillsets = user.skillsets;
    }
    if(user.username){
      userExisting.username = user.username;
    }

    this.userRepository.save(userExisting);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User>{
    return this.userRepository.findOneBy({id});
  }

  async remove(id: number): Promise<void>{
    const userExisting: User = await this.findOne(id);
    if(!userExisting){
      throw new HttpException('User with Id not found', HttpStatus.BAD_REQUEST)
    }    
    await this.userRepository.delete(id);
  }

}