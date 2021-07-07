import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import { DashboardCard as Card } from '../../components'
import { User, Class, Leason } from '../../../assets'
import axios from 'axios'



const MainDashboard = () => {
    const [count, setCount] = useState(0)


    return (
        <>
            <Grid container spacing={7} direction='row'>
                <Grid item sm={4} xs={12} >
                    <Card count={count} title='User Active' image={User} color='green' />
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Card count={100} title='Class Registered' image={Class} color='red' />
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Card count={7888} title='Leason Created' image={Leason} color='blue' />
                </Grid>

            </Grid>
            <Grid container spacing={7} direction='row'>
                <Grid item sm={6} xs={12} >
                    <Card count={99} title='User Active' image={User} />
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Card count={100} title='Class Registered' image={Class} />

                </Grid>

            </Grid>
        </>
    )
}

export default MainDashboard