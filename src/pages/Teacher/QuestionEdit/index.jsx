import Sider from "../../../components/Sider/Sider";
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { FaStepBackward } from "react-icons/fa";

import React from 'react'
import Select from 'react-select'
import { useForm, Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";

// const options = [
//   { value: '1', label: 'Đề số 1' },
//   { value: '2', label: 'Đề số 2' },
//   { value: '3', label: 'Đề số 3' },
//   { value: '4', label: 'Đề số 4' }
// ]

// const SelectOne = () => (
//   <Select options={options} />
// )

function QuestionEdit() {
    const { register, control, handleSubmit, watch, formState: { errors } } = useForm();
    //const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const onSubmit = (data) => {
        //await sleep(2000);
        if (data.question_content === "bill") {
            alert(JSON.stringify(data));
        } else {
            console.log(data.question_answer_true);
        }
    };
    console.log(errors);
    return (
        <div className="test-outline-form-div">
            <Sider questions='true'></Sider>
            <div className="test-outline-form-content">
                <form onSubmit={handleSubmit(onSubmit)} className="test-outline-form">
                    <RouterLink to='/questions'>
                        <span className="back_icon" >
                            <FaStepBackward />
                        </span>  
                    </RouterLink>   
                    <h2 className="test-outline-form-header">Chỉnh sửa câu hỏi</h2>
                    <label htmlFor="question_content">Câu hỏi</label>
                    <input placeholder="Nội dung câu hỏi" {...register("question_content")} />

                    <label htmlFor="question_answer_1">Đáp án 1</label>
                    <input 
                        placeholder="Đáp án 1"
                        type="text"
                        {...register("question_answer_1")}
                    />
                    <label htmlFor="question_answer_2">Đáp án 2</label>
                    <input 
                        placeholder="Đáp án 2"
                        type="text"
                        {...register("question_answer_2")}
                    />
                    <label htmlFor="question_answer_3">Đáp án 3</label>
                    <input 
                        placeholder="Đáp án 3"
                        type="text"
                        {...register("question_answer_3")}
                    />
                    <label htmlFor="question_answer_4">Đáp án 4</label>
                    <input 
                        placeholder="Đáp án 4"
                        type="text"
                        {...register("question_answer_4")}
                    />
                    
                    <label htmlFor="question_answer_true">Đáp án đúng</label>
                    <Controller
                        name="question_answer_true"
                        control={control}
                        render={({ field }) => <Select 
                        {...field} 
                        options={[
                            { value: '1', label: 'Đề số 1' },
                            { value: '2', label: 'Đề số 2' },
                            { value: '3', label: 'Đề số 3' },
                            { value: '4', label: 'Đề số 4' }
                        ]} 
                        />}
                    />
                    {/* <SelectOne></SelectOne> */}
                    {/* <input 
                        placeholder="1"
                        type="number"
                        min="1"
                        max="4"
                        {...register("question_answer_true", { min: 1, max: 4 })}
                    /> */}
                    <input type="submit" />
                </form>
            </div>    
        </div> 
    )
}

export default QuestionEdit;