import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Pet } from './pets/pets.entity';
import { Users } from './users/users.entity';

@Module({
  imports: [AuthModule, TypeOrmModule.forRoot(config), TypeOrmModule.forFeature([Users, Pet])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
