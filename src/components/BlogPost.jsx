import React, {useState} from 'react';
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
//C:\Users\ASUS ROG ZEPH\Documents\GitHub\West-MEC-coding-newsletter\src\Student_Portraits\jdSite.PNG
function BlogPost({post}) {
    const {month, year, imgs, title, content} = post;
    const [currentImg, setCurrentImg] = useState(0);
    const nextPic = () => {
        if (currentImg >= imgs.length - 1) {
            setCurrentImg(0)
        } else {
            setCurrentImg(currentImg + 1)
        }
    }
    const prevPic = () => {
        if (currentImg <= 0) {
            setCurrentImg(imgs.length - 1)
        } else {
            setCurrentImg(currentImg - 1)
        }
    }
    return (
        <div className="post">
        {imgs && <div className="carousel">
            {imgs.length > 1 && <button onClick={() => prevPic()}><GrFormPrevious /></button>}

            <div className="imgContainer">
                <img src={imgs[currentImg]} alt={title} />
            </div>


            {imgs.length > 1 && <button onClick={() => nextPic()}><GrFormNext /></button>}
        </div>}
        
        {imgs.length > 1 && <div className="navigation">
            {imgs.map((img, index) => {
                return <div className={"navigation-bar" + (currentImg === index ? " active" : "")} id={index} onClick={() => setCurrentImg(index)}/>
            })}
        </div>}

            <div className="text-content">
                <h3 className="date">{month}, {year}</h3>
                <h1 className="title">{title}</h1>
                <div className="content">
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogPost
