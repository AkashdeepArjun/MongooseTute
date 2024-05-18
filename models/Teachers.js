

import mongoose from "mongoose";

const teacher_schema=new mongoose.Schema({

name:{type:String,required:true,trim:true},
qualification:{type:String,required:true},
subject:{type:String,required:true},
age:{type:Number,required:true,validate:a=>a<=60}

})

const Teacher=mongoose.model("Teacher",teacher_schema)

const createDoc = async()=>{


        try {

           const walia_sir= new Teacher({
                name:"Mr Amit Walia",
                qualification:"BTech",
                subject:"dbms",
                age:45


            })

            const result=await walia_sir.save()
            console.log(result)

        } catch (error) {
            console.log(error)
        }

}


const createMultipleDocs=async()=>{

    try {

        const walia_sir= new Teacher({
             name:"Mr Amit Walia",
             qualification:"BTech",
             subject:"dbms",
             age:45


         })

         const hartej_sir= new Teacher({
            name:"Mr hartej",
            qualification:"BTech",
            subject:"oops",
            age:45


        })



        const survesh_sir= new Teacher({
            name:"Mr Survesh Sir",
            qualification:"BTech",
            subject:"dbms",
            age:45


        })




        const bhullar_sir= new Teacher({
            name:"Mr Vikas Bhullar",
            qualification:"BTech",
            subject:"BEEE",
            age:45


        })

         const result=await Teacher.insertMany([walia_sir,hartej_sir,bhullar_sir,survesh_sir])
         console.log(result)

     } catch (error) {
         console.log(error)
     }

}


const getAllTeachers=async(l=0,s=0,asc=1)=>{


try {
    const res=await Teacher.find().limit(l).skip(s).sort({'name':`${asc}`})
    res.forEach((teacher)=>{

        console.log(teacher.name)
    })
} catch (error) {
    console.log(error)
}



}


const getTeacherInfo = async()=>{


try {

    const res = await Teacher.findById("662f34be71e9bf1c8c95d4e0","name")
    console.log(`teacher name is ${res}`);
} catch (error) {


    console.log(error)
}


}

const getEnteries =async ()=>{

    try {

        const enteries = await Teacher.find().countDocuments()
        console.log(enteries);
    } catch (error) {
        console.log(error);
    }


}

const getTeacherBySubject= async(sub)=>{

    try {

        const res= await Teacher.find({"subject":`${sub}`})
        console.log(res)
    } catch (error) {
        console.log(error)
    }

}


const filterTeacherByAge  = async(beg,end=0)=>{


        try {

            const teacher =await Teacher.find({"age":{$gt:`${beg}`,$lt:`${end}`}})
            console.log(teacher);


        } catch (error) {
            console.log(error)
        }




}


// const filterByField = async(f,b)=>{
// try {
//     const res =await Teacher.find({`${f}`:`${b}`,})
//     console.log(res)
// } catch (error) {
//     console.log("lol nothing happened")
// }


// }

const updateNameById = async(id,newBalue)=>{


    try {

            const res = await Teacher.updateOne({_id:`${id}`},{"name":`${newBalue}`})
            console.log("success")

    } catch (error) {
        console.log(error)
    }






}


const deleteTeacherProfileById = async(teacher_id)=>{

    try {

        const res = await Teacher.deleteOne({_id:`${teacher_id}`})
        console.log(res)

    } catch (error) {
        console.log(error);
    }






}


const kickOutBoomers = async(ageCriteria)=>{



    try {

        const res = await Teacher.deleteMany({age : {$gt:`${ageCriteria}`}})
        console.log(res)

    } catch (error) {
        console.log(error);
    }



}

export {getEnteries,getAllTeachers,filterTeacherByAge,updateNameById,deleteTeacherProfileById,kickOutBoomers}
