import { useForm } from "react-hook-form";
import './TestOutlineForm.scss'
import Sider from "../../../components/Sider/Sider";

function TestOutlineForm() {
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
            <Sider></Sider>
            <div className="test-outline-form-content">
                <form onSubmit={handleSubmit(onSubmit)} className="test-outline-form">
                    <h1>Tạo khung đề thi</h1>
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
                    <input type="submit" />
                </form>
            </div>    
        </div> 
    )
}

export default TestOutlineForm;