import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Banner from './components/Banner';
import Card3DRotation from './components/Cards3d';
import Navbar from './components/Navbar';
import Ballpit from './components/Ballpit';

// Import assets
import MediaImg from './assets/Media_2.jpg';
import cultural from './assets/Cultural.jpg';
import hr from './assets/HR.jpg';
import fineArts from './assets/Fine_Arts.jpg';
import sports from './assets/sports.jpg';
import comdev from './assets/Community_dev.jpg';
import women from './assets/Women_Emp.jpg';
import lit from './assets/Literary.jpg';

// Import Pages

import Rulebook from "./components/SurpriseBox";
// import Events from "./pages/Events";
// import Contact from "./pages/Contact";
// import Developers from "./pages/Developers";


import MediaClub from "./components/ClubEvents/Media/MediaClub";
import HRClub from "./components/ClubEvents/HR/HRClub"; 
import CulturalClub from "./components/ClubEvents/Cultural/CulturalClub"; 
import FineArtsClub from "./components/ClubEvents/FineArts/FineArtsClub"; 
import CommunityDevelopmentClub from "./components/ClubEvents/CommunityDevelopment/CommunityDevelopmentClub"; 
import SportsClub from "./components/ClubEvents/Sports/SportsClub"; 
import WomenEmpowermentClub from "./components/ClubEvents/WomenEmpowerment/WomenEmpowermentClub"; 
import LiteraryClub from "./components/ClubEvents/Literary/LiteraryClub"; 


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <div className="container">
            <Banner />
            <div className='titleCards'>
              <Card3DRotation frontTitle="Media Club" frontText="Click for details" backTitle="Events" backText="Rulebook" frontImage={MediaImg} link="media-club"/>
              <Card3DRotation frontTitle="HR Club" frontText="Click for details" backTitle="Events" backText="Rulebook" frontImage={hr} link="/hr-club"/>
              <Card3DRotation frontTitle="Cultural Club" frontText="Click for details" backTitle="Events" backText="Rulebook" frontImage={cultural} link="/cultural-club"/>
              <Card3DRotation frontTitle="Fine Arts" frontText="Click for details" backTitle="Events" backText="Rulebook" frontImage={fineArts} link="/fineArts-club"/>
              <Card3DRotation frontTitle="Community Development Club" frontText="Click for details" backTitle="Events" backText="Rulebook" frontImage={comdev} link="/community-development-club" />
              <Card3DRotation frontTitle="Sports Club" frontText="Click for details" backTitle="Events" backText="Rulebook" frontImage={sports} link="/sports-club" />
              <Card3DRotation frontTitle="Women Empowerment Club" frontText="Click for details" backTitle="Events" backText="Rulebook" frontImage={women} link="/women-empowerment-club" />
              <Card3DRotation frontTitle="Literary Club" frontText="Click for details" backTitle="Events" backText="Rulebook" frontImage={lit} link="/literary-club" />
            </div>
          </div>
        } />

        {/* Other Pages */}
        <Route path="/rulebook" element={<Rulebook />} />
        {/* <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/developers" element={<Developers />} /> */}

        <Route path="/media-club" element={<MediaClub />} />
        <Route path="/hr-club" element={<HRClub />} />
        <Route path="/cultural-club" element={<CulturalClub />} />
        <Route path="/fineArts-club" element={<FineArtsClub />} />
        <Route path="/community-development-club" element={<CommunityDevelopmentClub />} />
        <Route path="/sports-club" element={<SportsClub />} />
        <Route path="/women-empowerment-club" element={<WomenEmpowermentClub />} />
        <Route path="/literary-club" element={<LiteraryClub />} />
        
      </Routes>
    </Router>
  );
}

export default App;
