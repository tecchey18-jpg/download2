import express from "express";
import { enqueueInstagram } from "../services/instagramService.js";

const router = express.Router();

router.post("/download", async (req, res) => {
  const { input, mode, quality } = req.body;
  const job = await enqueueInstagram({ input, mode, quality });
  res.json({ success: true, jobId: job.id });
});

export default router;
