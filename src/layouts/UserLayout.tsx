import { NavLink, Outlet } from "react-router-dom"
import { SoloarshipMenu } from "../menus/Scololarship"

const UserLayout = () => {
    return (
        <div className="p-9" >
            <nav className="centered-flex h-20 bg-gradient-to-br shadow-sm shadow-gray-500 drop-shadow-md sticky top-8 bg-white/15 backdrop-blur z-10 p-4 rounded-full">
                <div className="text-2xl text-blue-500 pl-4 font-bold">SM</div>
                <div className="flex">
                    {
                        SoloarshipMenu.map((menu, index) => (
                            <NavLink className='px-4' key={index} to={menu.path} >
                                {menu.title}
                            </NavLink>
                        ))
                    }
                </div>
            </nav>
            <div className="my-5">
                <Outlet />
            </div>
        </div>
    )
}

export default UserLayout