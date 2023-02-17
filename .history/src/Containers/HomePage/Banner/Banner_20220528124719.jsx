import React from 'react'
import{Player} from 'video-react'

const Banner = () => {
  return (
    <section className="banner">
      <div className="component-waper">
          <div className="wapper-banner">
            <div className="player">
            <Player
              playsInline
              // poster="/assets/poster.png"
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />      
            </div>
          </div>
      </div>
    </section>
  )
}

export default Banner