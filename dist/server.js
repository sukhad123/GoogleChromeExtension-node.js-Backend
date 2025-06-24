"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MainController_1 = require("./Feature/infrastructure/controller/MainController");
const port = 3000;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const host = 'localhost';
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//it will make a call
app.post('/api', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { text, style } = req.body;
    const value = yield (0, MainController_1.mainController)(text, style);
    return res.json({ text: value });
}));
// Start the server
app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});
