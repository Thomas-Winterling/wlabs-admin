import React, { useState, useEffect } from "react"
import Header from '../Header'
import Sidebar from '../Sidebar'
import BeatLoader from "react-spinners/BeatLoader"
import { css } from "@emotion/core";



export default function Chat() {
  //Loading Spinner
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState('none');
  
 // Style Spinner and set Spinner
 const override = css`
 display: block;
 position: absolute;
 top: 50%;
 left: 50%;
 margin: 0 auto;
 border-color: red;
`;

 useEffect(()=>{
   setLoading(true)
   setTimeout(() => {
     setLoading(false)
     setContent('flex')
   }, 3000)
 },[])

  return (
    <>
      <div className="chat">
      <div className="top-container">
        <Header />
      </div>
      <div className="content-container">
      <div className="content-left">
        <Sidebar />
      </div>
        <div className="content-right">
          {
            loading ?

            <BeatLoader
              color="orange"
              loading={loading}
              css={override}
              size={30} 
            />

            :

            <div style={{display: content, flexDirection: "column" }}>
              <div className="headline">
                <h4>Chat</h4>
              </div>
              <div className="todos">
                <div className="todos-header">
                  
                </div>

               

            <div className="todos-content">
           
              
              
                </div>
              </div>

              <div className="statistics">
                <div className="wl-statistic">
                  
                </div>
                <div className="wl-statistic">
                  
                </div>
                <div className="wl-statistic">
                  
                </div>
              </div>
              
              
            </div>
          }
      </div>
    </div>
  </div>  
  </>
  )
}
