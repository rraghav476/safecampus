import { Request, Response } from "express";
import { TempRepsitory } from "../Repository/TempRepository";
export const Temprature={
    InsertTemp:(req:Request,res:Response)=>{
        // let validation = 
        TempRepsitory.insert(req.body,(result)=>{
            res.status(201).json(result)
        })
    },
    
    getTemp:async(req:Request,res:Response)=>{
        //validate input
        TempRepsitory.getTemp(req,(result)=>{
            res.status(200).json(result)
        })

    },

    getByDeviceId:(req:Request,res:Response)=>{
        TempRepsitory.getByDeviceId(req,(result)=>{
            res.status(200).json(result)
        })
    },

    updateOrInsert:(req:Request,res:Response)=>{
        // let validation = 
        TempRepsitory.updateOrInsert(req,(result)=>{
            res.status(201).json(result)
        })
    }

} 