import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { dates, company, position, description, website } from './dataWork'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'

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

export default function WorkCards({ windowWidth }) {
  const classes = useStyles()
  return (
    <Grid container spacing={7}>
      {dates.map((date, i) => {
        return (
          <Grid item xs={windowWidth < 560 ? 12 : 6} style={{ display: 'inline-block' }}>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {date}
                </Typography>
                <Typography variant="h5" component="h2">
                  {position[i]}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {company[i]}
                </Typography>
                <Typography variant="body2" component="p">
                  {description[i].split('\n').map((item, i) => (
                    <p
                      style={{
                        marginTop: '5px',
                        marginBottom: '0',
                        marginLeft: i === 0 ? '0px' : '15px'
                      }}
                      key={i}
                    >
                      {item}
                    </p>
                  ))}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={website[i]} target="_blank">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
}
