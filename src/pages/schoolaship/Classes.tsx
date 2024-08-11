import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Class, classFaker, SingleClass } from '../../types/types';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { BsEye } from 'react-icons/bs';
import { useGetAllClassesQuery } from '../../store/api/MainApi';
import { useEffect, useState } from 'react';
const columns: GridColDef<Omit<SingleClass,'_id'>>[] = [
    { field: 'id', headerName: 'ID', flex:1 },
    { field: 'Name', headerName: 'Name', flex:1 },
    { field: 'action', headerName: 'Action', flex:1 ,  renderCell:(params)=>{
        return (
            <div>

                <IconButton>
                    <Link to={`${params.row.id}`} >
                    <BsEye/>
                    </Link>
                </IconButton>
            </div>
        )
    }},
  ];
const Classes = () => {
    const {data} = useGetAllClassesQuery()
    const [datass, setDatass] = useState<Omit<SingleClass,'_id'>[]>([])


    useEffect(() => {
        if (data) {
          const transformedData = data.classes.map(item => ({
           // Convert ObjectId to string and rename it to `id`
           ...item,
           id: item._id.toString(),  
          }));
    
          setDatass(transformedData); // Set the transformed data into state
        }
      }, [data]);
  return (
    <div>
        <div className="text-xl my-3 font-bold">List of classes</div>

        <div className="flex justify-end my-3">
            <Link to={''} className="btn-blue">
                Add class
            </Link>
        </div>
        <DataGrid rows={datass}  columns={columns}  />
    </div>
  )
}

export default Classes