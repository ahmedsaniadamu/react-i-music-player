import React , { useContext } from 'react'
//context api 
import { AppContext } from '../AppContext';
//components
import Volume from './Volume';
import Menu from './Menu';


const AudioControls = () => {
    
    const store = useContext(AppContext) ;
    const { state , dispatch } = store ;

    let audio = document.querySelector('audio')
    const [ track , setTrack ] = React.useState({ timer : 0 , min : 0 , max : 0}) ;
        
    const handleAudioPlay = () => {
      setInterval( () =>  {
                if( isNaN( audio.duration)){
                        setTrack(
                            prevTrack => { 
                                return  { 
                                            ...prevTrack ,
                                            max : 0 ,
                                             
                                      }
                                   }
                              )         
                }
                else{
                        setTrack(  prevTrack => { 
                                                 return  { 
                                                       ...prevTrack ,
                                                        max : audio.duration ,
                                                        min : 0 ,
                                                        timer : audio.currentTime 
                                                   } })                                                                                                       
                      }                                                 
         
        } , 1000 )            
 } 

 //auto play next function
 const autoPlayNextFunc = () => {
    // always show play if a song is playing
    dispatch({type:'AUDIO_IS_NOT_PLAYING'}) ;     

    // looped through each song to check and move to the next song        
    for(let index = 0 ; index < state.TrackList.length ; index++){  

           switch(state.audioCaption){                
                 case state.TrackList[index].songName :
             
                  if(index < state.TrackList.length - 1 ){

                       audio.src = state.TrackList[ index + 1 ].src ;                     
                       audio.play()
                        dispatch( { type :'UPDATE_AUDIO_CAPTION_WITH_CURRENT_SONG_NAME',
                                        payload:{ 
                                                songName : state.TrackList[ index + 1 ].songName ,
                                                currentSongIndex : index + 1 }
                                        })
                    }
                    //reset back to default song index
                    else{
                           audio.src = state.TrackList[0 ].src ;                     
                           audio.play()
        
                            dispatch( { type :'UPDATE_AUDIO_CAPTION_WITH_CURRENT_SONG_NAME',
                                            payload:{ 
                                                    songName : state.TrackList[ 0 ].songName ,
                                                    currentSongIndex : 0 }
                                            })
                    }
                 break ;     
                                      
          }
           
     }
}
    const autoPlayNext = () => {
        autoPlayNextFunc() ;
    }

    return (
        <div>

                     <audio
                        onPlay = { handleAudioPlay }
                        onEnded = { autoPlayNext }
                       className='music'
                       src={ require('./assets/Arash_feat_Mohombi_Se_Fue.mp3').default}>                         
                     </audio>

            <p className='text-end pe-2 pt-1 mb-0 pb-0'>
                   <span className='track-timer pe-1'>                          
                        {   
                           // display audio duration in minutes 
                           (track.max === 0) ? '0:00' :
                                   ( track.max / 60).toString().slice(0 , 4).replace('.',':')
                        
                        }
                  </span>
            </p>
            <div style={{width:'96%'}} className="audio-range-container d-block mx-auto mt-2">
             
                  <input
                       type='range'
                       value={ track.timer }  
                        onChange = {  
                                           (e) => { 
                                                    setTrack({ ...track , timer : Number(e.target.value) })
                                                    let audio =  document.querySelector('audio')
                                                    audio.currentTime = Number(e.target.value) ;                                                     
                                               }
                                       }
                        step = {1}
                        min = {track.min}
                        max = { track.max }
                        className='audio-range'
                  />
           
                 <div className="controls w-100 p-0 m-0 d-flex justify-content-center mt-4 ">
                      <Controls />
                 </div>
            </div>
        </div>
    )
}

