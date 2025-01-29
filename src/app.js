import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

const limiter = rateLimit({
  windowMs: 10 * 1000, // 10 seconds
  max: 1, // Allow only 1 request per window per IP
  message: { error: "Too many requests, please try again later." }
});

// Apply the rate limiter to all routes
app.use(limiter);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes import
import leadRouter from "./routes/lead.routes.js";
import ratingRouter from "./routes/rating.routes.js";
import healthcheckRouter from "./routes/healthcheck.routes.js";
import rateLimit from "express-rate-limit";

//routes declaration
app.use("/api/v1/lead", leadRouter);
app.use("/api/v1/rating", ratingRouter);
app.use("/api/v1/healthcheck", healthcheckRouter);


export { app };
