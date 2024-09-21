/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaPlus, FaGithub } from "react-icons/fa";
import { MdOutlineWebhook } from "react-icons/md";
import { motion } from "framer-motion";
import DetailCard from "./DetailCard/DetailCard";
import Toast from "../../../../../shared/components/Toast/Toast";

export default function ProjectCard({ project }) {
    const [isDetailsOpened, setIsDetailsOpened] = useState(false);
    const [message, setMessage] = useState("")

    const openDetails = () => setIsDetailsOpened(true);

    const closeDetails = () => setIsDetailsOpened(false);

    const goToGithub = () => {
        if (project.githubUrl == "") {
            return setMessage("This is private repository.")
        }
        window.location = project.githubUrl;
    }

    const goToDemo = () => {
        if (project.demoUrl == "") {
            return setMessage("This project is not deployed, yet.")
        }
        window.location = project.demoUrl;
    }

    return (
        <>
            <Toast message={message} setMessage={setMessage}/>
            {isDetailsOpened && <DetailCard project={project} closeDetails={closeDetails}/>}
            {!isDetailsOpened && 
            <motion.div 
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col border h-[360px] w-80 rounded-md shadow-sm mx-4 my-4 bg-white"
            >
                <div className="w-full overflow-hidden flex justify-center items-center h-28 border-b">
                    <img src={project.imageUrl} alt="" />
                </div>
                <div className="grow shrink-0">
                    <h2 className="mt-4 text-center font-bold text-xl">{project.name}</h2>
                    <p className="text-center px-4 text-sm mt-4">{project.summary}</p>
                    <button className="flex items-center mx-auto mt-4 text-sm border rounded-lg py-2 px-4 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700" onClick={openDetails}>
                        See more 
                        <FaPlus className="ms-2"/>
                    </button>
                </div>
                <div className="grow shrink-1 flex border-t">
                    <button className="w-1/2 flex items-center justify-center border-r text-base hover:bg-gray-100" onClick={goToGithub}>
                        Github
                        <FaGithub className="ms-2"/>
                    </button>
                    <button className="w-1/2 flex items-center justify-center text-base hover:bg-gray-100" onClick={goToDemo}>
                        Demo
                        <MdOutlineWebhook className="ms-2 text-xl"/>
                    </button>
                </div>
            </motion.div>}
        </>
    )
}