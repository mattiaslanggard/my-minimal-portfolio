import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Mattias Långgård</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Engineering Student & Web Developer</p>
            <p className="text-sm max-w-xl mb-6">I'm a 22 year old student about to graduate from Novia UAS with a bachelors degree in electrical engineering with a specialization in IT.
                I code mostly in C# and Python since they're my personal preference in languages when it comes to coding. 
                <br />
                I like building projects from the ground up, from planning and
                designing all the way to solving real-life problems with code.
            </p>
        </div>
    )
}

export default Intro;