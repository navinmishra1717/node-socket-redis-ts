import { HandlerType, Handler } from '../handlerTypes';

export const handler:Handler<HandlerType.NewUser> = async (param) => {
  const { userUid } = param.data;
  return {
    userUid,
  };
};
