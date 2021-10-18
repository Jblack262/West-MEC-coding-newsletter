import React from 'react';
import BlogPost from '../components/BlogPost'
import {blogPosts} from '../util/data';

function Blog() {
    return (
        <div className="blogPage">
            {blogPosts.reverse().map((post) => { //reversed so newest posts come first
                return (
                    <BlogPost key={post.id} post={post}/>
                )
            })}
        </div>
    )
}

export default Blog
