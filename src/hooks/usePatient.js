import { useSelector, useDispatch } from "react-redux";
import { addPatient, deletePatient } from "../redux/actions";

const usePatient = () => {

    const patients = useSelector(
        (state) => state.patients
    );

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