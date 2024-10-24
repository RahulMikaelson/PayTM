const zod = require('zod');

const UserZod = zod.object({
    firstName: zod.string({
        required: true,
        invalid_type_error: "First name should be a string",
        required_error: "First Name is required",
    }).min(3,{message:"Must be more than 3 char"}).max(10,{message:"Must be more less than 10  char"}),
    lastName: zod.string(
        {
            required: true,
            invalid_type_error: "First name should be a string",
            required_error: "First Name is required",
        }
    ).min(3).max(10),
    userName: zod.string(
        {
            required: true,
            invalid_type_error: "First name should be a string",
            required_error: "First Name is required",
        }
    ).email(),
    password: zod.string(
        {
            required: true,
            invalid_type_error: "First name should be a string",
            required_error: "First Name is required",
        }
    ).min(8).max(15),
})

const UserUpdateZod = zod.object({
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
    password: zod.string().optional()
})


const SignInZod = zod.object({
    userName: zod.string().email(),
    password : zod.string()
})

module.exports = {UserZod, SignInZod,UserUpdateZod};