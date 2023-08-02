import React, { useState } from 'react';
import './team_display.css'
import Nolan from '../../../assets/img/Nolan Lwin.jpeg'
import CM from '../../../assets/img/Chang Min Bark.jpeg'
import Hung from '../../../assets/img/Hung Ngo.jpeg'

import speaker1 from '../../../assets/img/speaker-1-2023.png'
import speaker2 from '../../../assets/img/speaker-2-2023.png'
import speaker3 from '../../../assets/img/speaker-3-2023.png'
import speaker4 from '../../../assets/img/speaker-4-2023.png'
import speaker5 from '../../../assets/img/speaker-5-2023.png'

const Team = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="tabContainer">
        <div className="meetTeam">
            Meet the Team
        </div>

        <div className="teamSelectionBar">
            <button className={`tabButton ${activeTab === 'tab1' ? 'active' : ''}`} onClick={() => handleTabClick('tab1')} data-tab="tab1">
                Website Development
            </button>
            <button className={`tabButton ${activeTab === 'tab2' ? 'active' : ''}`} onClick={() => handleTabClick('tab2')} data-tab="tab2">
                Marketing
            </button>
            <button className={`tabButton ${activeTab === 'tab3' ? 'active' : ''}`} onClick={() => handleTabClick('tab3')} data-tab="tab3">
                Event Management
            </button>
            <button className={`tabButton ${activeTab === 'tab4' ? 'active' : ''}`} onClick={() => handleTabClick('tab4')} data-tab="tab4">
                Design
            </button>
            <button className={`tabButton ${activeTab === 'tab5' ? 'active' : ''}`} onClick={() => handleTabClick('tab5')} data-tab="tab5">
                Video Production
            </button>
        </div>

        <div className="teamPage">
            <div className={`tabContent ${activeTab === 'tab1' ? 'active' : ''}`} id="tab1">
                <img src={Nolan} alt="Nolan Lwin"/>
                <img src={CM} alt="Chang Min Bark"/>
                <img src={Hung} alt="Hung Ngo"/>
            </div>
            <div className={`tabContent ${activeTab === 'tab2' ? 'active' : ''}`} id="tab2">
                <img src={speaker1} alt="Image 2"/>
            </div>
            <div className={`tabContent ${activeTab === 'tab3' ? 'active' : ''}`} id="tab3">
                <img src={speaker2} alt="Image 3"/>
            </div>
        </div>
    </div>
  );
};

export default Team;

