import { useState } from "react"
import { Images } from "../constants/images"
import { useLoginUserMutation } from "../store/api/AuthenticationApi"
import { MdBackHand } from "react-icons/md";
import { AiOutlineArrowLeft } from "react-icons/ai";

type Data = {
    Email: string;
    Password: string
}
const Register = () => {

    const [login, { isLoading }] = useLoginUserMutation()
    const [data, setData] = useState<Data>({ Email: "", Password: "" })
    return (
        <div className="grid grid-cols-4 ">

            <div className="col-span-2  bg-blue-800 flex justify-center items-center">
                <img src={Images.logo} className="scale-50" alt="logo" />
            </div>

            <div className="absolute p-6 -translate-x-7 bg-black rounded-full top-1/2 left-1/2 ">
            <AiOutlineArrowLeft  className="text-white" />
            </div>
            <div className="w-full col-span-2">
                <div className="font-bold mx-auto w-[50%] py-3 rounded-full text-white text-center translate-y-10 bg-primary-light">
                    Register
                </div>

                <div className="h-full centered-container w-full">

                    <form className="w-full p-5" >
                        <div className="mb-4 input-container">
                            <label htmlFor="email">E-mail address</label>
                            <input type="email" name="email" id="email" className="" value={data.Email} onChange={(e) => setData({ ...data, Email: e.target.value })} />
                        </div>

                        <div className="mb-4 input-container">
                            <label htmlFor="password">First Name</label>
                            <input type="password" value={data.Password} onChange={(e) => setData({ ...data, Password: e.target.value })} name="password" id="password" className="" />
                            <div className=""></div>
                        </div>

                        <div className="mb-4 input-container">
                            <label htmlFor="password">Last Name</label>
                            <input type="password" value={data.Password} onChange={(e) => setData({ ...data, Password: e.target.value })} name="password" id="password" className="" />
                            <div className=""></div>
                        </div>
                        <div className="mb-4 input-container">
                            <label htmlFor="password">Phone number</label>
                            <input type="password" value={data.Password} onChange={(e) => setData({ ...data, Password: e.target.value })} name="password" id="password" className="" />
                            <div className=""></div>
                        </div>

                        <div className="mb-4 input-container">
                            <label htmlFor="password">Class</label>
                            <input type="password" value={data.Password} onChange={(e) => setData({ ...data, Password: e.target.value })} name="password" id="password" className="" />
                            <div className=""></div>
                        </div>


                        <div className="mb-4 input-container">
                            <label htmlFor="password">Password</label>
                            <input type="password" value={data.Password} onChange={(e) => setData({ ...data, Password: e.target.value })} name="password" id="password" className="" />
                            <div className=""></div>
                        </div>

                        <button type="submit" className="btn-blue w-full">
                            Register
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Register