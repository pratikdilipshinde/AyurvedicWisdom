import React, { useState, useEffect } from 'react';
import FloatingMenu from '../../components/FloatingMenu';
import { Element } from 'react-scroll';

import legacupressure from '../../assets/images/legacupressure.jpg';
import handacupressure from '../../assets/images/handacupressure.jpg';
import earacupressure from '../../assets/images/earacupressure.jpg';
import earacupressure1 from '../../assets/images/earacupressure1.jpg';
import shaitsumassageImg from '../../assets/images/shaitsumassage.jpg';

const Acupressure = () => {

    const menuItems = [
        "Keep Walking",
        "Hand Acupressure",
        "Auriculotherapy",
        "Shiatsu Self Massage"
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
                    <h1 className="text-5xl font-bold text-center">Acupressure</h1>
                    <Element name="Keep Walking" id="Keep Walking" className="mt-4">
                        <h3 className="text-3xl font-semibold py-2 text-center">Keep Walking</h3>
                        <div className="grid md:grid-cols-4 gap-6 items-center">
                            {/* Main Text */}
                            <div className="md:col-span-2 space-y-4">
                                <h4 className="font-normal text-lg text-center mt-2">
                                    The Organs of your body have their sensory touches at the bottom of your foot, if you massage these points you will find relief from aches and pains as you can see the heart is on the left foot.
                                </h4>
                                <h4 className="font-normal text-lg text-center mt-2">
                                    God made us walk so that we will always be pressing these pressure points and thus keep these organs activated at all times. So, keep walking ... and thank god with every step.
                                </h4>
                                
                            </div>
            
                            {/* Image 1 */}
                            <div className="grid-col-1 md:col-span-2 justify-center m-auto">
                            <img
                                src={legacupressure}
                                alt="Leg Accupressure"
                                className="rounded-xl shadow-2xl w-full md:w-fit md:h-80"
                            />
                            {/* <h4 className='text-green-800 text-center text-2xl font-bold'>Neem Leaf </h4> */}
                            
                            </div>
                        </div>
                        <hr className='border-green-800 my-4 border-[1.5px]' />
                    </Element>
                    <Element name="Hand Acupressure" id="Hand Acupressure" className="mt-4">
                        <h3 className="text-3xl font-semibold py-2 text-center">Hand Acupressure</h3>
                        <div className="grid md:grid-cols-4 gap-6 items-center">
                            {/* Main Text */}
                            <div className="md:col-span-2 space-y-4">
                                <h4 className="font-normal text-lg text-center mt-2">
                                    Self-healing can be done anywhere anytime. Don't keep your hands idle. Do the pressure points on the palms of your hands. If it hurts anywhere on the hand you will know that the organ connected to that needs healing in someway. Even these early warnings can be very helpful in self diagnosis.
                                </h4>
                                
                            </div>
            
                            {/* Image 1 */}
                            <div className="grid-col-1 md:col-span-2 justify-center m-auto">
                            <img
                                src={handacupressure}
                                alt="Hand Accupressure"
                                className="rounded-xl shadow-2xl w-full md:w-fit md:h-64"
                            />
                            {/* <h4 className='text-green-800 text-center text-2xl font-bold'>Neem Leaf </h4> */}
                            
                            </div>
                        </div>
                        <hr className='border-green-800 my-4 border-[1.5px]' />
                    </Element>
                    <Element name="Auriculotherapy" id="Auriculotherapy" className="mt-4">
                        <h3 className="text-3xl font-semibold py-2 text-center">Auriculotherapy</h3>
                        <h4 className='text-xl mt-2 text-center'>LET ME PULL YOUR EARS</h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            A phrase teachers often used in India to pull up the students attention and alertness. Today we have a scientific explanation.
                        </h4>
                        <h4 className='text-xl mt-2 font-bold text-center'>Auriculotherapy (aw-RIK-ulo-therapy)</h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            This amazing technique is also called auricular therapy. If you suffer from chronic health problems ... pain ... addiction to alcohol or drugs ... excess weight ... low sex drive ... or virtually any disease ... this may be the most exciting message you'll ever read.
                        </h4>
                        <h4 className='text-indent-8 font-bold text-justify mt-2'>
                            Learn how to "turn off" health problems with a simple, scientifically-based technique you can use at home to treat yourself.
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            If you can touch your outer ears and just apply pressure on certain areas -- called reflex points -- you can say goodbye to those ailments that have bothered you for so long. Each reflex point on the outer ear affects a specific organ or system in your body. Stimulate that point on your outer ear and the body itself takes over and begins correcting the problem.
                        </h4>
                        <h4 className='text-lg mt-2 text-center'>You can literally ...</h4>
                        <h4 className='text-xl mt-2 text-center'>Switch Off Pain with Your Fingertips.</h4>
                        <div className="grid md:grid-cols-4 gap-6 items-center mt-4">
                            {/* Main Text */}
                            <div className="md:col-span-2 space-y-4">
                                <h4 className="font-normal text-lg text-center mt-2">
                                    If you have a headache ... or back pain ... or pain caused by arthritis or sciatica or any other kind of pain. All you'd have to do is apply pressure on a specific point on your outer ear (called the Pain Control Point).
                                </h4>
                                <h4 className="font-normal text-lg text-center mt-2">
                                    Once you do this, the outer ear sends messages to the brain.The brain then transmits "orders" to the body toflood the system with pain-killing biochemicalssuch as endorphins and enkephalins.
                                </h4>
                            </div>
            
                            {/* Image 1 */}
                            <div className="grid-col-1 md:col-span-2 justify-center m-auto">
                            <img
                                src={earacupressure1}
                                alt="Ear Accupressure"
                                className="rounded-xl shadow-2xl w-full md:w-fit md:h-64"
                            />
                            {/* <h4 className='text-green-800 text-center text-2xl font-bold'>Neem Leaf </h4> */}
                            
                            </div>
                        </div>
                        <h4 className='text-indent-8 text-justify mt-4'>
                            The moment high levels of these biochemical's are introduced in the blood and cerebrospinal fluid, the body kills pain spontaneously -- without the use of drug-based painkillers. Pain is gone ... almost instantly.
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            Endorphins and encephalin have an analgesic effect, and are known to be just as effective as morphine in stopping pain. This is why auriculotherapy has been used as a natural way to combat chronic pain and migraine headache. It's the healthiest pain relief available with no side effects.
                        </h4>
                        <h4 className='text-xl mt-2 text-center'>We Can Jump Start Your Body's Self-Healing Mechanism</h4>
                        <div className="grid md:grid-cols-4 gap-6 items-center mt-4">
                            {/* Main Text */}
                            <div className="md:col-span-2 space-y-4">
                                <h4 className="font-normal text-lg text-center mt-2">
                                    All you need is the knowledge ofwhich points to press, and how to stimulate those points.
                                </h4>
                                <h4 className="font-normal text-lg text-center mt-2">
                                    Applying pressure on various points on your outer ear is usually the jump start you'll ever need. The body's self-healing ability is awesomely powerful, and always ready to carry out all of the work to fully and quickly heal itself.
                                </h4>
                                <h4 className="font-normal text-lg text-center mt-2">
                                    You can successfully use auriculotherapy to treat health problems that have plagued you, your friends or your loved ones for years.
                                </h4>
                            </div>
            
                            {/* Image 1 */}
                            <div className="grid-col-1 md:col-span-2 justify-center m-auto">
                            <img
                                src={earacupressure}
                                alt="Ear Accupressure Points"
                                className="rounded-xl shadow-2xl w-full md:w-fit md:h-72"
                            />
                            {/* <h4 className='text-green-800 text-center text-2xl font-bold'>Neem Leaf </h4> */}
                            
                            </div>
                        </div>
                        <h4 className='text-indent-8 text-justify mt-4'>
                            Imagine having a smoking habit that you want to get rid of. If you apply pressure on a specific point on your outer ear (called the Nicotine Point) with your fingers, it "tricks" the body into thinking it is still receiving nicotine when it actually is not. That's because the stimulation induces the production of endorphins. The endorphins lock in to the specific neuroreceptors that nicotine binds to ... thereby causing the body to think it's ingesting nicotine.
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            There are usually no withdrawal symptoms when auriculotherapy is used for smoking cessation. Once the body loses exposure to nicotine, it slowly loses its addictive neurological pathway, and thus, the body loses its craving for it.
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            Pain control and smoking cessation are just 2 of the many medical miracles that auriculotherapy has been shown to cause.
                            There is virtually no condition that can't be improved with auriculotherapy. Auriculotherapy is based on age-old Oriental medical techniques.
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            One of the core principles of this healing technology is that the outer portion of the ear (the auricle) is a mirror image of an inverted human fetus - i.e., the ear is a microcosmic representation of the entire body.
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            In other words, every point of the outer ear corresponds to, and is associated with, a specific part of the human anatomy. That means every part of your body can be accessed through points on your outer ear.
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            Auriculotherapy is based on nerve connection (in the human nervous system) which allows for localized treatment for the organs or systems involved in the health problem. Instead of working directly on a particular symptom, such as massaging a sore back, stimulating particular points on the outer ear sends messages to the brain. The brain then transmits "order" to the body to accomplish healing and balancing activities.
                        </h4>
                        <h4 className='text-lg mt-2 text-center'>ITS LIKE Unlocking the Body's Own "Pharmacy"</h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            By doing the treatment yourself, you can keep it simple and still get the results you're looking for. You'll just use your fingers to apply pressure. For points that are hard to reach, you can use a blunt-tipped instrument or even the end of a match stick.
                        </h4>
                        <h4 className='text-lg mt-2 text-center'>Auriculotherapy is so safe and easy, you can do-it-yourself at home.</h4>
                        <h4 className='text-lg mt-2 text-center'>WHAT IF I DO IT WRONG?:</h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            Stimulating the auriculotherapy points on your ears is not difficult. If you're using your fingers, you may put pressure on a wider area than the point itself. In fact, you might touch more than one point at the same time. And that's okay. You can't hurt yourself by stimulating other points. In fact, you can benefit any part of the body connected to the points you touch, even accidentally.
                        </h4>
                        <hr className='border-green-800 my-4 border-[1.5px]' />
                    </Element>
                    <Element name="Shiatsu Self Massage" id="Shiatsu Self Massage" className="mt-4">
                        <h3 className="text-3xl font-semibold py-2 text-center">Shiatsu Self Massage</h3>
                        <h4 className="font-normal text-lg text-center mt-2">
                            Shiatsu is the Japanese art of healing by pressure points on the body related to various organs. This method shows faster results and is more connected to direct healing.
                        </h4>
                        <div className="object-center mx-auto">
                            <img
                                src={shaitsumassageImg}
                                alt="Shaitsu Massage"
                                className="rounded-xl shadow-2xl w-full md:w-fit md:h-1/4 mx-auto mt-4"
                            />
                            {/* <h4 className='text-green-800 text-center text-2xl font-bold'>Neem Leaf </h4> */}
                            
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

export default Acupressure