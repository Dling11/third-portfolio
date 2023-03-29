import { useState } from 'react'
import useMediaQuery from '../../hooks/useMediaQuery'
import Link from './Link'
import icon from "../../assets/menu-icon.svg"
import close from "../../assets/close-icon.svg"

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {

   const [isMenuToggled, setIsMenuToggled] = useState(false);
   const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
   const navbarBackground = isTopOfPage ?  "" : "bg-red";

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className='flex items-center justify-between mx-auto w-5/6'>
         <h4 className='font-playfair text-3xl font-bold'>Dling</h4>

         {/* ======> Desktop nav <====== */}
         {isAboveSmallScreens ? (
            <div className='flex justify-between gap-16 font-opensans text-sm font-semibold'>
               <Link 
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
               />
               <Link 
                  page="Skills"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
               />
               <Link 
                  page="Projects"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
               />
               <Link 
                  page="Testimonials"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
               />
               <Link 
                  page="Contact"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
               />
            </div>
         ) : ( //==============> just to sumarize if the window reach 768px => it return as false and executed this..
            <button
               className='rounded-full bg-red p-2'
               onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
               <img src={icon} alt="menu-icon" />
            </button>
         )}

         {/* ======> mobile menu pop up <====== */}
         {!isAboveSmallScreens && isMenuToggled && (
            <div className='fixed right-0 bottom-0 h-full bg-blue w-[300px]'>

               {/*======> Close icon <======*/}
               <div className='flex justify-end p-12'>
                  <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <img src={close} alt="close-icon" />
                  </button>
               </div>

               {/*======> Menu Items <======*/}
               <div className='flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue'>
               <Link 
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
               />
               <Link 
                  page="Skills"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
               />
               <Link 
                  page="Projects"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
               />
               <Link 
                  page="Testimonials"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
               />
               <Link 
                  page="Contact"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
               />
               </div>
            </div>
         )}
      </div>
    </nav>
  )
}

export default Navbar