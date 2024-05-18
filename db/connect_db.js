import mangoose from "mongoose"

const connectDb = async(DB_URL)=>{

    try {
        await mangoose.connect(DB_URL)
        console.log('database connected!!!');
    } catch (error) {
        console.log(error);
    }





}

export default connectDb;