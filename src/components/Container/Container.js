import React from 'react';
import PropTypes from 'prop-types';
import styles from './Container.scss';

const Container = ({children}) => (
  <div className={styles.component}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node,
};

Container.defaultProps = {
  children: <p>Hello world!</p>,
};

export default Container;
