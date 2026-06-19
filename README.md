# Patient List Management (Redux Toolkit Basics)

##  Project Overview

This project is a simple Patient List Management application built using React and Redux Toolkit.

The application allows users to:

- Add a patient
- View all patients
- Delete a patient
- Manage global state using Redux Toolkit
- Access Redux state using useSelector
- Dispatch Redux actions using useDispatch
- Reuse Redux logic through a Custom Hook (usePatient)
- Monitor state changes using Redux DevTools

---

##  Objective

The purpose of this project is to understand the fundamentals of Redux Toolkit state management and Custom Hooks in React.

### Key concepts covered:

- Redux Toolkit
- Store Configuration
- Slices
- Actions
- Reducers
- useSelector
- useDispatch
- Custom Hooks
- Redux DevTools

---

##  Technologies Used

- React
- React Hooks
  - useState
- Redux Toolkit
  - configureStore
  - createSlice
- React Redux
  - Provider
  - useSelector
  - useDispatch
- Custom Hook
  - usePatient()

---

##  Folder Structure

```text
src
├── components
│   ├── AddPatient.js
│   └── PatientList.js
│
├── redux
│   ├── patientSlice.js
│   └── store.js
│
├── hooks
│   └── usePatient.js
│
├── App.js
├── App.css
└── index.js
```

---

##  Features

### 1️⃣ Add Patient

- Enter patient name in the input field.
- Click the **Add Patient** button.
- Patient is added to the Redux store.

### 2️⃣ View Patient List

- Displays all patients stored in Redux Toolkit state.
- Updates automatically whenever state changes.

### 3️⃣ Delete Patient

- Each patient has a Delete button.
- Clicking Delete removes the patient from Redux Toolkit state.

### 4️⃣ Custom Hook

A reusable custom hook named `usePatient()` is created to:

- Access patients from Redux state
- Add patients
- Delete patients

This avoids repeating Redux logic across components.

### 5️⃣ Redux DevTools

Redux DevTools can be used to:

- View dispatched actions
- Track state changes
- Debug application behavior

---

##  Application Flow

```text
User Enters Patient Name
            ↓
Click Add Patient
            ↓
Dispatch Redux Toolkit Action
            ↓
Slice Reducer Updates State
            ↓
Store Updated
            ↓
useSelector Reads New State
            ↓
Component Re-renders
            ↓
Updated Patient List Displayed
```

---

##  Redux State Structure

```javascript
{
  patients: []
}
```

---

##  Slice Actions

### addPatient

Adds a new patient to the Redux store.

```javascript
dispatch(addPatient("John"));
```

### deletePatient

Removes a patient from the Redux store.

```javascript
dispatch(deletePatient(index));
```

---

##  How to Run the Project

### Install Dependencies

```bash
npm install
npm install @reduxjs/toolkit react-redux
```

### Start Application

```bash
npm start
```

### Open Browser

```text
http://localhost:3000
```

---

##  Sample Output

```text
Patient Management System

[ Enter Patient Name ] [Add Patient]

Patient List
Total Patients : 3

1. John      Delete
2. David     Delete
3. Kumar     Delete
```

---

##  Learning Outcomes

After completing this project, I learned:

- How Redux Toolkit works
- How to configure a Redux store
- How to create and use slices
- How to use createSlice and configureStore
- How to use useSelector and useDispatch
- How to create and use Custom Hooks
- How to manage global state efficiently
- How to use Redux DevTools for debugging

---

##  Author

**Hemadharshini A**