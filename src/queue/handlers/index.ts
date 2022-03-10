import * as Signup from './signup';
import QueueFactory from '../factory';
import { HandlerType } from '../handlerTypes';

export default [
  new QueueFactory<HandlerType.NewUser>(HandlerType.NewUser, Signup.handler),
];
