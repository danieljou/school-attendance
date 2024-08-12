import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  Attendance,
  attendanceFaker,
  AttendanceList,
  classFaker,
  Student,
} from "../../types/types";
import { Link, useParams } from "react-router-dom";
import {  Dialog, IconButton } from "@mui/material";
import { BsEye } from "react-icons/bs";
import {
  useGetAllStudentMutation,
  useGetJustifsQuery,
  useNotifyMutation,
} from "../../store/api/MainApi";
import { useState, useEffect, useRef } from "react";
import { BiBell, BiWindowClose } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import toast from "react-hot-toast";
import Card from "../../components/Card";
const columns: GridColDef<Omit<AttendanceList, "_id">>[] = [
  {
    field: "id",
    headerName: "ID",
    flex: 1,
    headerClassName: "bg-gray-200 text-gray-700 font-semibold", // Tailwind classes for header
    cellClassName: "p-2 text-gray-800", // Tailwind classes for cell
  },
  {
    field: "first_name",
    headerName: "Name",
    flex: 1,
    valueGetter: (_, row) => row.studId.First_name,
    headerClassName: "bg-gray-200 text-gray-700 font-semibold",
    cellClassName: "p-2 text-gray-800",
  },
  {
    field: "last_name",
    headerName: "Last Name",
    flex: 1,
    valueGetter: (_, row) => row.studId.Last_name,
    headerClassName: "bg-gray-200 text-gray-700 font-semibold",
    cellClassName: "p-2 text-gray-800",
  },

  {
    field: "First_period",
    headerName: "Period 1",
    flex: 1,
    headerClassName: "bg-gray-200 text-gray-700 font-semibold",
    cellClassName: "p-2 text-gray-800",
    renderCell: (params) => (
      <span
        className={`font-bold ${
          params.value ? "text-green-600" : "text-red-600"
        }`}
      >
        {params.value ? "Present" : "Absent"}
      </span>
    ),
  },
  {
    field: "Second_period",
    headerName: "Period 2",
    flex: 1,
    headerClassName: "bg-gray-200 text-gray-700 font-semibold",
    cellClassName: "p-2 text-gray-800",
    renderCell: (params) => (
      <span
        className={`font-bold ${
          params.value ? "text-green-600" : "text-red-600"
        }`}
      >
        {params.value ? "Present" : "Absent"}
      </span>
    ),
  },
  {
    field: "Third_period",
    headerName: "Period 3",
    flex: 1,
    headerClassName: "bg-gray-200 text-gray-700 font-semibold",
    cellClassName: "p-2 text-gray-800",
    renderCell: (params) => (
      <span
        className={`font-bold ${
          params.value ? "text-green-600" : "text-red-600"
        }`}
      >
        {params.value ? "Present" : "Absent"}
      </span>
    ),
  },
  {
    field: "action",
    headerName: "Action",
    flex: 1,
    headerClassName: "bg-gray-200 text-gray-700 font-semibold",
    cellClassName: "p-2 text-gray-800",
    renderCell: (params) => {
      const [open, setOpen] = useState<boolean>(false);
      const ref = useRef<HTMLInputElement>(null);
      const [notify] = useNotifyMutation();
      const handleSubmit = async() => {
        alert()
        const data = {
          studId: params.row.studId._id,
          classid: params.row.ClassId._id,
          message: ref.current?.value,
        };
        const res = await notify(data)
        if (res.data){
            toast.success('Notification sent')
        }
        else{
            toast.error('An error while sending notification')
        }

      };
      return (
        <div className="flex justify-center">
          <IconButton className="text-blue-500 hover:text-blue-700">
            <BsEye />
          </IconButton>

          <IconButton
            onClick={() => setOpen(true)}
            className="text-blue-500 hover:text-blue-700"
          >
            <BiBell />
          </IconButton>

          <Dialog fullWidth open={open}>
            <div className="p-8">
              <div className="flex justify-end">
                <IconButton
                  onClick={() => setOpen(false)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <CgClose />
                </IconButton>
              </div>
              <div className="mb-4 input-container">
                <label htmlFor="email">Message</label>
                <input
                  ref={ref}
                  type="email"
                  name="email"
                  id="email"
                  className=""
                  //   value={data.Email}
                  //   onChange={(e) => setData({ ...data, Email: e.target.value })}
                />
              </div>
              <button onClick={handleSubmit}  type="button" className="btn-blue w-full">
                Send
              </button>
            </div>
          </Dialog>
        </div>
      );
    },
  },
];

const ClassPeriod = () => {
  const { id } = useParams();
  const [get, { data }] = useGetAllStudentMutation();
  console.log(data);
  const [datass, setDatass] = useState<Omit<AttendanceList, "_id">[]>([]);
  const {data :justifs, isLoading,isSuccess} = useGetJustifsQuery()

  useEffect(() => {
    get(id as string);
  }, []);
  useEffect(() => {
    if (data) {
      const transformedData = data.attendance.map((item) => ({
        // Convert ObjectId to string and rename it to `id`
        ...item,
        id: item._id.toString(),
      }));

      setDatass(transformedData); // Set the transformed data into state
    }
  }, [data]);
  return (
    <div>
      <div className="text-xl my-3 font-bold">
        Class details : {id as string}
      </div>

      {/* <div className="flex justify-end my-3">
            <Link to={''} className="btn-blue">
                Add class
            </Link>
        </div> */}
      <DataGrid rows={datass} columns={columns} />


      <div className="my-7">

<div className="font-bold text-xl my-6">Justifucations</div>
<div className="grid grid-cols-4 gap-5">
{
   isSuccess && (
    <> 
    {
        justifs.justifications.map((justif,index)  => (
            <div className="" key={index}>
                <Card  p={index % 2 == 0? "ed" : ''} status={justif.state} reason={justif.message} ></Card>
            </div>
        ))
       
    }
    </>
   )
    
}

</div>
</div>
    </div>
  );
};

export default ClassPeriod;
