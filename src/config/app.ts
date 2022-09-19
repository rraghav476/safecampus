import { TempRepsitory } from './../Repository/TempRepository';
import express,{Request,Response} from "express";
import { Temprature } from "../controller/Temprature";
const app = express();
app.use(express.json())
app.post("/gettemprature",Temprature.InsertTemp)

app.get("/getInfo",Temprature.getTemp)

app.get("/getByDeviceId/:id",Temprature.getByDeviceId)
app.put("/updateByDevicId",Temprature.updateOrInsert)
app.listen(3000,()=>{
    console.log("listen on the port 3000")
})