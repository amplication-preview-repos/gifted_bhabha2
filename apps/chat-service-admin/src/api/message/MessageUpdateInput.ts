import { ChatWhereUniqueInput } from "../chat/ChatWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageUpdateInput = {
  chat?: ChatWhereUniqueInput | null;
  content?: string | null;
  sentAt?: Date | null;
  user?: UserWhereUniqueInput | null;
};