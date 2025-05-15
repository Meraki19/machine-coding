import { NavLink } from "react-router-dom";
import "./style.css";
const Header = () => {
  return (
    <div className="header">
      <nav>
        <NavLink to="/accordion" end>
          Accordion
        </NavLink>
        <NavLink to="/youtube-live-chat" end>
          Live chat
        </NavLink>
        <NavLink to="/reddit-comment" end>
          Nested comment
        </NavLink>
        <NavLink to="/search" end>
          Search Bar
        </NavLink>
        <NavLink to="/calendar" end>
          Calendar
        </NavLink>
      </nav>
    </div>
  );
};
export default Header;
