import mysql from 'mysql2'
const dbConnection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"saftyCampus",
    password:""
})

export const queryExcutory =async (query:string,value:any[],result)=>{
    dbConnection.execute(query,value,(err,res)=>{
        if(err) throw err;
        console.log(res)
        result(res)
    });
}