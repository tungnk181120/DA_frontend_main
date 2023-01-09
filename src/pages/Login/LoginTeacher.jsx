import { useForm } from "react-hook-form";
import React, { useContext } from 'react';
import axios from 'redaxios';
import  { Navigate } from 'react-router-dom'
import './Login.scss'
// import { AuthContext } from '../../context/auth';
// import { useState } from 'react';
// import { teacherLogin } from '../../graphql-client/queries';
// import { useMutation } from '@apollo/client'
// import { Link, useHistory } from 'react-router-dom';

// import { NotificationManager} from 'react-notifications';

const api = 'http://localhost:5000/api/teacher'
function LoginTeacher(props) {
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
    //const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const onSubmit = (data) => {
		axios.post(api +'/login', {
			email: data.email,
			password: data.password
		  })
		  .then(function (response) {
			console.log(response)
			if (response.data['message'] == "Login thành công"){
				window.location.href = '/test-outline'
			}
			else{
				window.location.href = '/teacher-login'
			}
		  })
		  .catch(function (error) {
			console.log(error);
		  });
    };
    return (
        <>
    
    <section className="c1">
	<div className="screen">
		<div className="screen__content">
			<form className="login" onSubmit={handleSubmit(onSubmit)}>
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="email" className="login__input" placeholder="Email" name="email" {...register("email")}/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" placeholder="Mật khẩu"  name="password" {...register("password")}/>
				</div>
				<button type="submit" className="button login__submit">
					<span  className="button__text">Đăng nhập</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			<div className="social-login">
				<p>Bạn chưa có tài khoản giáo viên ? <a href="teacher-signup">Đăng kí ngay</a></p>
				
			</div>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</section>


        </>
    );
}

export default LoginTeacher;