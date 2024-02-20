import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './container/Landing';
import OnBoard from './container/OnBoard';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/onboard" element={<OnBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
