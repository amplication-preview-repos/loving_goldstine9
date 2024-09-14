import { TriggerWarning as TTriggerWarning } from "../api/triggerWarning/TriggerWarning";

export const TRIGGERWARNING_TITLE_FIELD = "id";

export const TriggerWarningTitle = (record: TTriggerWarning): string => {
  return record.id?.toString() || String(record.id);
};
