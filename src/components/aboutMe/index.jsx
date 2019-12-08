import React from 'react'
import AboutMeCards from './aboutMeCards'

export default function AboutMeSection({ windowWidth }) {
  return (
    <div>
      <AboutMeCards windowWidth={windowWidth} />
    </div>
  )
}
