import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ReadingStatusResolverBase } from "./base/readingStatus.resolver.base";
import { ReadingStatus } from "./base/ReadingStatus";
import { ReadingStatusService } from "./readingStatus.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ReadingStatus)
export class ReadingStatusResolver extends ReadingStatusResolverBase {
  constructor(
    protected readonly service: ReadingStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
