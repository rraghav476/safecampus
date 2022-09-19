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
exports.queryExcutory = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const dbConnection = mysql2_1.default.createConnection({
    host: "localhost",
    user: "root",
    database: "saftyCampus",
    password: ""
});
const queryExcutory = (query, value, result) => __awaiter(void 0, void 0, void 0, function* () {
    dbConnection.execute(query, value, (err, res) => {
        if (err)
            throw err;
        console.log(res);
        result(res);
    });
});
exports.queryExcutory = queryExcutory;
