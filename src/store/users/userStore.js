import {create} from 'zustand';
import axios  from "axios";
import {getEmail, setEmail, unauthorized} from "../../helper/utility.js";
import Cookies from "js-cookie";
const UserStore=create((set)=>({

    isLogin:()=>{
        return !!Cookies.get('token');
    },

    LoginFormData:{email:"",password:""},
    LoginFormOnChange:(name,value)=>{
        set((state)=>({
            LoginFormData:{
                ...state.LoginFormData,
                [name]:value
            }
        }))
    },

    loginRequest:async(PostBody)=>{
        set({isFormSubmit:true})
        let res = await axios.post('https://localhost:5050/api/v1/Login',PostBody);
        return res.data['status'] === 'success'
        set({isFormSubmit:false})
    },
    userFormData:{email:"",password:"",name:"",phone:""},
    userFormOnChange:(name,value)=>{
        set((state)=>({
            userFormData:{
                ...state.userFormData,
                [name]:value
            }
        }))
    },
   createUserRequest:async(PostBody)=>{
        set({isFormSubmit:true})
        let res =  await axios.post('https://localhost:5050/api/v1/Registration',PostBody);
        return res.data['status'] === "success"
        set({isFormSubmit:false})
   },



userProfileUpdateRequest:async(PostBody)=>{
    try {
        set({ProfileDetails:null})
        let res=await axios.post(`https://localhost:5050/api/v1/ProfileUpdate`,PostBody);
        return res.data['status'] === "success";
    }catch (e) {
        unauthorized(e.response.status)
    }
},


   userLogoutRequest:async()=>{
    set({isFormSubmit:true})
    let res =  await axios.post('https://localhost:5050/api/v1/Logout');
    return res.data['status'] === "success"
    set({isFormSubmit:false})
},


EmailFormData:{email:""},
    EmailFormOnChange:(name,value)=>{
        set((state)=>({
            EmailFormData:{
                ...state.EmailFormData,
                [name]:value
            }
        }))
    },

    VerifyEmailRequest:async(email)=>{
        set({isFormSubmit:true})
        let res=await axios.get(`https://localhost:5050/api/v1//RecoverVerifyEmail/${email}`);
        set({isFormSubmit:false})
        return res.data['status'] === "success";
    },


    OTPFormData:{otp:""},
    OTPFormOnChange:(name,value)=>{
        set((state)=>({
            OTPFormData:{
                ...state.OTPFormData,
                [name]:value
            }
        }))
    },
    VerifyLoginRequest:async(otp)=>{
        set({isFormSubmit:true})
        let email= getEmail();
        let res=await axios.get(`https://localhost:5050/api/v1/VerifyLogin/${email}/${otp}`);
        set({isFormSubmit:false})
        return res.data['status'] === "success";
    },
    isFormSubmit:false,






    ProfileDetails:null,
    ProfileDetailsRequest:async()=>{
        try {
            let res=await axios.get(`https://localhost:5050/api/v1/ProfileDetails`);
            if(res.data['data'].length>0){
                set({ProfileDetails:res.data['data'][0]})
                set({ProfileForm:res.data['data'][0]})
            }else{
                set({ProfileDetails:[]})
            }
        }catch (e) {
            unauthorized(e.response.status)
        }
    },



}))

export default UserStore;