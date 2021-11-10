
import React , { useState , useEffect } from 'react'
import { detectDevice } from './components/detectDevice';
//context api 
import { AppContext } from './AppContext';
//component
import MainBody from './components/MainBody';
import AudioControls from './components/AudioControls' ;

const Songs = ({className}) => {         

    // context api that contains global state.
    const store = React.useContext(AppContext) ;
    //destructured the state object and dispatch method from the store object
    const { state, dispatch } = store ;

  useEffect(() =>  {
            window.scroll(0,0) ;
            //detect user device and  notify the store which device was found.
            (detectDevice() === 'mobile') ?  dispatch({type : 'BROWSER_DETECTED_MOBILE_DEVICE'}) 
                                       :   dispatch({type : 'BROWSER_DETECTED_NON_MOBILE_DEVICE'})
  } , [ dispatch ]) ;
   
    const [ showInput , setShowInput ] = useState(false) ;
    const [searchInput , setSearchInput] = useState('') ;

   const onSearchIconClick = event => {
      event.stopPropagation() ;
      setShowInput( prevShowInput => !prevShowInput) ;       
   }
 
   const SearchInputChange = (event) => {
       setSearchInput(event.target.value)
   }
   // action that will be trigered when input losses focus
   const handleBlur = () => {
       setShowInput(!showInput) ;
       setSearchInput('') ;
       //return default list when input losses focus.
        setTimeout( () => dispatch({type: 'RETURN_DEFAULT_LIST' }) , 1000)
   }

  const  onTrackSearch = (event) => {
       // perform search in track list based on search input value
       event.target.value.length > 0 ? 
       dispatch({ type : 'SEARCH_SONG' , payload : event.target.value  })
       :
       dispatch({type: 'RETURN_DEFAULT_LIST' }) 
   }


    return (
        <section className={`${className} songs-component border border-top-0 border-bottom-0`}>
            <div className='app-header w-100'>
                 <div className='flex-body d-flex justify-content-between  ps-1'>
                       <h3 className="app-logo w-auto pt-1">
                            <strong className='text-danger'> i</strong>Music 
                        </h3>
                        <div className="w-auto search-bar pe-1">
                               {
                                   showInput ? <input 
                                                    type="search" 
                                                    className='form-control py-1 px-2 search mt-1' 
                                                    onChange = { SearchInputChange }
                                                    onBlur = { handleBlur }
                                                    onKeyUp = { onTrackSearch }
                                                    value={searchInput}
                                                    placeholder = 'Search music..'
                                                />
                                            :
                                    <span onClick={ onSearchIconClick } className="fas fa-search pe-1 pt-1 mt-1" >
                                    </span>
                               }
                        </div>                         
                  </div>
                 <p className='p-0 m-0'> All songs <sub className=' m-0'> 19 </sub></p>
            </div>
             <main className='main-section'>
                  <MainBody />
             </main>
             <footer className='audio-controls p-0 m-0 d-sm-none'>
                 { state.isMobileDevice && <AudioControls />}
            </footer>  
        </section>
    )
}

export default Songs



