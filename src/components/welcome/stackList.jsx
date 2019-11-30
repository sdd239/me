import React from 'react'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import CodeIcon from '@material-ui/icons/Code'
import Rating from '@material-ui/lab/Rating'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'

const fullStack = [
  { name: 'MERN', rating: 2, comment: 'Mongoose, Express, React, Nodejs' },
  { name: 'ReactJs', rating: 2.5, comment: 'Including Redux and hooks' },
  { name: 'NodeJs', rating: 2, comment: 'Used in MERN app' },
  { name: 'Material-ui', rating: 2.5, comment: 'Work very well with React' },
  { name: 'JavaScript', rating: 2.5, comment: 'Strong knowledge but can alway improve' },
  { name: 'Electron', rating: 2, comment: 'Developed Native app' },
  { name: 'Git', rating: 2.5, comment: 'Know basics and experience with Version control' },
  { name: 'HTML / CSS', rating: 2.5, comment: 'Strong knowledge but can alway improve' }
]

const useStyles = makeStyles({
  root: {
    padding: '0px',
    margin: '24px',
    marginTop: 0
  },
  noMargin: {
    margin: 0
  },
  noPadding: {
    padding: 0
  },
  scroll: {
    maxHeight: '15rem',
    overflow: 'scroll',
    overflowX: 'hidden'
  }
})

const StackList = ({ windowWidth }) => {
  const classes = useStyles()

  return (
    <Grid container className={classes.scroll} spacing={2}>
      {fullStack.map(sta => (
        <Grid
          item
          className={classes.noPadding}
          xs={windowWidth > 985 ? 4 : windowWidth < 490 ? 12 : 6}
        >
          <ListItem dense>
            <ListItemAvatar>
              <Avatar>
                <CodeIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={sta.name}
              secondary={
                <>
                  <p className={classes.noMargin}>{sta.comment}</p>
                  <Rating
                    name="read-only"
                    precision={0.5}
                    size="small"
                    value={sta.rating}
                    max={3}
                    readOnly
                  />
                </>
              }
            />
          </ListItem>
        </Grid>
      ))}
    </Grid>
  )
}

export default StackList
