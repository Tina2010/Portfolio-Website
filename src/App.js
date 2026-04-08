import './App.css';
import { Tabs } from 'antd';
import { AboutMeContainer } from './TabChildren/aboutMe';
import { ProjectOverviewContainer } from './TabChildren/projectOverview';
import { ContactContainer } from './TabChildren/contact';
import { UXDesignContainer } from './TabChildren/uxDesign';
import { Typography } from 'antd';
import selfie from './img/selfie.png';

const { Text } = Typography;

const items = [
  {
    key: '1',
    label: 'About me',
    children: <AboutMeContainer />,
  },
  {
    key: '2',
    label: 'Project Overview',
    children: <ProjectOverviewContainer />,
  },
  {
    key: '3',
    label: 'UX Design',
    children: <UXDesignContainer />,
  },
    {
    key: '4',
    label: 'Contact',
    children: <ContactContainer />,
  },
];

function App() {
  return (
  <div className="App">
    <header className="App-header">
      <div className="Introduction">
        <img src={selfie} className="Foto" alt="Selfpotrait of Tina Rittmüller" />
          <div className='IntroText'>
          <Text>
            <b style={{ fontSize: '1.5rem' }}>Hi! I'm <span className="HoverName">Tina</span>!</b>
            <br /><br />
            I am a passionate UX Designer and Frontend Developer based in Germany.
            <br /><br />
            My passion lies in creating user-centered digital experiences that are both functional and visually appealing.
            If you'd like to learn more about me and my work, feel free to explore the tabs below!
          </Text>
          </div>
      </div>
    </header>

    <div className="tabs-wrapper">
      <Tabs defaultActiveKey="1" items={items} centered/>
    </div>
  </div>
);
}

export default App;
