import React, { useState , useEffect } from 'react' ;
import './Body.css' ;
import { data } from '../assets/data.js' ;
import Card from './Card'
import { photosnap , manage , account , MyHome , loopStudio,faceit,shortly,insure,eyeCam,theAirCompany } from './images/images'
import Fade from 'react-reveal/Fade' ;

const Body = ({ addFilter , chosenFilter }) => {
    const [ filters , setfilters ] = useState([]) ;
    const filtersArray = ['Frontend' , 'Senior' , "HTML", "CSS", "JavaScript" ,'Fullstack','Midweight','Python','React','Junior','Sass','Ruby','Backend','RoR','Vue','Django',]
    const array = [photosnap , manage , account , MyHome , loopStudio,faceit,shortly,insure,eyeCam,theAirCompany] ;

    const [ jobs , setJobs ] = useState(data) ;
    console.log(jobs)
    console.log('chisen filter in the BODY component' , chosenFilter )
    return (
        <div className='body' >
            { chosenFilter.length == 0 ? 
            
            jobs?.map((item , index) => (
                <Fade >
                    <Card key={index} info={item} image={array[index]} addFilter={addFilter} />
                </Fade>
            )) : 
            jobs?.map((item , index) => (
                <Fade >
                    <Card key={index} info={item} image={array[index]} addFilter={addFilter} withFilter={true} chosenFilter={chosenFilter} />
                </Fade>
            ))}
        </div>
    )
} ;

export default Body ; 