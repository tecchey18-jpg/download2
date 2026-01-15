import { Worker } from "bullmq";
import { connection } from "../queue.js";
import { exec } from "child_process";
import { MAX_CONCURRENT_JOBS } from "../config.js";

function execAsync(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, { maxBuffer: 1024 * 1024 * 200 }, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

new Worker("downloads", async job => {
  if (job.name !== "facebook") return;

  const { input, quality, mode } = job.data;

  const format = quality === "best" || !quality
    ? "bestvideo+bestaudio/best"
    : `bestvideo[height<=${quality}]+bestaudio/best`;

  const playlist = mode === "profile" ? "--yes-playlist" : "";

  const cmd = `yt-dlp ${playlist} -f "${format}" -o "downloads/facebook/%(uploader)s/%(title)s.%(ext)s" "${input}"`;

  console.log("Running:", cmd);
  await execAsync(cmd);

}, { connection, concurrency: MAX_CONCURRENT_JOBS });
