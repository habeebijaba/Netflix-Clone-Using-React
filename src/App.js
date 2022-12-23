import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import {action,ActionMovies,ComedyMovies,Documentaries,HorrorMovies,originals, RomanceMovies} from './urls'
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title='Action Movies' isSmall />
      <RowPost url={ComedyMovies} title='Comedy Movies' isSmall />
      <RowPost url={HorrorMovies} title='Horror Movies' isSmall />
      <RowPost url={RomanceMovies} title='Romantic Movies' isSmall />
      <RowPost url={Documentaries} title='Documentaries' isSmall />




    </div>
  );
}

export default App;
