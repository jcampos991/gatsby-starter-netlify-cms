import React from 'react'
import BlogRoll from './BlogRoll'

const PostList = ({
    feature3
}) => {
    return (
        <div className="interes anoth">
            <div className="container">
                <div className="titl">
                    <h2>{feature3.title}</h2>
                </div>
                <BlogRoll />
            </div>
        </div>
    )
}

export default PostList;