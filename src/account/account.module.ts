import { Module } from "@nestjs/common";
import { AccountService } from "./app/account.service";
import { AccountController } from './controllers/account.controller';

@Module({
  controllers: [AccountController],
  providers: [AccountService] 
})
export class AccountModule {}