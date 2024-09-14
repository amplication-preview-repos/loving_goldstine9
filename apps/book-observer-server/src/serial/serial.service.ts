import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SerialServiceBase } from "./base/serial.service.base";

@Injectable()
export class SerialService extends SerialServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
