import React, { useState, useEffect } from 'react';
import FloatingMenu from '../../components/FloatingMenu';
import { Element } from 'react-scroll';

import peaceImg from '../../assets/images/peaceImg.jpg';

const Peace = () => {

    const menuItems = [
        "Peace"
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
                    <h1 className="text-5xl font-bold text-center">Peace</h1>
                    <Element name="Peace" id="Peace" className="mt-4">
                        <h3 className="text-2xl font-semibold py-2 text-center">Be happy and be at peace my friends and readers of this message!</h3>
                        <div className="grid md:grid-cols-3 gap-6 items-center">
                            {/* Main Text */}
                            <div className="md:col-span-2 space-y-4">
                                <h4 className="font-semibold text-lg text-center mt-2">
                                    Are YOU Awake and at PEACE, or still asleep?
                                </h4>
                                <h4 className="font-normal text-lg text-justify text-indent-8 mt-2">
                                    Although you believe you woke up this morning it is highly likely that you are still fast asleep. Not the kind of sleep that kept you unconscious during the night, but the kind of sleep that has overcome us all, to some extent or other, during our waking hours. It is the sleep of the unenlightened, it is the sleep of ignorance, it is the sleep of the unaware, it is the sleep of a consciousness that thinks it is awake and aware and knows not that it is deluding itself. It is the kind of sleep that generates its own form of nightmare, a nightmare that seems so real that it perpetuates itself.
                                </h4>
                            </div>
            
                            {/* Image 1 */}
                            <div className="grid-col-1 justify-center m-auto">
                            <img
                                src={peaceImg}
                                alt="Peace"
                                className="rounded-xl shadow-2xl w-full md:w-fit md:h-72"
                            />
                            {/* <h4 className='text-green-800 text-center text-2xl font-bold'>Neem Leaf </h4> */}
                            
                            </div>
                        </div>
                        <h4 className='font-semibold text-lg text-center mt-8'>
                            Brief checklist of seven of the many signs and symptoms of someone who is sleepwalking through their life.
                        </h4>
                        <h4 className='font-semibold text-lg pt-2'>
                            Stress Projections - You are still ...
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            ... asleep AND NOT AT PEACE if you blame others, situations or events for your stressful feelings. Stress is a form of pain or discomfort that comes to tell you there is something you need to change in yourself, not in another. All stress is self created regardless of the circumstances. Every time you blame others for what you feel it means you are asleep to the truth that your feelings are your response, therefore your responsibility or response ability. The awakened soul accepts full responsibility for their thoughts/ emotions/ attitudes/ actionseverywhere and always! Thus creating peacefulness in you.
                        </h4>
                        <h4 className='font-semibold text-lg pt-2'>
                            Self Comparisons - You are still ...
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            ... asleep whenever you compare yourself with another person. It means you have not yet realized your own uniqueness and value. In effect you are saying, `I want to be someone else'. Which of course is impossible. Or you are unconsciously thinking, `I am unworthy, I am of less value than them'. Which is untrue! The awakened soul, the peaceful soul, knows its value and is able to affirm their own worth. They never aspire to be someone else. They are constantly rising to the challenge of expanding their capacity and awakening their own true potential.
                        </h4>
                        <h4 className='font-semibold text-lg pt-2'>
                            Controlling Behavior - You are still ...
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            ... asleep whenever you attempt to control or manipulate others. You are under the illusion that others should do your bidding. Sometimes it looks like they do, but they don't. The truth is everyone makes their own decisions on how they will act and interact. If you are a clever sleepwalker you may sense the numerous vulnerabilities of others and be quite adept at exploiting them to your own ends. But that only keeps you locked in a false power trip that is actually draining your power and peacefulness. Deep down your conscience knows you are taking advantage and acting against the grain of right relationship. The awakened soul never takes advantage of other sleepwalkers. They know their role is to awaken others, not exploit them.
                        </h4>
                        <h4 className='font-semibold text-lg pt-2'>
                            Emotional Indulgence - You are still ...
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            ... asleep when you indulge your emotions, when you go searching for some stimulus to invoke the feelings of certain emotional states. Perhaps you like to argue because is seems to enliven your day, which means you are indulging in anger. If you keep talking about what went wrong, what you lost, then you are wallowing on sorrow. And if you keep looking into the future with trepidation and anxiety then you are likely to have an addiction to fear. The awakened soul has broken their dependency on emotional stimulation from outside and inside. They are at peace within themselves. They have relearned to chose and create their feelings at each moment in every scene. They also recognize this ability is not easily learned or quickly perfected, and they privately know that they help themselves by helping others.
                        </h4>
                        <h4 className='font-semibold text-lg pt-2'>
                            Happy Purchasing - You are still ...
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            ... asleep if you go shopping to be happy. It means you are still attempting to complete yourself with something that is not you! It means you are still trying to find fulfillment by filling your life with stuff. The awakened peaceful soul knows they are already complete and can never be diminished. Their only effort is to remember and reconnect with their already full filled self!
                        </h4>
                        <h4 className='font-semibold text-lg pt-2'>
                            Problem People - You are still ...
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            ... asleep if you believe the 'other person' is the problem. You have not yet realized that it's not what others say or do that is the problem, it is how you judge them that creates your negative feelings about them. In effect it's how you see them that's the real problem. You have not yet learned to choose how you perceive others, you are still at the mercy of old conditioned perceptions. One clear sign of this is the absence of compassion. To the awakened soul the 'other person' is never the problem.
                        </h4>
                        <h4 className='font-semibold text-lg pt-2'>
                            Detached Expectations - You are still ...
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            ... asleep if your happiness is dependent on your expectations being met. You probably have not yet seen that your expectations are really desires in disguise. And all desire has fear (stress) built in  fear of not getting what you want. And when your expectations are not met you get upset and chase your own happiness away. The awakened soul has expectations but if they are not met it's OK, they don't lose the plot, because their happiness is not dependent on their expectations being met. They learn to accept as is and find peace internally.
                        </h4>
                        <h4 className='font-semibold text-lg pt-2'>
                            Question:
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            Which of the above symptoms do you display the most rate each one (1 is low and 10 is high)
                        </h4>
                        <h4 className='font-semibold text-lg pt-2'>
                            Reflection:
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            Take one of the above each day for the next seven days and visualize the awakened state and see how well you can practice it during the day.
                        </h4>
                    </Element>
                </div>
            </div>
        </div>
    )
}

export default Peace