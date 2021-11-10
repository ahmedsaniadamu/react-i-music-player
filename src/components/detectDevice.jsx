
export const detectDevice = () => {
  
   
    if( window.innerWidth <= 480 ){
        return 'mobile';
    }

    else {
         return 'desktop' ;
    }
}