import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getEnvDBHost, getEnvDBName, getEnvDBPassword, getEnvDBPort, getEnvDBUser, getEnvLogLevel, getEnvTelegramBotToken } from './pkg/enviornment-utils';
import { TelegrafModule } from 'nestjs-telegraf';
import { Example } from './domain/example.entity';
import { UserExample } from './domain/user_example.entity';
import { UserExampleResult } from './domain/user_example_result.entity';
import { UserProgram } from './domain/user_program.entity';
import { UserTraining } from './domain/user_training.entity';
import { User } from './domain/user.entity';
import { ExampleType } from './domain/example_type.entity';
import { ormConfig } from './config/ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...ormConfig.options,
      autoLoadEntities: true
    }),
    TelegrafModule.forRoot({
      token: getEnvTelegramBotToken(process)!,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
