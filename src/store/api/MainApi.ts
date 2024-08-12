/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { BACKEND_URL } from "../constants/env";

// import { BACKEND_API_URL } from "../../utils/env";

import { BACKEND_API_URL } from "../../env";
import {
  Attend,
  AttendanceListResults,
  AttendanceResponse,
  ClassResults,
  ClassStudents,
  RequestData,
  Stats,
  Student,
} from "../../types/types";
// import { Client, Dash, Succursale } from "../../interfaces/mainInterfaces";

// import { store } from "../store";

export const MainApi = createApi({
  reducerPath: "MainApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BACKEND_API_URL}`,
    prepareHeaders: (headers) => {
      const user = localStorage.getItem("token");
      if (user) {
        // 	// const userParsed = JSON.parse(user) as initialState;
        // 	// console.log("USER PARSED ", userParsed);
        headers.set("token", `Bearer ${JSON.parse(user)}`);
        // 	headers.set("Content-type", "application/json");
        // 	console.log(headers.get("authorization"));
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getStats: builder.query<Stats, void>({
      query: () => "stats",
    }),
    getJustifs: builder.query<{ justifications: RequestData[] }, void>({
      query: () => "list_all_justifications_for_student",
    }),
    getAttendance: builder.query<AttendanceResponse, void>({
      query: () => "list_Attendance_status_for_student",
    }),
    getNotifs: builder.query<AttendanceResponse, void>({
      query: () => "list_notif",
    }),
    getAllClasses: builder.query<ClassResults, void>({
      query: () => "list_all_classes_of_perso",
    }),
    getAllStudent: builder.mutation<AttendanceListResults, string>({
      query: (classid) => {
		return{
			method:"POST",
			url:`list_Attendance_status_for_perso/`,
			body:{
				classid
			}
		}
	  },
    }),
    createJustif: builder.mutation<any, FormData>({
      query: (data) => {
        return {
          url: "create_justif/",
          method: "POST",
          body: data,
          headers: {
            // 'Content-type':"multipart/form-data"
          },
        };
      },

	  
    }),
	notify: builder.mutation<any, any>({
		query: (data) => {
		  return {
			url: "Notificaton/",
			method: "POST",
			body: data,
			headers: {
			  // 'Content-type':"multipart/form-data"
			},
		  };
		},
  
		
	  }),
    UpdateClient: builder.mutation({
      query: () => ({
        url: `client/`,
        method: "PUT",
        // body: data,
      }),
    }),

    DeleteClient: builder.mutation({
      query: (id: number) => {
        return {
          url: `clients/${id}/`,
          method: "DELETE",
        };
      },
    }),

	createStudent: builder.mutation<Student, FormData>({
		query: (data) => ({
		  url: '/create_student',
		  method: 'POST',
		  body: data,
		}),	
		// invalidatesTags: ['Students'],
	  }),
	rollCall: builder.mutation<Student, FormData>({
		query: (data) => ({
		  url: '/Rollcall',
		  method: 'POST',
		  body: data,
		}),
		// invalidatesTags: ['Students'],
	  }),
	identify: builder.mutation<Student, FormData>({
		query: (data) => ({
		  url: '/Rollcall',
		  method: 'POST',
		  body: data,
		}),
		// invalidatesTags: ['Students'],
	  }),
    DeleteSurcusalle: builder.mutation({
      query: (id: number) => {
        return {
          url: `succursales/${id}/`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetStatsQuery,
  useCreateJustifMutation,
  useGetAllClassesQuery,
  useGetJustifsQuery,
  useLazyGetJustifsQuery,
  useGetAttendanceQuery,
  useGetAllStudentMutation,
  useNotifyMutation,
  useCreateStudentMutation,
  useRollCallMutation,useIdentifyMutation
} = MainApi;
