import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import buildRoutes from "./routes/build.routes.js";

dotenv.config();

const app = express();
// app.use(cors());
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api/build", buildRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
