import { ApiHandler } from "sst/node/api";
import { Time } from "@notes/core/time";

export const handler = ApiHandler(async (_evt) => {
  console.log(_evt);
  const randy = Math.random();
  return {
    body: `Hello ${randy}. The time is ${Time.now()}`,
  };
});
