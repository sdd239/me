import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import myImage from '../../assets/img/Me.jpg'
import { makeStyles } from '@material-ui/styles'
import Chip from '@material-ui/core/Chip'
import Facebook from '@material-ui/icons/Facebook'
import Twitter from '@material-ui/icons/Twitter'
import LinkedIn from '@material-ui/icons/LinkedIn'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import CommentIcon from '@material-ui/icons/Comment'

const profileText = {
    birth: 'august 28, 1997',
    nationality: 'netherlands',
    language: 'dutch (native), english (fluent)',
    age: ' 21 years old',
    work: 's2m-group - System specialist',
    education: 'it & business'
}

const welcomeText = [
    'Hello, welcome to my website! My name is Seppe, I am born and raised in The Netherlands, Eindhoven. I lived in Eindhoven till I was 19 years old. I then decided to move to Los Angeles and study at Santa Monica College. If you would like to learn more about me, than you are on the right page!'
]

const useStyles = makeStyles({
    root: {
        padding: '0px',
        margin: '24px'
    },
    img: {
        width: '90%',
        height: '90%',
        padding: '0.5rem',
        paddingTop: '1.5rem'
    },
    title: {
        color: '#444444',
        margin: '0 0 5px'
    },
    subtitle: {
        color: '#ff5722'
    },
    quickInfo: {
        fontWeight: '550'
    },
    mediaChipIcon: {
        marginRight: '-19px'
    },
    mediaChip: {
        marginLeft: '10px',
        float: 'right',
        marginTop: '12rem'
    },
    lineTrueCountry: {
        textDecoration: 'line-through'
    }
})

const handleClickFacebook = () => {
    window.open('https://www.facebook.com/seppe.dalen', '_blank')
}

const handleClickTwitter = () => {
    window.open('https://twitter.com/SeppevanDalen?lang=nl', '_blank')
}

const handleClickLinkedin = () => {
    window.open(
        'https://www.linkedin.com/in/seppe-van-dalen-390a60149/',
        '_blank'
    )
}

const countriesLived = [
    'Eindhoven - Netherlands',
    'Los Angeles - US',
    'Barcelona - Spain',
    '?'
]

export const ProfilePaper = () => {
    const classes = useStyles()
    const keysProfileText = Object.keys(profileText)

    return (
        <Paper className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <img src={myImage} className={classes.img} alt="me" />
                </Grid>
                <Grid item xs={9}>
                    <Box p={2}>
                        <Typography variant="h4" className={classes.title}>
                            SEPPE VAN DALEN
                        </Typography>
                        <Typography variant="h5" className={classes.subtitle}>
                            Good to have your here!
                        </Typography>
                        <br />

                        <Box pb={4}>
                            <Typography variant="body1">
                                {welcomeText}
                            </Typography>
                        </Box>

                        <Grid container spacing={1}>
                            {keysProfileText.map(key => {
                                return (
                                    <Grid item xs={4}>
                                        <Typography
                                            variant="button"
                                            className={classes.quickInfo}
                                        >
                                            {profileText[key]}
                                        </Typography>
                                        <br />
                                        <Typography variant="overline">
                                            {key}
                                        </Typography>
                                    </Grid>
                                )
                            })}
                        </Grid>
                        <Grid container>
                            <Grid item xs={5}>
                                <List className={classes}>
                                    {countriesLived.map((country, i) => {
                                        const labelId = `checkbox-list-label-${country}`

                                        return (
                                            <ListItem
                                                key={country}
                                                role={undefined}
                                                dense
                                            >
                                                <ListItemIcon>
                                                    <Checkbox
                                                        edge="start"
                                                        checked={
                                                            i < 3 ? true : false
                                                        }
                                                        tabIndex={-1}
                                                        disableRipple
                                                        inputProps={{
                                                            'aria-labelledby': labelId
                                                        }}
                                                    />
                                                </ListItemIcon>

                                                <ListItemText
                                                    className={
                                                        i === 0 || i === 1
                                                            ? classes.lineTrueCountry
                                                            : ''
                                                    }
                                                    title={
                                                        i === 2
                                                            ? 'Currently living in Barcelona'
                                                            : i === 3
                                                            ? 'Where do I find my next challenge?'
                                                            : ''
                                                    }
                                                    id={labelId}
                                                    primary={country}
                                                />
                                                <ListItemSecondaryAction
                                                    title={
                                                        i === 2
                                                            ? 'Currently living in Barcelona'
                                                            : i === 3
                                                            ? 'Where do I find my next challenge?'
                                                            : ''
                                                    }
                                                >
                                                    <IconButton
                                                        edge="end"
                                                        aria-label="comments"
                                                    >
                                                        <LocationOnIcon />
                                                    </IconButton>
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                        )
                                    })}
                                </List>
                            </Grid>
                            <Grid item xs={7}>
                                <Box>
                                    <Chip
                                        className={classes.mediaChip}
                                        color="primary"
                                        onClick={handleClickFacebook}
                                        icon={
                                            <Facebook
                                                className={
                                                    classes.mediaChipIcon
                                                }
                                            />
                                        }
                                    />
                                    <Chip
                                        className={classes.mediaChip}
                                        color="primary"
                                        onClick={handleClickTwitter}
                                        icon={
                                            <Twitter
                                                className={
                                                    classes.mediaChipIcon
                                                }
                                            />
                                        }
                                    />
                                    <Chip
                                        className={classes.mediaChip}
                                        color="primary"
                                        onClick={handleClickLinkedin}
                                        icon={
                                            <LinkedIn
                                                className={
                                                    classes.mediaChipIcon
                                                }
                                            />
                                        }
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    )
}
