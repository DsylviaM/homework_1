import PostCard from "../../entities/post/ui/PostCard";
import React from "react";

export type Post = {
    id: number
    title: string
    body: string
}

const factPosts: Post[] = [
    { id: 1, title: 'Post 1', body: 'Осьминоги имеют три сердца – два перекачивают кровь к жабрам, а третье гонит её по телу. Когда осьминог плывёт, главное сердце останавливается!' },
    { id: 2, title: 'Post 2', body: 'Сердце голубого кита размером с небольшой автомобиль (до 600 кг), а язык весит как слон.' },
    { id: 3, title: 'Post 3', body: 'Таракан может прожить без головы неделю – он дышит через дыхальца по всему телу.' },
    { id: 4, title: 'Post 4', body: 'Белки не помнят, где прячут орехи – благодаря этому они случайно сажают тысячи деревьев.' },
]

const PostList = () => {
    return (
        <>
            {factPosts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </>
    );
}

export default PostList;