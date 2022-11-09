import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './Comment';
import img1 from './Images/image1.jpeg';
import img2 from './Images/gojo.jpg';
import Ucard from './usercard';

//creating function
const App = () => {
    return(

        <div className='ui comments'>
            <Ucard name='Prasanth'>
                <SingleComment  
                date='3:00 pm' 
                text='I am off to VR mall' 
                pic={img1}/>
            </Ucard>

            {/* name='Prasanth' */}

            <Ucard name='Gojo'>
                <SingleComment  
                date='6:30 pm' 
                text='Going to watch movie in sathyam cinemas' 
                pic={img2}/>
            </Ucard>  

        </div>
    )
}

//connecting to HTML
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)