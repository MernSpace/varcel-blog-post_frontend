import React, {useEffect} from 'react';
import MasterLayout from "../masterLayout/layout/MasterLayout.jsx";
import Blog from "../component/blog/blog.jsx";
import postStore from "../store/post/postStore.js";

const BolgPage = () => {
    const {postListRequest} = postStore()


    useEffect(() => {
        (async ()=>{
         await postListRequest(1,10,0)

        })()
    }, [0]);
    return (
        <MasterLayout>
            <Blog/>
            
        </MasterLayout>
    );
};

export default BolgPage;