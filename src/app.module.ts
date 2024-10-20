import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getEnvDBHost, getEnvDBName, getEnvDBPassword, getEnvDBPort, getEnvDBUser } from './pkg/enviornment-utils';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: getEnvDBHost(process),
      port: getEnvDBPort(process),
      username: getEnvDBUser(process),
      password: getEnvDBPassword(process),
      database: getEnvDBName(process),
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
