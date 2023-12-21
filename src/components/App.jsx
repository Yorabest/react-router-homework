import { Navigation } from "./Navigation";
import { Outlet } from 'react-router-dom';
import { MainContainer } from "styled/Main.styled";

export const App = () => {
  return (
    <MainContainer>
      <Navigation />
      <Outlet></Outlet>
        </MainContainer>
  );
};
