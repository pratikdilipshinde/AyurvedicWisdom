import React, { useState, useEffect } from 'react';
import FloatingMenu from '../../components/FloatingMenu';
import { Element } from 'react-scroll';

import meditationImg from '../../assets/images/meditation.jpg';
import chakra1Img from '../../assets/images/chakra1.jpg';
import chakra2Img from '../../assets/images/chakra2.jpg';

import godsgraceImg from '../../assets/images/godsgraceImg.jpg';

const Meditation = () => {

    const menuItems = [
        "Reason and Benefits",
        "Teachings of Swami Mukundananda",
        "The Important Body Chakras"
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
                    <h1 className="text-5xl font-bold text-center">Meditation</h1>
                    <h3 className="text-xl font-normal pt-2 text-center">
                        When God takes something from your grasp
                        he is not punishing you
                        but merely opening your hands to receive something better
                        Concentrate on this sentence:
                    </h3>
                    
                    <div
                        className="relative rounded-xl w-full h-[250px] bg-cover bg-center flex items-center justify-center text-center my-4"
                        style={{ backgroundImage: `url(${godsgraceImg})` }}
                        >
                        <div className="absolute inset-0 rounded-xl"></div> {/* Optional overlay for better text visibility */}
                        <div className="relative z-10 px-4">
                            <h1 className="text-red-600 text-4xl md:text-5xl font-bold bg-black bg-opacity-10 rounded-xl mx-auto w-fit p-2 shadow-2xl">GOD</h1>
                            <p className="text-red-600 text-3xl font-bold bg-black bg-opacity-10 rounded-xl mx-auto w-fit p-2 shadow-2xl">
                                will never take you<br />
                                where his grace will not</p>
                            <p className="text-red-600 text-xl md:text-4xl font-bold bg-black bg-opacity-10 rounded-xl mx-auto w-fit p-2 shadow-2xl">
                                protect you
                            </p>
                        </div>
                    </div>
                    {/* <h3 className="text-2xl font-semibold pt-2 text-center">
                        "God will never take you where his grace will not protect you."
                    </h3> */}
                    <Element name="Reason and Benefits" id="Reason and Benefits" className="mt-4">
                        <h3 className="text-3xl font-semibold py-2 text-center">Reason and Benefits</h3>
                        <h4 className='font-semibold text-lg pt-2'>
                            1. Cultivation of Self Awareness
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            The simplest definition of meditation is the cultivation of self-awareness. Without self-awareness we cannot see what we are doing wrong at the levels of our own thoughts and feelings. In fact, we cannot even see that it is I and not someone else who creates my thoughts and feelings!
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            When you fall under the illusion that others are responsible for what you are feeling you condemn yourself to a stressful life, as you become dependent on external sources of stimulation in order to feel OK, and then perform our very own award winning performance of The Victim!
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            Meditation raises your self-awareness and therefore self-responsibility.
                        </h4>
                        <h4 className='font-semibold text-lg pt-2'>
                            2. Self Control
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            In the external world we tend to define control as getting a grip on things and handling people and issues firmly. In the internal world of our thoughts and feelings, control does not come with a tight grip, or a struggle, or trying to make certain thoughts and feelings go away. Control on the inside comes from doing the opposite i.e. letting go, and being more like a detached observer of our thoughts and feelings. This is the first step in the practice of meditation, which will eventually give you the ability to be the master of our own thoughts and feelings.
                        </h4>
                        <h4 className='font-semibold text-lg pt-2'>
                            3. Creating Your State
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            In a world almost totally focused on action it is easy to forget that we are a human being first, and human doing second. It is easy to forget that everything we do flows from our state of being. Few of us learn how to create our state of being, yet we all know that if we start the day in a dull and grumpy mood it doesnt matter how beautiful the day may be, it is still a dull and grumpy day! Once you become more aware of your thoughts and feelings, once you see why they emerge (self awareness) and once you restore the power of choice and control, you can work at a deeper level and consciously create your state. Just as the miner works deep underground at the coalface, so meditation gives you the ability to work at the deepest levels of your consciousness, at the coalface of the soul. It is there that you find your original states of peace, love and a natural joyfulness that are not dependent on anything external.
                        </h4>
                        <h4 className='font-semibold text-lg pt-2'>
                            4. Communication from the Heart
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            Life is a relationship, and relationship is communication. Both our success and satisfaction in life will depend to a large degree on how well we communicate with others. Our ways of communication are largely learned from external influences like parents and society, which means many of us have difficulty in connecting and communicating from our own heart, our true heart. The practice of meditation, which is essentially a journey to the heart, helps you to see and understand the internal blocks, barriers and burdens that distort our communication with others. Meditation allows us to dissolve our blocks and heal your heart in your own time, at your own pace in your own way.
                        </h4>
                        <h4 className='text-center font-bold text-lg'>
                            Meditation is a journey not a destination. As you practice with patience and perseverance, the process of learning meditation takes you towards perfection. As it does the journey also becomes the destination.
                        </h4>
                        <hr className='border-green-800 my-4 border-[1.5px]' />
                    </Element>
                    <Element name="Teachings of Swami Mukundananda" id="Teachings of Swami Mukundananda" className="mt-4">
                        <h3 className="text-3xl font-semibold py-2 text-center">Teachings of Swami Mukundananda</h3>
                        <div className="grid md:grid-cols-4 gap-6 items-center">
                            {/* Main Text */}
                            <div className="md:col-span-2 space-y-4">
                                <h3 className="text-xl font-normal pt-2 text-center">
                                    WE can attain God only by His Grace<br />
                                    We can attain His Grace ONLY by TOTAL Surrender
                                </h3>
                                <h4 className='font-semibold text-lg pt-2 text-center'>
                                    Steps for total surrender
                                </h4>
                                <h4 className='text-indent-8 text-center'>
                                    Desire according to the Will of the God<br />
                                    Do not desire against the Will of God<br />
                                    Have complete Faith in his Protection & Love<br />
                                    Have Gratitude for ALL his little graces<br />
                                    Surrender and do not have the pride of surrender<br />
                                    Realise that everything you have belongs to God
                                </h4>
                                <h4 className='font-semibold text-2xl pt-2 text-center'>
                                    God smiles on two occasions
                                </h4>
                            </div>
            
                            {/* Image 1 */}
                            <div className="md:col-span-2 justify-center m-auto">
                                <img
                                    src={meditationImg}
                                    alt="Teachings of Swami Mukundananda"
                                    className="rounded-xl shadow-2xl w-full md:w-fit md:h-96"
                                />
                                {/* <h4 className='text-green-800 text-center text-2xl font-bold'>Neem Leaf </h4> */}
                            </div>
                        </div>
                        <ol className="list-decimal pl-8 text-justify mt-4">
                            <li>When a person thinks that the medicine or the doctor saved him. HE alone decides the time of birth and death</li>
                            <li>When people fight over material possessions and say this is mine
                                HE would like to remind you that
                                You came empty handed and will go empty handed
                                Nothing belongs to you, in the bigger realm of things
                            </li>
                        </ol>
                        <h4 className='font-semibold text-lg pt-2'>
                            HOW WHEN AND WHAT OF MEDITATION
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            Meditation is the spiritual exercise of the mind
                            It keeps the mind pure and clean while connected to God
                            Live in this world but have the mind focused and engrossed with God
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            Take out AT LEAST one hour everyday for this wonderful energizing experience
                            Best time is early morning when the mind is still fresh, clean and uncluttered
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            Fix your mind on your Ishtdev (any image or name you wish to call your God)
                            Chant his name with full internal love (Simran/Smaranam)
                            Engross your mind with this love on the image in your mind (Sadhna)
                        </h4>
                        <h4 className='text-center font-bold text-lg'>
                            Chant his name
                            <br />
                            Hear his name
                            <br />
                            Attach your mind to him
                        </h4>
                        <h4 className='text-justify'>
                            (let all your senses be involved in this wonderful experience)
                        </h4>
                        <h4 className='text-justify'>
                            THEN when you have become pure like butter challenge the MAYA (material wealth).
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            <b>Example:</b> When you churn and churn and churn the milk, pure butter floats on top leaving the whey behind. Now the butter can float on any water like desires and not get mixed in it. Before milk becomes butter it can be mixed with any liquid and lose its original identity.
                        </h4>
                        <hr className='border-green-800 my-4 border-[1.5px]' />
                    </Element>
                    <Element name="The Important Body Chakras" id="The Important Body Chakras" className="mt-4">
                        <h3 className="text-3xl font-semibold py-2 text-center">The Important Body Chakras</h3>
                        <div className="grid md:grid-cols-2 gap-6 items-center">
                            {/* Main Text */}
                            <div className="md:col-span-1 justify-center m-auto">
                                <img
                                    src={chakra1Img}
                                    alt="Chakra Symbols"
                                    className="rounded-xl shadow-2xl w-full md:w-fit md:h-96"
                                />
                                {/* <h4 className='text-green-800 text-center text-2xl font-bold'>Neem Leaf </h4> */}
                            </div>
            
                            {/* Image 1 */}
                            <div className="md:col-span-1 justify-center m-auto">
                                <img
                                    src={chakra2Img}
                                    alt="Chakra Explanation"
                                    className="rounded-xl shadow-2xl w-full md:w-fit md:h-96"
                                />
                                {/* <h4 className='text-green-800 text-center text-2xl font-bold'>Neem Leaf </h4> */}
                            </div>
                        </div>
                        <h4 className='font-semibold text-lg pt-2'>
                            1st Chakra - Red:
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            The Kundalini Chakra, at the base of your Spine keeps you grounded in the physical world. It creates the necessary balance and stillness to succeed in your ambitions and dreams.
                        </h4>
                        <h4 className='font-semibold text-lg pt-2'>
                            2nd Chakra - Orange:
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            The Emotions Chakra, just beneath your Navel, this Chakra governs the release of sexual and emotional energy. It enables you to be in balance with your emotions, thus diffusing any build-up of anger.
                        </h4>
                        <h4 className='font-semibold text-lg pt-2'>
                            3rd Chakra - Yellow:
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            The Control Chakra, located in your Solar Plexus, this Chakra is the seat of your emotions. Its fire and sun energy is what drives your personal power.
                        </h4>
                        <h4 className='font-semibold text-lg pt-2'>
                            4th Chakra - Green:
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            The Heart Chakra, is of vital importance. It circulates love, balance and compassion, and keeps your immune system strong and powerful.
                        </h4>
                        <h4 className='font-semibold text-lg pt-2'>
                            5th Chakra - Blue:
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            The Throat Chakra, is tied to creativity and communication, expansion and excitement. You may even feel pressure in the throat when you're not able to properly communicate your emotions.
                        </h4>
                        <h4 className='font-semibold text-lg pt-2'>
                            6th Chakra - Indigo:
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            The Third Eye Chakra, keeps your psychic and clairvoyant abilities flowing. It is the Pineal Gland, which is like a physical eye with the capabilities of looking upward.
                        </h4>
                        <h4 className='font-semibold text-lg pt-2'>
                            7th Chakra - Violet:
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            The Crown Chakra, this connects you with the higher realms. It governs thought, spiritual connection, understanding, knowing and bliss.
                        </h4>
                        <h4 className='font-semibold text-lg pt-2'>
                            8th Chakra - White:
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            The energy centre of divine love, of spiritual compassion and spiritual selflessness. The energy centre that holds your karmic residue.
                        </h4>
                        <h4 className='text-indent-8 text-justify pt-2'>
                            It is so important to keep connected with the Eight Chakras and ensure their energies are unblocked and fluid. We all possess incredible qualities of:
                        </h4>
                        <h4 className='text-center font-bold text-lg'>
                            Courage hope wisdom intelligence compassion and desire for self-improvement
                        </h4>
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

export default Meditation