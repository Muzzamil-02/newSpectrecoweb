import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ImageText from './components/ImageText';
import CenterText from './components/CenterText';
import CardSection from './components/CardSection';
import SustainableReporting from './components/SustainableReporting';

import ScreenComponent from './components/ScreenComponent';
import IndustrySection from './components/IndustrySection';
import ServiceCard from './components/ServiceCard';
import AdvisoryCarousel from './components/AdvsoryCarousel';
import Slider from './components/industry/slider'
import Phases from './components/industry/phases';
import TickerComponent from './components/industry/ticker';
import DrivingValue from './components/industry/DrivngValue';
import data from '../src/components/data.json'
import GlobalPresence from './components/GlobalPresence';
import StartConversation from './components/StartConversation';
import NewsInsights from './components/NewsInsights';
import TeamSection from './components/TeamSection';



function App() {
  const imagetext = data.ImageTextComponent;
  return (
    <div className="App">
    <ImageText imagePosition="right" isContainer={true} componentText={imagetext}/>
    <CenterText isContainer={true}/>
    <CardSection/>
    <SustainableReporting/>
   <ScreenComponent/>
   <IndustrySection/>
   <ServiceCard/>
   <AdvisoryCarousel/>
   <Slider/>
   <Phases/>
   <DrivingValue/>
   <StartConversation />
   <GlobalPresence/>
   <NewsInsights/>
   <TeamSection/>
   <TickerComponent />
    </div>
  );
}

export default App;
