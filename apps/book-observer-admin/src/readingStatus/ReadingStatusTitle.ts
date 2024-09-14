import { ReadingStatus as TReadingStatus } from "../api/readingStatus/ReadingStatus";

export const READINGSTATUS_TITLE_FIELD = "id";

export const ReadingStatusTitle = (record: TReadingStatus): string => {
  return record.id?.toString() || String(record.id);
};
