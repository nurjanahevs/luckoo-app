import './Advertise.css'
import React from 'react'
// import Card from './Cards/CardUI'
import Content from '../content/Content'

const Advertise = props => {
  return (
    <div className="container">
      <Content/>
    <div className="card text-center">
      <div className="overflow">
        <img src="https://images.unsplash.com/photo-1629646526325-d4e092b641b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt=""/>
      </div>
      <div className="card-body text-dark">

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