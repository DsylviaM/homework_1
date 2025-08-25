import PostCard from "../../entities/post/ui/PostCard";
import React from "react";
import  { factPosts } from "../../entities/post/model/types"


const PostList = () => {
    return (
        <div>
            {factPosts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}


export default PostList;