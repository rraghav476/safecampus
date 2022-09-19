"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Temprature_1 = require("../controller/Temprature");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/gettemprature", Temprature_1.Temprature.InsertTemp);
app.get("/getInfo", Temprature_1.Temprature.getTemp);
app.get("/getByDeviceId/:id", Temprature_1.Temprature.getByDeviceId);
app.put("/updateByDevicId", Temprature_1.Temprature.updateOrInsert);
app.listen(3000, () => {
    console.log("listen on the port 3000");
});
