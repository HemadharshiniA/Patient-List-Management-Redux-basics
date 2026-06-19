// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import AddPatient from "./components/AddPatient";
import PatientList from "./components/PatientList";

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">
        Patient Management System
      </h1>

      <p className="app-subtitle">
        Manage patient records using Redux and Custom Hooks
      </p>

      <AddPatient />
      <PatientList />
    </div>
  );
}

export default App;
