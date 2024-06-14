import { Chat } from "../chat/Chat";
import { User } from "../user/User";

export type Message = {
  chat?: Chat | null;
  content: string | null;
  createdAt: Date;
  id: string;
  sentAt: Date | null;
  updatedAt: Date;
  user?: User | null;
};