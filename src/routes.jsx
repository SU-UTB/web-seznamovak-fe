import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Turnus1 from "./components/sections/turnus1";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/turnus1' element={<Turnus1 />} />
        {/* <Route path='/turnus2' element={<Reservations />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

// const Root = () => (
//   <ThemeProvider theme={theme}>
//     <Routing />
//   </ThemeProvider>
// );

export default Routing;