import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@EntityRepository(UserEntity)
export class UsersRepository extends Repository<UserEntity> {
  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialsDto;
    const user = this.create({ username, password });
    await this.save(user);
  }
}
