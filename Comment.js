import React from 'react';

const SingleComment = (props) =>
{
    return(
        <div className='ui comments'>
            <div className='comment'>
                <a href='/' className='avatar'>
                    <img src={props.pic} alt='profile picture'/>
                </a>
                {/* <div className='metadata'> */}
                    <div className='text'>{props.name}</div>
                    <div className='date'>{props.date}</div>
                    <div className='text'>{props.text}</div>
                {/* </div> */}
            </div>
        </div>  
    )  
}
export default SingleComment
