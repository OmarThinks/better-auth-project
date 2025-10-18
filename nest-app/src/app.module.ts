import { Module } from '@nestjs/common';
import { AuthModule } from '@thallesp/nestjs-better-auth';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { auth } from './user/auth';
import { UserController } from './user/user.controller';

@Module({
  imports: [AuthModule.forRoot({ auth })],
  controllers: [AppController, UserController],
  providers: [AppService],
})
class AppModule {}

export { AppModule };
