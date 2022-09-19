import { tempModule } from "../Module/tempModule"
import {queryExcutory} from "../config/dbConnection"

export const TempRepsitory={
    insert :(TempData:tempModule,getResult)=>{
        queryExcutory("INSERT INTO `campustemprature` (`id`, `longitude`, `latitude`, `deviceId`, `tempratue`, `machineName`, `roomName`, `description`, `idealMinTemp`, `idealmaxTemp`, `alart`) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",Object.values(TempData),(result)=>{
            console.log(result);
            getResult(result)
        });
    },

    getTemp : async(req,getResult)=>{
        const result = (res)=>{
            getResult(res)
        } 
        queryExcutory("select * from campusTemprature",null,result);
    },

    getByDeviceId: (req,getResult)=>{
        const result = (res)=>{
            getResult(res)
        } 
        queryExcutory("select * from campusTemprature where deviceId = ?",[req.params.id],result);
    },

    updateOrInsert:(req,getResult)=>{
        const result = (res)=>{
            getResult(res)
        } 
        queryExcutory("select * from campusTemprature where deviceId = ?",[req.body.deviceId],(res)=>{
            console.log(result,"im a here")
            if(res){
                queryExcutory("update campusTemprature set tempratue=? where deviceId = ?",[req.body.tempratue,req.body.deviceId],result);
            }else{
                queryExcutory("INSERT INTO `campustemprature` (`id`, `longitude`, `latitude`, `deviceId`, `tempratue`, `machineName`, `roomName`, `description`, `idealMinTemp`, `idealmaxTemp`, `alart`) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",Object.values(req.body),(result)=>{
                    console.log(result);
                    getResult(result)
                });
            }
        });
    }

}