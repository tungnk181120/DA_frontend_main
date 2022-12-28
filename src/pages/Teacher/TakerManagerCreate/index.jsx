import { useForm } from "react-hook-form";
import './TakerManagerCreate.scss'
import Sider from "../../../components/Sider/Sider";
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { FaStepBackward } from "react-icons/fa";
// import * as React from 'react';
// import Select from 'react-select'
// import makeAnimated from 'react-select/animated';
// import { colourOptions } from '../data';

// const animatedComponents = makeAnimated();

// function AnimatedMulti() {
//   return (
//     <Select
//       closeMenuOnSelect={false}
//       components={animatedComponents}
//       defaultValue={[colourOptions[4], colourOptions[5]]}
//       isMulti
//       options={colourOptions}
//     />
//   );
// }



function TakerManagerCreate() {
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
            <Sider taker_manager='true'></Sider>
            <div className="test-outline-form-content">
                <form onSubmit={handleSubmit(onSubmit)} className="test-outline-form">
                    <RouterLink to='/taker-manager'>
                        <span className="back_icon" >
                            <FaStepBackward />
                        </span>  
                    </RouterLink>   
                    <h2 className="test-outline-form-header">Tạo kíp thi</h2>
                    <label htmlFor="test_outline_name">Tên kíp thi</label>
                    <input placeholder="Tên khung đề" {...register("test_outline_name")} />

                    
                    <label htmlFor="test_outline_time">Thời gian thi</label>
                    <input 
                        placeholder="60"
                        type="number"
                        {...register("test_outline_time")}
                    />
                    
                    <label htmlFor="start">Thời gian bắt đầu:</label>
                    <input type="datetime-local" id="start" name="start"    
                        min="2023-01-01T00:00"
                        max="2023-12-31T23:59"
                        {...register("start")} ></input>
                    {/* <BasicDateTimePicker type="Thời gian bắt đầu"></BasicDateTimePicker> */}
                    <label htmlFor="end">Thời gian kết thúc:</label>
                    <input type="datetime-local" id="end" name="end"
                        min="2023-01-01T00:00"
                        max="2023-12-31T23:59"
                        {...register("end")}></input>

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
                    <label htmlFor="test_form">Danh sách đề</label>
                    <input
                        placeholder="Danh sách đề"
                        type="text"
                        {...register("test_form")}
                    />
                    <div style={{ color: "red" }}>
                        {Object.keys(errors).length > 0 &&
                        "There are errors, check your console."}
                    </div>

                    <label htmlFor="students">Danh sách học sinh</label>
                    <input 
                        placeholder="Danh sách học sinh"
                        type="text"
                        {...register("students")}
                    />

                    <input type="submit" />
                </form>
            </div>    
        </div> 
    )
}

export default TakerManagerCreate;