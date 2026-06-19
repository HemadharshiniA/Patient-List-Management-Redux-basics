import { useState } from "react";
import usePatient from "../hooks/usePatient";

const AddPatient = () => {

    const [name, setName] = useState("");

    const { addPatient } = usePatient();

    const handleAdd = () => {

        if (name.trim() === "") return;

        addPatient(name);

        setName("");
    };

    return (
        <div className="add-patient">
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Patient Name"
            />

            <button
            className="add-btn"
            onClick={handleAdd}
            >
            Add Patient
            </button>
        </div>
        );
};

export default AddPatient;