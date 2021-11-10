import React , {useContext} from 'react' ;
import { AppContext } from '../AppContext';

const AudioBody = () => {
      
    const store =  useContext(AppContext) ;
    const {  state } = store ;
    
    const handleBackIconClick = () => {
          // hide audio body if back icon is clicked
          store.dispatch({ type : 'HIDE_AUDIO_BODY_IN_MOBILE'})
    }

    return (
        <div className='audio-body-content'>
             <div className="header d-sm-none py-3"> 
                  <span className="fas fa-arrow-left ms-1 " onClick= { handleBackIconClick } ></span>
                   <span className='ms-5 logo'>
                        <strong className='text-danger'> i</strong>Music...
                  </span> 
              </div>

              <div className="cd-container d-flex justify-content-center">
                    <div 
                       className="cd align-self-center"
                       style = {{
                                   backgroundImage : `url(${require('./assets/cdplate.png').default})` ,
                                   animationName : state.startPlaying && 'rotate' ,
                                }}
                    >                        
                    </div>                     
              </div>
              <p className='text-center'> { state.audioCaption } </p>
        </div>
    )
}

export default AudioBody
