import React, { Component } from 'react'
import { Logo2 } from '../../../assets'
import './style.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { userDispatch, signInWithEmail } from '../../../config/Redux/Action'
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
const success = createMuiTheme({
    palette: {
        primary: green,
    },
});

class Login extends Component {
    state = {
        showPassword: false

    }

    setValue = (user) => {
        return this.props.changeValue(user)
    }

    signIn = (e) => {
        e.preventDefault()
        const user = {
            email: this.props.userEmail,
            password: this.props.userPassword
        }
        return this.props.signInEmail(user)
    }
    handleVisibility = () => {
        if (this.state.showPassword) {
            console.log(this.props.error)
            return this.setState({
                showPassword: false
            })
        }
        return this.setState({
            showPassword: true
        })
    }
    render() {
        return (
            <>
                <div className="login-wrapper">
                    <div className="row m-auto justify-content-center login-section">
                        {this.props.loading ? < LinearProgress className='progress' /> : ''}

                        <form className="col-md-5 m-auto login-form p-5 shadow" onSubmit={this.signIn}>
                            <img src={Logo2} alt="" width="200px" className="d-flex m-auto mt-2 mb-5" />
                            <ThemeProvider theme={success}>
                                <TextField
                                    error={this.props.error.value !== 'email' ? false : true}
                                    helperText={this.props.error.messageEmail}
                                    label="Email"
                                    fullWidth
                                    type='email'
                                    id="email" onChange={this.setValue}
                                    autoComplete='off'
                                />
                            </ThemeProvider>
                            <ThemeProvider theme={success}>
                                <FormControl fullWidth className='mt-4 mb-3'>
                                    <InputLabel htmlFor="password" error={this.props.error.value !== 'password' ? false : true}>Password</InputLabel>
                                    <Input
                                        error={this.props.error.value !== 'password' ? false : true}
                                        id="password"
                                        type={this.state.showPassword ? 'text' : 'password'}
                                        onChange={this.setValue}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton aria-label="toggle password visibility" onClick={this.handleVisibility}>
                                                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                    <FormHelperText error={this.props.error.value !== 'password' ? false : true}>{this.props.error.messagePassword}</FormHelperText>
                                </FormControl>
                            </ThemeProvider>
                            <Link to='/' className='forgot-password'>Lupa Password</Link>

                            {!this.props.loading ? <button className="btn btn-success" type="submit">Submit</button> : <button className="btn btn-success" disabled>Submit</button>}
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

const reduxState = (state) => ({
    userName: state.username,
    userPassword: state.password,
    userEmail: state.email,
    loading: state.loading,
    error: state.error
})

const reduxDispatch = dispatch => ({
    changeValue: (user) => dispatch(userDispatch(user)),
    signInEmail: (user) => dispatch(signInWithEmail(user))
}
)

export default connect(reduxState, reduxDispatch)(Login)