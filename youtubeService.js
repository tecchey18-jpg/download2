import { downloadQueue } from "../queue.js";

export function enqueueYouTube(data) {
  return downloadQueue.add("youtube", data, { priority: 5 });
}
