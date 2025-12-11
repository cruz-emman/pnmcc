import FooterContent from "@/components/home/footer-content"
import NavbarContent from "@/components/home/navbar-content"
import {  navItemsLinks } from '@/data';

const SubmissionLayoutProvider = async ({ children }: { children: React.ReactNode }) => {
    return (
        <main
            className="relative 
            flex flex-col items-center justify-center 
            overflow-hidden 
            w-full
            px-4 sm:px-8 md:px-10">
            <NavbarContent items={navItemsLinks} />

            <div className="w-full max-w-7xl space-y-16 mx-auto md:space-y-24 pt-20">
                <div className="px-2 sm:px-0">
                    {children}
                </div>
            </div>
            <footer className="w-full px-2 sm:px-0 mt-20">
                <FooterContent />
            </footer>
        </main>
    )
}

export default SubmissionLayoutProvider