import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        } 
    },
    {
        timestamps: true // this is used for add fields createAt and updatedAt
    }
)

UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)// compare both entered password and stored password
}

UserSchema.pre('save', async function (next) {// this function called just before save this user in DB
    if (!this.isModified) {
        next()
    }

    let salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)// encrypt the password for security purpose

})

export const User = mongoose.model("User", UserSchema)
