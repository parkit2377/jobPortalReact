import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Input from '../../shared/components/Input';
import { Link, useNavigate } from 'react-router-dom';
import { loginService } from '../../service/authservice';
import { api } from '../../api/axios';
import { useDispatch, useSelector } from 'react-redux';
import { loggedIn } from '../../redux/slices/authSlice';
import Button from '../../shared/components/Button';

export default function Login() {

    const dispatch = useDispatch();
    const {register , handleSubmit} = useForm();
    const a = useSelector((s) => s.auth);
    const navigate = useNavigate();


    const loginUser = async(data) => {
        // console.log(data);
        const res = await loginService(data)
        console.log(res);
        if(res?.status){
            dispatch(loggedIn(res?.data));
            navigate('/')
        }
        
    }

    
    
  return (

    <>
    <Link to={'/'}><button>dashboard</button></Link>
            <h1 className='text-3xl py-3 tracking-widest text-white'>Login</h1>

            <div className="formContainer mt-5 w-full">
                <form className=' flex flex-col gap-7 ' onSubmit={handleSubmit(data => loginUser(data))}>
                    <Input placeholder={"Email ID"}
                            icon={<i className="fa-regular fa-envelope text-white text-xl mr-2"></i>}
                            type={"text"} {...register("email")}/>
                    
                    <Input placeholder={"Password"}
                            type={"text"} {...register("password")}
                            icon={<i className="fa-solid fa-lock text-white text-xl mr-2"></i>}/>
                    
                    <div className="forgetPassword flex items-center justify-end  ">
                        <p className='text-white hover:underline cursor-pointer'>Forget Password</p>

                    </div>
                    <div className=''>
                        {/* <Button ty >Login</Button> */}
                        {/* <button type="submit" className='text-xl text-red-500'>submit</button> */}
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
            Login
        </button>
                    </div>
                </form>
                <div className="signup flex items-center justify-center pb-5 mt-4">
                    {/* <p className='text-white hover:underline cursor-pointer'><Link to="/auth/sign-up">Dont have an account? Sign Up.</Link></p> */}
                    <p className="text-center text-sm text-gray-500">
                                Dont have an account?{" "}
                                <Link to={'/auth/sign-in'}>
                                    <span className="text-blue-400 hover:text-blue-300 cursor-pointer">
                                    Register.
                                    </span>
                                </Link>
                            </p>
                </div>

            </div>
    </>
  )
}
