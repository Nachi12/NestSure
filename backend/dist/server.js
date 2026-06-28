"use strict";
// ============================================
// FILE: src/server.ts
// ============================================
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const Booking_1 = __importDefault(require("./models/Booking"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
// LOAD ENV
dotenv_1.default.config();
// CONNECT DATABASE
(0, db_1.default)();
// INITIALIZE EXPRESS
const app = (0, express_1.default)();
// ============================================
// MIDDLEWARE
// ============================================
// CORS
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:5173",
        // ADD YOUR DEPLOYED FRONTEND URL
        "https://nestsure.vercel.app",
    ],
    credentials: true,
}));
// BODY PARSER
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// ============================================
// ROUTES
// ============================================
// ROOT TEST ROUTE
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "NestSure Backend Running",
    });
});
// AUTH ROUTES
app.use("/api/auth", auth_routes_1.default);
// ============================================
// BOOKING ROUTES
// ============================================
// CREATE BOOKING
app.post("/api/bookings", async (req, res) => {
    try {
        const { service, name, phone, address, issue, } = req.body;
        // VALIDATION
        if (!service ||
            !name ||
            !phone ||
            !address ||
            !issue) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }
        // CREATE BOOKING
        const booking = await Booking_1.default.create({
            service,
            name,
            phone,
            address,
            issue,
        });
        res.status(201).json({
            success: true,
            message: "Booking created successfully",
            booking,
        });
    }
    catch (error) {
        console.log("BOOKING ERROR:", error);
        res.status(500).json({
            success: false,
            message: "Booking Failed",
        });
    }
});
// GET ALL BOOKINGS
app.get("/api/bookings", async (req, res) => {
    try {
        const bookings = await Booking_1.default.find().sort({
            createdAt: -1,
        });
        res.status(200).json({
            success: true,
            count: bookings.length,
            bookings,
        });
    }
    catch (error) {
        console.log("FETCH BOOKINGS ERROR:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch bookings",
        });
    }
});
// ============================================
// 404 ROUTE
// ============================================
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found",
    });
});

const PORT = process.env.PORT || 5001;
app.listen(Number(PORT), "0.0.0.0", () => {
    console.log(`🚀 NestSure Server running on port ${PORT}`);
});
