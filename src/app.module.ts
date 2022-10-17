import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { User } from './user/user.entity';
import { UsersModule } from './user/user.module';
import { UserService } from './user/user.service';

@Module({
  imports: [ 
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
    // host: 'localhost',
    // port: 5432,
    // username: 'postgres',
    // password: '123456',
    database: 'cdn',
    entities: [User],
    synchronize: true,
    logging: true
  }),
  UsersModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
