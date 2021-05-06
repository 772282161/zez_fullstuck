import React from 'react';

import logoItem from './logo.jpg'
import './logo.css'

class logo extends React.Component{
    render(){
        return (
            <div>
                <div className="logo-container">
                    <img src={logoItem}  alt=""></img>
                </div>
            </div>
        )
    }
}

export default logo