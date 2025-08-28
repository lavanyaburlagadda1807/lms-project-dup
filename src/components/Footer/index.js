import { useContext } from "react";
import ActivePageContext from "../ActivePageContext";

import './index.css'

const Footer = ({ length }) => {
  const { activePage, changeActivePage } = useContext(ActivePageContext);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(length / itemsPerPage);

  const changeActivePageToPrevious = () => {
    changeActivePage(activePage - 1);
  };
  const changeActivePageToNext = () => {
    changeActivePage(activePage + 1);
  };

  return (
    <div>
      <p>
        Showing {activePage} to 6 of {length} items
      </p>
      <div className="pagination-container">
        <button type="button" disabled={activePage <= 1} onClick={changeActivePageToPrevious}>Previous</button>
        <button type="button" disabled={activePage >= totalPages} onClick={changeActivePageToNext}>Next</button>
      </div>
    </div>
  )
};

export default Footer;
