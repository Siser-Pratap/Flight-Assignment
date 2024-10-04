"use client";

import Image from "next/image";
import "./homepage.css";
import { airports } from "./assets/information";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleSubmit = () =>{
    navigate("/flightSearch");
  }
  
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
            <form className="search-form">
                <select className="bg-white text-black" name="from" required>
                  <option value="" disabled selected >
                    From
                  </option>
                  {
                    airports.map((airport)=>(
                      <option className="text-black hover:bg-blue-200" value={airport.city} >{airport.city}</option>  
                    ))
                  }
                </select>
                <select className="bg-white text-black " name="from" required>
                  <option value="" disabled selected >
                    To
                  </option>
                  {
                    airports.map((airport)=>(
                      <option className="text-black hover:bg-blue-200" value={airport.city} >{airport.city}</option>  
                    ))
                  }
                </select>
                <input className="bg-white text-black" type="date" placeholder="Date" required />
                <button onClick={handleSubmit} type="submit">Search Flights</button>
            </form>
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
