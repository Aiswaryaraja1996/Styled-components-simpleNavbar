import logo from "./logo.svg";
import "./App.css";

import styled from "styled-components";

const ToolBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem;
  background-color: #3f51b5;
  color: white;
  font-size: 1rem;
  > * {
    margin: 0.5rem;
    &:nth-child(2) {
      display: flex;
      gap: 1rem;
    }
  }
`;

const Logo = styled.div`
  display: flex;
  > * {
    &:nth-child(1) {
      width: 40px;
    }
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

const DrawerItem = ({ label }) => {
  return <div>{label}</div>;
};

function Navbar() {
  return (
    <ToolBar>
      <Logo>
        <img src="./logo.png" alt="logo" />
        <p>Let's Create</p>
      </Logo>

      <div>
        <DrawerItem label="About us" />
        <DrawerItem label="Prices" />
        <DrawerItem label="Other" />
        <DrawerItem label="Contact" />
      </div>
    </ToolBar>
  );
}

function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
