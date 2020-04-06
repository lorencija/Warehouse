import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Style from './style.css';

export default function StyledTitle(props) {
  return (
    <Typography
      component="h2"
      variant="h4"
      align="center"
      className={Style.title}
    >
      {props.children}
    </Typography>
  );
}

StyledTitle.propTypes = {
  children: PropTypes.string,
};
