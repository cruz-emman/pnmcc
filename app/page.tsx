import { AboutUsContent } from '@/components/home/aboutus-content'
import FooterContent from '@/components/home/footer-content'
import { HeaderContent } from '@/components/home/header-content'
import NavbarContent from '@/components/home/navbar-content'
import { PartnershipContent } from '@/components/home/partnership-content'
import { FloatingNav } from '@/components/ui/floating-navbar'
import { navItems } from '@/data'
import React from 'react'

const Home = () => {
  return (
    <main className='relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <div className='max-w-7xl w-full'>
        <NavbarContent />
        <HeaderContent />
        <AboutUsContent />
        <PartnershipContent />
        <FooterContent />
      </div>
    </main>
  )
}

export default Home