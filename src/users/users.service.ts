import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pet } from 'src/pets/pets.entity';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
    @InjectRepository(Pet) private petRepository: Repository<Pet>) {}

  async getUsers(): Promise<Users[]>{
    return this.usersRepository.find({
      relations: ['pets']
    });
  }

  async findOne(username: string): Promise<any> {
    try{
      let user =  await this.usersRepository.findOneOrFail({
        where: {
          username: username,
        },
        relations: ['pets']
      }); 
      return user;
    }
    catch(err){
      return null;
    }
  }

  async createUser(name: string, username: string, password: string){
    const newUser = this.usersRepository.create({name, username, password});

    return this.usersRepository.save(newUser);
  }

  async seed() {
    let user = this.usersRepository.create({ name: 'john', username: 'john1', password: 'changeme'});
    await this.usersRepository.save(user);

    let pet = this.petRepository.create({ name: 'alfred', image: "https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" });

    pet.owner = user;
    await this.petRepository.save(pet);

    // user1 & pet1
    user = this.usersRepository.create({ name: 'chris', username: 'chris1', password: 'secret'});
    await this.usersRepository.save(user);

    pet = this.petRepository.create({ name: 'gopher', image: "https://images.unsplash.com/photo-1506755855567-92ff770e8d00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" });
    await this.petRepository.save(pet);

    pet.owner = user;
    await this.petRepository.save(pet);

    // user2 & pet2
    user = this.usersRepository.create({ name: 'maria', username: 'maria1', password: 'guess'});
    await this.usersRepository.save(user);

    pet = this.petRepository.create({ name: 'jenny', image: "https://images.unsplash.com/photo-1506755855567-92ff770e8d00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" });
    await this.petRepository.save(pet);

    pet.owner = user;
    await this.petRepository.save(pet);
  }
}
