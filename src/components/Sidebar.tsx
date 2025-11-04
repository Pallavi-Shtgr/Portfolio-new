import React, { useState } from 'react';
import { IoChevronDown, IoMailOutline, IoPhonePortraitOutline, IoCalendarOutline, IoLocationOutline } from 'react-icons/io5';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import TypewriterEffect from './TypewriterEffect';

const Sidebar: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <aside className={`sidebar ${isActive ? 'active' : ''}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="/assets/PALLAVI_PHOTO.jpg" alt="Pallavi" width="80" />
        </figure>
        
        <div className="info-content">
          <h1 className="name" title="Pallavi">Pallavi</h1>
          <p className="title">
            I'm a <TypewriterEffect />
          </p>
        </div>

        <button className="info_more-btn" onClick={toggleSidebar}>
          <span>Show Contacts</span>
          <IoChevronDown />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <IoMailOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:pallavishettigar20@gmail.com" className="contact-link">
                pallavishettigar20@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoPhonePortraitOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+919XXXXXXXX" className="contact-link">+91 9XXXXXXXX</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoCalendarOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2003-06-20">June 20, 2003</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoLocationOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Udupi, Karnataka, India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="https://www.linkedin.com/in/pallavi-shettigar-12b539253/" className="social-link">
              <FaLinkedin />
            </a>
          </li>

          <li className="social-item">
            <a href="https://github.com/Pallavi-Shtgr" className="social-link">
              <FaGithub />
            </a>
          </li>

          <li className="social-item">
            <a href="https://x.com/@pallavi_shtgr" className="social-link">
              <FaTwitter />
            </a>
          </li>

          <li className="social-item">
            <a href="https://www.instagram.com/_pallavi_shettigar_/" className="social-link">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;