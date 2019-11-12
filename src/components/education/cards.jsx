import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { dates, uni, major, descriptionEdu } from './dataEducation'
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

export default function EduCards() {
    const classes = useStyles()
    return (
        <Grid container spacing={7}>
            {dates.map((date, i) => {
                console.log(date)
                return (
                    <Grid item xs={6} style={{ display: 'inline-block' }}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography
                                    className={classes.title}
                                    color="textSecondary"
                                    gutterBottom
                                >
                                    {date}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {major[i]}
                                </Typography>
                                <Typography
                                    className={classes.pos}
                                    color="textSecondary"
                                >
                                    {uni[i]}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {descriptionEdu[i]}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
    )
}
