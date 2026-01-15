import { downloadQueue } from "../queue.js";

export function enqueueFacebook(data) {
  return downloadQueue.add("facebook", data, { priority: 5 });
}
