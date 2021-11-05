import React from 'react';

const Heading = ({ icon }) => {
  return (
    <>
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'4rem'}}>
        <h1 style={{fontSize:'10rem'}}><i className={icon} /></h1>
        <h3>Mini Github Clone</h3>
      </div>
    </>
  );
};

Heading.defaultProps = {
  icon: 'fab fa-github'
};



export default Heading;
