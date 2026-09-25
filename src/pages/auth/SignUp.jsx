import React from "react";
import Input from "../../shared/components/Input";
import { useForm } from "react-hook-form";
import { signUpSchema } from "../../schema/authSchema";
import { zodResolver } from '@hookform/resolvers/zod'
import { signInService } from "../../service/authservice";
import { Link } from "react-router-dom";

export default function SignUp() {

    const {register , handleSubmit, formState : {errors}} = useForm({
        resolver : zodResolver(signUpSchema),
        // defaultValues : {
        //     firstName : '',
        //     lastName : '',
        //     firstName : '',
        //     firstName : '',
        //     firstName : '',
        //     firstName : '',
        // }
    });



    const SignUp = async(fields) => {
        fields = {...fields , name : fields.firstName + ' ' + fields.lastName}
        console.log(fields);
        
        const res = await signInService(fields);
        console.log(res);
        
    }

  return (
    <form onSubmit={handleSubmit(fields => SignUp(fields))}>
        <div className="w-full flex flex-col gap-5">
        {/* Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
            <div>
                <Input placeholder="First Name" errors={errors.firstName} {...register("firstName")}/>
                {/* {errors.firstName && <p className="text-red-500 mt-1 ml-1">{errors.firstName.message}</p>} */}
            </div>
            <Input placeholder="Last Name" errors={errors.lastName} {...register("lastName")}/>
        </div>

        {/* Email */}
        <Input placeholder="Email ID" type="email" errors={errors.email} {...register("email")}/>
        {/* {errors.email && <p className="text-red-500">{errors.email.message}</p>} */}
        {/* Mobile */}
        <Input placeholder="Mobile No" errors={errors.mobileNo} type="tel" {...register("mobileNo")}/>

        {/* Password */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <Input placeholder="Password" errors={errors.password} type="password" {...register("password")}/>
                {/* {errors.password && <p className="text-red-500">{errors.password.message}</p>} */}
            </div>
            <div >
                <Input placeholder="Confirm Password" type="password" errors={errors.confirmPassword} {...register("confirmPassword")}/>
                {/* {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>} */}
            </div>
        </div>

        {/* Date */}
        <Input type="date" errors={errors.dob} {...register("dob")}/>

        {/* Button */}
        <button
            type="submit"
            className="
            w-full
            h-12
            mt-2
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            to-indigo-600
            text-white
            font-semibold
            shadow-lg
            shadow-blue-500/20
            transition-all
            hover:cursor-pointer
            duration-200
            hover:from-blue-500
            hover:to-indigo-500
            hover:shadow-blue-500/30
            active:scale-[0.98]
            "
        >
            Create Account
        </button>

        <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link to={'/auth/login'}>
                <span className="text-blue-400 hover:text-blue-300 cursor-pointer">
                Login
                </span>
            </Link>
        </p>
        </div>
    </form>
  );
}
