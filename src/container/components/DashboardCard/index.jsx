import React from 'react'
import { Paper, Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: 'Rubik'
    },
    iconThumbnail: {
        backgroundColor: 'green',

    },
    card: {
        height: '130px',
        paddingRight: '10px'
    },
    count: {
        fontSize: '40px'
    }

}))

const DashboardCard = (props) => {
    const classes = useStyles()

    const { count, title, image } = props
    return (

        <>
            <Paper >
                <Grid container className={classes.card}>
                    <Grid item container md={4} className={classes.iconThumbnail} justify="center"
                        alignItems="center">

                        <img src={image} alt={'logo ' + image} width='50px' height='50px' className={classes.thumbImage} />
                    </Grid>
                    <Grid item md={8} container
                        direction="column"
                        justify="center"
                        alignItems="flex-end">
                        <Grid item className={classes.count}>{count}</Grid>
                        <Grid item >{title}</Grid>
                        <Grid item ><Button size='small' color='primary' >View Data</Button></Grid>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}
export default DashboardCard