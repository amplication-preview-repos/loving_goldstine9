import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TriggerWarningModuleBase } from "./base/triggerWarning.module.base";
import { TriggerWarningService } from "./triggerWarning.service";
import { TriggerWarningController } from "./triggerWarning.controller";
import { TriggerWarningResolver } from "./triggerWarning.resolver";

@Module({
  imports: [TriggerWarningModuleBase, forwardRef(() => AuthModule)],
  controllers: [TriggerWarningController],
  providers: [TriggerWarningService, TriggerWarningResolver],
  exports: [TriggerWarningService],
})
export class TriggerWarningModule {}
