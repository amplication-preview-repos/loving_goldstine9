import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SerialModuleBase } from "./base/serial.module.base";
import { SerialService } from "./serial.service";
import { SerialController } from "./serial.controller";
import { SerialResolver } from "./serial.resolver";

@Module({
  imports: [SerialModuleBase, forwardRef(() => AuthModule)],
  controllers: [SerialController],
  providers: [SerialService, SerialResolver],
  exports: [SerialService],
})
export class SerialModule {}
