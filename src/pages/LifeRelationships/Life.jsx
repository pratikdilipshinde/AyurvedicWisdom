import React, { useState, useEffect } from 'react';
import FloatingMenu from '../../components/FloatingMenu';
import { Element } from 'react-scroll';

const Life = () => {

    const menuItems = [
        "Love of Life",
        "Your Gift to Life",
        "10 Ways to Raise Your Consciousness",
        "40 Tips for a Better Life"
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
                    <h1 className="text-5xl font-bold text-center">Life</h1>
                    <h3 className="text-2xl font-semibold py-2 text-center underline">Life is a one way journey, not a destination. <br />Travel it with a smile and never regret anything.</h3>
                    {/* Sections with Smooth Scrolling */}
                    <Element name="Love of Life" id="Love of Life" className="mt-2">
                        <h3 className="text-3xl font-semibold py-2 text-center">Love of Life</h3>
                        <h4 className='text-indent-8 text-center text-xl'>
                            Life ends if we stop DREAMING
                        </h4>
                        <h4 className='text-indent-8 text-center text-xl'>
                            Hope ends if we stop BELIEVING
                        </h4>
                        <h4 className='text-indent-8 text-center text-xl'>
                            Love ends if we stop CARING
                        </h4>
                        <h4 className='text-indent-8 text-center text-xl'>
                            Friendship ends if we stop SHARING
                        </h4>
                    </Element>
                    <Element name="Your Gift to Life" id="Your Gift to Life" className="mt-2">
                        <h3 className="text-3xl font-semibold py-2 text-center">Your Gift to Life</h3>
                        <ol className="list-decimal pl-8 text-justify">
                            <li>Give people more than they expect and do it cheerfully.</li>
                            <li>Marry the one you love to talk to. As you get older, their conversational skills will be as important as any other.</li>
                            <li>Don't believe all you hear.</li>
                            <li>When you say, 'I love you,' mean it.</li>
                            <li>When you say, 'I'm sorry,' look the person in the eye.</li>
                            <li>Be engaged at least six months before you get married.</li>
                            <li>Believe in love at first sight, but stay engaged at least 6 months.</li>
                            <li>Never laugh at anyone's dreams. People who don't have dreams don't have much.</li>
                            <li>Love deeply and passionately. You might get hurt but it's the only way to live life completely.</li>
                            <li>In disagreements fight fairly. No name calling.</li>
                            <li>Don't judge people by their relatives.</li>
                            <li>Talk slowly but think quickly.</li>
                            <li>When someone asks you a question you don't want to answer, smile and ask, 'Why do you want to know?'</li>
                            <li>Remember that great love and great achievement involve great risk.</li>
                            <li>Say 'bless you' when you hear someone sneeze.</li>
                            <li>When you lose, don't lose the lesson.</li>
                            <li>Remember the three R's: Respect for self ; Respect for others; and Responsibility for all your actions.</li>
                            <li>Don't let a little dispute injure a great friendship.</li>
                            <li>When you realize you've made a mistake, take immediate steps to correct it.</li>
                            <li>Smile when picking up the phone. The callers will hear it in your voice.</li>
                            <li>Spend some time alone.</li>
                        </ol>
                    </Element>
                    <Element name="10 Ways to Raise Your Consciousness" id="10 Ways to Raise Your Consciousness" className="mt-2">
                        <h3 className="text-3xl font-semibold py-2 text-center">10 Ways to Raise Your Consciousness</h3>
                        <h4 className='font-semibold text-lg pt-4'>FORGIVE YOURSELF AND OTHERS:</h4>
                        <h4 className='text-indent-8 text-justify'>
                            Life is too short to hold on to regrets, grudges, miscommunications, or disappointments.
                            Free yourself by forgiving and letting go of any negative energy you're holding on to about yourself or others.
                            The process of forgiving yourself and others will result in your feeling light and free. It will raise your vibration.
                        </h4>
                        <h4 className='font-semibold text-lg pt-4'>PRACTICE GRATITUDE AND APPRECIATION:</h4>
                        <h4 className='text-indent-8 text-justify'>
                            Whatever you focus on grows. So, when you focus on every thing in your life you feel grateful for all and the wonderful people you appreciate, the universe hands you more to feel grateful about.
                        </h4>
                        <h4 className='font-semibold text-lg pt-4'>LIVE EACH DAY AS THOUGH IT WERE YOUR LAST:</h4>
                        <h4 className='text-indent-8 text-justify'>
                            Then you will be living in a state of light, love and unconditional contribution. What would you say to the people you care about?
                        </h4>
                        <h4 className='font-semibold text-lg pt-4'>MEDITATE OR PRAY:</h4>
                        <h4 className='text-indent-8 text-justify'>
                            You open up a direct link between yourself and the spiritual realm when you meditate or pray.
                            You will come closer to your creator energy, raise your vibration experience, peace, clarity, joy and connection, as well as a perfectly balanced state between your mental, physical, emotional and spiritual realms.
                        </h4>
                        <h4 className='font-semibold text-lg pt-4'>SUSPEND JUDGMENT:</h4>
                        <h4 className='text-indent-8 text-justify'>
                            One judges another to feel less guilty about one's own misgivings
                            Judgment energy is dense, dark and heavy
                            <br />
                            On the other hand, unconditional acceptance is light, free and accepting
                            Let go of judging and criticizing yourself and others
                            <br />
                            Everyone is on a different path and some appear to be farther ahead on their path than others
                            Neither path is better nor worse than another. Raise your consciousness to one of acceptance
                        </h4>
                        <h4 className='font-semibold text-lg pt-4'>VIEW EVERY EXPERIENCE AS A GIFT:</h4>
                        <h4 className='text-indent-8 text-justify'>
                            If you look back at occurrences in your life, you can easily see how even the worst situations you experienced in your life ended up teaching you invaluable lessons and therefore resulted in putting you in perfect place for your continuing development. When you view every experience The good, the bad, and the ugly as a gift, life flows more like a gentle, inspiring breeze
                        </h4>
                        <h4 className='font-semibold text-lg pt-4'>STAY CONSCIOUSLY AWARE OF ALL YOUR THOUGHTS AND FEELINGS:</h4>
                        <h4 className='text-indent-8 text-justify'>
                            It is easy to fall into negative patterns of complaining and feeling like a victim of society and your life.
                            When you catch yourself in the negative zone, don't feel badly about it and beat yourself up.
                            Simply choose to switch your consciousness to one of gratitude and positive thinking.
                        </h4>
                        <h4 className='font-semibold text-lg pt-4'>TREAT YOUR PHYSICAL BODY AS YOUR TEMPLE:</h4>
                        <h4 className='text-indent-8 text-justify'>
                            Your body is the only vehicle you've been given for this ride called life. The better you care for your body by eating a healthy, balanced diet, and by implementing a regular exercise routine, and by giving your body the rest it requires, the more you will experience increased energy, vitality, joy and freedom.
                        </h4>
                        <h4 className='font-semibold text-lg pt-4'>VIEW THE WORLD THROUGH THE EYES OF A CHILD:</h4>
                        <h4 className='text-indent-8 text-justify'>
                            Children are enthralled by the process of observing and experiencing the wonder and beauty in every single thing. They can't get enough.
                            <br />
                            Look at every tree, sunset, cloud and human being as a child would and you'll be in a constant state of wonder, joy, surprise, acceptance and enlightenment.
                        </h4>
                        <h4 className='font-semibold text-lg pt-4'>GIVE LOVE, LOVE, LOVE FROM YOUR HEART:</h4>
                        <h4 className='text-indent-8 text-justify'>
                            It's all about love. Love is the highest vibration
                            Allow your self to receive love unconditionally from others
                            Give love from your heart unconditionally to yourself and others and you will experience the highest state of consciousness possible
                        </h4>
                    </Element>
                    <Element name="40 Tips for a Better Life" id="40 Tips for a Better Life" className="mt-2">
                        <h3 className="text-3xl font-semibold py-2 text-center">40 Tips for a Better Life</h3>
                        <ol className="list-decimal pl-8 text-justify">
                            <li>Walk 10-30 minutes every day. Smile. It is the ultimate anti-depressant.</li>
                            <li>Sit in silence for at least 10 minutes each day.</li>
                            <li>Tape your late night shows and get more sleep.</li>
                            <li>When you wake up in the morning, say 'My purpose is to __________ today.'</li>
                            <li>Live with the 3 E's: Energy, Enthusiasm, and Empathy.</li>
                            <li>Play more games and read more books than you did last year.</li>
                            <li>Practice meditation & prayer. They provide us with daily fuel for our busy lives.</li>
                            <li>Spend time with people over the age of 70 and under the age 6.</li>
                            <li>Dream more while you are awake.</li>
                            <li>Eat more foods that grow on trees and plants. Eat less processed food.</li>
                            <li>Drink green tea and plenty of water. Eat blueberries, wild Alaskan salmon, broccoli, almonds & walnuts.</li>
                            <li>Try to make at least three people smile each day.</li>
                            <li>Clear clutter from your house and life in general and let new flowing energy into your life.</li>
                            <li>Dont waste your precious energy on gossip, or issues of the past, negative thoughts or things you cannot control. Instead, invest your energy in the positive present moment.</li>
                            <li>Realize that life is a school and you are here to learn. Problems are simply part of the curriculum that appear and fade away like algebra class but the lessons you learn will last a lifetime.</li>
                            <li>Eat breakfast like a king, lunch like a prince and dinner like a college kid with a maxed-out charge card.</li>
                            <li>Smile and laugh more. It will keep the NEGATIVE BLUES away.</li>
                            <li>Life isn't fair, but it's still good.</li>
                            <li>Life is too short to waste time hating anyone.</li>
                            <li>Don't take yourself so seriously. No one else does.</li>
                            <li>You don't have to win every argument. Agree to disagree.</li>
                            <li>Make peace with your past so it won't spoil the present.</li>
                            <li>Don't compare your life to others'. You have no idea what their journey is all about.</li>
                            <li>No one is in charge of your happiness except you.</li>
                            <li>Frame every disaster with these words: `In five years, will this matter?'</li>
                            <li>Forgive everyone for everything.</li>
                            <li>What other people think of you is none of your business.</li>
                            <li>REMEMBER - GOD heals everything.</li>
                            <li>However good or bad a situation is, it will change.</li>
                            <li>Your job won't take care of you when you are sick. Your friends will. Stay in touch.</li>
                            <li>Get rid of anything that isn't useful, beautiful or joyful.</li>
                            <li>Envy is a waste of time. You already have all you need.</li>
                            <li>The best is yet to come.</li>
                            <li>No matter how you feel, get up, dress and show up.</li>
                            <li>Do the right thing!</li>
                            <li>Call your family often.</li>
                            <li>Each night before you go to bed complete the following statements: I am thankful for __________. Today I accomplished _________.</li>
                            <li>Remember that you are too blessed to be stressed.</li>
                            <li>Enjoy the ride. Remember this is not Disney World and you certainly don't want a fast pass. You only have one ride through life so make the most of it and enjoy the ride.</li>
                            <li>May your troubles be less, May your blessings be more, May nothing but happiness come through your door!</li>
                        </ol>
                    <hr className='border-green-800 my-4 border-[1.5px]' />
                    </Element>
                    <div>
                        <h3 className="p-4 font-messiri text-base md:text-sm text-green-800 font-normal rounded-2xl text-center"><b>Disclaimer:</b> This web site is a collection of material I have received over the years from loved ones, friends, well-wishers and like-minded people who believe in life as a wonderful gift of God. A gift we need to honor and preserve with health, happiness and self respect. If any material infringes on your copyright, please inform us through Email mentioned below and we will remove it.</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Life