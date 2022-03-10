export enum HandlerType {
  NewUser = 'NewUser',
}

export interface HandlerJobData {
  [HandlerType.NewUser]: {
    userUid: string;
  }
}

export type Handler<T extends HandlerType> = (
  params: {
    name: HandlerType;
    data: HandlerJobData[T];
  }) => any;
