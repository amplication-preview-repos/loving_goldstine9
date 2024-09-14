import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ReadingStatusService } from "./readingStatus.service";
import { ReadingStatusControllerBase } from "./base/readingStatus.controller.base";

@swagger.ApiTags("readingStatuses")
@common.Controller("readingStatuses")
export class ReadingStatusController extends ReadingStatusControllerBase {
  constructor(
    protected readonly service: ReadingStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
