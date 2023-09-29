import { connect } from "mongoose";

export const connectToDatabase =async () => {
    try {
        await connect("mongodb://localhost/api-notes")
        console.log("Database connected!")
    } catch (error) {
        console.log(error)
    }   
}