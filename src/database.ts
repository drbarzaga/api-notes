import { connect } from "mongoose";

export const connectToDatabase =async () => {
    try {
        const { DATABASE_URL } = process.env // read from .env file
        await connect(DATABASE_URL as string)
        console.log("Database connected!")
    } catch (error) {
        console.log(error)
    }   
}