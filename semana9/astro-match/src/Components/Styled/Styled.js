import styled from "styled-components";

///////////////////// CANDIDATE CARD COMPONENT :
export const ContainerCard = styled.div`
  background-color: #E6E7E9;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 93%;
  box-shadow: grey 1px 1px 5px;
  width: 93%;
  margin-bottom: 10px;
  border-radius: 5px;
`;
export const ProfilePhoto = styled.img`
  width: 100%;
  height: 60%;
  box-shadow: grey 1px 1px 5px;
  margin-bottom: 0;
  
`;
export const InfoProfile = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 110px;
  font-size: 18px;
  width: 50vh;
  text-align: start;
  margin-bottom: 0;
`;

export const Buttons = styled.div`
  display: flex;
  margin-bottom: 0;
  justify-content: space-evenly;
  width: 45vh;
  margin-top: 0;
  height: 45px;
  
`;

export const ButtonX = styled.button`
  color: #0A0E4D;
  border-radius: 100%;
  background-color: white;
  border: 1px solid #0A0E4D;
  :hover {
    background-color: red;
  }
  padding: 6px 12px;
  font-size: 22px;
  outline-style: none;
  margin-top: 0;
`;

export const ButtonHeart = styled.button`
  color: #F8278A;
  border-radius: 100%;
  background-color: white;
  border: 1px solid #F8278A;
  :hover {
    background-color: #0A0E4D;
  }
  padding: 6px 12px;
  font-size: 22px;
  outline-style: none;
`;

export const ResetButton = styled.button`
  
  color: #F8278A;
  height: 25px;
  margin-right: 316px;
  background-color: #E6E7E9;
  border: 1px solid #f5f6f6;
  
  :hover {
    background-color: #0A0E4D;
  }
  padding: 4px 10px;
  font-size: 15px;
  outline-style: none;
`;

// MATCH LIST :
export const ContainerMatchList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: grey 1px 1px 5px;
  width: 45vh;
  height: 80vh;
  flex-wrap: wrap;
`;

export const ContainerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  margin: 3px;
  align-items: center;
`;
export const MatchCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  max-height: 80px;
  flex-wrap: wrap;
`;
export const PhotoExemple = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;

export const MatchName = styled.h6`
  font-size: 10px;
  margin: 0;
  padding: 0;
`;