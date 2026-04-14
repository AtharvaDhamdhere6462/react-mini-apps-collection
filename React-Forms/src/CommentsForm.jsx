import { useState } from "react";
import {useFormik} from "formik";

const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'Required';
   } 
 
   return errors;
 };


export default function CommentForm ({addNewComment}){
    // let [formData,setFormData] = useState({
    //     username : "",
    //     remark : "",
    //     rating : ""
    // });
    const formik = useFormik({
     initialValues: {
       username: '',
       remark: '',
       rating: '',
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });

    // let handleInputChange=(event)=>{
    //     setFormData((prevData)=>{
    //         return{
    //             ...prevData,
    //             [event.target.name] : event.target.value
    //         };
    //     });
    // }

    // let handleSubmit=(event)=>{
    //     addNewComment(formData);
    //     event.preventDefault();
    //     setFormData({
    //         username : "",
    //         remark : "",
    //         rating : ""
    //     });
    // }

    return (
        <div>
            <h4>Give a Comment !!</h4>
            <form action="" onSubmit={formik.handleSubmit}>
                <label htmlFor="username">username:  </label>
                <input type="text" placeholder="username" name="username" id="username" value={formik.values.username} onChange={formik.handleChange} />
                {formik.errors.username ? <div style={{color:"red"}}>{formik.errors.username}</div> : null  }
                <br /><br />


                <label htmlFor="remark">Remark:  </label>
                <textarea name="remark" id="remark" value={formik.values.remark} placeholder="Add Remark" onChange={formik.handleChange}></textarea>
                <br /><br />


                <label htmlFor="rating">Rating:  </label>
                <input type="number" name="rating" id="rating" placeholder="Rating" min={1} max={5} value={formik.values.rating} onChange={formik.handleChange} />
                <br /><br />


                <button type="submit">Add Comment</button>
            </form>
        </div>
    )
}