import { downloadQueue } from "../queue.js";

export function enqueueInstagram(data) {
  return downloadQueue.add("instagram", data, { priority: 5 });
}
