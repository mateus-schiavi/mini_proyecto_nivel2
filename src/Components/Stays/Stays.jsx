import React from "react";
import PropTypes from "prop-types";
import "./Stays.css";

const Stays = ({ stays }) => {
  const staysNumber = Object.keys(stays).length;

  return (
    <div className="stays-div">
      <h2 className="stays-in">Stays in Finland</h2>
      <span className="number-stays">
        {staysNumber > 12 ? "12+" : staysNumber} stays
      </span>
    </div>
  );
};

// Define prop types for the Stays component
Stays.propTypes = {
  stays: PropTypes.object.isRequired, // Example prop type, adjust as needed
};

export default Stays;
