import { useForm } from "react-hook-form";
import './TestFormCreate.scss'
import Sider from "../../../components/Sider/Sider";
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { FaStepBackward } from "react-icons/fa";
function TestFormCreate() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    //const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const onSubmit = (data) => {
        //await sleep(2000);
        if (data.test_outline_name === "bill") {
            alert(JSON.stringify(data));
        } else {
            console.log("Hi");
        }
    };
    console.log(errors);
    return (
        <div className="test-outline-form-div">
            <Sider test_form='true'></Sider>
            <div className="test-outline-form-content">
                <form onSubmit={handleSubmit(onSubmit)} className="test-outline-form">
                    <RouterLink to='/test-form'>
                        <span className="back_icon" >
                            <FaStepBackward />
                        </span>  
                    </RouterLink>   
                    <h2 className="test-outline-form-header">Tạo đề thi</h2>
                    <label htmlFor="test_form_name">Tạo đề thi</label>
                    <input placeholder="Tên đề thi" {...register("test_form_name")} />

                    <label htmlFor="test_outline">Khung đề</label>
                    <input
                        placeholder="Khung đề"
                        type="text"
                        {...register("test_outline")}
                    />
                    <div style={{ color: "red" }}>
                        {Object.keys(errors).length > 0 &&
                        "There are errors, check your console."}
                    </div>

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


                    <input type="submit" />
                </form>
            </div>    
        </div> 
    )
}

export default TestFormCreate;