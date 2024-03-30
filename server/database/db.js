import mongoose from "mongoose";

const db_Connection = () => {
    const DB_URL = `mongodb+srv://omkarchande220:OmkarChande@gmails.ukdkxul.mongodb.net/?retryWrites=true&w=majority&appName=Gmails`
    try {
        mongoose.connect(DB_URL, {useNewUrlParser: true});
        console.log("Connected to Database Successfully");
    } catch (error) {
        console.log("Error while connecting to the database: ",error);
    }
}

export default db_Connection;