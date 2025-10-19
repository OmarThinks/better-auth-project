import { Module } from '@nestjs/common';
import { AuthModule } from '@thallesp/nestjs-better-auth';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { auth } from './auth';
import { UserController } from './user/user.controller';
import { ConfigModule } from '@nestjs/config';

console.log('TestEnvVar: ', process.env.TEST);

@Module({
  imports: [
    AuthModule.forRoot({ auth }),
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
class AppModule {}

export { AppModule };
