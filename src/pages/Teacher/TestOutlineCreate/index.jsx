import { useForm } from "react-hook-form";
import './TestOutlineCreate.scss'
import Sider from "../../../components/Sider/Sider";
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { FaStepBackward } from "react-icons/fa";

import axios from 'redaxios';
const api = 'http://localhost:5000/api/teacher'

function TestOutlineCreate() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = (data) => {
	// 	axios.post(api +'/test-outline', {
    //         test_outline_name : data.test_outline_name,
    //         test_outline_time : data.test_outline_time,
    //         subject : data.subject,
    //         topic1 : data.topic1,
    //         n_topic1 : data.n_topic1,
    //         topic2 : data.topic2,
    //         n_topic2 : data.n_topic2,
	// 	  }, {
    //         headers: {
    //           'Content-Type': 'application/json'
    //         }
    //       },
    //         { withCredentials: true }
    //     )
    //     .then(function (response) {
    //     console.log(response)
    //     if (response.message == "Login thành công"){
    //         window.location.href = '/teacher-login'
    //     }
    //     })
    //     .catch(function (error) {
    //     console.log(error);
    //     });
    // };
    const onSubmit = (data) => {
		axios.get(api +'/getcookie', {}, )
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
        console.log(error);
        });
    };
    console.log(errors);
    return (
        <div className="test-outline-form-div">
            <Sider test_outline='true'></Sider>
            <div className="test-outline-form-content">
                <form onSubmit={handleSubmit(onSubmit)} className="test-outline-form">
                    <RouterLink to='/test-outline'>
                        <span className="back_icon" >
                            <FaStepBackward />
                        </span>  
                    </RouterLink>   
                    <h2 className="test-outline-form-header">Tạo khung đề thi</h2>
                    <label htmlFor="test_outline_name">Tên khung đề</label>
                    <input placeholder="Tên khung đề" {...register("test_outline_name")} />

                    <label htmlFor="test_outline_time">Thời gian thi</label>
                    <input 
                        placeholder="60"
                        type="number"
                        {...register("test_outline_time")}
                    />

                    <label htmlFor="subject">Môn học</label>
                    <input
                        placeholder="môn học"
                        type="text"
                        {...register("subject")}
                    />

                    <div style={{ color: "red" }}>
                        {Object.keys(errors).length > 0 &&
                        "There are errors, check your console."}
                    </div>
                    {/* <div className="test-outline-topic-div"> */}
                        <label htmlFor="topic1">Chủ đề 1</label>
                        <input
                            placeholder="Chủ đề 1"
                            type="text"
                            {...register("topic1")}
                        />
                        <div style={{ color: "red" }}>
                            {Object.keys(errors).length > 0 &&
                            "There are errors, check your console."}
                        </div>

                        <label htmlFor="n_topic1">Số câu hỏi chủ đề 1</label>
                        <input 
                            placeholder="60"
                            type="number"
                            {...register("n_topic1")}
                        />
                    {/* </div> */}
                    <label htmlFor="topic2">Chủ đề 2</label>
                    <input
                        placeholder="Chủ đề 1"
                        type="text"
                        {...register("topic2")}
                    />
                    <div style={{ color: "red" }}>
                        {Object.keys(errors).length > 0 &&
                        "There are errors, check your console."}
                    </div>

                    <label htmlFor="n_topic2">Số câu hỏi chủ đề 2</label>
                    <input 
                        placeholder="60"
                        type="number"
                        {...register("n_topic2")}
                    />

                    <input type="submit" />
                </form>
            </div>    
        </div> 
    )
}

export default TestOutlineCreate;