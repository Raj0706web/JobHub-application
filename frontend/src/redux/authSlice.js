import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name:"auth",
  initialState:{
<<<<<<< HEAD
    loading:false
=======
    loading:false,
    user:null
>>>>>>> 8da8c88 (16/08/25)
  },
  reducers:{
    //actions
    setLoading:(state,action)=>{
      state.loading = action.payload;
<<<<<<< HEAD
=======
    },
    setUser:(state,action)=>{
      state.user = action.payload;
>>>>>>> 8da8c88 (16/08/25)
    }
  }
});

<<<<<<< HEAD
export const {setLoading} = authSlice.actions;
=======
export const {setLoading,setUser} = authSlice.actions;
>>>>>>> 8da8c88 (16/08/25)
export default authSlice.reducer;