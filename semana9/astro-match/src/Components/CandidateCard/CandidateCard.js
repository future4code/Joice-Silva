import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ContainerCard,
  ProfilePhoto,
  InfoProfile,
  Buttons,
  ButtonX,
  ButtonHeart,
  ResetButton,
} from "../Styled/Styled";

export default function CandidateCard() {
  const [profile, setProfile] = useState({});
  

  
  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joice-silva-molina/person"
      )
      .then((response) => {
        setProfile(response.data.profile);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  
  const choosePerson = (value) => {
    const body = {
      id: profile.id,
      choice: value,
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joice-silva-molina/choose-person",
        body
      )
      .then((response) => {
        getProfile();
        if (response.data.isMatch === true) {
          alert("Match!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  
  const resetAllProfiles = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joice-silva-molina/clear"
      )
      .then((response) => {
        getProfile();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ContainerCard>
      <div>
        <ResetButton onClick={resetAllProfiles}>Reset</ResetButton>
      </div>
      <ProfilePhoto src={profile.photo} />

      <InfoProfile>
        <h4>
          {profile.name} , {profile.age}
          <h6>{profile.bio}</h6>
        </h4>
      </InfoProfile>
      <Buttons>
        <ButtonX onClick={() => choosePerson(false)}>×</ButtonX>

        <ButtonHeart onClick={() => choosePerson(true)}>♥</ButtonHeart>
      </Buttons>
    </ContainerCard>
  );
}

