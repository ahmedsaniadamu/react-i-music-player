import React from 'react'
import { Themes } from './Themes';

const SetThemes = () => {
   
    const body = () => document.body ;
    

    const setDefaultThemes = () => {

        body().style.setProperty('--header-background' , Themes.default.headerBackground ) ;
        body().style.setProperty('--section-background' , Themes.default.sectionBackground)
        body().style.setProperty('--footer-background' , Themes.default.footerBackground)
        body().style.setProperty('--modal-background' , Themes.default.modalBackground)
        body().style.setProperty('--volume-background' , Themes.default.volume.background)
        body().style.setProperty('--volume-current-value-background' , Themes.default.volume.currentValue)
    }

    const setSkyBlueThemes = () => {
        body().style.setProperty('--header-background' , Themes.skyBlue.headerBackground ) ;
        body().style.setProperty('--section-background' , Themes.skyBlue.sectionBackground)
        body().style.setProperty('--footer-background' , Themes.skyBlue.footerBackground)
        body().style.setProperty('--modal-background' , Themes.skyBlue.modalBackground)
        body().style.setProperty('--volume-background' , Themes.skyBlue.volume.background)
        body().style.setProperty('--volume-current-value-background' , Themes.skyBlue.volume.currentValue) 
    }

    const setDarkBlueThemes = () => {
        body().style.setProperty('--header-background' , Themes.darkBlue.headerBackground ) ;
        body().style.setProperty('--section-background' , Themes.darkBlue.sectionBackground)
        body().style.setProperty('--footer-background' , Themes.darkBlue.footerBackground)
        body().style.setProperty('--modal-background' , Themes.darkBlue.modalBackground)
        body().style.setProperty('--volume-background' , Themes.darkBlue.volume.background)
        body().style.setProperty('--volume-current-value-background' , Themes.darkBlue.volume.currentValue) 
    }

    const setOrangeThemes = () => {
        body().style.setProperty('--header-background' , Themes.orange.headerBackground ) ;
        body().style.setProperty('--section-background' , Themes.orange.sectionBackground)
        body().style.setProperty('--footer-background' , Themes.orange.footerBackground)
        body().style.setProperty('--modal-background' , Themes.orange.modalBackground)
        body().style.setProperty('--volume-background' , Themes.orange.volume.background)
        body().style.setProperty('--volume-current-value-background' , Themes.orange.volume.currentValue) 
    }

    const setBrownThemes = () => {
      body().style.setProperty('--header-background' , Themes.brown.headerBackground ) ;
      body().style.setProperty('--section-background' , Themes.brown.sectionBackground)
      body().style.setProperty('--footer-background' , Themes.brown.footerBackground)
      body().style.setProperty('--modal-background' , Themes.brown.modalBackground)
      body().style.setProperty('--volume-background' , Themes.brown.volume.background)
      body().style.setProperty('--volume-current-value-background' , Themes.brown.volume.currentValue) 
  }

  const setLightGreenThemes = () => {
    body().style.setProperty('--header-background' , Themes.lightGreen.headerBackground ) ;
    body().style.setProperty('--section-background' , Themes.lightGreen.sectionBackground)
    body().style.setProperty('--footer-background' , Themes.lightGreen.footerBackground)
    body().style.setProperty('--modal-background' , Themes.lightGreen.modalBackground)
    body().style.setProperty('--volume-background' , Themes.lightGreen.volume.background)
    body().style.setProperty('--volume-current-value-background' , Themes.lightGreen.volume.currentValue) 
}

const setPurpleThemes = () => {
  body().style.setProperty('--header-background' , Themes.purple.headerBackground ) ;
  body().style.setProperty('--section-background' , Themes.purple.sectionBackground)
  body().style.setProperty('--footer-background' , Themes.purple.footerBackground)
  body().style.setProperty('--modal-background' , Themes.purple.modalBackground)
  body().style.setProperty('--volume-background' , Themes.purple.volume.background)
  body().style.setProperty('--volume-current-value-background' , Themes.purple.volume.currentValue) 
}

const setDarkGreenThemes = () => {
  body().style.setProperty('--header-background' , Themes.darkGreen.headerBackground ) ;
  body().style.setProperty('--section-background' , Themes.darkGreen.sectionBackground)
  body().style.setProperty('--footer-background' , Themes.darkGreen.footerBackground)
  body().style.setProperty('--modal-background' , Themes.darkGreen.modalBackground)
  body().style.setProperty('--volume-background' , Themes.darkGreen.volume.background)
  body().style.setProperty('--volume-current-value-background' , Themes.darkGreen.volume.currentValue) 
}

    return (
         <div style={{ width : '90%'}} className='d-block mx-auto'>
             <div className=" themes  mt-2 pt-2">
                  <div className="default" onClick={ setDefaultThemes }> </div> 
                   <div className="sky-blue" onClick={ setSkyBlueThemes }></div>
                   <div className="dark-blue" onClick={ setDarkBlueThemes }> </div> 
                   <div className="orange" onClick={ setOrangeThemes }></div>
                   <div className="brown" onClick={ setBrownThemes }> </div> 
                   <div className="light-green" onClick={ setLightGreenThemes }></div>
                   <div className="purple" onClick={ setPurpleThemes }> </div> 
                   <div className="dark-green" onClick={ setDarkGreenThemes }></div>
               </div>
         </div>
    )

}

export default SetThemes
