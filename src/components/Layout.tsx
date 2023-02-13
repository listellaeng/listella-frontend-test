import React from 'react'
import { Footer, Header, Logo, SubHeader } from '@/components'
import { color } from '@/types/colors'

export interface LayoutProps  { 
  children: React.ReactNode
}

function Layout({ children }: LayoutProps){
    return (
      <div className='layout'>
        <Logo />
        <Header />
        <div style={{ height: "4px", borderRadius: "4px", backgroundColor: color.Anti_flash_white, width: "45%", marginTop: "26px", marginInline: "auto" }}></div>
        <SubHeader />
        {children}
        <Footer />
      </div>
    )
}

export default Layout
