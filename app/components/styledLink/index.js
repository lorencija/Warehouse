import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Style from './style.css';

export default function StyledLink({ link, text }) {
  return (
    <Link to={link} className={Style.link}>
      <Typography
        component="h2"
        variant="h3"
        align="center"
        className={Style.border}
      >
        {text}
      </Typography>
    </Link>
  );
}

StyledLink.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};
