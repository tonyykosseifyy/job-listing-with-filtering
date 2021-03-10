import React, { useState , useEffect } from 'react' ;
import './Header.css' ;
import { headerSvg , headerMobileSvg } from '../assets/svgFiles.js' ;
import { Chip } from './Card.js' ;
import { GrClose } from 'react-icons/gr';
import IconButton from '@material-ui/core/IconButton';
import Filter from './Filter' ;
import SearchIcon from '@material-ui/icons/Search';
const Header = ({ addFilter , chosenFilter , deleteFilter , clearFilter , generateUpdate }) => {
    const [ update , setUpdate ] = useState('') 
    const [ width , setWidth ] = useState(window.innerWidth) ;
    const [ searchValue , setSearchValue ] = useState('') ;
    const [ requestedItems , setRequestedItems ] = useState([]) ;
    window.addEventListener('resize' , () => {
        setWidth(window.innerWidth)
    })
    const deleteUpdata = (name) => {
        deleteFilter(name) ;
        setUpdate(name)
        generateUpdate(name)
    }
    const filtersArray = ['Frontend' , 'Senior' , "HTML", "CSS", "JavaScript" ,'Fullstack','Midweight','Python','Junior','Ruby','Backend']
    const submit = (e) => {
        e.preventDefault() ;
        addFilter(requestedItems[0])
        setSearchValue('')
    }
    console.log('chosenFilter in the Header Component' , chosenFilter , chosenFilter.length )
    useEffect(() => {
        if (searchValue !== '' ) {
            let array = [] ;
            filtersArray.forEach((item , index) => {
                if (item.toUpperCase().startsWith(searchValue.toUpperCase() , 0)) {
                    array.push(item) ;
                    console.log('array' , array ) 
                }
            })  
            setRequestedItems(array)
        }
        else if ( !searchValue ) {
            setRequestedItems([]) ;
            console.log('second statement ')
        }

    }, [ searchValue ])
    return (
        <div className='header' >
            <div className='header-svg'>{ width > 400 ? headerSvg : headerMobileSvg }</div>
            <div className='header-search' >
                <div className='filters-container'>
                    { chosenFilter.map((item , index) => 
                    <div className='filter-child' >
                        <Chip key={index} >
                            {item}
                        </Chip>
                        <div onClick={ () => deleteUpdata(item) } >
                            <GrClose />
                        </div>
                    </div>
                    )}
                </div>
                <form onSubmit={ (e) => submit(e) } >
                    <IconButton onClick={(e) => submit(e)} >
                        <SearchIcon style={{color: 'white'}} />
                    </IconButton>
                    <input type='text' value={searchValue} onChange={(e) => setSearchValue(e.target.value) } />
                    <Filter addFilter={addFilter} requestedItems={requestedItems} updateSearch={setSearchValue} searchValue={searchValue} />
                </form>
                <button onClick={() => clearFilter() } >Clear</button>
            </div>
        </div>
    )
} ;


export default Header ;