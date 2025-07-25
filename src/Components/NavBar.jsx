import React, { useState } from "react";
import Popup from "reactjs-popup";
import AskAi from "../Utils/AskAi.js";
import { Link } from "react-router-dom";
import {
  Home as HomeIcon,
  Calendar,
  UserPlus,
  Users,
  MessageCircle,
  HelpCircle,
  User2,
  Send,
} from "lucide-react";
import "../Css/NavBar.css";

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [AiRes, setAiRes] = useState("");

  async function SearchAi(e) {
    e.preventDefault();
    let AiQuery = e.target[0].value;
    let Res = await AskAi(AiQuery);
    console.log(Res);
    setAiRes(Res);
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="hospital-logo">
          <span className="hospital-logo-icon">🏥</span>
          Health care
        </div>

        <div className="search-bar ">
          <input
            type="text"
            placeholder="Search patients, doctors, records..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />

            <button className="search-button  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
        </div>
      </div>

      <div className="navbar-right">
        <div className="icon-buttons">
          <button className="help-icon">
            <HelpCircle className="icon-svg" />
            <span className="notification-badge">3</span>
          </button>
          <Popup
            position="bottom right"
            trigger={
              <button className="message-icon">
                <MessageCircle className="icon-svg" />
                <span className="notification-badge green-badge">2</span>
              </button>
            }
          >
            <div className="popup-container">
              <div className="popup-header">
                <h3>Ask AI Assistant</h3>
                <p>Get quick answers to your medical queries</p>
              </div>

              <form onSubmit={SearchAi} className="popup-form">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="What would you like to know?"
                    className="ai-input"
                  />
                  <button type="submit" className="send-button">
                    <Send className="icon-svg" />
                  </button>
                </div>
              </form>

              {AiRes && (
                <div className="ai-response">
                  <div>{AiRes}</div>
                </div>
              )}
            </div>
          </Popup>
        </div>

        <div className="profile-section">
          <Link
            to="/login"
            className="profile-button flex items-center space-x-2"
          >
            <User2 className="icon-svg" />
            <span>Login</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
