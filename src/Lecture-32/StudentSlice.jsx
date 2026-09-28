import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API call
export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async () => {
    const res = await axios.get("http://localhost:3000/studentData");

    return res.data;
  }
);

const studentSlice = createSlice({
  name: "students",

  initialState: {
    data: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      // When API starts
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // When API succeeds
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })

      // When API fails
      .addCase(fetchStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default studentSlice.reducer;