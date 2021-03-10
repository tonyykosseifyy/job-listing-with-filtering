import React, { useState } from 'react' ;
import './App.css';
import Header from './Components/Header.js' ;
import Body from './Components/Body.js' ;


function App() {
    const [ chosenFilter , setChosenFiler ] = useState([]) ;
    const [ generateUpdate , setGenerateUpdate ] = useState('') ;
    const deleteFilter = (name) => {
        if ( chosenFilter.indexOf(name) > -1 ) {
            let array = chosenFilter ;
            console.log('array1 ' , array )
            array.splice( chosenFilter.indexOf(name) , 1 )
            console.log('array2' , array )
            setChosenFiler(array)
            console.log('done')
        }
    }
    const addFilter = (name) => {
        if (chosenFilter.indexOf(name) == -1 && name ) {
            setChosenFiler((prevFilter) => 
            [
                ...prevFilter , 
                name
            ])
            console.log('')
        }
        else return ;
    }
    const clearFilter = () => {
        setChosenFiler([]) ;
    }
    console.log('chosen filter in app' , chosenFilter )
  return (
    <div className="app">
        <Header chosenFilter={chosenFilter} deleteFilter={deleteFilter} clearFilter={clearFilter} generateUpdate={setGenerateUpdate} addFilter={addFilter} />
        <Body addFilter={addFilter} chosenFilter={chosenFilter} />
    </div>
  );
}



export default App ;