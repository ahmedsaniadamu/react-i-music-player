import React , { useReducer , useEffect } from 'react'
//main style sheet (sass)
import './styles/index.scss'
//components
import SongsContainer from './SongsContainer';
import reducer from './reducer' ;
import defaultState from './states' ;
import AudioControls from './components/AudioControls';
import AudioBody from './components/AudioBody';
//device detector
import { detectDevice } from './components/detectDevice';
//context api
import { AppContext } from './AppContext';
 
 

 const App = () => {

      const [ state , dispatch ] = useReducer( reducer , defaultState ) ;

      const checkUserDevice = () => {
            (detectDevice() === 'mobile') ?  dispatch({type : 'BROWSER_DETECTED_MOBILE_DEVICE'}) 
                                           :   dispatch({type : 'BROWSER_DETECTED_NON_MOBILE_DEVICE'})
      }
      useEffect(() =>  {
       
        window.scroll(0,0) ;
         checkUserDevice()

      } , []) ;
     
    return (
        <AppContext.Provider value={{ state , dispatch }}>
                <main className='w-100 m-0 p-0 container-fluid row mx-auto'>
                    {  /* for mobile devices */ }
                    <div className='audio-body d-block fixed-top d-sm-none p-0 m-0'>
                            {    /* render the component in a  mobile device  if a song is clicked */
                               ( state.isMobileDevice === true && state.showAudioBodyInMobile ) && 
                                                                                        <AudioBody />
                            }
                    </div>
                     <SongsContainer className = 'col-12 col-sm-6 col-md-5 col-lg-3 p-0 m-0' />
                     <div className = 'd-none d-sm-block col-sm-6 col-md-7 col-lg-9 p-0 m-0 audio-body'>
                          
                           {    /* render the component if device is not a mobile device */
                                 ( state.isMobileDevice === false ) &&<AudioBody />
                           }

                         <div style={{ height:'20vh'}} className='desktop-audio-controls'>
                           
                             {  /* render the component if device is not a mobile device */
                                 ( state.isMobileDevice === false ) && <AudioControls />
                             }

                         </div>
                     </div>
                </main>
        </AppContext.Provider>
    )
}

export default App ;