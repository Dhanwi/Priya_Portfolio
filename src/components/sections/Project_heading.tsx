// import React from 'react'
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";


const Project_heading = () => {
  return (
    <>
    <div className='flex flex-col items-start sm:ml-44 ml-6 text-left'>
    <Header useMotion={true} {...config.sections.projectWork} />
      <div className="flex flex-col gap-3 w-full items-start text-left">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.projectWork.content}
        </motion.p>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.projectWork.content2}
        </motion.p>
      </div>
    </div>
       
    </>
  )
}

export default Project_heading
