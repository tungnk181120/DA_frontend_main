import axios from 'redaxios';
import { useForm } from "react-hook-form";
import React, { useContext } from 'react';
// import { NotificationManager} from 'react-notifications';
import './Login.scss'

const api = 'http://localhost:5000/api/teacher'
function SignupTeacher(props) {
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
    //const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const onSubmit = (data) => {
		axios.post(api +'/register', {
			email: data.email,
			name: data.name,
			password: data.password,
			phone: data.phone
		  })
		  .then(function (response) {
			console.log(response)
			if (response.message == "Login thành công"){
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
					<input type="text" className="login__input" placeholder="Họ tên" name="name" {...register("name")}
									/>
				</div>
				<div className="login__field">
				<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" placeholder="Email" name="email" {...register("email")}
									/>
				</div>
				<div className="login__field">
				<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" placeholder="Số điện thoại" name="phone" {...register("phone")}
									/>
				</div>
                <div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" placeholder="Mật khẩu" name="password" {...register("password")}
									/>
				</div>
				<button className="button login__submit" type="submit">
					<span className="button__text">Đăng kí</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			
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

export default SignupTeacher;