import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { titles, description, moreAboutMe } from './constantsAboutMe'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
    card: {
        minWidth: 275
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)'
    },
    title: {
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    }
})

export default function AboutMeCards() {
    const classes = useStyles()
    return (
        <Grid container spacing={7}>
            {titles.map((title, i) => {
                return (
                    <Grid
                        item
                        xs={6}
                        style={{
                            display: 'inline-block',
                            padding: '15px 28px 15px 28px'
                        }}
                    >
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {title}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {description[i]}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )
            })}

            <Grid item xs={12} style={{ display: 'inline-block' }}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            MORE ABOUT ME
                        </Typography>
                        <Typography variant="body2" component="p">
                            {moreAboutMe.split('\n').map((text, i) => (
                                <p key={i}>{text}</p>
                            ))}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