const Controls = React.memo( () => {
    
    const store = useContext(AppContext) ;

    const { state , dispatch } = store ;
     
    // the audio element
     let audio = () => document.querySelector('audio') ;

     const handlePlayClick = () => {                             
         audio().pause() ;                             
         dispatch({type:'AUDIO_IS_PLAYING'}) ;
     }

     const handlePauseClick = () => {                  
         audio().play() ;         
        dispatch({type:'AUDIO_IS_NOT_PLAYING'}) ;         
    }

    //action to perform if next icon is clicked
    const playNextSong = () => {         

         // always show play icon if next icon is clicked 
        dispatch({type:'AUDIO_IS_NOT_PLAYING'}) ;                                                    
              
        // looped through each song to check and move to the next song  by each click
        
          for(let index = 0 ; index < state.TrackList.length ; index++){
                
            switch(state.audioCaption){
                
                case state.TrackList[index].songName :
                 
                /*move to next song only if the index doest 
                   not pass the total number of songs */
                      if(index < state.TrackList.length - 1 ){

                           audio().src = state.TrackList[ index + 1 ].src ;                     
                           audio().play()
        
                            dispatch( { type :'UPDATE_AUDIO_CAPTION_WITH_CURRENT_SONG_NAME',
                                            payload:{ 
                                                    songName : state.TrackList[ index + 1 ].songName ,
                                                    currentSongIndex : index + 1 }
                                            })
                        }
                        //reset back to default song index
                        else{
                               audio().src = state.TrackList[0 ].src ;                     
                               audio().play()
            
                                dispatch( { type :'UPDATE_AUDIO_CAPTION_WITH_CURRENT_SONG_NAME',
                                                payload:{ 
                                                        songName : state.TrackList[ 0 ].songName ,
                                                        currentSongIndex : 0 }
                                                })
                        }
                     break ;     
                     
                     default :
                           audio().play()
              }
               
         }
              
 
    }

    //action to perform if prev icon is clicked
    const playPrevSong = () => {
               // always show play icon if next icon is clicked 
        dispatch({type:'AUDIO_IS_NOT_PLAYING'}) ;                                                    
              
        // looped through each song and move to the next song  by each click
        
          for(let index = 0 ; index < state.TrackList.length ; index++){
                
            switch(state.audioCaption){
                
                case state.TrackList[index].songName :
                 
                /*move to previous song only if the index doest 
                   not pass the total number of songs */
                      if(index > 0 ){

                           audio().src = state.TrackList[ index - 1 ].src ;                     
                           audio().play()
        
                            dispatch( { type :'UPDATE_AUDIO_CAPTION_WITH_CURRENT_SONG_NAME',
                                            payload:{ 
                                                    songName : state.TrackList[ index - 1 ].songName ,
                                                    currentSongIndex : index - 1 }
                                            })
                        }
                        //play last song if the song is at the first index
                        else{
                                // total number  of the song array = last index
                               let lastIndex = state.TrackList.length -1 ;

                               audio().src = state.TrackList[ lastIndex].src ;                     
                               audio().play()
            
                                dispatch( { type :'UPDATE_AUDIO_CAPTION_WITH_CURRENT_SONG_NAME',
                                                payload:{ 
                                                        songName : state.TrackList[lastIndex].songName ,
                                                        currentSongIndex : lastIndex }
                                                })
                        }
                     break ;

                     default :                                                
                            audio().play()
              }
               
         }                        
         
    }

    return (
        <div>
               <span 
                   className="fas fa-volume-up me-5 ms-3 ms-sm-1" 
                   data-bs-toggle="offcanvas" 
                   data-bs-target="#volume">
                </span>
                <span 
                    className="fas fa-step-backward" 
                    onClick={ playPrevSong } 
                ></span>
                 {      
                     state.startPlaying ? <span 
                                             className="fas fa-pause mx-3 p-3" 
                                               onClick={handlePlayClick}>                                                
                                          </span>
                                        : <span 
                                               className="fas fa-play mx-3 p-3" 
                                               onClick={handlePauseClick}>                                            
                                           </span>
                 }
                <span className="fas fa-step-forward" onClick={ playNextSong } ></span>
                <span 
                     className="fas fa-bars ms-5"
                     data-bs-toggle="offcanvas" 
                     data-bs-target="#menu"
                >                    
                </span>
               
               {/* boostrap 5 slide bottom  modal for volume and menu click*/}
                <div>
                    <div className="offcanvas offcanvas-bottom mx-auto volume-container" id="volume">
                            <div className="offcanvas-header pt-0 px-0">
                                <h1 className="offcanvas-title py-1 mt-0 w-100 px-0 ps-1">
                                    <i className="fas fa-volume-up"></i> Media volume
                                </h1>                         
                            </div>
                            <div className="offcanvas-body">
                                <Volume />
                            </div>
                      </div>
                      <div className="offcanvas offcanvas-bottom mx-auto menu-container" id="menu">
                            <div className="offcanvas-header pt-0 px-0">
                                <h1 className="offcanvas-title w-100 py-1 mt-0 px-0 ps-1">
                                    <i className="fas fa-cogs"></i> Menu
                                </h1>                         
                            </div>
                            <div className="offcanvas-body p-0 m-0 settings">
                                 <Menu />                                    
                            </div>
                      </div>
                </div>
                
        </div>
    )
} )

export default AudioControls
