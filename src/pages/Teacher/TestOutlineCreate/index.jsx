import { useForm } from "react-hook-form";
import './TestOutlineCreate.scss'
import Sider from "../../../components/Sider/Sider";
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { FaStepBackward } from "react-icons/fa";
function TestOutlineCreate() {
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