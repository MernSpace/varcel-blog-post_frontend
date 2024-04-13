import {create} from 'zustand';
import axios  from "axios";


const postStore = create((set)=>({

    postFormData:{title:"",image:"",description:"",catagoryID:"",adminEmail:""},
    postFormOnChange:(name,value)=>{
        set((state)=>({
            postFormData:{
                ...state.postFormData,
                [name]:value
            }
        }))
    },
    createPostRequest:async(postBody)=>{
        let res = await axios.post("http://localhost:5050/api/v1/create-post",postBody);
        return res.data['status']=== "success";
    },

    postList:[],

    postListRequest:async(pageNo, perPage, searchKeyword)=>{
        let res = await axios.get(`http://localhost:5050/api/v1/read-post/${pageNo}/${perPage}/${searchKeyword}`)
        set({postList:res.data['data'][0]['Rows']})
        return res.data['status'] === "success"
    },
    deletePostRequest:async(postID)=>{
        let res = await axios.post(`http://localhost:5050/api/v1/delete-post/${postID}`);
        return res.data['status'] === 'success'
    },
    updatePostRequest:async(postID, postBody)=>{
        let res = await axios.post(`http://localhost:5050/api/v1/update-post/${postID}`,postBody);
        return res.data['status']==='success'
    },
    postDetail:[],
    postDetailRequest:async(postID)=>{
        let res = await axios.get(`http://localhost:5050/api/v1/post-detail/${postID}`);
        if (res.data['data'].length>0){
            set({postDetail:res.data['data'][0]})
        }else{
            set({postDetail:[]})
        }
    },
    commentList:[],
    commentByPostRequest:async(postID)=>{
        let res = await axios.get(`http://localhost:5050/api/v1/comment-by-post/${postID}`);
        if(res.data['data'].length>0){
            set({commentList:res.data['data'][0]})
        }else{
            set({commentList:[]})
        }
    },
    totalPostRequest:async()=>{
        let res = await axios.get('http://localhost:5050/api/v1/total-post');
        return res.data['status'] === "success"
    }


}))


export default postStore;