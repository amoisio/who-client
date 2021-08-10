"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_fetch_1 = __importDefault(require("node-fetch"));
var url = 'https://ghoapi.azureedge.net/api/Dimension';
node_fetch_1.default(url)
    .then(function (res) { return res.json(); })
    .then(function (j) { return console.log(j); });
