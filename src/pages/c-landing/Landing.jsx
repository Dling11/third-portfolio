import { motion } from "framer-motion"
import useMediaQuery from "../../hooks/useMediaQuery"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Profile from "../../assets/SoloProfile.png"
import SocialMediaIcons from "../../components/SocialMediaIcons"
// import curentPages from "../../hooks/data"

   const Landing = ({ setSelectedPage }) => {

   const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

      return (
         <section
            id="home"
            className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
         >

         {/* =====> Image Section <====== */}
         <motion.div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32" // ==> Be aware of order-2
            onViewportEnter={() => setSelectedPage("home")}
         > 
            {isAboveMediumScreens ? (
               <motion.div
                  className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
                  before:w-full before:max-w-[400px] md:before:max-w-[410px] before:h-full before:border-2 before:border-blue before:z-[-1]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                  }}
               > {/* ==> To summarize "before" is use frequently, bcs is is relative & absulote at the same div*/}
                  <img 
                     className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[410px]"
                     src={Profile} 
                     alt="profile-solo"
                  />
               </motion.div>
            ) : (
               <div>
                  <img 
                     className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
                     src={Profile} 
                     alt="profile-solo" 
                  /> 
               </div>
            )}
         </motion.div>

            {/* =====> First Container => second but re ordered <====== */}
            <div className="z-30 basis-2/5 mt-12 md:mt-32 ">

            {/* =====> Heading Section <====== */}
               <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                  }}
               >
                  <p className="text-6xl font-playfair z-10 text-center md:text-start">
                     Ding & {""}        {/* ==> represent as {""} space */}
                     <span 
                        className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1] pl-4"
                     >  
                        Ling
                     </span>
                  </p>

                  <p className="mt-10 mb-7 text-sm text-center md:text-start">
                     Wake up to reality. Nothing ever goes as planned in this world. The longer you live, the more you realize that only pain, suffering, and futility exist in this reality.
                  </p>

               </motion.div>

            {/* =====> Call to Action <====== */}
            <motion.div
               className="flex mt-5 justify-center md:justify-start"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               transition={{ delay: 0.2, duration: 0.5 }}
               variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
               }}
            >
               <AnchorLink
                  className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
                  hover:bg-blue hover:text-white transition duration-500"
                  onClick={() => setSelectedPage("contact")}
                  href="#contact"
               >
                  Contact Me
               </AnchorLink>
               <AnchorLink
                  className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
                  onClick={() => setSelectedPage("contact")}
                  href="#contact"
               >
                  <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
                  Let's talk.
                  </div>
               </AnchorLink>
            </motion.div>

            <motion.div
               className="flex mt-5 justify-center md:justify-start"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               transition={{ delay: 0.4, duration: 0.5 }}
               variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
               }}
            >
               <SocialMediaIcons />
            </motion.div>
            </div>
         </section>
      )
   }

export default Landing