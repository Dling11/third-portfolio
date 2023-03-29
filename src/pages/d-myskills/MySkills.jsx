import { motion } from "framer-motion"
import LineGradient from "../../components/LineGradient"
import useMediaQuery from "../../hooks/useMediaQuery"
import Skills from "../../assets/skills-image.png"


const MySkills = ({ setSelectedPage }) => {

   const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="skills"
      className="pt-10 pb-24"
   >
            {/* ============> Header & image <=========== */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">

         <motion.div
            onViewportEnter={() => setSelectedPage("skills")}
            className="md:w-1/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
            }}
         >
            <p className="font-playfair font-semibold text-4xl mb-5">
               MY <span className="text-red">SKILLS</span>
            </p>
            <LineGradient />
            <p className="mt-10 mb-7">
               There are only really a few stories to tell in the end, and betrayal and the failure of love is one of those good stories to tell.
            </p>
         </motion.div>

         <div className="mt-16 md:mt-0">
            {isAboveLarge ? (
               <motion.div
               className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
               before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               transition={{ duration: 0.5 }}
               variants={{
               hidden: { opacity: 0, x: 50 },
               visible: { opacity: 1, x: 0 },
               }}
               >
               <img
                  className="z-10"
                  src={Skills}
                  alt="skills"
               />
               </motion.div>
            ) : (
               <img 
                  className="z-10"
                  src={Skills} 
                  alt="skills"
               />
            )}
        </div>
      </div>

            {/* ============> Skills <=========== */}
      <div className="md:flex md:justify-between mt-16 gap-32"> {/* ====> Fix this later > create a object style to lessen code */}
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" /> {/* ===> Self closing div */}
          </div>
          <p className="mt-5">
            Wake up to reality. Nothing ever goes as planned in this world. The longer you live, the more you realize that only pain, suffering, and futility exist in this reality.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Innovative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" /> {/* ===> Self closing div */}
          </div>
          <p className="mt-5">
            Wake up to reality. Nothing ever goes as planned in this world. The longer you live, the more you realize that only pain, suffering, and futility exist in this reality.
          </p>
        </motion.div>
        
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Imaginative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" /> {/* ===> Self closing div */}
          </div>
          <p className="mt-5">
            Wake up to reality. Nothing ever goes as planned in this world. The longer you live, the more you realize that only pain, suffering, and futility exist in this reality.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default MySkills