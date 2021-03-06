import React from "react";
import styled from "styled-components";
import axios from "axios"
import { baseUrl, axiosConfig } from "../Constants/Constants";

const PlaylistCreationFormContainer = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: salmon;
`

const PlaylistCreationForm = styled.form`   
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: salmon;
`

class PlaylistCreationPage extends React.Component {
    state = {
        inputNameValue: ""
    }

    changeInputnameValue = (e) => {
        this.setState({inputNameValue: e.target.value})
    }

    createPlaylist = (e) => {
        e.preventDefault();
        const body = {
            name: this.state.inputNameValue
        };

        axios.post(baseUrl, body, axiosConfig).then(() => {
            alert('Playlist cadastrada com sucesso')
        }).catch(err => [
            console.log(err)
        ]);
        this.setState({inputNameValue: ""});
    };
    
    render () {
        return (
            <PlaylistCreationFormContainer>
                <h1>Cadastrar nova Playlist</h1>
                <PlaylistCreationForm onSubmit={this.createPlaylist} >
                    <label>Nova playlist</label>
                    <input 
                        placeholder="Nome da Playlist"
                        type="text"
                        value={this.state.inputNameValue}
                        onChange={this.changeInputnameValue}
                    />
                    <button type="submit">Cadastrar Playlist</button>
                </PlaylistCreationForm>
            </PlaylistCreationFormContainer>
        );
    };
};

export default PlaylistCreationPage