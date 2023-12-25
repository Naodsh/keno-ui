import React from 'react';
import "./style.css";

export const RightSection = ()=>{
    return <div className='right'>
        <div className='right-title-container'>
            <h1 className='left-title draw'>DRAW </h1> <h1 className="right-num"> 5162</h1>
            </div>
            <h1 className='left-title time'>02:05</h1>
            <h1 className='pick'>PICK 9</h1>

            <div className='flex'>
                <div>
                    <h1 className='hits-title'>HITS</h1>
                    <h1 className='hits-content'>9</h1>
                    <h1 className='hits-content'>8</h1>
                    <h1 className='hits-content'>7</h1>
                    <h1 className='hits-content'>6</h1>
                    <h1 className='hits-content'>5</h1>
                    <h1 className='hits-content'>4</h1>
                </div>
                <div>
                    <h1 className='hits-title'>WIN</h1>
                    <h1 className='hits-content'>4200</h1>
                    <h1 className='hits-content'>1800</h1>
                    <h1 className='hits-content'>120</h1>
                    <h1 className='hits-content'>18</h1>
                    <h1 className='hits-content'>6</h1>
                    <h1 className='hits-content'>3</h1>
                </div>
            </div>
</div>
}