import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import "./Loader.css";

const loader = () => {
  return (
    <div className='loader'>
      <BeatLoader
        size={50}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </div>
  );
};

export default loader;
