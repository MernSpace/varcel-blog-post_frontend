import React, {useEffect} from 'react';
import commentStore from "../../store/comment/commentStore.js";
import {useNavigate} from "react-router-dom";

const CommentFrom = () => {
    const navigate =  useNavigate()
    const {commentFormData,commentFormOnChange,createCommentRequest} = commentStore();
    useEffect(() => {
        (async () => {
            const pathSegments = window.location.pathname.split('/');
            const id = pathSegments[pathSegments.length - 1];
           commentFormData.postID = id
        })();
    }, [0]);

    const onSubmitBtnClick =async ()=>{
        await createCommentRequest(commentFormData);
       navigate(`/blog`)

    }
    return (
        <div className='mt-[60px]'>
            <div >
                <h2 className='text-[22px] font-semibold text-white'>Post a Comment</h2>
                <p className='mt-[2px] text-text'>Your email address will not be published. Required fields are marked *</p>
                <div className='mt-[20px]'>
                    <div className='grid w-full gap-[20px] md:flex'>
                        <div className='md:w-1/2'>
                            <input value={commentFormData.userName} onChange={(e)=>{ commentFormOnChange('userName',e.target.value)}}
                                   className="block w-full rounded-lg border  bg-transparent px-[15px] py-[10px]  text-white focus:outline-none "
                                placeholder="Full Name:" type="text"/>
                        </div>
                        <div className='md:w-1/2'>
                            <input value={commentFormData.userEmail} onChange={(e)=>{ commentFormOnChange('userEmail',e.target.value)}}
                                className="block w-full rounded-lg border  bg-transparent px-[15px] py-[10px]  text-white focus:outline-none "
                                placeholder="Your Email:" type="email"/>
                        </div>
                    </div>
                    <div className='mt-[20px]'>
                        <textarea placeholder="Write your Comment here:" name="" id="" cols="20" rows="10" value={commentFormData.description} onChange={(e)=>{ commentFormOnChange('description',e.target.value)}}
                                  className="block w-full rounded-lg border  bg-transparent px-[15px] py-[10px]  text-white focus:outline-none "></textarea>
                    </div>
                    <div className='mb-[30px] mt-[30px]'>
                        <button onClick={onSubmitBtnClick} className="btn block" type="submit">Post Comment</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CommentFrom;