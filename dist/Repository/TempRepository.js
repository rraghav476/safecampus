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
exports.TempRepsitory = void 0;
const dbConnection_1 = require("../config/dbConnection");
exports.TempRepsitory = {
    insert: (TempData, getResult) => {
        (0, dbConnection_1.queryExcutory)("INSERT INTO `campustemprature` (`id`, `longitude`, `latitude`, `deviceId`, `tempratue`, `machineName`, `roomName`, `description`, `idealMinTemp`, `idealmaxTemp`, `alart`) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);", Object.values(TempData), (result) => {
            console.log(result);
            getResult(result);
        });
    },
    getTemp: (req, getResult) => __awaiter(void 0, void 0, void 0, function* () {
        const result = (res) => {
            getResult(res);
        };
        (0, dbConnection_1.queryExcutory)("select * from campusTemprature", null, result);
    }),
    getByDeviceId: (req, getResult) => {
        const result = (res) => {
            getResult(res);
        };
        (0, dbConnection_1.queryExcutory)("select * from campusTemprature where deviceId = ?", [req.params.id], result);
    },
    updateOrInsert: (req, getResult) => {
        const result = (res) => {
            getResult(res);
        };
        (0, dbConnection_1.queryExcutory)("select * from campusTemprature where deviceId = ?", [req.body.deviceId], (res) => {
            console.log(result, "im a here");
            if (res) {
                (0, dbConnection_1.queryExcutory)("update campusTemprature set tempratue=? where deviceId = ?", [req.body.tempratue, req.body.deviceId], result);
            }
            else {
                (0, dbConnection_1.queryExcutory)("INSERT INTO `campustemprature` (`id`, `longitude`, `latitude`, `deviceId`, `tempratue`, `machineName`, `roomName`, `description`, `idealMinTemp`, `idealmaxTemp`, `alart`) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);", Object.values(req.body), (result) => {
                    console.log(result);
                    getResult(result);
                });
            }
        });
    }
};
