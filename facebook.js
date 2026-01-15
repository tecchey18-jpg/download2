import express from "express";
import { enqueueFacebook } from "../services/facebookService.js";

const router = express.Router();

router.post("/download", async (req, res) => {
  const { input, mode, quality } = req.body;
  const job = await enqueueFacebook({ input, mode, quality });
  res.json({ success: true, jobId: job.id });
});

export default router;
