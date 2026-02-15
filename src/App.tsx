import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/react-exercise/" element={<Home />} />
        <Route path="/react-exercise/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
