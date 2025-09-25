import React from 'react'

import Hero from './components/Hero'
import Prebody from './components/Prebody'
import Body from './components/Body'
import Career from '../homecomponents/Career'
import Cta from '@/components/Cta'
import { Footer } from '@/components/Footer'
const page = () => {
  return (
    <div>
      
      <Hero />
      <Prebody/>
      <Body/>
      <Career/>
      
    </div>
  )
}

export default page