import React from 'react';
import Link from 'next/link';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
      <div className="bg-gradient-to-t from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className='z-10'>
        <h5 className='text-xl font-bold text-white my-2'>Let Connect</h5>
      
        <div className='socials flex flex-row gap-2'>
            <Link href="https://Github.com">
              <FaGithub/>
            </Link>
            <Link href="https://Linkedin.com">
              <FaLinkedin/>
            </Link>
            <Link href="https://Instagaram.com">
              <FaInstagram/>
            </Link>
            <Link href="https://Twiter.com">
              <RiTwitterXFill/>
            </Link>
          </div>
        </div>
            <div>
                <form className="flex flex-col gap-6">
                <div className="mb-6">
                    <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Your email</label>
                    <input type="email" 
                    id="email" 
                    required
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    placeholder="Sunderpichai@google.com"
                    />
                </div> 

                <div className="mb-6">
                    <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">Subject</label>
                    <input type="text" 
                    id="subject" 
                    required
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    placeholder="Just say hi"
                    />
                </div>

                <div>
                    <label
                    htmlFor="message"
                    className='text-white block text-sm mb-2 font-medium'
                    >Message
                    </label>
                    <textarea
                    name="message"
                    id="message"
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Let&apos;s talk about"/>
                </div>
                   <button
                   type="submit"
                   className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>Send message</button> 
                </form>
          </div>

        
      
    </section>
  );
};

export default EmailSection;
