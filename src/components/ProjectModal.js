// React
import React, { useState } from 'react';

// Proptypes
import PropTypes from 'prop-types';
// Keeping this here becasue I copied the staright from material ui
import { makeStyles } from '@material-ui/core/styles';
// Message From Components

import {
  Modal,
  Button,
  Backdrop
} from '@material-ui/core';
// Modal copied staright from from Material UI
import { useSpring, animated } from 'react-spring'; // web.cjs is required for IE 11 support

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    maxWidth: 500,
    minWidth: 320,
    maxHeight: 500,
    overflowY: 'hidden',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
 
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

const ProjectModal = ({ name, stack, desc, url, git}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  

  const handleOpen = (e) => {
    e.preventDefault();
    
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let messageButton = (
      <>
        <Button
          className={` project-button `}
          variant="contained"
          color="primary"
          onClick={handleOpen}
        >
          Learn More
        </Button>
      </>
    );
  

  return (
    <>
      {messageButton}
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
           <div className="modal-title">
           <h2 id="spring-modal-title">{name}</h2>
            <p
          id='close-button'
          
          onClick={handleClose}
        >
          X
        </p>
           </div>
        <hr />
        <h3>Stack:</h3>
            <p>{stack}</p>
      <h3>Description:</h3>
      <p>{desc}</p>
      <div id="LiveLinks">
      <a className='url' href={`${url}`} target='a_blank'><i className="fas fa-globe"></i>      Visit Live</a>
      <a className='git' href={`${git}`} target='a_blank'><i className="fab fa-github"></i> GitHub Repo</a>
      </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default ProjectModal;
