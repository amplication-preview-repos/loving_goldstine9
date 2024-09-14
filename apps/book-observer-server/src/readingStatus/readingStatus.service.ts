import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReadingStatusServiceBase } from "./base/readingStatus.service.base";

@Injectable()
export class ReadingStatusService extends ReadingStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
