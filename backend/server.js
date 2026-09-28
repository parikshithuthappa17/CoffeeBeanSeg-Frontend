import express from "express";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();


const app = express();

const PORT = process.env.PORT || 5050;


/* =====================================================
   MIDDLEWARE
   ===================================================== */

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());


/* =====================================================
   HEALTH CHECK
   ===================================================== */

app.get("/api/health", (req, res) => {

  res.json({
    success: true,
    message: "Obsidian Brew backend is running ☕",
  });

});


/* =====================================================
   START SERVER
   ===================================================== */

app.listen(PORT, () => {

  console.log(
    `☕ Obsidian Brew backend running on http://localhost:${PORT}`
  );

});