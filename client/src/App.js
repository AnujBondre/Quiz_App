import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPage from './Components/Adminpage';
import Adminque from './Components/Adminque';
// import UserMCQ from './Components/UserMcq';

function App() {
  return (
    <Router>
      <div>
        <Routes>
    
          <Route path="/" element={<Adminque />} />
          <Route path="/admin/addQues" element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;

