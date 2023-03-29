import { motion } from "framer-motion";

const Project = ({ id, title, description, image }) => {

   const projectVariant = {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
   }

   const comboStyle = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
     bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
 
   return (
     <motion.div variants={projectVariant} className="relative">
       <div className={comboStyle}>
         <p className="text-2xl font-playfair">{title}</p>
         <p className="mt-7 cursor-default">
            {description}
         </p>
       </div>
       <img src={image} alt={`${title} - ${id}`}/>
     </motion.div>
   );
 };

 export default Project