import { useSelector, useDispatch } from "react-redux";
import { addPatient, deletePatient } from "../redux/patientSlice";

const usePatient = () => {
    const patients = useSelector((state) => state.patients.patients);
    const dispatch = useDispatch();

    const addNewPatient = (name) => {
        dispatch(addPatient(name));
    };

    const removePatient = (index) => {
        dispatch(deletePatient(index));
    };

    return {
        patients,
        addPatient: addNewPatient,
        deletePatient: removePatient
    };
};

export default usePatient;