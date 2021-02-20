import React, { useState, useRef } from 'react'
import { Logo2 } from '../../../assets'
import './style.css'
import { Link, useHistory } from 'react-router-dom'
import { TextField, FormHelperText } from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
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



const success = createMuiTheme({
    palette: {
        primary: green,
    },
});



export default function Login() {
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [errors, setErrors] = useState({})
    const emailRef = useRef()
    const passwordRef = useRef()
    const { signIn } = useAuth()
    const history = useHistory()
    const handleLoading = () => {
        setLoading(prevLoad => prevLoad = !prevLoad)
    }
    const handleVisibility = () => {
        setShowPassword(prevVisible => prevVisible = !prevVisible)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleLoading()
        signIn(emailRef.current.value, passwordRef.current.value).then(() => {
            handleLoading()
            history.push('/')
        }).catch((err) => {
            handleLoading()
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
                        <ThemeProvider theme={success}>
                            <TextField
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
                        </ThemeProvider>
                        <ThemeProvider theme={success}>
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
                        </ThemeProvider>
                        <Link to='/' className='forgot-password'>Lupa Password</Link>

                        {!loading ? <button className="btn btn-success" type="submit">Submit</button> : <button className="btn btn-success" disabled>Submit</button>}
                    </form>
                </div>
            </div>
        </>
    )
}
