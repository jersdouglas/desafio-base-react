import React from "react";
import PropTypes from "prop-types";

const Frase = () => {
  return (
    <>
      <div>
        <p style={{ color: color, textTransform: transform }}>
          Esta é uma frase do componente Frase.
        </p>
      </div>
    </>
  );
};

const color = "red";
const transform = "uppercase";

Frase.propTypes = {
  color: PropTypes.string,
  transform: PropTypes.string,
};

export default Frase;
