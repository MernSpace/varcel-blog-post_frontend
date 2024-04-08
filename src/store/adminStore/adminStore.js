import {create} from 'zustand';
import axios  from "axios";
import {getEmail, setEmail, unauthorized} from "../../helper/utility";
import Cookies from "js-cookie";
const AdminStore=create((set)=>({

    isLogin:()=>{
        return !!Cookies.get('token');
    },

    AdminLoginFormData:{email:"",password:""},
    AdminLoginFormOnChange:(name,value)=>{
        set((state)=>({
            AdminLoginFormData:{
                ...state.AdminLoginFormData,
                [name]:value
            }
        }))
    },

    AdminLoginRequest:async(postBody)=>{
        set({isFormSubmit:true})
        let res=await axios.post(`http://localhost:5050/api/v1/Admin-Login`,postBody);
        set({isFormSubmit:false})
        return res.data['status'] === "success";
    },



    AdminOTPRequest:async(email)=>{
        set({isFormSubmit:true})
        let res=await axios.get(`http://localhost:5050/api/v1/Admin-RecoverVerifyEmail/${email}`);
        setEmail(email);
        set({isFormSubmit:false})
        return res.data['status'] === "success";
    },


    AdminLogoutRequest:async()=>{
        set({isFormSubmit:true})
        let res=await axios.get(`http://localhost:5050/api/v1/Admin-logout`);
        set({isFormSubmit:false})
        return res.data['status'] === "success";
    },



    AdminOTPFormData:{otp:""},
    AdminOTPFormOnChange:(name,value)=>{
        set((state)=>({
            AdminOTPFormData:{
                ...state.AdminOTPFormData,
                [name]:value
            }
        }))
    },
    VerifyAdminLoginRequest:async(otp)=>{
        set({isFormSubmit:true})
        let email= getEmail();
        let res=await axios.get(`http://localhost:5050/api/v1/Admin-RecoverVerifyOTP/${email}/${otp}`);
        set({isFormSubmit:false})
        return res.data['status'] === "success";
    },
    isFormSubmit:false,






    AdminProfileForm:{name:"",email:"",mobile:"",password:"",photo:""},
    AdminProfileFormChange:(name,value)=>{
        set((state)=>({
            AdminProfileForm:{
                ...state.AdminProfileForm,
                [name]:value
            }
        }))
    },


    AdminProfileDetails:null,
    AdminProfileDetailsRequest:async()=>{
        try {
            let res=await axios.get(`http://localhost:5050/api/v1/Admin-ProfileDetails`);
            if(res.data['data'].length>0){
                set({AdminProfileDetails:res.data['data'][0]})
                set({AdminProfileForm:res.data['data'][0]})
            }else{
                set({AdminProfileDetails:[]})
            }
        }catch (e) {
            unauthorized(e.response.status)
        }
    },

    AdminProfileSaveRequest:async(PostBody)=>{
        try {
            set({AdminProfileDetails:null})
            let res=await axios.post(`http://localhost:5050/api/v1/Admin-ProfileUpdate`,PostBody);
            return res.data['status'] === "success";
        }catch (e) {
            unauthorized(e.response.status)
        }
    }


}))

export default AdminStore;