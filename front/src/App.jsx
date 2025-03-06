import './App.css'
import Banner from './components/Banner'
import Card3DRotation from './components/Cards3d'
import Navbar from './components/Navbar'
import MediaImg from './assets/Media_2.jpg'
import cultural from './assets/Cultural.jpg'
import hr from './assets/HR.jpg'
import fineArts from './assets/Fine_Arts.jpg'
import sports from './assets/sports.jpg'
import comdev from './assets/Community_dev.jpg'
import women from './assets/Women_Emp.jpg'
import lit from './assets/Literary.jpg'
import Ballpit from './components/Ballpit'

function App() {
  return (
    <>

      <Navbar></Navbar>
      <div className="container">

        <Banner></Banner>

        <div className='titleCards'>
          <Card3DRotation
            frontTitle="Media Club"
            frontText="Click for details"
            backTitle="Events"
            backText="Rulebook"
            frontImage={MediaImg}
            backImage="../assets/Media_2.jpg"
          />
          <Card3DRotation
            frontTitle="HR Club"
            frontText="Click for details"
            backTitle="Events"
            backText="Rulebook"
            frontImage={hr}
          />

          <Card3DRotation
            frontTitle="Cultural Club"
            frontText="Click for details"
            backTitle="Events"
            backText="Rulebook"
            frontImage={cultural}
          />
          <Card3DRotation
            frontTitle="Fine Arts"
            frontText="Click for details"
            backTitle="Events"
            backText="Rulebook"
            frontImage={fineArts}
          />
          <Card3DRotation
            frontTitle="Community Development Club"
            frontText="Click for details"
            backTitle="Events"
            backText="Rulebook"
            frontImage={comdev}
          />
          <Card3DRotation
            frontTitle="Sports Club"
            frontText="Click for details"
            backTitle="Events"
            backText="Rulebook"
            frontImage={sports}
          />
          <Card3DRotation
            frontTitle="Women Empowerment Club"
            frontText="Click for details"
            backTitle="Events"
            backText="Rulebook"
            frontImage={women}
          />
          <Card3DRotation
            frontTitle="Literary Club"
            frontText="Click for details"
            backTitle="Events"
            backText="Rulebook"
            frontImage={lit}
          />

        </div>

      </div>
      
    </>
  )
}

export default App
