import React, { useState, useEffect } from 'react';
import FloatingMenu from '../../components/FloatingMenu';
import { Element } from 'react-scroll';

import powerfulthoughtsImg from '../../assets/images/powerfulthoughts.jpg';

const PowerfulThoughts = () => {

    const menuItems = [
        "Generosity brings success"
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
                    <h1 className="text-5xl font-bold text-center">Powerful Thoughts</h1>
                    <Element name="Generosity brings success" id="Generosity brings success" className="mt-4">
                        <h3 className="text-3xl font-semibold py-2 text-center">Generosity brings success</h3>
                        <div className="grid md:grid-cols-3 gap-6 items-center">
                            {/* Main Text */}
                            <div className="md:col-span-2 space-y-4">
                                <h4 className='font-semibold text-lg pt-2'>
                                    Projection:
                                </h4>
                                <h4 className='text-indent-8 text-justify'>
                                    We have a lot of treasures - treasure of virtue, power, knowledge which we usually don't put into use. When they are out of use for a long time, they get wasted away and are not available to us at the right time.
                                </h4>
                                <h4 className='font-semibold text-lg pt-2'>
                                    Solution:
                                </h4>
                                <h4 className='text-indent-8 text-justify'>
                                    The more generously we use the treasures that we have with us for the benefit of others and ourselves, too, the more these treasures are available for us at the right time.
                                </h4>
                                <h4 className='text-indent-8 text-justify'>
                                    For being generous with our treasures, we find ourselves moving easily towards success with the blessings that we get, in return.
                                </h4>
                            </div>
            
                            {/* Image 1 */}
                            <div className="grid-col-1 justify-center m-auto">
                            <img
                                src={powerfulthoughtsImg}
                                alt="Powerful Thoughts"
                                className="rounded-xl shadow-2xl w-full md:w-fit md:h-72"
                            />
                            {/* <h4 className='text-green-800 text-center text-2xl font-bold'>Neem Leaf </h4> */}
                            
                            </div>
                        </div>
                    <hr className='border-green-800 my-4 border-[1.5px]' />
                    </Element>
                    <div>
                        <h3 className="p-4 font-messiri text-base md:text-sm text-green-800 font-normal rounded-2xl text-center"><b>Disclaimer:</b> This web site is a collection of material I have received over the years from loved ones, friends, well-wishers and like-minded people who believe in life as a wonderful gift of God. A gift we need to honor and preserve with health, happiness and self respect. If any material infringes on your copyright, please inform us through Email mentioned below and we will remove it.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PowerfulThoughts