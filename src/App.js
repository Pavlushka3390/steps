import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import List from './components/List';

export default function App() {
  const [workouts, setWorkouts] = useState([]);

  return (
    <div className="container">
      <Form workouts={workouts} setWorkouts={setWorkouts} />
      <List workouts={workouts} setWorkouts={setWorkouts} />
    </div>
  );
}