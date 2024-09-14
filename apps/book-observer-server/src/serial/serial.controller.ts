import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SerialService } from "./serial.service";
import { SerialControllerBase } from "./base/serial.controller.base";

@swagger.ApiTags("serials")
@common.Controller("serials")
export class SerialController extends SerialControllerBase {
  constructor(
    protected readonly service: SerialService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
