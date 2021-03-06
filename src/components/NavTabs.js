import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Bio from './Bio'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: theme.palette.background.paper,
//     width: 500,
//   },
// }));

const NavTabs =() => {
  // const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div id='NavTabs' >
      <AppBar className='app-bar' position="static" >
        <Tabs
          value={value}
          onChange={handleChange}
          className='tabs'
      
          variant="scrollable"
          scrollButtons="on"
          aria-label="scrollable auto tabs example"
        >
          <Tab className='tab' icon={<p><i className="fas fa-user "></i> Bio</p>} {...a11yProps(0)} />
          <Tab className='tab' icon={<p><i className="fas fa-tools "></i> Skills</p>} {...a11yProps(1)} />
          <Tab className='tab' icon={<p><i className="fas fa-briefcase "></i> Projects</p>} {...a11yProps(2)} />
          <Tab className='tab' icon={<p><i className="fas fa-briefcase "></i> Contact</p>} {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Bio />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Skills />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Projects />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Contact />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}


export default NavTabs