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
import data from '../src/components/data.json'



function App() {
  const imagetext = data.ImageTextComponent;
  return (
    <div className="App">
    <ImageText imagePosition="left" isContainer={true} componentText={imagetext}/>
    <CenterText isContainer={true}/>
    <CardSection/>
    <SustainableReporting/>
   <ScreenComponent/>
   <IndustrySection/>
   <ServiceCard/>
   <AdvisoryCarousel/>
    </div>
  );
}

export default App;
