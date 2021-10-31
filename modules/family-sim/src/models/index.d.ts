import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class User {
  readonly id: string;
  readonly uuid: string;
  readonly name: string;
  readonly timezone?: string;
  readonly happiness: number;
  readonly calander?: Calander[];
  readonly message?: Message[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Calander {
  readonly id: string;
  readonly uuid: string;
  readonly Events?: (Event | null)[];
  readonly userID?: string;
  constructor(init: ModelInit<Calander>);
  static copyOf(source: Calander, mutator: (draft: MutableModel<Calander>) => MutableModel<Calander> | void): Calander;
}

export declare class Event {
  readonly id: string;
  readonly name: string;
  readonly room: string;
  readonly time?: string;
  readonly calanderID?: string;
  constructor(init: ModelInit<Event>);
  static copyOf(source: Event, mutator: (draft: MutableModel<Event>) => MutableModel<Event> | void): Event;
}

export declare class Message {
  readonly id: string;
  readonly from: string;
  readonly read: boolean;
  readonly msg: string;
  readonly userID?: string;
  constructor(init: ModelInit<Message>);
  static copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}