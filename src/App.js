import './App.css';
import { Routes, Route } from 'react-router-dom';
import MyCalendarApp from './components/MyCalendarApp.tsx';
import MyTime from './components/MyTime';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<MyCalendarApp />} />
          <Route path="/time" element={<MyTime />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
