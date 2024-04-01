import React from "react";
import Image from "next/image";

const AboutSection = () => {
    return (
        <section className="text-white">
           <div className="md:grid md:grid-col-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image
             src="/images/About.jpg" 
             alt="About jpg"
             width={550} height={500}/>
            <div>
                <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
                <p className="text-base lg:text-lg">
                    I am a full stack web developer with a passion for creating interactive and responsive web Application
                    I have experience working with HTML,CSS,Tailwind css,Javascript,Reactjs,Redux,Node.js, Express,Next.js,SQL and Git. I am a quick lerner and i am always 
                    looking to expand my knowledge and skill set . I am a team player and I am excited to work with others to create amazing
                    Application!! 
                </p>
            <div className="grid grid-cols-5 gap-4 py-12 justify-between">
                <div className="text-white font-bold text-4xl col-span-5 mb-4">Skills</div>
                    <button className="px-6 py-2w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">HTML</button>
                    <button className="px-6 py-2w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">CSS</button>
                    <button className="px-6 py-2w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">Tailwind css</button>
                    <button className="px-6 py-2w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">Javascript</button>
                    <button className="px-6 py-2w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">REACTjs</button>
                    <button className="px-6 py-2w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">NEXTjs</button>
                    <button className="px-6 py-2w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">Expressjs</button>
                    <button className="px-6 py-2w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">Nodejs</button>
                    <button className="px-6 py-2w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">SQL</button>
                    <button className="px-6 py-2w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">MongoDB</button>
                    <button className="px-6 py-2w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">Github</button>
                    
                </div>
            </div>
           </div>
        </section>
    );
};

export default AboutSection;