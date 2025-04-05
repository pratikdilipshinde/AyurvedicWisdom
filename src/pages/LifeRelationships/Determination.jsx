import React, { useState, useEffect } from 'react';
import FloatingMenu from '../../components/FloatingMenu';
import { Element } from 'react-scroll';

const Determination = () => {

    const menuItems = [
        "Faith Brings Determination",
        "Patience and Determination Leads to Success",
        "The Art of Detachment"
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
                    <h1 className="text-5xl font-bold text-center">Determination</h1>
                    {/* Sections with Smooth Scrolling */}
                    <Element name="Faith Brings Determination" id="Faith Brings Determination" className="mt-2">
                        <h3 className="text-2xl font-semibold py-2 text-center underline">Faith Brings Determination</h3>
                        <h4 className='text-indent-8 text-justify'>
                            When we are trying for something we find ourselves losing hope and giving up. Although we feel that we are trying till the end, it is usually not so. Sometimes we find ourselves giving up just before we could have succeeded.
                        </h4>
                        <h4 className='font-semibold text-lg pt-4'>Solution:</h4>
                        <h4 className='text-indent-8 text-justify'>
                            Determination to succeed comes with faith - faith in ourselves and the faith that things will work out fine. This faith doesn't let us give up mid-way but gives us determination that makes us put in efforts till we achieve success.
                        </h4>
                    </Element>
                    <Element name="Patience and Determination Leads to Success" id="Patience and Determination Leads to Success" className="mt-2">
                        <h3 className="text-2xl font-semibold py-2 text-center underline">Patience and Determination Leads to Success</h3>
                        <h4 className='font-semibold text-lg pt-4'>Projection:</h4>
                        <h4 className='text-indent-8 text-justify'>
                            When we do something good, we usually want the result of that immediately. The result that we look for could even be in the form of appreciation from others. When we find that we don't get such a result, we tend to become impatient and may even give up trying. Which shows lack of determination to achieve.
                        </h4>
                        <h4 className='font-semibold text-lg pt-4'>Solution:</h4>
                        <h4 className='text-indent-8 text-justify'>
                            We need to understand the fact that it is more important to sow good seeds than to wait for results.
                        </h4>
                    </Element>
                    <Element name="The Art of Detachment" id="The Art of Detachment" className="mt-2">
                        <h3 className="text-2xl font-semibold py-2 text-center underline">The Art of Detachment</h3>
                        <h4 className='text-indent-8 text-justify'>
                            Detachment is accepting the inevitable. You cannot take anything with you when you go, is a phrase we have all heard. At a deeper level this also means nothing belongs to me, and at an even deeper level it means the illusion that things do belong to us is what kills our happiness.
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            For most of us however, the practice of detachment goes against the grain of our conditioning. Many resist the suggestion (due to attachment!) that detachment is essential to awaken awareness and re-empower oneself. Behind the resistance there is a perception that detachment is cold-hearted approach to life, or that it is a way of avoiding responsibility. As we have seen the opposite is true. Only when you can release what you are attached to, do you create the space for the new to show up. And only when you are detached in situations of crisis or chaos can you remain stable and be of service to others who are affected by the emotions that must follow all attachment.
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            But how do you detach? How do you step back and create the space to see more clearly and be free of the many influences around you. Here are seven methods to detach. Each is useful depending on the situation and circumstances.
                        </h4>
                        <h4 className='font-semibold text-lg pt-4'>Changing your relationship from possessor to trustee</h4>
                        <h4 className='text-indent-8 text-justify'>
                            Use when you get too attached to your possessions. Remind yourself nothing actually belongs to you. You cannot own anything (from a spiritual point of view). However, you are a trustee of everything in your life until the time comes for someone else to have it in their life!
                        </h4>
                        <h4 className='font-semibold text-lg pt-4'>Letting go</h4>
                        <h4 className='text-indent-8 text-justify'>
                            Use when you are holding to a specific opinion/position. Next time you find yourself in an argument disarm the other by simply saying, I dont agree with you but I accept that is your point of view. Tell me more so that I may understand why you see it that way.
                        </h4>
                        <h4 className='font-semibold text-lg pt-4'>Practice giving</h4>
                        <h4 className='text-indent-8 text-justify'>
                            When you recognize yourself to be always wanting/desiring something from others. When you want something you are already attached to the object of your desire. Almost all of us learn this habit from the moment we are born. It sounds like, Gimme gimme gimme. Break this habit by consciously practicing giving free of any desire for anything in return.
                        </h4>
                        <h4 className='font-semibold text-lg pt-4'>Mentally rehearse different outcomes</h4>
                        <h4 className='text-indent-8 text-justify'>
                            When you are scared of change and you are attached to, and comfortable with, the way things are, or when you are holding on to your some form of self-limitation (I can't). All the top performers in most sports now realize the power that comes from mental rehearsal or visualization. Take a few minutes to visualize future changes as a preparation to embrace those changes when they do arrive. See yourself doing what you previously thought you couldn't.
                        </h4>
                        <h4 className='font-semibold text-lg pt-4'>Don't identify with the situation/outcome</h4>
                        <h4 className='text-indent-8 text-justify'>
                            Use in any process, anytime and anywhere in life. This simply means don't make your happiness dependent on something outside your self, especially the results of yours or others actions. Be happy whatever the outcome of anything. Happiness is a choice and a decision, not a random experience or a dependency. Do good, and in the doing of the good, you will notice happiness arising naturally.
                        </h4>
                        <h4 className='font-semibold text-lg pt-4'>Imagine someone else dealing with the situation - how would they deal with it?</h4>
                        <h4 className='text-indent-8 text-justify'>
                            When your attachment is obviously influencing your ability to interact calmly with others. Take a moment to imagine how someone whose wisdom you respect would handle the situation. This loosens your grip on your way and your habit of reaction. If they are nearby, sit with them and ask them how they would respond.
                        </h4>
                        <h4 className='font-semibold text-lg pt-4'>Look at the situation through the eyes of the other party</h4>
                        <h4 className='text-indent-8 text-justify'>
                            Appropriate in all conflict situations. This forces you to mentally release your attachment to one point of view, from your position, and to generate understanding and empathy. Ask, listen, ask, listen, ask, listen, is the secret to understanding the others point of view. As you do you will see though the eyes of another and free yourself in the process.
                        </h4>
                        <br />
                        <h4 className='text-indent-8 text-justify'>
                            <b>Question:</b> Which of the above strategies could you use immediately?
                        </h4><h4 className='text-indent-8 text-justify'>
                            <b>Reflection:</b> Take a moment and reflect on why you become attached to other people, and why love is not attachment.
                        </h4><h4 className='text-indent-8 text-justify'>
                            <b>Action:</b> Make a plan to use each of the above over the next seven days or seven weeks. Then do it.
                        </h4>
                        <h4 className='font-bold text-lg text-center'>OM SHANTI</h4>
                    </Element>
                </div>
            </div>
        </div>
    );
}

export default Determination