// import React, { useState } from 'react';

// export const Admin = ({ parcel }) => {
//   const [status, setStatus] = useState(parcel.status);

//   const handleStatusChange = (e) => {
//     setStatus(e.target.value);
//     // You can add code here to update the status in your database or API
//   };

//   return (
//     <div className="admin-card">
//       <h2 className='bg-success mt-10'>{parcel.name}</h2>
//       <p>Status: 
//         <select value={status} onChange={handleStatusChange}>
//           <option value="preparing">Preparing</option>
//           <option value="on_transit">On Transit</option>
//           <option value="delivered">Delivered</option>
//         </select>
//       </p>
//       <button onClick={() => console.log(`Viewing parcel: ${parcel.id}`)}>View Parcel</button>
//     </div>
//   );
// };
import React from 'react'

const Admin = () => {
  return (
    <div>admin</div>
  )
}

export default Admin

