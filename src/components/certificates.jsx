import React from "react";
import {CERTIFICATES} from "../constants/index.js"
import {motion} from "framer-motion";

const Certificates = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 ">
            <motion.h2
                whileInView={{opacity: 1, y:0}}
                initial={{opacity: 0, y : -100}}
                transition={{duration: 0.5}}
                className="my-20 text-center text-4xl">
                Certificates
            </motion.h2>
            <div>
                {CERTIFICATES.map((item, index) => (
                    <div key = {index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4">
                            <motion.p
                                whileInView={{opacity: 1, x : 0}}
                                initial={{opacity: 0, x : -100}}
                                transition={{duration: 1}}
                                className="mb-2 text-sm text-neutral-400">{item.year}</motion.p>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold ">
                                {item.role}
                            </h6>
                            <motion.p
                                whileInView={{opacity: 1, x : 0}}
                                initial={{opacity: 0, x : -100}}
                                transition={{duration: 1}}
                                className="mb-4 text-neutral-400 ">{item.description}</motion.p>
                            {item.technologies.map((tech, index) => (
                                <motion.span
                                    whileInView={{opacity: 1, x : 0}}
                                    initial={{opacity: 0, x : -100}}
                                    transition={{duration: 1}}
                                    key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">{tech}</motion.span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Certificates;