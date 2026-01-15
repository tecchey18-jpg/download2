import express from "express";
import { enqueueYouTube } from "../services/youtubeService.js";

const router = express.Router();

router.post("/download", async (req, res) => {
  const { input, mode, quality } = req.body;
  const job = await enqueueYouTube({ input, mode, quality });
  res.json({ success: true, jobId: job.id });
});

export default router;
