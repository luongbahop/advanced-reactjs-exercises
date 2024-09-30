import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import Exercise1 from './containers/Exercise1';
import Exercise2 from './containers/Exercise2';
import Exercise3 from './containers/Exercise3';
import NotFound from './containers/NotFound';

import './assets/style.css';

const App: React.FC = () => {
  return (
    <div className="wraper">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/exercise-1" />} />
          <Route path="/exercise-1" element={<Exercise1 />} />
          <Route path="/exercise-2" element={<Exercise2 />} />
          <Route path="/exercise-3" element={<Exercise3 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
