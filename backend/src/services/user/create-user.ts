import { User } from '@prisma/client'
import {
  UserRepository,
  userRepositoryInstance,
} from '../../repositories/user.js'
import { Encrypter, encrypterInstance } from '../../providers/encrypter.js'
import { Either, Failure, Success } from '../../utils/either.js'

namespace CreateUserDTO {
  export type Params = {
    name: string
    email: string
    password: string
  }

  export type Failure = { message: string }

  export type Success = User

  export type Result = Either<Failure, Success>
}

export class CreateUserService {
  constructor(
    private readonly encrypter: Encrypter,
    private readonly userRepository: UserRepository,
  ) {}

  async execute(params: CreateUserDTO.Params): Promise<CreateUserDTO.Result> {
    const { password } = params

    const userAlreadyExists = await this.userRepository.findByEmail(
      params.email,
    )

    if (userAlreadyExists) {
      return Failure.create({ message: 'Email já cadastrado.' })
    }

    const hashedPassword = this.encrypter.encrypt(password)

    const user = await this.userRepository.create({
      ...params,
      password: hashedPassword,
    })

    return Success.create(user)
  }
}

export const createUserServiceInstance = new CreateUserService(
  encrypterInstance,
  userRepositoryInstance,
)
