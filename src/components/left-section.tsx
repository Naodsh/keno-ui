import React from 'react';
import "./style.css";
import { Number } from './number.tsx';

export const LeftSection = ()=>{
    return <div className='left'>
        <div className='left-title-container'>
        <h1 className='left-title'>DRAW <span style={{color:"white"}}>5162</span></h1>
        <h1 className='type'>EVENS</h1>
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
        <h1 className='keno'>KENO</h1>
        <h1 className='type-bottom'>EVENS</h1>
        </div>
    </div>
}