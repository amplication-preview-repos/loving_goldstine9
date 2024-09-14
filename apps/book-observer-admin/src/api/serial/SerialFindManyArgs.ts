import { SerialWhereInput } from "./SerialWhereInput";
import { SerialOrderByInput } from "./SerialOrderByInput";

export type SerialFindManyArgs = {
  where?: SerialWhereInput;
  orderBy?: Array<SerialOrderByInput>;
  skip?: number;
  take?: number;
};
