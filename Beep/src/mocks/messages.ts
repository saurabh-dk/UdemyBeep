/**
 * Created by Saurabh on 02-Oct-17.
 */
import { Message } from '../models/messages/message';
import { USER_LIST } from "./users";

const messageList: Message[]= [];

USER_LIST.forEach((user) =>{
  messageList.push({user: user, date: new Date(), lastMessage: "Hello"})
})

export const MESSAGE_LIST = messageList;
