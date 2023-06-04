import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="w-screen h-screen mx-auto ">
      <Outlet />
    </div>
  );
}

export default App;
