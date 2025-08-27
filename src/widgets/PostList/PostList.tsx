import { PostCard } from "../../entities/post/ui/PostCard";
import { withLoading } from '../../shared/lib/hoc/withLoading';
import { factPosts, Post } from '../../entities/post/model/mocks/types';
import { useCallback, useMemo, useState } from "react";
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength";
import { PostLengthFilter } from "../../features/PostLengthFilter/ui/PostLengthFilter";
import  styles  from "./PostList.module.scss";
import { useTheme } from "../../shared/lib/theme/useTheme";

interface PostListProps {
  posts: Post[];
}

export const PostList = (posts) => {
    const [minLength, setMinLength] = useState(0);
    const { theme } = useTheme();

    posts = factPosts;

    const filteredPosts = useMemo(
        () => filterByLength(posts, minLength),
        [posts, minLength]
    );

    const renderPostCard = useCallback((post: Post) => (
         

        <PostCard
            key={post.id}
            post={post}
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