import { PostCard } from "../../entities/post/ui/PostCard";
import { withLoading } from '../../shared/lib/hoc/withLoading';
import { useCallback, useMemo, useState } from "react";
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength";
import { PostLengthFilter } from "../../features/PostLengthFilter/ui/PostLengthFilter";
import  styles  from "./PostList.module.scss";
import { Post } from "../../features/PostList/model/types/post";

// interface PostListProps {
//   posts: Post[];
// }

export const PostList = (posts) => {
    const [minLength, setMinLength] = useState(0);

    const filteredPosts = useMemo(
        () => filterByLength(posts.posts, minLength),
        [posts, minLength]
    );

    const renderPostCard = useCallback((posts: Post) => (
        <PostCard
            key={posts.id}
            post={posts}
        />
    ), []);
    
    return (
        <div className={styles.postList}>
            <PostLengthFilter
                minLength={minLength}
                onLengthChange={setMinLength}
            />
            {filteredPosts.map(renderPostCard)}
        </div>
    );
}

export default withLoading(PostList);