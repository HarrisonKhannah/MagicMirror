// @ts-check
import { initSchema } from "@aws-amplify/datastore";
import { schema } from "./schema";

const { Calander, Event } = initSchema(schema);

export { Calander, Event };
