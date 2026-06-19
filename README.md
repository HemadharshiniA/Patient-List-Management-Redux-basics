# Patient List Management (Redux Basics)

##  Project Overview

This project is a simple Patient List Management application built using React and Redux.

The application allows users to:

- Add a patient
- View all patients
- Delete a patient
- Manage global state using Redux
- Access Redux state using useSelector
- Dispatch Redux actions using useDispatch
- Reuse Redux logic through a Custom Hook (usePatient)
- Monitor state changes using Redux DevTools

---

##  Objective

The purpose of this project is to understand the fundamentals of Redux state management and Custom Hooks in React.

### Key concepts covered:

- Redux Store
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
- Redux
  - createStore
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
│   ├── actions.js
│   ├── reducer.js
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

- Displays all patients stored in Redux.
- Updates automatically whenever state changes.

### 3️⃣ Delete Patient

- Each patient has a Delete button.
- Clicking Delete removes the patient from Redux state.

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
Dispatch ADD_PATIENT Action
            ↓
Reducer Updates State
            ↓
Redux Store Updated
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

##  Actions

### ADD_PATIENT

Adds a new patient to the Redux store.

```javascript
{
  type: "ADD_PATIENT",
  payload: "John"
}
```

### DELETE_PATIENT

Removes a patient from the Redux store.

```javascript
{
  type: "DELETE_PATIENT",
  payload: 0
}
```

---

##  How to Run the Project

### Install Dependencies

```bash
npm install
npm install redux react-redux
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

- How Redux works
- How to create a Redux store
- How to create actions and reducers
- How to use useSelector and useDispatch
- How to create and use Custom Hooks
- How to manage global state efficiently
- How to use Redux DevTools for debugging

---

## 👨‍💻 Author

**Hemadharshini A**
