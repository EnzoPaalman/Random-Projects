import {AymenCard} from './Card';
import Catcard from './Card';
import {Checklist} from './Card';
import './App.css';

function Profile() {
  return (
    <div className="Card-Holder">
      <h1>aymen</h1>
      <img
        src="https://i.imgur.com/QIrZWGIs.jpg"
      />
    </div>
  );
}

function Congrats() {
  return (
    <h1> gamer congrats </h1>
  );
}


export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
      <div>
        <Congrats />
        <AymenCard/>
        <Checklist/>
        <Catcard/>
        
      </div>
    </section>
     
  );
}



