import React from 'react';
import PropTypes from 'prop-types';

function HomeHeader({ bigTitle, smallTitle, picture }) {
  return (
    <>
      <header className="masthead" style={{ background: `url(${picture})` }}>
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="site-heading">
                <h1>{bigTitle}</h1>
                <span className="subheading">{smallTitle}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

HomeHeader.propTypes = {
  bigTitle: PropTypes.string.isRequired,
  smallTitle: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default HomeHeader;
