import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ReadingStatusModuleBase } from "./base/readingStatus.module.base";
import { ReadingStatusService } from "./readingStatus.service";
import { ReadingStatusController } from "./readingStatus.controller";
import { ReadingStatusResolver } from "./readingStatus.resolver";

@Module({
  imports: [ReadingStatusModuleBase, forwardRef(() => AuthModule)],
  controllers: [ReadingStatusController],
  providers: [ReadingStatusService, ReadingStatusResolver],
  exports: [ReadingStatusService],
})
export class ReadingStatusModule {}
