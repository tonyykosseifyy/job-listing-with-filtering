import React, { useState , useEffect } from 'react' ;
import './Filter.css' ;

const Filter = ({ addFilter , requestedItems , updateSearch , searchValue }) => {
    const add = (item) => {
        addFilter(item) ;
        updateSearch('')
    }
    const ret = (item , index) => {
        return (
            <li><strong className='bold'>{item.substr(0 , searchValue.length )}</strong><span>{item.substr(searchValue.length , requestedItems[index].length )}</span></li>
        )
    }
    console.log('searchValue', searchValue.length )
    const filtersArray = ['Frontend' , 'Senior' , "HTML", "CSS", "JavaScript" ,'Fullstack','Midweight','Python','Junior','Ruby','Backend']
    return (
        <div className='filter-search' >
            <ul>
                { requestedItems.length > 0 && requestedItems.map((item , index) => (
                    <li key={index} onClick={() => add(item) } >{ret(item , index)}</li>
                ))}
            </ul>
        </div>
    )
}

export default Filter ;