import config from "dotenv"
import express from 'express'
import connectDb from "./db/connect_db.js";


// import {Teacher,createDoc,createMultipleDocs,getAllTeachers,getTeacherInfo,getTeacherBySubject} from './models/Teachers.js';
import {getEnteries,getAllTeachers,filterTeacherByAge,updateNameById,deleteTeacherProfileById,kickOutBoomers} from './models/Teachers.js';

const app =express();

const port =process.env.PORT ;

const link=process.env.DB_LINK;
console.clear()

connectDb(link)
// createMultipleDocs()

// getAllTeachers(2,3)

// getTeacherInfo()

// createMultipleDocs()

// getTeacherBySubject("oops")

// getEnteries()

// filterTeacherByAge(43,50)

// filterByField("subject","oops")
// updateNameById('662f34be71e9bf1c8c95d4e1',"hartej")

// deleteTeacherProfileById("662f34be71e9bf1c8c95d4e0")

kickOutBoomers(40)
app.listen(port,()=>console.log("server setup complete!!"))
