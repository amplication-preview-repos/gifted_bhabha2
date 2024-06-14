import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  chatId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  sentAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};