import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  number: "",
  city: "",
  pincode: "",
  _id: "",
};

export const usesrSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      console.log(action.payload.data);
      // state.users = action.payload.data;
      state._id= action.payload.data._id
      state.name = action.payload.data.name
      state.email = action.payload.data.email
      state.number = action.payload.data.number
      state.city = action.payload.data.city
      state.pincode = action.payload.data.pincode
     },
     logoutRedux : (state, action) => {
      state._id= ""
      state.name = ""
      state.email = ""
      state.number = ""
      state.city = ""
      state.pincode = ""
     },
  },
});

export const { loginRedux, logoutRedux } = usesrSlice.actions;

export default usesrSlice.reducer;