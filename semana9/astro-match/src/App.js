import React, { useState } from "react";
import "./App.css";
import MatchList from "./Components/MatchList/MatchList";
import CandidateCard from "./Components/CandidateCard/CandidateCard";
import styled from "styled-components";


const ContainerGeral = styled.div`
  display: flex;
  align-items: center; 
  flex-direction: column;
  
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 5px;
  
`;

const Header = styled.header`
  display: flex;
  height: 40px;
  justify-content: flex-end;
  align-items: center;
  background-color: #FFFFFF;
  box-shadow: grey 1px 1px 5px;
  width: 65vh;
  
`;

const Logo1 = styled.h6`
  font-size: 20px;
  align-items: center;
  color: #F8278A;
  height: 25px;
`;

const Logo2 = styled.h6`
  font-size: 20px;
  align-items: center;
  color: #0A0E4D;
  height: 25px;
  margin-right: 95px;
`;

const MatchButton = styled.button`
  border-radius: 8px;
  color: #0A0E4D;
  height: 60%;
  margin-right: 10px;
  background-color: white;
  border: 1px solid #f5f6f6;
  :hover {
    background-color: #F8278A;
  }
  padding: 4px 10px;
  font-size: 12px;
  outline-style: none;
`;

const ContainerMatchCandidates = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
  width: 65vh;
  height: 85vh;
  flex-direction: column;
  box-shadow: grey 1px 1px 5px;
  margin: 2px;
  
`;
const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
`;

export default function App() {
  const [currentPage, setCurrentPage] = useState("App");
  const [profiles, setProfiles] = useState({});

  const changePage = () => {
    if (currentPage === "App") {
      setCurrentPage("matchList");
    } else {
      setCurrentPage("App");
    }
  };

  return (
    <ContainerGeral>
      <Header>
        <Logo1>Astro</Logo1>
        <Logo2>Match</Logo2>
        <MatchButton onClick={changePage}>Matches</MatchButton>
      </Header>

      {currentPage === "App" ? (
        <ContainerMatchCandidates>
          <CandidateCard></CandidateCard>
          <ContainerButtons></ContainerButtons>
        </ContainerMatchCandidates>
      ) : (
        <MatchList />
      )}
    </ContainerGeral>
  );
}