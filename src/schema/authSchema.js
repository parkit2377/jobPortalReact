import * as z from'zod';

const signUpSchema = z.object({
    email : z.email("Please Enter a valid email."),
    firstName : z.string()
    .nonempty("This field is required")
    .min(3 , "First name shall be atleast 3 char."),
    mobileNo : z
            .string().nonempty("Mobile No is required")
            .regex(/^[0-9]+$/ , "Only numbers are allowed").min(10 , "Mobile number must be 10 digits"),
    lastName : z.string().nonempty("This field is required").min(3 , "Last name shall be atleast 3 char."),
    password : z.string().nonempty("Password is required").min(8 , "Password must be atleast 8 char long"),
    confirmPassword : z.string().nonempty("Confirm Password is required").min(8 , "Confirm Password must be atleast 8 char long"),
    dob : z.refine((d) => d , {message : "Please select you birth date"})


}).refine(
    (data) => data.password === data.confirmPassword,{message : "Password does not match", path: ["confirmPassword"]}
)





export {signUpSchema};