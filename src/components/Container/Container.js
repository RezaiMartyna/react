import React from 'react';
import styles from './Container.scss';
import PropTypes from 'prop-types';

const Container = () => (
  <div className={styles.component}>
    {this.props.children}
  </div>

);

Container.propTypes = {
  children: PropTypes.node,
};
export default Container;