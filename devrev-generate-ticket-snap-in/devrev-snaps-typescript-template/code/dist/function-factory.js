"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.functionFactory = void 0;
const ticket_creator_1 = __importDefault(require("./functions/ticket_creator"));
exports.functionFactory = {
    // Add your functions here
    ticket_creator: ticket_creator_1.default,
};
