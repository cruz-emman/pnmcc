import { AboutUsContent } from '@/components/home/aboutus-content'
import FooterContent from '@/components/home/footer-content'
import { HeaderContent } from '@/components/home/header-content'
import NavbarContent from '@/components/home/navbar-content'
import { PartnershipContent } from '@/components/home/partnership-content'
import { navItems } from '@/data'

const Home = () => {
  return (
    <main className="
      relative 
      flex flex-col items-center justify-center 
      overflow-hidden 
      w-full
      px-4 sm:px-8 md:px-10
    ">
      {/* Main Container */}
      <div className="w-full max-w-7xl space-y-16 md:space-y-24">

        {/* NAVBAR */}
        <div className="px-2 sm:px-0">
          <NavbarContent items={navItems} />
        </div>

        {/* HEADER / HERO SECTION */}
        <section className="px-2 sm:px-0">
          <HeaderContent />
        </section>

        {/* PARTNERSHIP SECTION */}
        <section className="px-2 sm:px-0">
          <PartnershipContent />
        </section>

        {/* ABOUT US SECTION */}
        <section className="px-2 sm:px-0">
          <AboutUsContent />
        </section>

      </div>

      {/* FOOTER */}
      <footer className="w-full px-2 sm:px-0 mt-20">
        <FooterContent />
      </footer>
    </main>
  )
}

export default Home
