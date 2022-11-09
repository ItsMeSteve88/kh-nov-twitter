import "./logo.css";
import SidebarOption from "./SidebarOption";
import { FaTwitter, FaHome, FaHashtag, FaBell, FaComment, FaBookmark, FaList, FaUser, FaAngleRight } from "react-icons/fa";

function Logo() {
  return (
      <div className="sidebar">
      <FaTwitter className="twitterIcon" />
      <SidebarOption active Icon={FaHome} text="Home" />
      <SidebarOption Icon={FaHashtag} text="Explore" />
      <SidebarOption Icon={FaBell} text="Notifications" />
      <SidebarOption Icon={FaComment} text="Messages" />
      <SidebarOption Icon={FaBookmark} text="Bookmarks" />
      <SidebarOption Icon={FaList} text="Lists" />
      <SidebarOption Icon={FaUser} text="Profile" />
      <SidebarOption Icon={FaAngleRight} text="More" />
      {/* Tweet Button */}
      <button className="tweetButton">Tweet</button>
    </div>
  );
}

export default Logo;
