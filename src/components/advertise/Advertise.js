import './Advertise.css'
import React from 'react'
// import Card from './Cards/CardUI'
import Content from '../content/Content'

const Advertise = () => {
  return (
    <div className="container">
      <Content/>
    <div className="row">
      <div className="column">
            <img src="https://images.unsplash.com/photo-1629646526325-d4e092b641b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt=""/>
      </div>
      
      <div className="column">
      <h2>Top NFT <br/> ------- of The Week</h2>
      <h1>Mario Bros #001</h1>
      <div className="topnft">
        <table>
          <tr>
            <th>Lorem Ipsum Collection</th>
            <th></th>
            <th>SotoAyam_Uenak</th>
          </tr>
        </table>
      </div>

      <div className="current">
      <p>Current Bid</p>
        <table>
          <tr>
            <th>3.00 ETH</th>
            <th>$7,282.98</th>
          </tr>
        </table>
      </div>

      <div className="auction">
 <table>
   <tr>
     <th>02 Day</th>
     <th>15 Hour</th>
     <th>20 Minute</th>
     <th>18 Second</th>
   </tr>
 </table>
      </div>

      <p>Place a Bid <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg></button></p>
       
      </div>
    </div>
   
    </div>

  )
}

export default Advertise;
// const Advertise = () => {
//   return (
//     <div className="container">
//       <Content/>
//       <div className="row">
//         <div className="column">
          
//         <div className="card" width="500">
//         <img src="https://images.unsplash.com/photo-1629646526325-d4e092b641b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
//         </div>
//         </div>
//         <div className="column ">
//           <h1>Top NFT of The Week</h1>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Advertise;