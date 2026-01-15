import { Queue } from "bullmq";
import IORedis from "ioredis";
import { REDIS_URL } from "./config.js";

export const connection = new IORedis(REDIS_URL);

export const downloadQueue = new Queue("downloads", {
  connection,
  defaultJobOptions: {
    attempts: 3,
    backoff: { type: "exponential", delay: 10000 },
    removeOnComplete: false,
    removeOnFail: false
  }
});
