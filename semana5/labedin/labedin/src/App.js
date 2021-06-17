import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fcgh3-1.fna.fbcdn.net/v/t1.6435-9/133085150_4864092400329659_4226373812792806627_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeHUbCup10Uj-pbQ5KpQOrjCzHJFDC8nJfjMckUMLycl-Bxn4rExqX5irvUIZMFJQig540qSx_kJLQ1BlJ6Yhkmf&_nc_ohc=FkfFjyJRhCAAX-mjq1B&_nc_ht=scontent.fcgh3-1.fna&oh=7ac2d785327f85db39a5759d6b8f635a&oe=60DBF8C7" 
          nome="Joice Silva" 
          descricao="Olá, eu sou o Joice Silva. Sou Estudante da Labenu. Estou me preparando para fazer uma transição radical de carreira, de Cabeleireira à Desenvolvedora."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://scontent.fcgh3-1.fna.fbcdn.net/v/t1.6435-9/114589143_191898102530736_1486256776459375154_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeG-M44dniaGtlSEs2gjyhlnL-UWhEWSDMgv5RaERZIMyG3GiNTurW-uLT0AL4jxFBA5Ei802iL0S40XKzLCWgAA&_nc_ohc=F2K_QSaD28kAX-UHTZu&_nc_ht=scontent.fcgh3-1.fna&oh=cc4635cfb4cced5a403baf4ff1c0247a&oe=60DB5732" 
          nome="JC Espaço de Beleza" 
          descricao="Cabeleireira" 
        />
        
        <CardGrande 
          imagem="https://scontent.fcgh3-1.fna.fbcdn.net/v/t1.6435-9/194290935_5622043504534541_2864633742352833874_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeF-cTiuWOwFW9q-mDKui-fyzpxlE9rga1DOnGUT2uBrUHiMt_RaC51T436KpkGywE4VLAQgcsegzJvL90Hamngw&_nc_ohc=c2GICPgV75wAX9f5ZG9&_nc_ht=scontent.fcgh3-1.fna&oh=0517d2123a6ee396d79bfa65ba7c2543&oe=60DC77F9" 
          nome="J&S Transportes" 
          descricao="Analista de atendimento" 
        />

        <div className="paqueno-section-container">
        <h2>E-mail e Endereço</h2>
        <CardPequeno 
          email="joice.jss2016@gmail.com"  
          endereco="R. Pais Leme,Pinheiros" 
        />
        </div>

      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
