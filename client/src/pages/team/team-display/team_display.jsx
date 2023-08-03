import React, { useState } from 'react';
import './team_display.css'
import Nolan from '../../../assets/img/Nolan Lwin.jpeg'
import CM from '../../../assets/img/Chang Min Bark.jpeg'
import Hung from '../../../assets/img/Hung Ngo.jpeg'
import Minh from '../../../assets/img/Minh Phoung.jpeg'
import Graham from '../../../assets/img/Graham Billington.jpeg'

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
                <div className="teamMemberContainer">
                    <div className="teamMember">
                        <img src={Nolan} alt="Nolan Lwin"/>
                        <div className="teamMemberName">Nolan Lwin</div>
                        <div className="teamMemberPosition">Website Manager</div>
                    </div>
                    <div className="teamMember">
                        <img src={CM} alt="Chang Min Bark"/>
                        <div className="teamMemberName">Chang Min Bark</div>
                        <div className="teamMemberPosition">Front-end Developer</div>
                    </div>
                    <div className="teamMember">
                        <img src={Hung} alt="Hung Ngo"/>
                        <div className="teamMemberName">Hung Ngo</div>
                        <div className="teamMemberPosition">Back-end Developer</div>
                    </div>
                    <div className="teamMember">
                        <img src={Minh} alt="Minh Phoung"/>
                        <div className="teamMemberName">Minh Phoung</div>
                        <div className="teamMemberPosition">Back-end Developer</div>
                    </div>
                    <div className="teamMember">
                        <img src={Graham} alt="Graham Billington"/>
                        <div className="teamMemberName">Graham Billington</div>
                        <div className="teamMemberPosition">Back-end Developer</div>
                    </div>
                </div>
            </div>
            <div className={`tabContent ${activeTab === 'tab2' ? 'active' : ''}`} id="tab2">
                <div className="teamMemberContainer">
                    <img src={speaker1} alt="Image 2"/>
                    <img src={speaker2} alt="Image 2"/>
                </div>
            </div>
            <div className={`tabContent ${activeTab === 'tab3' ? 'active' : ''}`} id="tab3">
                <div className="teamMemberContainer">
                    <img src={speaker3} alt="Image 3"/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Team;

