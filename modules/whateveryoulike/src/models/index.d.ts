import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Calander {
  readonly id: string;
  readonly uuid: string;
  readonly Events?: (Event | null)[];
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