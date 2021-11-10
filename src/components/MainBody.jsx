import React from 'react'
import { AppContext } from '../AppContext' ;

const MainBody = () => {
    
    // context api that contains global state.
    const store = React.useContext(AppContext) ;
    //destructured the state object and dispatch method from the store object
    const { state  } = store ;

    return (
        <div className='main-body-component'>             
           <ul className='list-group m-0 bg-transparent border-0  '>
                {
                   state.TrackList.map( song => <Track key={song.id} data = { song } /> )
                } 
           </ul>         
        </div>
    )
}

const Track = ( { data }) => {
        
    const store = React.useContext(AppContext) ;
        const { dispatch  } = store ;
    //a function that trigered on each song click.

      const onSongClick = (data)=> { 
                              // set and play audio when a song is clicked
                              let audio =  document.querySelector('audio') ;
                                audio.src = data.src ;
                                audio.play() ;
                                
                                //start playing if audio is not playing
                               dispatch( { type:'AUDIO_IS_NOT_PLAYING' })

                               // notify the store to update audio caption if song changes
                               dispatch( { type :'UPDATE_AUDIO_CAPTION_WITH_CURRENT_SONG_NAME',
                                          payload:{ songName : data.songName , currentSongIndex : data.id - 1}
                                        })
                              // show audio body component if a song is clicked
                              dispatch({type : "SHOW_AUDIO_BODY_IN_MOBILE"})

                         } ;
                         
      return (   
               <li className='list-group-item bg-transparent border-0 py-1 mt-2' 
                   onClick={ () => onSongClick(data) }
                >
                    <div className="d-flex">
                        <div className="image-container">
                            <img src={ require('./assets/audio.png').default} alt="audio plate" />
                        </div>
                        <div className="song-description">
                            <p> { data.songName }</p>
                            <small className='p-0 m-0'> { data.artist } </small>
                        </div>
                    </div>
               </li>
      )
}

export default MainBody
