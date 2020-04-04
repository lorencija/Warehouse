import React from 'react';
import PropTypes from 'prop-types';
import Style from './style.css';

export default function Main(props) {
  return <main className={Style.conteiner}>{props.children}</main>;
}

Main.propTypes = {
  children: PropTypes.element,
};
