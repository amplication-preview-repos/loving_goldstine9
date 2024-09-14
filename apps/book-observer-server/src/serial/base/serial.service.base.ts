/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Serial as PrismaSerial } from "@prisma/client";

export class SerialServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SerialCountArgs, "select">): Promise<number> {
    return this.prisma.serial.count(args);
  }

  async serials(args: Prisma.SerialFindManyArgs): Promise<PrismaSerial[]> {
    return this.prisma.serial.findMany(args);
  }
  async serial(
    args: Prisma.SerialFindUniqueArgs
  ): Promise<PrismaSerial | null> {
    return this.prisma.serial.findUnique(args);
  }
  async createSerial(args: Prisma.SerialCreateArgs): Promise<PrismaSerial> {
    return this.prisma.serial.create(args);
  }
  async updateSerial(args: Prisma.SerialUpdateArgs): Promise<PrismaSerial> {
    return this.prisma.serial.update(args);
  }
  async deleteSerial(args: Prisma.SerialDeleteArgs): Promise<PrismaSerial> {
    return this.prisma.serial.delete(args);
  }
}
