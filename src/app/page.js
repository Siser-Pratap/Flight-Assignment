"use client";

import Image from "next/image";
import "./homepage.css";
import { airports } from "./assets/information";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Home() {

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const router = useRouter();
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (from && to && date) {
      router.push(`/flightSearch/results?from=${from}&to=${to}&date=${date}`);
    }
  };
  
  return (
    <>
    <header>
        <div className="container">
            <h1>Book Your Flight</h1>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#deals">Deals</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section className="hero">
        <div className="container">
            <h2>Find the Best Flights</h2>
            <p>Book flights to your favorite destinations at the best prices.</p>
            <div className="flex justify-center gap-[1rem] ">
            <form className="search-form" onSubmit={handleSearch}>
                <select value={from} onChange={(e) => setFrom(e.target.value)} className="bg-white text-black" name="from" required>
                  <option value="" disabled selected >
                    From
                  </option>
                  {
                    airports.map((airport)=>(
                      <option className="text-black hover:bg-blue-200" value={airport.city} >{airport.city}</option>  
                    ))
                  }
                </select>
                <select value={to} onChange={(e) => setTo(e.target.value)} className="bg-white text-black " name="to" required>
                  <option value="" disabled selected >
                    To
                  </option>
                  {
                    airports.map((airport)=>(
                      <option className="text-black hover:bg-blue-200" value={airport.city} >{airport.city}</option>  
                    ))
                  }
                </select>
                <input value={date} onChange={(e) => setDate(e.target.value)} className="bg-white text-black" type="date" placeholder="Date" required />
                <button className=""  type="submit">Search Flights</button>
              </form>
              </div>
        </div>
    </section>

    <section className="cta">
        <div className="container">
            <h2>Special Discounts on Flights</h2>
            <p>Save up to 50% on select flights this season. Don’t miss out!</p>
            <a href="#" className="cta-button">Explore Deals</a>
        </div>
    </section>

    <footer>
        <div className="container">
            <p>&copy; 2024 Flight Booking. All rights reserved.</p>
        </div>
    </footer>
    </>

  );
}
