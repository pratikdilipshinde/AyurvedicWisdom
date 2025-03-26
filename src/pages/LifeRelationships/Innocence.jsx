import React, { useState, useEffect } from 'react';
import FloatingMenu from '../../components/FloatingMenu';
import { Element } from 'react-scroll';

const Innocence = () => {

    const menuItems = [
        "Innocence is Child Like"
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
            <div className="font-messiri max-w-full mx-12 shadow-md rounded-lg p-6 flex gap-6">
                {/* Left Floating Menu */}
                <div className="w-1/5">
                <FloatingMenu menuItems={menuItems} activeSection={activeSection} />
                </div>

                {/* Right Content Section */}
                <div className="w-4/5 h-fit overflow-y-auto p-4 border text-green-950">
                    <h1 className="text-5xl font-bold text-center">Innocence</h1>
                    {/* Sections with Smooth Scrolling */}
                    <Element name="Innocence is Child Like" id="Innocence is Child Like" className="mt-2">
                        <h3 className="text-3xl font-semibold py-2 text-center underline">Innocence is Child Like</h3>
                        <ul className='list-disc pl-8'>
                            <li>The children were lined up in the cafeteria of a Catholic elementary school for lunch. At the head of the table was a large pile of apples.</li>
                            <li>The nun made a note, and posted on the apple tray: "Take only ONE. God is watching".</li>
                            <li>Moving further along the lunch line, at the other end of the table was a large pile of chocolate chip cookies.</li>
                            <li>A child had written a note, "Take all you want. God is watching the apples".</li>
                        </ul>
                        <hr className='border-green-800 my-4 border-[1.5px]' />
                        <ul className='list-disc pl-8'>
                            <li>A Kindergarten teacher was observing her classroom of children while they were drawing. She would occasionally walk around to see each child's work.</li>
                            <li>As she got to one little girl who was working diligently, she asked what the drawing was.</li>
                            <li>The girl replied, "I'm drawing God".</li>
                            <li>The teacher paused and said, "But no one knows what God looks like".</li>
                            <li>Without missing a beat, or looking up from her drawing, the girl replied, "They will in a minute".</li>
                        </ul>
                        <hr className='border-green-800 my-4 border-[1.5px]' />
                        <ul className='list-disc pl-8'>
                            <li>A Sunday school teacher: was discussing the Ten Commandments with her five and six year olds.</li>
                            <li>After explaining the commandment to "honor" thy Father and thy Mother, she asked, "Is there a commandment that teaches us how to treat our brothers and sisters"?</li>
                            <li>Without missing a beat one little boy (the oldest of a family) answered, "Thou shall not kill".</li>
                        </ul>
                        <hr className='border-green-800 my-4 border-[1.5px]' />
                        <ul className='list-disc pl-8'>
                            <li>One day a little girl was sitting and watching her mother do the dishes at the kitchen sink. She suddenly noticed that her mother had several strands of white hair sticking out in contrast on her brunette head.</li>
                            <li>She looked at her mother and inquisitively asked, "Why are some of your hairs white, Mom"?</li>
                            <li>Her mother replied, "Well, every time that you do something wrong and make me cry or unhappy, one of my hairs turns white".</li>
                            <li>The little girl thought about this revelation for a while and then said, "Momma, how come ALL of grandma's hairs are white"?</li>
                        </ul>
                    </Element>
                </div>
            </div>
        </div>
    );
}

export default Innocence