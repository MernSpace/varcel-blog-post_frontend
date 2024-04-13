import React, {useEffect} from 'react';
import MasterLayout from "../masterLayout/layout/MasterLayout.jsx";
import postStore from "../store/post/postStore.js";
import BlogDetail from "../component/blog/blog-detail.jsx";

const BlogDetailPage = () => {
    const {postDetailRequest,commentByPostRequest} = postStore()



    useEffect(() => {
        (async () => {
            const pathSegments = window.location.pathname.split('/');
            const id = pathSegments[pathSegments.length - 1];
            await postDetailRequest(id)
        })();
    }, [0]);

    return (
        <MasterLayout>
            <BlogDetail/>
        </MasterLayout>
    );
};

export default BlogDetailPage;