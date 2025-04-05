import React, { useState, useEffect } from 'react';
import FloatingMenu from '../../components/FloatingMenu';
import { Element } from 'react-scroll';

const Happiness = () => {

    const menuItems = [
        "Creating Happiness in Your Life",
        "Poem on Happiness"
    ];
        
    const [activeSection, setActiveSection] = useState(menuItems[0]);
    
    // Handle scroll event for automatic highlighting
    useEffect(() => {
        const handleScroll = () => {
        let currentSection = menuItems[0];
    
        menuItems.forEach((item) => {
            const section = document.getElementById(item);
            if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
                currentSection = item;
            }
            }
        });
    
        setActiveSection(currentSection);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [menuItems]);

    return (
        <div className='bg-[#c5e2b2]'>
            <div className="font-messiri max-w-full mx-4 md:mx-12 shadow-md rounded-lg p-4 md:p-6 flex flex-col lg:flex-row gap-6">
                {/* Left Floating Menu */}
                <div className="lg:w-1/5 w-full">
                <FloatingMenu menuItems={menuItems} activeSection={activeSection} />
                </div>

                {/* Right Content Section */}
                <div className="lg:w-4/5 w-full h-fit overflow-y-auto p-2 md:p-4 border text-green-950">
                    <h1 className="text-5xl font-bold text-center">Happiness</h1>
                    <h3 className="text-2xl font-semibold py-2 text-center underline">Fasting and Feasting for</h3>
                    {/* Sections with Smooth Scrolling */}
                    <Element name="Creating Happiness in Your Life" id="Creating Happiness in Your Life" className="mt-2">
                        <h3 className="text-3xl font-semibold py-2 text-center">Creating Happiness in Your Life</h3>
                        <h4 className='text-center text-lg'>
                            Fast from judging others; <br />Feast on seeing the best in people. <br />
                            Fast from emphasis on differences; <br />Feast on the unity of life. <br />
                            Fast from despair; <br />Feast on hope. <br />
                            Fast from thoughts of illness; <br />Feast on the healing power of God. <br />
                            Fast from words that destroy; <br />Feast on phrases that are encouraging. <br />
                            Fast from discontent; <br />Feast on gratitude. <br />
                            Fast from anger; <br />Feast on patience. <br />
                            Fast from being negative; <br />Feast on being positive. <br />
                            Fast from worry; <br />Feast on trust. <br />
                            Fast from complaining; <br />Feast on appreciation. <br />
                            Fast from hostility; <br />Feast on peacemaking. <br />
                            Fast from bitterness; <br />Feast on forgiveness. <br />
                            Fast from constant activity; <br />Feast on slowing down. <br />
                            Fast from disrespect; <br />Feast on recognizing the sacred in all life. <br />
                            Fast from self-concern; <br />Feast on compassion for others. <br />
                        </h4>
                    </Element>
                    <Element name="Poem on Happiness" id="Poem on Happiness" className="mt-2">
                        <h3 className="text-3xl font-semibold py-2 text-center pt-8">Poem on Happiness</h3>
                        <h4 className='text-center font-bold text-lg'>
                            Happiness keeps u Sweet <br />
                            Trials keep u Strong <br />
                            Sorrow keeps u Human <br />
                            Failure Keeps u Humble <br />
                            Success keeps u Glowing <br />
                            But only God Keeps u Going <br />
                        </h4>
                    </Element>
                </div>
            </div>
        </div>
    );
}

export default Happiness