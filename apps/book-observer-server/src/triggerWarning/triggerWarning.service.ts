import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TriggerWarningServiceBase } from "./base/triggerWarning.service.base";

@Injectable()
export class TriggerWarningService extends TriggerWarningServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
