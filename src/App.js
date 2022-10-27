import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Route/Routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
