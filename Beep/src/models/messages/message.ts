/**
 * Created by Saurabh on 02-Oct-17.
 */
import { User } from '../user/user';
export interface Message {
   user: User;
   date: Date;
   lastMessage: string;
}
