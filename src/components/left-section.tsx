import React from 'react';
import "./style.css";
import { Number } from './number.tsx';

export const LeftSection = ()=>{
    return <div className='left'>
        <div className='left-title-container'>
        <h1 className='left-title draw2'>DRAW </h1> <h1 className="left-num"> 5162</h1>
        <div className='type1'></div>
        </div>
        <div className='numbers'>
            {Array.from({ length: 10 }).map((_,i)=>{
                return (
                    <Number number={`${i + 1}`} key={i} />

                );
            })}
        </div>
        <div className='numbers'>
            {Array.from({ length: 10 }).map((_,i)=>(
                <Number number={`${i+11}`} key={i}/>

            ))}
        </div>
        <div className='numbers'>
            {Array.from({ length: 10 }).map((_,i)=>(
                <Number number={`${i+21}`} key={i}/>

            ))}
        </div>
        <div className='numbers'>
            {Array.from({ length: 10 }).map((_,i)=>(
                <Number number={`${i+31}`} key={i}/>

            ))}
        </div>
        <div className='numbers'>
            {Array.from({ length: 10 }).map((_,i)=>(
                <Number number={`${i+41}`} key={i}/>

            ))}
        </div>
        <div className='numbers'>
            {Array.from({ length: 10 }).map((_,i)=>(
                <Number number={`${i+51}`} key={i}/>

            ))}
        </div>
        <div className='numbers'>
            {Array.from({ length: 10 }).map((_,i)=>(
                <Number number={`${i+61}`} key={i}/>

            ))}
        </div>
        <div className='numbers'>
            {Array.from({ length: 10 }).map((_,i)=>(
                <Number number={`${i+71}`} key={i}/>

            ))}
        </div>

        <div className='left-title-container' style={{marginTop:"10px"}}>
        <div className='keno'></div>
        <div className='type'></div>
        </div>
    </div>
}