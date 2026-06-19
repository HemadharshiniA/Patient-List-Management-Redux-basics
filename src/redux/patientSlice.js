import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    patients: []
};

const patientSlice = createSlice({
    name: "patients",
    initialState,
    reducers: {
        addPatient: (state, action) => {
            state.patients.push(action.payload);
        },
        deletePatient: (state, action) => {
            state.patients = state.patients.filter(
                (_, index) => index !== action.payload
            );
        }
    }
});

export const { addPatient, deletePatient } = patientSlice.actions;
export default patientSlice.reducer;
