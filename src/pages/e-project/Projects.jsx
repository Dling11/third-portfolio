import LineGradient from "../../components/LineGradient"
import { motion } from "framer-motion"
import Project from "./Project"
import data from "./data";

const Projects = ({ setSelectedPage }) => {

  const container = {
    hidden: {},
    visible: {
       transition: { staggerChildren: 0.2 }
    }
 }

  return (
    <section
      id="projects"
      className="pt-48 pb-48"
    >
      {/* =======> Heading <======= */}
      <motion.div
        onViewportEnter={() => setSelectedPage("projects")}
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
         <div>
            <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
            </p>
            <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />     {/* => such a good idea > i jst realize u cn input width at<LineGradient /> without clasname */}
            </div>
         </div>
         <p className="mt-10 mb-10">
            Wake up to reality. Nothing ever goes as planned in this world. The longer you live, the more you realize that only pain, suffering, and futility exist in this reality.
         </p>
      </motion.div>

      {/* Projects */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          
      {/* =======> First row  <======= */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          > 
            BEAUTIFUL USER INTERFACES
          </div>

          {
            data.map((proj => (
              <Project 
                key={proj.id}
                id={proj.id}
                title={proj.title}
                description={proj.description}
                image={proj.image}
              />
            )))
          }

      {/* =======> Last row  <======= */}
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects