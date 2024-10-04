// src/app/flightSearch/results/page.js
"use client";

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { useState, useEffect } from 'react';
import styles from '../flight.css';
import { airports } from '@/app/assets/information'; // assuming your styles are in flight.css

// Mock flight data (for demo purposes)
const flightsData = airports;

function Search(){
  const searchParams = useSearchParams();
  return searchParams;
}

const FlightResults = () => {
  const searchParams = Search();
  const from = searchParams.get('from');
  const to = searchParams.get('to');
  const date = searchParams.get('date');
  const [flights, setFlights] = useState([]);
  const [flights2, setFlights2] = useState([]);
  const [depName, setdepName] = useState("");
  const [arrName, setarrName] = useState("");

  useEffect(() => {
    const availableFlights = flightsData.filter(
      (flight) => flight.city === from
    );
    setFlights(availableFlights);
  }, [from]);

  useEffect(() => {
    const availableFlights = flightsData.filter(
      (flights) => flights.city === to
    );
    setFlights2(availableFlights);
  }, [to]);

  


  return (
    <div className={styles.container}>
      <h1>Available Flights from {from} to {to} are</h1>
      {flights.length>0?(
        <li>Flight are from {flights[0].name} to {flights2[0].name}</li>
      ):(<p>Flights are not available</p>)}
    </div>
  );
};



const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FlightResults />
    </Suspense>
  );
};

export default Page;
