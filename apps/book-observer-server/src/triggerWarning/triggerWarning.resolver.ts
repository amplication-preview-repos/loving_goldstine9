import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TriggerWarningResolverBase } from "./base/triggerWarning.resolver.base";
import { TriggerWarning } from "./base/TriggerWarning";
import { TriggerWarningService } from "./triggerWarning.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TriggerWarning)
export class TriggerWarningResolver extends TriggerWarningResolverBase {
  constructor(
    protected readonly service: TriggerWarningService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
