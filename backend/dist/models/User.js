"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        minlength: 6,
        select: false,
    },
    firebaseUid: {
        type: String,
        unique: true,
        sparse: true,
    },
    authProvider: {
        type: String,
        enum: ["local", "google"],
        default: "local",
    },
}, {
    timestamps: true,
});
userSchema.pre("save", async function hashPassword() {
    if (!this.isModified("password") || !this.password) {
        return;
    }
    this.password = await bcryptjs_1.default.hash(this.password, 10);
});
userSchema.methods.comparePassword = function comparePassword(candidatePassword) {
    if (!this.password) {
        return Promise.resolve(false);
    }
    return bcryptjs_1.default.compare(candidatePassword, this.password);
};
exports.default = mongoose_1.default.model("User", userSchema);
