/** @format */

import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import { AuthResponse } from "../../types/auth";



const Initial: AuthResponse = {
	good: {
		_id: "",
		First_name: "",
		Last_name: "",
		Email: "",
		Telephone: 0,
		password: "",
		absences: 0,
		ClassId: "",
		PersoId: "",
		RoleId: "",
		descriptor: [],
		__v: 0
	},
	accesstoken: ""
};
const AuthSlice = createSlice({
	name: "auth",
	initialState: Initial,
	reducers: {
		

		loginSuccess: (state, action: PayloadAction<AuthResponse>) => {
			// console.log("Login success ", action);
			state = {...action.payload}
			return state
		},
		loginFailure: (state) => {
			
		},
		logout: (state) => {
			state = {...Initial}
			return state
			
		},
	},
});

export const { loginSuccess, loginFailure, logout,  } =
	AuthSlice.actions;

export default AuthSlice.reducer;
