import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { studentAttendance, StudentAttendance } from "../../types/types";
import { Link, useParams } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import { BsEye } from "react-icons/bs";
import Card from "../../components/Card";
import Chart1 from "../../components/Chart1";
import ChartTwo from "./ChartTwo";
import ChartOne from "./ChartOne";
import StydentAtendanceList from "./StydentAtendanceList";
import { useGetStatsQuery } from "../../store/api/MainApi";
import { CgSpinner } from "react-icons/cg";
import CardDataStats from "../../components/components/CardDataStats";
const columns: GridColDef<StudentAttendance>[] = [
  {
    field: "date",
    headerName: "Date",
    flex: 1,
    valueGetter: (_, row) => row.date.toDateString(),
    headerClassName: "bg-gray-200 text-gray-700 font-semibold", // Tailwind classes for header
    cellClassName: "p-2 text-gray-800", // Tailwind classes for cell
  },

  {
    field: "period1",
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
    field: "period2",
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
    field: "period3",
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
    renderCell: () => {
      return (
        <div className="flex justify-center">
          <Button>Justify</Button>
        </div>
      );
    },
  },
];

const HomeStudent = () => {
  const { id } = useParams();
  const {data, isLoading} = useGetStatsQuery()

  return (
    <div>
      <div className="text-xl my-3 font-bold">
        See Your attendance{id as string}
      </div>

      {/* <div className="flex justify-end my-3">
            <Link to={''} className="btn-blue">
                Add class
            </Link>
        </div> */}

        {
          isLoading && <div className="animate-spin p-20">
            <CgSpinner></CgSpinner>
          </div>
        }
        {
          data &&  <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 my-6">
            <CardDataStats title={"total Periods Present"} total={data.totalPeriodsPresent.toString()} rate={""} children={undefined}  />
            <CardDataStats title={"total Periods Absent"} total={data.totalPeriodsAbsent.toString()} rate={""} children={undefined}  />
            <CardDataStats title={"percentage Days Absent"} total={`${data.percentageDaysAbsent} %`} rate={""} children={undefined}  />
            <CardDataStats title={"percentage Day sAttended"} total={`${data.percentageDaysAttended} %`} rate={""} children={undefined}  />

          </div>
        }
      <div className="grid grid-cols-2 gap-6 ">
        <div className="">
          <Chart1></Chart1>
        </div>
        <div className="">
          <ChartTwo></ChartTwo>
        </div>

        <div className="cold-span-2">
            {/* <ChartOne></ChartOne> */}
        </div>
      </div>
        <StydentAtendanceList></StydentAtendanceList>
    </div>
  );
};

export default HomeStudent;
