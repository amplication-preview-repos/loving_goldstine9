import { Serial as TSerial } from "../api/serial/Serial";

export const SERIAL_TITLE_FIELD = "id";

export const SerialTitle = (record: TSerial): string => {
  return record.id?.toString() || String(record.id);
};
