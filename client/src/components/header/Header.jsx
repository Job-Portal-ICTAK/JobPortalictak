
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">"Every success story is a tale of constant adaptation,revision & change"-Richard Branson</span>
        <span className="headerTitleLg">TALES OF SUCCESS</span>
      </div>
      <img
        className="headerImg"
        src="https://cdn.pixabay.com/photo/2017/07/03/14/55/flowers-2467997_960_720.png"

        alt=""
      />
    </div>
  );
}

