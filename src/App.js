
import {
  RouterProvider,
} from "react-router-dom";
import Routers from './Router';
function App() {
  return (
    <RouterProvider router={Routers}/>
  );
}

export default App;
