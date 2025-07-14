import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Hero() {
  return (
    <section className="hero">
        <h1>Unlimited Movies, TV Shows & More</h1>
        <p>Your screen, your rules. Pause, play, or walk away, <br/> fresh adventures arrive every week.</p>
        <div className="hero-buttons">
          <button className="btn-primary">Start Watching</button>
          <button className="btn-secondary">Browse Plans</button>
        </div>
      </section>
  )
}

export default Hero