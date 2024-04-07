import './App.css';

import {
  Route,
  Link,
  Routes,
  BrowserRouter,
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return <h2>Home Content</h2>;
}

function About() {
  return <h2>About Content</h2>;
}

export default App;
