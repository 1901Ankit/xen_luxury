import "./App.css";
import Router from "./router";
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
      <Router />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
