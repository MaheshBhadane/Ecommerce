import React from 'react'


function Hero({heroname}){
    if (heroname === "rahul") {
        throw new Error('Not a hero!')
    }
    return (
        <div>
            {heroname}
        </div>
    )
}

export default Hero