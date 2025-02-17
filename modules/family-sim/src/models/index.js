// @ts-check
import { initSchema } from "@aws-amplify/datastore";
import { schema } from "./schema";

const { User, Calander, Event, Message } = initSchema(schema);

export { User, Calander, Event, Message };
