import { ReadingStatusWhereInput } from "./ReadingStatusWhereInput";
import { ReadingStatusOrderByInput } from "./ReadingStatusOrderByInput";

export type ReadingStatusFindManyArgs = {
  where?: ReadingStatusWhereInput;
  orderBy?: Array<ReadingStatusOrderByInput>;
  skip?: number;
  take?: number;
};
