import React, { useState, useRef } from 'react'
import { Logo2 } from '../../../assets'
import './style.css'
import { Link, useHistory } from 'react-router-dom'
import { TextField, FormHelperText } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useAuth } from '../../../config/context/authContext'
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';


const useStyle = makeStyles({
    greenButton: {
        width: ' 100%',
        color: '#fff',
        backgroundColor: '#35974a'
    }
})




export default function Login() {
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [errors, setErrors] = useState({})
    const emailRef = useRef()
    const passwordRef = useRef()
    const { signIn } = useAuth()
    const history = useHistory()
    const classes = useStyle()


    const handleVisibility = () => {
        setShowPassword(prevVisible => prevVisible = !prevVisible)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        signIn(emailRef.current.value, passwordRef.current.value).then(() => {
            setLoading(false)
            history.push('/')
        }).catch((err) => {
            setLoading(false)
            console.log(err)
            switch (err.code) {
                case 'auth/invalid-email':
                    return setErrors({
                        type: 'email',
                        message: 'Email yang anda input tidak valid'
                    });

                case 'auth/wrong-password':
                    return setErrors({
                        type: 'password',
                        message: 'Password yang anda input tidak cocok'
                    });

                case 'auth/user-not-found':
                    return setErrors({
                        type: 'email',
                        message: 'Email yang anda input tidak terdaftar atau sudah terhapus'
                    });
                case 'auth/too-many-requests':
                    return setErrors({
                        type: 'all',
                        message: err.message
                    })
                default:
                    return setErrors({})
            }
        })

    }



    return (

        <>

            <div className="login-wrapper">
                <div className="row m-auto justify-content-center login-section">
                    {loading ? < LinearProgress className='progress' /> : ''}
                    <form className="col-md-5 m-auto login-form p-5 shadow" onSubmit={handleSubmit}>
                        <img src={Logo2} alt="" width="200px" className="d-flex m-auto mt-2 mb-5" />
                        {errors.type === 'all' ? <Alert severity="error">{errors.message}</Alert> : ''}
                        <TextField
                            required
                            label="Email"
                            className='mt-3'
                            error={errors.type === 'email' ? true : false}
                            helperText={errors.type === 'email' ? errors.message : ''}
                            fullWidth
                            type='email'
                            id="email"
                            autoComplete='off'
                            inputProps={{ 'ref': emailRef }}
                        />
                        <FormControl fullWidth className='mt-4 mb-3'>
                            <InputLabel htmlFor="password" error={errors.type === 'password' ? true : false}>Password</InputLabel>
                            <Input
                                required
                                inputProps={{ 'ref': passwordRef }}
                                error={errors.type === 'password' ? true : false}
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton aria-label="toggle password visibility" onClick={handleVisibility}>
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            <FormHelperText error={errors.type === 'password' ? true : false}>{errors.type === 'password' ? errors.message : ''}</FormHelperText>
                        </FormControl>
                        <Link to='/' className='forgot-password'>Lupa Password</Link>
                        <Button type='submit' className={classes.greenButton} variant='contained' color='primary' disabled={loading ? true : false}>Login</Button>
                    </form>
                </div>
            </div>


        </>
    )
}
