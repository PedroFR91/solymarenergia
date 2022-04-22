import React from 'react';
import { Link } from 'react-router-dom';
function Image(props) {
  return (
    <>
      <Link to='/'>
        <img src={props.urlImg} alt={props.altImg} height={'100%'} />
      </Link>
    </>
  );
}

export default Image;
