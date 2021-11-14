import { v4 as uuidv4 } from 'uuid';
// import ProjectImg from '../images/projectImg.png';
import BulletinBoard from '../images/BulletinBoard.png';
import DrumKit from '../images/DrumKit.png';
import Veggie_Tender from '../images/Veggie_Tender.png';
import DET030 from '../images/DET030.png';
import Books from '../images/Books.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Veggie Tender',
    desc:
      'Final group project application.  Virtual farmers market.  Allowing farmers to post available fresh produce each week for local users to find.',
    img: Veggie_Tender,
  },
  {
    id: uuidv4(),
    name: 'Drum Kit',
    desc:
      'An application where you can play the drums on your keyboard.  Key codes and event listeners. Learned a lot about what is possible with Javascript from this project.',
    img: DrumKit,
  },
  {
    id: uuidv4(),
    name: 'Bulletin Board',
    desc:
      'An application where user is able to authenticate, post/edit/delete messages to your profile, and manage users as an admin.',
    img: BulletinBoard,
  },
  {
    id: uuidv4(),
    name: 'Det 030 Website',
    desc:
      'Created a website for Air Force ROTC Detachment.  Helped increase recruitment of future officers',
    img: DET030,
  },
  {
    id: uuidv4(),
    name: 'Book App',
    desc:
      'A personal project used to display books list of books I have read.',
    img: Books,
  },
];

export default projects;
