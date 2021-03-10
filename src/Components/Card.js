import React, { useState , useEffect } from 'react' ;
import './Card.css' ;
import styled from 'styled-components' ;

/*featured*/ 

const Card = ({info , image , addFilter , withFilter , chosenFilter  }) => {
    const [ requested , setRequested ] = useState(false) ;
    withFilter && console.log('selected the second path ')
    const checkTools = () => {
        let i ;
        for (i=0 ; i < chosenFilter.length ; i++ ) {
            console.log('at the script =>>' , chosenFilter , 'info.lamguage', info.languages )
            if (info.languages.indexOf(chosenFilter[i]) > -1 ) {
                setRequested(true)
                console.log('statement 3 is true (languages)')
                return 
            }
        } 
    }
    useEffect(() => {
        console.log('with filterrr')
        if (withFilter) {
            {/*           chosenFilter = ['front' , 'back' , 'python' ]                              */}
            if (chosenFilter.indexOf(info.role) > - 1 ) {
                setRequested(true)
                console.log('first statement is true')
            }
            else if (chosenFilter.indexOf(info.level) > - 1 ) {
                setRequested(true)
                console.log('second statement is true')
            }
            console.log('just before the script')
            checkTools() 
        }
    })
    return (
        <div className='card' style={{borderLeft: info.featured && '5px solid #5FA4A5' , display: !requested && withFilter && 'none'}} >
            <div className='card-left'>
                <div>{ image }</div>
                <div className='card-left-info'>
                    <div className='card-header'>
                        <h3>{info?.company}</h3>
                        {info.new && <i><span>new!</span></i>}    
                        {info.featured && <i className='black-span' ><span>featured</span></i>}    
                    </div>
                    <p>{info.position}</p>
                    <p className='location-info' >
                        <span>{info.postedAt}</span>
                        <span><Point />{info.contract}</span>
                        <span><Point />{info.location}</span>
                    </p>
                </div>
            </div>
            <div className='bar'></div>
            <div className='card-right'>
                { info.role && 
                <Chip onClick={() => addFilter(info.role)} >
                    {info.role}
                </Chip>
                }
                {info.level && 
                <Chip onClick={() => addFilter(info.level)} >
                    {info.level}
                </Chip>
                }
                {info.languages && 
                info.languages.map((item , index) => (
                    <Chip key={index} onClick={() => addFilter(item) }>
                        {item}
                    </Chip>
                ))
                }
            </div>
        </div>
    )
} ;



export default Card ;

const Point = styled.div`
    display: inline-block ;
    width: 4.5px ;
    height: 4.5px ;
    border-radius: 50% ;
    background-color: #8D9192 ;
    margin-bottom: 2px ;
    margin-right: 10px ;
`

export const Chip = styled.button`
    font-size: 17px ;
    display: inline-block ;
    margin: 10px 5px ;
    background-color: #EEF7F6 ;
    color: #6F9E9E ;
    cursor: pointer ;
    padding: 8px 8px ;
    border-radius: 5px ;
    font-weight: bold ;
    border: none ;
    outline: none ;
    transition: .2s ease-in ;
    &:hover , &:focus {
        background-color: #60A5A7 ;
        color: white ;
        text-decoration: none ;
    }

`
