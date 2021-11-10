import React from 'react'
// a componrent for setting thememes and backgrounds
import SetThemes from './SetThemes'

const Menu = () => {
   
    return (
        <div className='w-100 p-0 m-0'>                                      
                    <div id="accordion">
                        <div className="card my-0 ">
                            <div className="card-header my-0 py-0">
                                    <a className="btn" data-bs-toggle="collapse" href="#collapseOne">
                                         1. Song Info <span className=" ps-2 fas fa-caret-down"></span>
                                    </a>
                            </div>
                            <div id="collapseOne" className="collapse" data-bs-parent="#accordion">
                                    <div className="card-body my-0 py-0 ms-3 ms-sm-4">
                                           <p className='p-0 m-0'>
                                                <strong> song name : </strong> <i> Arash_feat_Mohombi_Se_Fue </i>
                                           </p>
                                           <p className = 'p-0 m-0'>
                                                 <strong> length : </strong> <i> 0:00 min </i>
                                           </p>
                                    </div>
                            </div>
                       </div>

                       <div className="card my-0 ">
                            <div className="card-header my-0 py-0">
                                    <a className="btn" data-bs-toggle="collapse" href="#collapseTwo">
                                         2. About <span className=" ps-2 fas fa-caret-down"></span>
                                    </a>
                            </div>
                            <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
                                    <div className="card-body my-0 py-0 ms-3 ms-sm-4">                                          
                                           <p className = 'p-0 m-0 '>  
                                                <span> Developer </span> : Ahmed Sani 
                                           </p>
                                           <p className = 'p-0 m-0 ' >  
                                               <span> version </span> : 1.0.0
                                           </p>
                                    </div>
                            </div>
                       </div>

                       <div className="card my-0 ">
                            <div className="card-header my-0 py-0">
                                    <a className="btn" data-bs-toggle="collapse" href="#collapseThree">
                                          3. Settings
                                          <span className=" ps-2 fas fa-caret-down"></span>
                                    </a>
                            </div>
                            <div id="collapseThree" className="collapse" data-bs-parent="#accordion">
                                    <div className="card-body my-0 py-0">
                                        <span className='ms-4'> Themes </span>
                                         <SetThemes />
                                    </div>
                            </div>
                       </div>

                </div>
        </div>             
    )
}

export default Menu
