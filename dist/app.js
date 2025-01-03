"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const expenseRoutes_1 = require("./routes/expenseRoutes");
const app = (0, express_1.default)();
exports.app = app;
// Middleware
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use('/api/expenses', expenseRoutes_1.expenseRouter);
