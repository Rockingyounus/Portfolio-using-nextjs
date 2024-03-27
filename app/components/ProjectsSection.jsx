import React from 'react';
import ProjectCard from "./ProjectCard";


const ProjectsSection = () =>
{
    return  (
    

<div className="flex flex-wrap">
    
    <div className="w-full md:w-1/3 px-2 mb-4">
        <ProjectCard
            imgUrl="images/projects/1.png"
            title="Crud Operation App"
            description="Crud App using middleware-redux-toolkit"
            gitUrl="https://github.com/Rockingyounus/Crud-app-redux-middleware-asyncthunk"
            previewUrl="https://aquamarine-marigold-6af453.netlify.app/"
            
        />
    </div>
    <div className="w-full md:w-1/3 px-2 mb-4">
        <ProjectCard
            imgUrl="images/projects/2.png"
            title="Crud"
            description="Description 2"
            gitUrl="/"
            previewUrl="/"
        />
    </div>
    <div className="w-full md:w-1/3 px-2 mb-4">
        <ProjectCard
            imgUrl="images/projects/3.png"
            title="Ecommerce App"
            description="Ecommerce App using Reactjs and Firebase"
            gitUrl="https://github.com/Rockingyounus/Ecommerce/tree/master"
            previewUrl="https://fabulous-vacherin-adb1cc.netlify.app/"
        />
    </div>
    <div className="w-full md:w-1/3 px-2 mb-4">
        <ProjectCard
            imgUrl="images/projects/4.png"
            title="Project 4"
            description="Description 4"
            gitUrl="https://github.com/Rockingyounus/Ecommerce/tree/master"
            previewUrl="https://fabulous-vacherin-adb1cc.netlify.app/"
        />
    </div>
    <div className="w-full md:w-1/3 px-2 mb-4">
        <ProjectCard
            imgUrl="images/projects/5.png"
            title="Mock interview"
            description="Mock-interview App where anyone can use to schedule thier mock-interview "
            gitUrl="https://github.com/Rockingyounus/Video-calling-App/tree/master"
            previewUrl="/"
        />
    </div>
    <div className="w-full md:w-1/3 px-2 mb-4">
        <ProjectCard
            imgUrl="images/projects/6.png"
            title="Weather Forcaste App"
            description="Weather Forcaste App where user can access weather data"
            gitUrl="https://github.com/Rockingyounus/Weather-app"
            previewUrl="https://weatherforcastappp.netlify.app/"
        />
    </div>
    <div className="w-half md:w-1/3 px-2 mb-4">
        <ProjectCard
            imgUrl="images/projects/7.png"
            title="Weather Forcaste App"
            description="Weather Forcaste App where user can access weather data"
            gitUrl="https://github.com/Rockingyounus/Weather-app"
            previewUrl="https://weatherforcastappp.netlify.app/"
        />
    </div>
    
</div>

    );
}

export default ProjectsSection;