import { left, right, type Either } from "@/core/either";
import { User } from "@/domain/enterprise/entities/user";
import type { UserRepository } from "../../repositories/user-repository";
import { userAlreadyExistError } from "@/core/errors/user-already-exist-error";
import type { FakeHasher } from "../../../../../test/cryptography/fake-hasher";
import type { HashGenerator } from "../../cryptography/hash-generator";

interface CreateUserUseCaseRequest {
  name: string;
  email: string;
  password: string;
}
type CreateUserUseCaseResponse = Either<userAlreadyExistError, { user: User }>;
export class CreateUserUseCase {
  constructor(public userRepository: UserRepository, public hashGenerator : HashGenerator) {}
  async execute({
    name,
    email,
    password,
  }: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
    const userAlreadyExist = await this.userRepository.findByEmail(email);
    if (userAlreadyExist) {
      return left(new userAlreadyExistError());
    } else {
     const hashedPassword = await this.hashGenerator.hash(password);
      const user = User.create({
        name,
        email,
        password: hashedPassword,
      });
      await this.userRepository.create(user);
      return right({ user });
    }
  }
}
