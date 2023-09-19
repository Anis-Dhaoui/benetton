import React, { useEffect } from 'react';
import './style.login-page.css';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../state/store.state';
import { SubmitHandler, useForm } from 'react-hook-form';
import { handleLogin } from '../../state/actions-creators/login.actions-creators';
import { ErrorMessage } from "@hookform/error-message"

function LoginPage() {
    const spanElements = [];
    for (let i = 0; i < 200; i++) {
        spanElements.push(<span key={i}></span>);
    }

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { loading, user, errMsg, isAuthenticated } = useAppSelector(state => state.login);
    let { register, handleSubmit, watch, formState: { errors } } = useForm<ILoginReq>({ mode: 'all' });
    const onSubmit: SubmitHandler<ILoginReq> = (data) => {
        dispatch(handleLogin(data));
    }

    return (
        <section id='login-page'>
            {spanElements}
            <div className="signin">
                <div className="content">
                    <h2>Sign In</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="form">
                        <div className="inputBx">
                            <input type="text" required
                                {...register("username",
                                    {
                                        required: "Required field",
                                        minLength: {
                                            value: 4,
                                            message: "Username should have at least 4 caracters"
                                        },
                                        maxLength: {
                                            value: 10,
                                            message: "Username should have at most 10 caracters"
                                        }
                                    })
                                }
                                name="username"
                            />
                            <i>Username</i>
                            <i id='login-error-msg' className='text-danger my-0'><ErrorMessage errors={errors} name="username" /></i>

                        </div>

                        <div className="inputBx">
                            <input type="password" required
                                {...register("password",
                                    {
                                        required: "Required field"
                                    })
                                }
                                name="password"
                            />
                            <i>Password</i>
                            <i id='login-error-msg' className='text-danger my-0'><ErrorMessage errors={errors} name="password" /></i>
                        </div>
                        <div className="links">
                            <a href="#">Forgot Password</a>
                            <a href="#">Signup</a>
                        </div>
                        <div className="inputBx">
                            <input type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default LoginPage