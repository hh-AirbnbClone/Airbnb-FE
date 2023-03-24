import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import instance from "../../axios/api";
import { cookies } from "../../shared/cookies";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

export const __getUsers = createAsyncThunk(
  "getUsers",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const code = new URL(window.location.href).searchParams.get("code");

      const response = await instance.get(`/api/auth/login?code=${payload}`);
      //토큰을 쿠키에 저장
      cookies.set("token", response.headers.Authorization.substr(7));
      const navigate = useNavigate("");
      navigate("/");
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      alert(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__getUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(__getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(__getUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});
export default userSlice.reducer;
