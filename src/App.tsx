import { BrowserRouter as Router } from "react-router-dom";
import PagesRoutes from "./routes/PageRoutes";
// import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Router>
        <PagesRoutes />
      </Router>
    </>
  );
}

export default App;