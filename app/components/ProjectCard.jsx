import React from 'react';
import Link from 'next/link';
import { HiOutlineCodeBracketSquare } from "react-icons/hi2";
import { FaRegEye } from "react-icons/fa";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
    return (
        
        <div className="relative">
            
            <div 
                className='h-52 md:h-72 rounded-xl overflow-hidden relative group'
                style={{ background: `url(${imgUrl})`, backgroundSize: "cover"}}
            >
                <div className='overlay flex items-center justify-center absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300'>
                    <Link href={gitUrl}
                        className="flex items-center justify-center h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white transition-colors duration-300">
                        <HiOutlineCodeBracketSquare className='h-10 w-10 text-[#ADB7BE] cursor-pointer hover:text-white transition-colors duration-300' />
                        
                    </Link>    
                    <Link href={previewUrl} 
                        className="flex items-center justify-center h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white transition-colors duration-300">
                        < FaRegEye className='h-10 w-10 text-[#ADB7BE] cursor-pointer hover:text-white transition-colors duration-300' />
                        
                    </Link>    
                    
                </div>
           </div>
           <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4'>
             <h5 className='text-xl font-semibold mb-2'>{title}</h5>
             <p className='text-[#ADB7BE]'>{description}</p>
           </div>
        </div> 
    );
}

export default ProjectCard;



