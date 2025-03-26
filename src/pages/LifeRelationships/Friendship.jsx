import React, { useState, useEffect } from 'react';
import FloatingMenu from '../../components/FloatingMenu';
import { Element } from 'react-scroll';
import friendship from '../../assets/images/Friendship.jpg';

const Friendship = () => {

    const menuItems = [
        'The Heart of Friendship',
        '"Vitamin F"'
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
                    <h1 className="text-5xl font-bold text-center">Friendship</h1>
                    <Element name="The Heart of Friendship" id="The Heart of Friendship" className="mt-2">
                        <h3 className="text-3xl font-semibold py-4 text-center underline">The Heart of Friendship</h3>
                        <div className="grid md:grid-cols-3 gap-6 items-center">
                            {/* Main Text */}
                            <div className="md:col-span-2 space-y-4">
                                <h4 className="font-semibold text-lg text-center mt-2">
                                    There comes a point in your life when you realize <br />
                                    who matters,<br />
                                    who never did,<br />
                                    who won't anymore...<br />
                                    and who always will.<br />
                                </h4>
                                <h4 className="font-semibold text-lg text-center mt-2">
                                    So, don't worry about people from your past,<br />
                                    there's a reason why they didn't make it to your future.
                                </h4>
                                <h4 className="font-semibold text-lg text-center mt-2">
                                    `Be kinder than necessary<br />
                                    because everyone you meet is fighting some kind of battle.'
                                </h4>
                            </div>
            
                            {/* Image 1 */}
                            <div className="grid-col-1 justify-center m-auto">
                            <img
                                src={friendship}
                                alt="Friendship"
                                className="rounded-xl shadow-2xl w-full md:w-56 md:h-56"
                            />
                            {/* <h4 className='text-green-800 text-center text-2xl font-bold'>Neem Leaf </h4> */}
                            
                            </div>
                        </div>
                        <hr className='border-green-800 my-4 border-[1.5px]' />
                    </Element>
                    <Element name='"Vitamin F"' id='"Vitamin F"' className="mt-2">
                        <h3 className="text-3xl font-semibold py-4 text-center">"Vitamin F"</h3>
                        <h4 className='text-center mt-2'>
                            Why do I have a variety of friends who are all so different in character? How can I get along with them all? I think that each one helps to bring out a `different' part of me. With one of them I am polite. With another I joke. I sit down and talk about serious matters with one. With another I laugh a lot. I listen to one friend's problems. Then I listen to another one's advice for me.
                        </h4>
                        <h4 className='text-center mt-4'>
                            My friends are like pieces of a jigsaw puzzle. When completed, they form a treasure box. A treasure of friends! They are my friends who understand me better than I understand myself. They're friends who support me through good days and bad. Real Age doctors tell us that friends are good for our health.
                        </h4>
                        <h4 className='text-center mt-4'>
                            Dr. Oz calls them Vitamin F (for Friends) and counts the benefits of friends as essential to our well being. Research shows that people in strong social circles have less risk of depression and terminal strokes.
                        </h4>
                        <h4 className='text-center mt-4'>
                            If you enjoy Vitamin F constantly you can be up to 30 years younger than your real age. The warmth of friendship stops stress and even in your most intense moments, it decreases the chance of a cardiac arrest or stroke by 50%. I'm so happy that I have a stock of Vitamin F!
                        </h4>
                        <h4 className='text-center mt-4'>
                            In summary, we should value our friends and keep in touch with them. We should try to see the funny side of things and laugh together and pray for each other in the tough moments.
                        </h4>
                        <h4 className='text-center mt-4'>
                            Some of my friends are friends on line.<br />
                            I know I am part of theirs because their names appear on my computer screen every day and I feel blessed that they care as much for me as I care for them. If ever you don't see my name on your screen please remember that it is not because I have forgotten you but because something has happened to me.
                        </h4>
                        <h4 className='text-center mt-4'>
                            I know as we age we can not be on line forever but we are making the best of it while we still can. While there is breath in me I will always keep in touch, as often as I can, and will not forsake you, Ever.
                        </h4>
                        <h4 className='font-bold text-lg text-center mt-4'>Thank you for being one of my Vitamins!</h4>
                    </Element>
                </div>
            </div>
        </div>
    );
}

export default Friendship