import React , { useState }from 'react'
import HtmlRange from 'react-html-range';

const Volume = () => {

    const [ audioVolume , setAudioVolume ] = useState( 0 ) ;
     
    let audio = () => document.querySelector('audio') ;

    const onvolumechanged = event => {
         if(audioVolume >= 1 ) setAudioVolume(1) ;
         if( audioVolume <= 0 ) setAudioVolume(0)
          setAudioVolume( event.target.value ) ;
          audio().volume = audioVolume
    }
 
    return (
        <div className = 'volume-controls d-flex justify-content-center'>
            <span className='me-2 fas fa-volume-mute mt-3 ' >  </span>
            <div className='volume-range mt-2'>
                <HtmlRange                        
                        value={ audioVolume }  
                        onInputChange = {  onvolumechanged  }
                        step = { 0.1 }
                        min = { 0 }
                        max = { 1 }
                        styles = { { 
                                    inputStyles : { width : '100%'} ,
                                    otherStyles : {
                                                     ballColor : 'transparent' ,
                                                    ballBorder : 'none',
                                                    trackFilledColor:'rgb(190, 190, 190)', 
                                                    trackEmptyColor :'rgb(80, 80, 80)' ,
                                                    trackHeight : '2rem'
                                        } 
                                } 
                            }
                   />
                </div>
                <span className='text-end ps-0  fas fa-volume-down mt-3 ms-2' >  </span>
        </div>
    )
}

export default Volume
