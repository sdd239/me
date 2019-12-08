import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import ContactMail from '@material-ui/icons/ContactMail'
import SentimentVerySatisfied from '@material-ui/icons/SentimentVerySatisfied'

import Code from '@material-ui/icons/Code'
import MenuBook from '@material-ui/icons/MenuBook'
import Work from '@material-ui/icons/Work'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import SwipeableViews from 'react-swipeable-views'

import { ProfilePaper } from '../welcome/ProfilePaper'
import EduCards from '../education/cards'
import EducationSection from '../work/index'
import AboutMeSection from '../aboutMe/index'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  swipView: {
    overflow: 'none'
  }
}))

export default function ScrollableTabsButtonPrevent() {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth)
      console.log(windowWidth)
    })
  }, [windowWidth])

  const theme = useTheme()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          variant="fullWidth"
          onChange={handleChange}
          scrollButtons="off"
          aria-label="scrollable prevent tabs example"
        >
          <Tab
            icon={<Code />}
            label={windowWidth < 600 ? '' : 'Welcome'}
            aria-label="Welcome"
            {...a11yProps(0)}
          />
          <Tab
            icon={<MenuBook />}
            label={windowWidth < 600 ? '' : 'Education'}
            aria-label="Education"
            {...a11yProps(1)}
          />
          <Tab
            icon={<Work />}
            label={windowWidth < 600 ? '' : 'Work Experience'}
            aria-label="Work experience"
            {...a11yProps(2)}
          />
          <Tab
            icon={<SentimentVerySatisfied />}
            label={windowWidth < 600 ? '' : 'About me'}
            aria-label="About me"
            {...a11yProps(3)}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChange}
        className={classes.swipView}
      >
        <TabPanel value={value} index={0}>
          <ProfilePaper windowWidth={windowWidth} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <EduCards windowWidth={windowWidth} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <EducationSection windowWidth={windowWidth} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <AboutMeSection windowWidth={windowWidth} />
        </TabPanel>
      </SwipeableViews>
    </div>
  )
}
