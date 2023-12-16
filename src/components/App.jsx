import { Navigation } from "./Navigation";
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Navigation />
      <Outlet></Outlet>
        </>
  );
};
