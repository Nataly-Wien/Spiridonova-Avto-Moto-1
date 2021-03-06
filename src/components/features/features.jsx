import './features.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Features = ({features, featureNames}) => {
  return (
    <ul className="card__features features">
      {features.map((item, i) => {
        return (
          <li className={`features__item features__item--${featureNames[i].feature}`} key={`${item}`}>
            <span className="visually-hidden">{featureNames[i].legend}</span>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

Features.propTypes = {
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  featureNames: PropTypes.arrayOf(PropTypes.shape({
    feature: PropTypes.string,
    legend: PropTypes.string,
  })).isRequired,
};

export default Features;
