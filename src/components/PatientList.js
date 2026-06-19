import usePatient from "../hooks/usePatient";

const PatientList = () => {

    const { patients, deletePatient } = usePatient();

   return (
        <div>
            <h2 className="list-title">
                Patient List
            </h2>

            <p className="patient-count">
                Total Patients : {patients.length}
            </p>

            {patients.length === 0 ? (
            <p className="empty-message">
                No Patients Added Yet
            </p>
            ) : (
            <ul className="patient-list">
                {patients.map((patient, index) => (
                <li
                    key={index}
                    className="patient-item"
                >
                    <span>{patient}</span>

                    <button
                    className="delete-btn"
                    onClick={() =>
                        deletePatient(index)
                    }
                    >
                    Delete
                    </button>
                </li>
                ))}
            </ul>
            )}
        </div>
        );
};

export default PatientList;