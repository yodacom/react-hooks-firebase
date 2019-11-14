import React from "react";
import TimesList from './components/times-list';
import AddTimeEntryForm from './components/add-time-entry-form';
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Just Clock it</h1>
      <TimesList />
      <AddTimeEntryForm />
    </div>
  );
}

export default App;
