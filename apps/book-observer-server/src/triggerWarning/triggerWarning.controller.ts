import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TriggerWarningService } from "./triggerWarning.service";
import { TriggerWarningControllerBase } from "./base/triggerWarning.controller.base";

@swagger.ApiTags("triggerWarnings")
@common.Controller("triggerWarnings")
export class TriggerWarningController extends TriggerWarningControllerBase {
  constructor(
    protected readonly service: TriggerWarningService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
