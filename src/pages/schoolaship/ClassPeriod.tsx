import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Attendance, attendanceFaker, AttendanceList, classFaker, Student } from '../../types/types';
import { Link, useParams } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { BsEye } from 'react-icons/bs';
import { useGetAllStudentMutation } from '../../store/api/MainApi';
import { useState, useEffect } from 'react';
const columns: GridColDef<Omit<AttendanceList,'_id'>>[] = [
    {
        field: 'id',
        headerName: 'ID',
        flex: 1,
        headerClassName: 'bg-gray-200 text-gray-700 font-semibold', // Tailwind classes for header
        cellClassName: 'p-2 text-gray-800', // Tailwind classes for cell
    },
    {
        field: 'first_name',
        headerName: 'Name',
        flex: 1,
        valueGetter :(_,row) =>row.studId.First_name,
        headerClassName: 'bg-gray-200 text-gray-700 font-semibold',
        cellClassName: 'p-2 text-gray-800',
    },
    {
        field: 'last_name',
        headerName: 'Last Name',
        flex: 1,
        valueGetter :(_,row) =>row.studId.Last_name,
        headerClassName: 'bg-gray-200 text-gray-700 font-semibold',
        cellClassName: 'p-2 text-gray-800',
    },
  
    {
        field: 'First_period',
        headerName: 'Period 1',
        flex: 1,
        headerClassName: 'bg-gray-200 text-gray-700 font-semibold',
        cellClassName: 'p-2 text-gray-800',
        renderCell: (params) => (
            <span className={`font-bold ${params.value ? 'text-green-600' : 'text-red-600'}`}>
                {params.value ? 'Present' : 'Absent'}
            </span>
        ),
    },
    {
        field: 'Second_period',
        headerName: 'Period 2',
        flex: 1,
        headerClassName: 'bg-gray-200 text-gray-700 font-semibold',
        cellClassName: 'p-2 text-gray-800',
        renderCell: (params) => (
            <span className={`font-bold ${params.value ? 'text-green-600' : 'text-red-600'}`}>
                {params.value ? 'Present' : 'Absent'}
            </span>
        ),
    },
    {
        field: 'Third_period',
        headerName: 'Period 3',
        flex: 1,
        headerClassName: 'bg-gray-200 text-gray-700 font-semibold',
        cellClassName: 'p-2 text-gray-800',
        renderCell: (params) => (
            <span className={`font-bold ${params.value ? 'text-green-600' : 'text-red-600'}`}>
                {params.value ? 'Present' : 'Absent'}
            </span>
        ),
    },
    {
        field: 'action',
        headerName: 'Action',
        flex: 1,
        headerClassName: 'bg-gray-200 text-gray-700 font-semibold',
        cellClassName: 'p-2 text-gray-800',
        renderCell: () => {
            return (
                <div className="flex justify-center">
                    <IconButton className="text-blue-500 hover:text-blue-700">
                        <BsEye />
                    </IconButton>
                </div>
            );
        },
    },
];

const ClassPeriod = () => {
    const { id } = useParams()
    const [get,{data}] = useGetAllStudentMutation()
    console.log(data);
    const [datass, setDatass] = useState<Omit<AttendanceList,'_id'>[]>([])

    useEffect(()=>{
        get(id as string)
    },[])
    useEffect(() => {
        if (data) {
          const transformedData = data.attendance.map(item => ({
           // Convert ObjectId to string and rename it to `id`
           ...item,
           id: item._id.toString(),  
          }));
    
          setDatass(transformedData); // Set the transformed data into state
        }
      }, [data]);
    return (
        <div>
            <div className="text-xl my-3 font-bold">Class details : {id as string}</div>

            {/* <div className="flex justify-end my-3">
            <Link to={''} className="btn-blue">
                Add class
            </Link>
        </div> */}
            <DataGrid rows={datass} columns={columns} />
        </div>
    )
}

export default ClassPeriod


