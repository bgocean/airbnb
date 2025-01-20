import "./style.scss";
import searchIcon from "./search.svg";
import Link from "../Link/Link";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <div className="searchbar__btns-wrapper">
        <div className="searchbar__btn">
          <Link />
        </div>
        <div className="searchbar__btn">
          <Link />
        </div>
        <div className="searchbar__btn">
          <Link />
        </div>
      </div>
      <button className="searchbar__btn-search">
        <img src={searchIcon} alt="Search" />
      </button>
    </div>
  );
};

export default SearchBar;

// https://www.youtube.com/watch?v=np5bD3YU1Fg
// 1.15.02
