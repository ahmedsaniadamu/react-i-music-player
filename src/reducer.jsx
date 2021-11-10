import { TrackList } from "./components/TrackList";

const reducer = (state , action ) => {
       switch( action.type ){

              case 'SEARCH_SONG' :
                     return { ...state , TrackList : [ ...state.TrackList.filter( track => {
                                return  track.songName.toLowerCase().startsWith( action.payload.toLowerCase())
                     } ) ] }

              case 'RETURN_DEFAULT_LIST' :
                     return {...state , TrackList } ;
               
              case 'BROWSER_DETECTED_MOBILE_DEVICE' : 
                  return { ...state , isMobileDevice : true }
              
              case 'BROWSER_DETECTED_NON_MOBILE_DEVICE' : 
                    return { ...state , isMobileDevice : false }

              case 'AUDIO_IS_PLAYING' : 
              return {...state , startPlaying : false}
              
             case 'AUDIO_IS_NOT_PLAYING' : 
                   return {...state , startPlaying : true }
              
              case 'UPDATE_AUDIO_CAPTION_WITH_CURRENT_SONG_NAME' :
                     return {...state ,
                              audioCaption : action.payload.songName ,
                               currentSongIndex : action.payload.currentSongIndex , 
                            }
              case  'SHOW_AUDIO_BODY_IN_MOBILE' :
                     return {...state , showAudioBodyInMobile : true }
                
              case 'HIDE_AUDIO_BODY_IN_MOBILE' : 
                    return {...state , showAudioBodyInMobile : false  }             
             
                             

              default :
              return state ;
       }
}

export default reducer ;