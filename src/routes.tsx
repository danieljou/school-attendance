import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import UserLayout from "./layouts/UserLayout";
import Error404 from "./components/Error404";
import Classes from "./pages/schoolaship/Classes";
import ClassPeriod from "./pages/schoolaship/ClassPeriod";
import Register from "./pages/Register";
import StudentLayout from "./layouts/StudentLayout";
import HomeStudent from "./pages/student/HomeStudent";
import Justify from "./pages/student/Justify";
import Dashboard from "./pages/schoolaship/Dashboard";
import Notifs from "./pages/student/Notifs";

export const routes = createBrowserRouter([
    {
        path: '', Component: Login
        
    },
    {
        path: 'register', Component: Register
        
    },

    {
        path: 'student', Component: StudentLayout,
        children:[
            {
                index:true,
                Component:HomeStudent
            },
            {
                path:"justify",
                Component:Justify
            },
            {
                path:"notifs",
                Component:Notifs
            }
        ]
        
    },
    {
        path: 'scholarship',
        Component: UserLayout,
        children: [
            {
                index:true,
                Component:Dashboard
            },
            {
                path: 'class',
                
                children: [
                    {
                        index: true,
                        Component: Classes,
                    },
                    {
                        path: ':id',
                        Component: ClassPeriod,
                    }
                ]
            },
            {
                path: '*',
                Component: Error404,
            }
        ]
    }
])