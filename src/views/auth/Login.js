import React, {useState, useEffect} from 'react';
import {Link, useHistory} from "react-router-dom";
import mockApi from '../../@mock/mockApi';
import axios from 'axios'
import jwt_decode from "jwt-decode";

import setAuthToken from 'utils/setAuthToken';

export default function Login() {
    const [userData, setUserData] = useState({email: "", password: "", remember: false});

    const history = useHistory()

    useEffect(() => {
      if (localStorage.jwtToken) history.push('/board')
        // Fetch data using the mock Axios instance
        // mockApi.get('/items').then(response => {
        //     alert(response)
        //     console.log(response.data)
        // }).catch(error => {
        //     console.error('Error fetching data:', error);
        // });
    }, []);

    const onSubmit = e => {
        e.preventDefault();
        mockApi.post("/api/users/login", userData).then(res => {
            // Save to localStorage

            // Set token to localStorage
            const {token} = res.data;
            localStorage.setItem("jwtToken", token);
                // Set token to Auth header
                setAuthToken(token);
                // Decode token to get user data
                const decoded = jwt_decode(token);
                // Set current user
                history.push('/board')

        }).catch(err => {
          alert("login failed")
        });
    };

    return (
        <>
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                            <div className="rounded-t mb-0 px-6 py-6">
                                <div className="text-center mb-3">
                                    <h6 className="text-blueGray-500 text-sm font-bold">
                                        Sign in with
                                    </h6>
                                </div>
                                <div className="btn-wrapper text-center">
                                    <button className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
                                        <img alt="..." className="w-5 mr-1"
                                            src={
                                                require("assets/img/github.svg").default
                                            }/>
                                        Github
                                    </button>
                                    <button className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
                                        <img alt="..." className="w-5 mr-1"
                                            src={
                                                require("assets/img/google.svg").default
                                            }/>
                                        Google
                                    </button>
                                </div>
                                <hr className="mt-6 border-b-1 border-blueGray-300"/>
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <div className="text-blueGray-400 text-center mb-3 font-bold">
                                    <small>Or sign in with credentials</small>
                                </div>
                                <form noValidate
                                    onSubmit={onSubmit}>
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                            Email
                                        </label>
                                        <input type="email" id="email"
                                            onChange={
                                                (e) => {
                                                    setUserData({
                                                        ...userData,
                                                        email: e.target.value
                                                    })
                                                }
                                            }
                                            value={
                                                userData.email
                                            }
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Email"/>
                                    </div>

                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                        Password
                                    </label>
                                    <input type="password" id="password"
                                        onChange={
                                            (e) => {
                                                setUserData({
                                                    ...userData,
                                                    password: e.target.value
                                                })
                                            }
                                        }
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Password"/>
                                </div>
                            <div>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input id="remember" type="checkbox"
                                        checked={
                                            userData.remember
                                        }
                                        onChange={
                                            () => {
                                                setUserData({
                                                    ...userData,
                                                    remember: !userData.remember
                                                })
                                            }
                                        }
                                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"/>
                                    <span className="ml-2 text-sm font-semibold text-blueGray-600">
                                        Remember me
                                    </span>
                                </label>
                            </div>

                            <div className="text-center mt-6">
                                <button className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="submit">
                                    Sign In
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex flex-wrap mt-6 relative">
                    <div className="w-1/2">
                        <a href="#pablo"
                            onClick={
                                (e) => e.preventDefault()
                            }
                            className="text-blueGray-200">
                            <small>Forgot password?</small>
                        </a>
                    </div>
                    <div className="w-1/2 text-right">
                        <Link to="/auth/register" className="text-blueGray-200">
                            <small>Create new account</small>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
    );
}
