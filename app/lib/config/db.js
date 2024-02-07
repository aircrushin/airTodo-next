import mongoose from "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://aircrushin:20020209a@cluster0.haykmws.mongodb.net/todo')
    console.log("DB Connected")
}