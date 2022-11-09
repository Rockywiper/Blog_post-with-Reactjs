import React from "react";

const Card = (props) => {
    return(
        <div className='ui card'>
            <div className='content'>
                <div className='header'>{props.name}</div>
                <div className='description'>{props.children}</div>
                <div className='ui button'>
                    <i className='add icon'></i>
                    Add Friend
                </div>
            </div>
        </div>
    )
}
export default Card