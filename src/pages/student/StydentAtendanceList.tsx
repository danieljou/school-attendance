import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Attend, studentAttendance, StudentAttendance } from '../../types/types';
import { Link, useParams } from 'react-router-dom';
import { Button, IconButton } from '@mui/material';
import { BsEye } from 'react-icons/bs';
import Card from '../../components/Card';
import { useGetAttendanceQuery, useGetJustifsQuery } from '../../store/api/MainApi';
import { useEffect, useState } from 'react';
import { TbSettingsCode } from 'react-icons/tb';
const columns: GridColDef<Omit<Attend,'_id'>>[] = [
    {
        field: 'date',
        headerName: 'Date',
        flex: 1,
        // valueGetter:(_,row)=>row.date.toDateString(),
        headerClassName: 'bg-gray-200 text-gray-700 font-semibold', // Tailwind classes for header
        cellClassName: 'p-2 text-gray-800', // Tailwind classes for cell
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
           <div className="">
             <span className={`font-bold ${params.value ? 'text-green-600' : 'text-red-600'}`}>
                {params.value ? 'Present' : 'Absent'}
            </span>

           
           </div>
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
                    <Button>
                        Justify
                    </Button>
                </div>
            );
        },
    },
];

const StydentAtendanceList = () => {
    const { id } = useParams()
    const {data, isLoading,isSuccess} = useGetJustifsQuery()
    const {data : data2, } = useGetAttendanceQuery()
    console.log(data);
    const [datass, setDatass] = useState<Omit<Attend,'_id'>[]>([])
    
    useEffect(() => {
        if (data2) {
          const transformedData = data2.attend.map(item => ({
            id: item._id.toString(), // Convert ObjectId to string and rename it to `id`
            First_period: item.First_period,
            Second_period: item.Second_period,
            Third_period: item.Third_period,
            studId: item.studId,
            date: item.date,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
            __v: item.__v,
          }));
    
          setDatass(transformedData); // Set the transformed data into state
        }
      }, [data2]);
    return (
        <div>
            <div className="text-xl my-3 font-bold">See Your attendance{id as string}</div>

            {/* <div className="flex justify-end my-3">
            <Link to={''} className="btn-blue">
                Add class
            </Link>
        </div> */}
        {
            data2 && <DataGrid rows={datass} columns={columns} />
        }
            

            <div className="my-7">

                <div className="font-bold text-xl my-6">Justifucations</div>
               <div className="grid grid-cols-4 gap-5">
               {
                   isSuccess && (
                    <> 
                    {
                        data.justifications.map((justif,index)  => (
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
    )
}

export default StydentAtendanceList


