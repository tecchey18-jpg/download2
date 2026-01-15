import express from "express";
import cors from "cors";

import instagramRoutes from "./routes/instagram.js";
import youtubeRoutes from "./routes/youtube.js";
import facebookRoutes from "./routes/facebook.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/instagram", instagramRoutes);
app.use("/api/youtube", youtubeRoutes);
app.use("/api/facebook", facebookRoutes);

app.get("/", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(3000, () => {
  console.log("API running on http://localhost:3000");
});
