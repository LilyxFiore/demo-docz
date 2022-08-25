import React from 'react';
import t from 'prop-types';
import styles from './Button.module.scss';
const Button = ({ children, type }) => 
  <button className={styles.button} type={type}>{children}
  </button>

Button.propTypes = {
  /**
   * This is a description for this prop.
   * Button type.
   */
  type: t.oneOf(['button', 'submit', 'reset', 'small']),
  responsive: t.bool,
  theme: t.oneOf(['light', 'dark']),
}
Button.defaultProps = {
  type: 'button',
  responsive: false,
  theme: 'light',
}
export default Button
