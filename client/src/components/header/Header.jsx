
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src='https://assets.thehansindia.com/h-upload/2021/01/30/1600x960_1027977-succes.jpg'
        alt=""
      />
    </div>
  );
}

