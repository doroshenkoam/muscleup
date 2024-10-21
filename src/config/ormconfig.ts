import 'dotenv/config';
import { Example } from 'src/domain/example.entity';
import { ExampleType } from 'src/domain/example_type.entity';
import { User } from 'src/domain/user.entity';
import { UserExample } from 'src/domain/user_example.entity';
import { UserExampleResult } from 'src/domain/user_example_result.entity';
import { UserProgram } from 'src/domain/user_program.entity';
import { UserTraining } from 'src/domain/user_training.entity';
import { getEnvDBHost, getEnvDBPort, getEnvDBUser, getEnvDBPassword, getEnvDBName, getEnvLogLevel } from 'src/pkg/enviornment-utils';

import { DataSource } from 'typeorm';

export const ormConfig = new DataSource({
    type: 'postgres',
    host: getEnvDBHost(process),
    port: getEnvDBPort(process),
    username: getEnvDBUser(process),
    password: getEnvDBPassword(process),
    database: getEnvDBName(process),
    synchronize: true,
    migrations: [`${__dirname}/../migrations/*{.ts,.js}`],
    logging: getEnvLogLevel(process),
    entities: [
      ExampleType,
      Example,
      UserExample,
      UserExampleResult,
      UserProgram,
      UserTraining,
      User,
    ]
  });
