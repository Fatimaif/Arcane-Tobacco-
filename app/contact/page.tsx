import React from 'react'
import Hero from './components/Hero'
import Prebody from './components/Preinfo'
import Emailinfo from './components/Emailinfo'
import Career from '../homecomponents/Career'


const page = () => {
  return (
    <div>
      
        <Hero/>
        <div className="mt-12">
          <Prebody/>
        </div>
        <Emailinfo/>
        <Career/>
    </div>
  )
}

export default page