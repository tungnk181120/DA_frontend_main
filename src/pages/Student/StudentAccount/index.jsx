import StudentSidebar from '../../../components/Student/StudentSidebar/StudentSidebar';
import Button from '@mui/material/Button';
import './StudentAccount.scss'
import React, { useState } from "react";
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { FaStepBackward } from "react-icons/fa";
import Select from 'react-select'
import { useForm, Controller } from "react-hook-form";

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div>
        {selectedImage && (
            <div>
                <img className='student_img' alt="not fount" src={URL.createObjectURL(selectedImage)} />
            <br />
                <button  style={{ display: 'none' }} className='btn-remove-img' onClick={()=>setSelectedImage(null)}>
                    Remove
                </button>
            </div>
        )}
        <input type="file"
            name="image"
            id='image'
            accept="image/*"
            style={{ display: 'none' }}
            onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
            }}
        />
        <label htmlFor="image">
            <Button variant="raised" component="span">
                Upload
            </Button>
        </label> 
    </div>
  );
};


function QuestionCreate() {
    const { register, control, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        if (data.question_content === "bill") {
            alert(JSON.stringify(data));
        } else {
            console.log(data.question_answer_true);
        }
    };
    console.log(errors);
    return (
            <form onSubmit={handleSubmit(onSubmit)} className="student-infor-form"> 
                <h2 className="student-infor-form-header">Thông tin cá nhân</h2>
                <label htmlFor="student_name">Họ và tên</label>
                <input {...register("student_name")} value="Nguyễn Kim Tùng"/>

                <label htmlFor="student_email">Email</label>
                <input 
                    value="tung.nk183661@gmail.com"
                    type="text"
                    {...register("student_email")}
                />
                <label htmlFor="student_phone">Số điện thoại</label>
                <input 
                    value="0012313131"
                    type="text"
                    {...register("student_phone")}
                />
                <input type="submit" className='btn-submit-update-info' value="Cập nhật thông tin"/>
            </form>
    )
}

function StudentAccount() {
    return (
        <div className="student-account">
            <StudentSidebar tai_khoan='true'></StudentSidebar>
            <div className="student-account-content">
                <div className='student-avatar'>
                    <UploadAndDisplayImage></UploadAndDisplayImage>
                </div>
                <div className="student-account-content-info">
                    <QuestionCreate></QuestionCreate>
                </div>             
                
            </div>
        </div>        
    )
}

export default StudentAccount;