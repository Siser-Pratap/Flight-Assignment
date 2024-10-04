// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
import "./flight.css";

const page = () => {
  return (
    <>
      <h1 className=" flex justify-center mt-[10vh] font-bold text-[1.5rem]">Available Flights</h1>
      <div className=" mt-[2rem]">
      {flights.length > 0 ? (
        <ul className="flex flex-col ml-[2rem] justify-center items-start gap-[2rem]">
          {flights.map((flight) => (
            <li key={flight.id}>
              Flight from {flight.from} to {flight.to} on {flight.date} - Price: ${flight.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>No flights available for this route on this date.</p>
      )}
      </div>
      </>
    
  );
}



export default page