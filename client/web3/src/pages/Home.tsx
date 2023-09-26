import React from 'react'
import LeadingTool from '../layout/LeadingTool/LeadingTool'
import WhyWeb from '../layout/WhyWeb/WhyWeb'
import DiscowerWeb from '../layout/DiscowerWeb/DiscowerWeb'
import Expert from '../layout/Expert/Expert'
import Latest from '../layout/Latest/Latest'
import Library from '../layout/Library/Library'
import Competition from '../layout/Competition/Competition'

export default function Home() {
  return (
    <>
        <LeadingTool/>
        <WhyWeb/>
        <DiscowerWeb/>
        <Expert/>
        <Latest/>
        <Library/>
        <Competition/>
    </>
   
  )
}
