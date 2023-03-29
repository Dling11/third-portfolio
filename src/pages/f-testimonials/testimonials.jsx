import { motion } from "framer-motion"
import LineGradient from "../../components/LineGradient"


const Testimonials = ({ setSelectedPage }) => {

   const comboStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
   before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`

  return (
    <section
      id='testimonials'
      className='pt-32 pb-16'
    >

      {/* ==========> Heading <=========== */}
      <motion.div
        onViewportEnter={() => setSelectedPage("testimonials")}
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          TESTIMONIALS
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
          Wake up to reality. Nothing ever goes as planned in this world. The longer you live, the more you realize that only pain, suffering, and futility exist in this reality.
        </p>
      </motion.div>

      {/* ==========> Testimonials <=========== */}
      <div className="md:flex md:justify-between gap-8">

        <motion.div
            className={`bg-blue ${comboStyles} before:content-person1`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <p className="font-playfair text-6xl">“</p>
            <p className="text-center text-xl">
              The reality is much a straight forward process, where people can't say no to it.
            </p>
        </motion.div>

        <motion.div
            className={`bg-red ${comboStyles} before:content-person2`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            variants={{ 
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <p className="font-playfair text-6xl">“</p>
            <p className="text-center text-xl">
              I use to love every happiness I have. Until reality takes everything from me.
            </p>
        </motion.div>
 
        <motion.div
            className={`bg-yellow ${comboStyles} before:content-person3`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <p className="font-playfair text-6xl">“</p>
            <p className="text-center text-xl">
              No one can refuse to our reality, every scenario has it's own rules and betrayal.
            </p>
        </motion.div>

      </div>
    </section>
  )
}

export default Testimonials