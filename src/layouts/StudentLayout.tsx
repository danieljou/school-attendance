import { Link, NavLink, Outlet } from "react-router-dom";
import { StudentMenu } from "../menus/StudentMenu";
import Dash from "../pages/schoolaship/Dash";
import { BiBell } from "react-icons/bi";

const StudentLayout = () => {
  return (
    <div className="p-9">
      <nav className="centered-flex h-20 bg-gradient-to-br shadow-sm shadow-gray-500 drop-shadow-md sticky top-8 bg-white/15 backdrop-blur z-10 p-4 rounded-full">
        <div className="text-2xl text-blue-500 pl-4 font-bold">
          STUDENT INTERFACE
        </div>
        {/* <Dash></Dash> */}
        <div className="flex">
          {StudentMenu.map((menu, index) => (
            <NavLink className="px-4" key={index} to={menu.path}>
              {menu.title}
            </NavLink>
          ))}
          <div className="text-2xl">
            <Link to={"notifs"} >
            <BiBell />
            </Link>
          </div>
        </div>
      </nav>
      <div className="my-5">
        <Outlet />
      </div>
    </div>
  );
};

export default StudentLayout;
