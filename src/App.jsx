import "./App.css";
import Router from "./router";
import { Toaster } from 'react-hot-toast';
import { useEffect } from "react";

function App() {

  useEffect(() => {
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
      t = l.createElement(r);
      t.async = 1;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "rtw1nvkd3c"); 
  }, []);

  return (
    <>
      <Router />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
