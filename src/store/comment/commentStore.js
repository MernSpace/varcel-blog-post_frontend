import {create} from 'zustand';
import axios  from "axios";


const commentStore = create((set)=>({
    commentFormData:{description:"",postID:"",userEmail:"",userName:''},
    commentFormOnChange:(name,value)=>{
        set((state)=>({
            commentFormData:{
                ...state.commentFormData,
                [name]:value
            }
        }))
    },

    createCommentRequest:async(postBody)=>{
        let res = await axios.post('http://localhost:5050/api/v1/create-comment',postBody);
        return res.data['status'] ==='success'
    },
    commentListRequest:async()=>{
        let res = await axios.get("http://localhost:5050/api/v1/read-comment/:pageNo/:perPage/:searchKeyword");
        return res.data['status'] === 'success'
    },
    commentUpdateRequest:async(commentID, postBody)=>{
        let res = await axios.post(`http://localhost:5050/api/v1/update-comment/${commentID}`,postBody);
        return res.data['status'] === 'success'
    },
    commentDeleteRequest:async(commentID)=>{
        let res = await axios.post(`http://localhost:5050/api/v1/delete-comment/${commentID}`);
        return res.data['status']==='success'
    },
    commentDetailRequest:async(commentID)=>{
        let res = await axios.get(`http://localhost:5050/api/v1/comment-detail/${commentID}`);
        if(res.data['data'].length>0){
            set({commentFormData:res.data['data'][0]})
        }else{
            return res.data['status'] === 'fail'
        }
    },
    totalCommentRequest:async()=>{
        let res = await axios.get('http://localhost:5050/api/v1/total-comment');
        return res.data['status'] === 'success'
    }

}))


export default commentStore;