import { Module } from '@nestjs/common';
import { Pet } from 'src/pets/pets.entity';
import { Users } from './users.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config), TypeOrmModule.forFeature([Users, Pet])],
  providers: [UsersService, Pet, Users],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
