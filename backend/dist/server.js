"use strict";
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
dotenv_1.default.config();
const app = (0, express_1.default)();
// DATABASE
(0, db_1.default)();
// MIDDLEWARE
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/auth", auth_routes_1.default);
// TEST
app.get("/", (req, res) => {
    res.send("NestSure Backend Running");
});
// CREATE BOOKING
app.post("/api/bookings", async (req, res) => {
    try {
        const booking = await Booking_1.default.create(req.body);
        res.status(201).json({
            success: true,
            booking,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Booking Failed",
        });
    }
});
// GET BOOKINGS
app.get("/api/bookings", async (req, res) => {
    try {
        const bookings = await Booking_1.default.find();
        res.json(bookings);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to fetch bookings",
        });
    }
});
// PORT
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
