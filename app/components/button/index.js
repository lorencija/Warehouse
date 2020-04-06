import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Style from './style.css';

export default function Button({ text, link, color }) {
  // {`Style.${color}`}
  const classes = cx(Style.button, {
    [Style.red]: color === 'red',
    [Style.green]: color === 'green',
    [Style.blue]: color === 'blue',
  });
  return (
    <div>
      <Link to={link} className={Style.button}>
        <Typography
          component="button"
          variant="button"
          align="center"
          className={classes}
        >
          {text}
        </Typography>
      </Link>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  color: PropTypes.string,
};
