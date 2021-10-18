import React from 'react';
//C:\Users\ASUS ROG ZEPH\Documents\GitHub\West-MEC-coding-newsletter\src\Student_Portraits\jdSite.PNG
function BlogPost({post}) {
    const {month, year, img, title, content} = post;
    return (
        <div className="post">
        {img && <div className="imgContainer">
            <img src={img} alt={title} />
        </div>}
            <h3 className="date">{month}, {year}</h3>
            <h1 className="title">{title}</h1>
            <div className="content">
                <p>{content}</p>
            </div>
        </div>
    )
}

export default BlogPost
