import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import errorHandler from './middleware/errorMiddleware.js';

dotenv.config();

const app = express();

// CORS configuration (secured for Vercel frontend)
app.use(
    cors({
        origin: process.env.CLIENT_URL || "*", // Use env variable in production
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true
    })
);

// Body parser
app.use(express.json());

// Root route (fixes "Cannot GET /")
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Task Manager API is running 🚀",
        documentation: "/api"
    });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/task", taskRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

// Start server with DB connection
const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`✅ Server running on port ${PORT}`);
        });
    } catch (err) {
        console.error('❌ Failed to start server:', err.message);
        process.exit(1);
    }
};

startServer();
