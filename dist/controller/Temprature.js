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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Temprature = void 0;
const TempRepository_1 = require("../Repository/TempRepository");
exports.Temprature = {
    InsertTemp: (req, res) => {
        TempRepository_1.TempRepsitory.insert(req.body, (result) => {
            res.status(201).json(result);
        });
    },
    getTemp: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        TempRepository_1.TempRepsitory.getTemp(req, (result) => {
            res.status(200).json(result);
        });
    }),
    getByDeviceId: (req, res) => {
        TempRepository_1.TempRepsitory.getByDeviceId(req, (result) => {
            res.status(200).json(result);
        });
    },
    updateOrInsert: (req, res) => {
        TempRepository_1.TempRepsitory.updateOrInsert(req, (result) => {
            res.status(201).json(result);
        });
    }
};
