import React, { useState } from 'react';
import './team_display.css'

// Import icons from react-icons
import {FaCode} from "react-icons/fa";
import {IoMegaphoneSharp} from "react-icons/io5";
import {BsCalendarCheck} from "react-icons/bs";
import {GiPencilBrush} from "react-icons/gi";
import {BiSolidVideoRecording} from "react-icons/bi";

// Import images
import Nolan from '../../../assets/img/Nolan Lwin.jpeg'
import CM from '../../../assets/img/Chang Min Bark.jpeg'
import Hung from '../../../assets/img/Hung Ngo.jpeg'
import Minh from '../../../assets/img/Minh Phoung.jpeg'
import Graham from '../../../assets/img/Graham Billington.jpeg'
import Wera from '../../../assets/img/Saw Wera.jpeg'

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
                <FaCode className='tabButtonIcon'/>
                <span className="tabButtonText">Website Development</span>
            </button>
            <button className={`tabButton ${activeTab === 'tab2' ? 'active' : ''}`} onClick={() => handleTabClick('tab2')} data-tab="tab2">
                <IoMegaphoneSharp className='tabButtonIcon'/>
                <span className="tabButtonText">Marketing</span>
            </button>
            <button className={`tabButton ${activeTab === 'tab3' ? 'active' : ''}`} onClick={() => handleTabClick('tab3')} data-tab="tab3">
                <BsCalendarCheck className='tabButtonIcon'/>
                <span className="tabButtonText">Event Management</span>
            </button>
            <button className={`tabButton ${activeTab === 'tab4' ? 'active' : ''}`} onClick={() => handleTabClick('tab4')} data-tab="tab4">
                <GiPencilBrush className='tabButtonIcon'/>
                <span className="tabButtonText">Design</span>
            </button>
            <button className={`tabButton ${activeTab === 'tab5' ? 'active' : ''}`} onClick={() => handleTabClick('tab5')} data-tab="tab5">
                <BiSolidVideoRecording className='tabButtonIcon'/>
                <span className="tabButtonText">Video Production</span>
            </button>
        </div>

        <div className="teamPage">
            <div className={`tabContent ${activeTab === 'tab1' ? 'active' : ''}`} id="tab1">
                <div className="tabContentContainer">
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
                        <div className="teamMember">
                            <img src={Wera} alt="Saw Wera Kyaw Kyaw"/>
                            <div className="teamMemberName">Saw Wera Kyaw Kyaw</div>
                            <div className="teamMemberPosition">UI Designer</div>
                        </div>
                        <div className="teamMember">
                            <img src={Graham} alt="Omid Mohammadi"/>
                            <div className="teamMemberName">Omid Mohammadi</div>
                            <div className="teamMemberPosition">UI Designer</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`tabContent ${activeTab === 'tab2' ? 'active' : ''}`} id="tab2">
                <div className="tabContentContainer">
                    <div className="teamMemberContainer">
                        <div className="teamMember">
                            <img src={Nolan} alt="Image 1"/>
                            <div className="teamMemberName">Nolan Lwin</div>
                            <div className="teamMemberPosition">Website Manager</div>
                        </div>
                        <div className="teamMember">
                            <img src={CM} alt="Image 2"/>
                            <div className="teamMemberName">Nolan Lwin</div>
                            <div className="teamMemberPosition">Website Manager</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`tabContent ${activeTab === 'tab3' ? 'active' : ''}`} id="tab3">
                <div className="tabContentContainer">
                    <div className="teamMemberContainer">
                        <div className="teamMember">
                            <img src={Hung} alt="Image 3"/>
                            <div className="teamMemberName">Nolan Lwin</div>
                            <div className="teamMemberPosition">Website Manager</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Team;

