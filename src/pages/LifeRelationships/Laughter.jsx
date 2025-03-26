import React, { useState, useEffect } from 'react';
import FloatingMenu from '../../components/FloatingMenu';
import { Element } from 'react-scroll';
import ChatBox from '../../components/ChatBox';

const Laughter = () => {

    const menuItems = [
        "Unburden Yourself with Laughter",
        "Funny Marriage Conversations"
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
                    <h1 className="text-5xl font-bold text-center">Laughter</h1>
                    {/* Sections with Smooth Scrolling */}
                    <Element name="Unburden Yourself with Laughter" id="Unburden Yourself with Laughter" className="mt-2">
                        <h3 className="text-2xl font-semibold py-2 text-center underline">Unburden Yourself with Laughter</h3>
                        <h3 className="text-lg font-semibold py-2 text-center">Religion cannot be anything other than a celebration of life.</h3>
                        <h4 className='text-justify'>
                            A serious person is handicapped: He creates barriers. He cannot dance or sing.
                        </h4>
                        <h4 className='text-justify mt-4'>
                            Laughter, according to Osho, is multi-dimensional. When you laugh, your body, mind and your being laughs in unison. Seriousness is of the ego whereas laughter is ego less ness.
                        </h4>
                        <h4 className='text-center text-lg font-semibold mt-4'>
                            Gautama Buddha made a profound statement
                            "Be a light unto yourself".
                            <br />
                            To this, Osho adds another
                            "Be a joke unto yourself".
                        </h4>
                        <h4 className='text-justify mt-4 text-indent-8'>
                            Osho would say: "I have to tell jokes because you are all religious people, you tend to be serious. I have to tickle you sometimes so that you forget your religiousness, your philosophies, theories, systems, and you fall down to earth".
                        </h4>
                        <h4 className='text-justify mt-4 text-indent-8'>
                            Osho has seen, that in spontaneous laughter, the noise of the mind stops for a few precious moments, allowing us to experience mindlessness or meditation, however fleetingly.
                        </h4>
                        <h4 className='text-justify mt-4 text-indent-8'>
                            Osho said: "I declare laughter to be the highest religious quality. And if we can decide that every year, for one hour, at a certain date, at a certain time, the whole world will laugh (together), it will help to dispel darkness, violence and stupidities - because laughter is a unique human characteristic... It can relax you, it can make you feel light, it can make your world a beautiful experience. It can change everything in your life. Laughter can make life worth living, something to be grateful for"
                        </h4>
                        <h4 className='text-justify mt-4 text-indent-8'>
                            "German thinker Count Keyserling wrote that ill health is unreligious. An ill person is desireless not because he has become desireless but because he is weak. A healthy person will laugh, he would like to enjoy, be merry - he cannot be sad."
                        </h4>
                        <h4 className='text-justify mt-4 text-indent-8'>
                            Religious fanatics tell you to go on a fast, suppress your body, and torture yourself. Laughter comes out of health. It's an overflowing energy. That's why children can laugh and their laughter is total. Their whole body is involved in it when they laugh; you can see their toes laughing."
                        </h4>
                        <h4 className='text-justify mt-4 text-indent-8'>
                            Only laughter can be the real prayer of gratitude. Osho talks about a great Zen master Hotei who was known in Japan as the 'Laughing Buddha'.
                        </h4>
                        <h4 className='text-justify mt-4 text-indent-8'>
                            Osho said: "Hotei is tremendously significant... more people should be like Hotei; more temples should be full of laughter, dancing and singing. If seriousness is lost, nothing is lost. In fact, one becomes more healthy and whole. But if laughter is lost, everything is lost. Suddenly you lose the festivity of your being; you become colourless, monotonous, in a way, dead. Then your energy is not streaming any more".
                        </h4>
                        <h4 className='text-center mt-4'>
                            Osho warned that:
                        </h4>
                        <h4 className='text-center text-lg font-semibold mt-4'>
                            Taking man's laughter away from him is taking his very life away;
                            <br />
                            it is a form of spiritual castration.
                        </h4>
                        <hr className='border-green-800 my-4 border-[1.5px]' />
                    </Element>
                    <Element name="Funny Marriage Conversations" id="Funny Marriage Conversations" className="mt-2">
                        <ChatBox />
                        <hr className='border-green-800 my-4 border-[1.5px]' />
                        <h3 className='text-center mt-4 text-3xl font-semibold underline'>
                            Today's Bible reading is from Genesis...
                        </h3>
                        <h4 className='text-center text-xl font-semibold mt-4'>
                            "And God promised men, that good and obedient wives would be found in all corners of the Earth."
                            <br />
                            Then He made the Earth ROUND, and He laughed!!
                        </h4>
                        <hr className='border-green-800 my-4 border-[1.5px]' />
                        <h3 className='text-center mt-4 text-5xl font-semibold py-4'>
                            January 1 is celebrated as <br />World Laughter Day
                        </h3>
                    </Element>
                </div>
            </div>
        </div>
    );
}

export default Laughter