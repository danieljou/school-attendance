import { useState } from "react"
import { Images } from "../constants/images"
import { useLoginUserMutation } from "../store/api/AuthenticationApi"
import toast from "react-hot-toast";
import { AuthResponse } from "../types/auth";
import { useAppDispatch } from "../store/hooks";
import { loginSuccess } from "../store/slices/AuthSlice";
import { useNavigate } from "react-router-dom";

type Data = {
    Email: string;
    password: string
}
const Login = () => {

    const [login, { isLoading }] = useLoginUserMutation()
    const [data, setData] = useState<Data>({ Email: "", password: "" })
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const handleSubmit = async()  => {
        const res  = await login(data)
        if(res.data){

            if('err' in res.data){
                toast.error('Login failded')
                return
            }
            toast.success('Login successfully')
            const payloads = res.data as AuthResponse
            dispatch(loginSuccess(payloads))
            if(payloads.good.RoleId == "66acfa09948eae2459802065"){

                navigate('student')
            } else{
                navigate('scholarship')

            }
            localStorage.setItem('token',JSON.stringify(payloads.accesstoken))
        }
        if(res.error){
            toast.error('Login failded')
        }
    }
    return (
        <div className="grid grid-cols-5 h-screen">
            <div className="col-span-2 h-full centered-container w-full">
                <form className="w-full p-5"  onSubmit={(e) =>{
                    e.preventDefault()
                    handleSubmit()
                }} >
                    <div className="mb-4 input-container">
                        <label htmlFor="email">E-mail address</label>
                        <input type="email" name="email" id="email" className="" value={data.Email} onChange={(e) => setData({ ...data, Email: e.target.value })} />
                    </div>

                    <div className="mb-4 input-container">
                        <label htmlFor="password">Password</label>
                        <input type="password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} name="password" id="password" className="" />
                        <div className=""></div>
                    </div>

                    <button type="submit" className="btn-blue w-full">
                        Login
                    </button>
                </form>
            </div>
            <div className="col-span-3 h-full bg-blue-800 flex justify-center items-center">
                <img src={Images.logo} className="scale-50" alt="logo" />
            </div>
         
        </div>
    )
}

export default Login