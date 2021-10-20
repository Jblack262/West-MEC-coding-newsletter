import React from 'react';
import BlogPost from '../components/BlogPost'
import {blogPosts} from '../util/data';
import { Helmet } from 'react-helmet';

function Blog() {
    return (
            <div className="blogPage">
                <Helmet>
                    <title>Good News Blog</title>
                </Helmet>
                {blogPosts.reverse().map((post) => { //reversed so newest posts come first
                    return (
                        <BlogPost key={post.id} post={post}/>
                    )
                })}
            </div>
    )
}

export default Blog
