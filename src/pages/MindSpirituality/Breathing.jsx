import React, { useState, useEffect } from 'react';
import FloatingMenu from '../../components/FloatingMenu';
import { Element } from 'react-scroll';

const Breathing = () => {

    const menuItems = [
        "Yoga Breathing",
        "How Breathing Works",
        "Shortcut to Healing"
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
                    <h1 className="text-5xl font-bold text-center">Breathing</h1>
                    <Element name="Yoga Breathing" id="Yoga Breathing" className="mt-4">
                        <h3 className="text-2xl font-semibold py-2 text-center">Yoga Breathing</h3>
                        <h4 className='font-semibold text-lg pt-2'>
                            PRANAYAM (BREATHING):
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            Sit with legs crossed on the floor (Padma Asna) or
                            Sit with knees bent and feet tucked beneath the hips (Sidha Asna).
                            Thumb and forefinger joined to create an energy field, resting on the knees.
                        </h4>
                        <h4 className='font-semibold text-lg pt-2'>
                            1. BHAYA PRANAYAM:
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            Breath in deep. Fill the diaphragm not stomach. Breath out slow and long.
                            Throw out ALL your problems, anger & pent-up emotions.
                        </h4>
                        <h4 className='font-semibold text-lg pt-2'>
                            2. BHASTRIKA PRANAYAM:
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            Breath in deep. Fill stomach to the fullest. Breath out pulling the stomach in, as if the stomach is touching the back bone. Chin to the chest. (For flat stomach).
                        </h4>
                        <h4 className='font-semibold text-lg pt-2'>
                            3. KAPAL BHATI:
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            Breath out with force, pulling the stomach in simultaneously. Do not use too much force.
                            Breath in without force. Keep medium speed. 15 times each set (15 minutes) morning evening.
                            (Good for diabetes, thyroids, help with uterus fibroids, increases hemoglobin and blood platelets, help in asthma problem. All toxins get thrown out and the body comes in balance. Skin will start to acquire a natural glow and the dark circles under the eyes will improve. Strengthens the Kundalini chakra.
                        </h4>
                        <h4 className='font-semibold text-lg pt-2'>
                            4. ANULOM VILOM:
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            Close the right nostril with thumb. Breath in deep (inhale) with the left nostrils.
                            Now close the left nostrils with 2 fingers and breath out deep with the right side.
                            Keep breathing with alternate nostrils. Face front. (Nourishes & gives oxygen the body. Helps High BP, Helps endocrine system. Divine energy is created.)
                        </h4>
                        <h4 className='font-semibold text-lg pt-2'>
                            5. BRAHMARI PRANAYAM:
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            Close the ears with the thumbs. Close the eyes with 3 fingers. Place the forefingers on the forehead. Breath in and say "mmmmmmmmmmmmmmmmmm" while breathing out gently. Let the sound reverberate in your head.
                        </h4>
                        <h4 className='font-semibold text-lg pt-2'>
                            6. UJJAI PRANAYAM:
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            Breath in loudly through the nose, lower the chin to the chest and constrict the throat. Close the right nostril with the right thumb ad release air through the left nostril. Then repeat the opposite way.
                        </h4>
                        <h4 className='font-semibold text-lg pt-2'>
                            7. OM PRANAYAM:
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            Take a deep breath. Say OM while slowly releasing the breath. Go on as long as you can.
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            Finish off by rubbing the palms of the hands on top of the head. Cover your eyes fully with the warmed up hands for a little while. Open the eyes slowly.
                            Clap your hands and laugh loudly to release all pent-up tension.
                        </h4>
                        <h4 className='font-semibold text-lg pt-2'>
                            Important note:
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            When you learn to control your breath, you have control over your mind.
                        </h4>
                        <hr className='border-green-800 my-4 border-[1.5px]' />
                    </Element>
                    <Element name="How Breathing Works" id="How Breathing Works" className="mt-4">
                        <h3 className="text-2xl font-semibold py-2 text-center">How Breathing Works</h3>
                        <h4 className='font-bold text-lg text-center'>HOW PRANAYAM(CONTROLLED BREATHING) WORKS</h4>
                        <h4 className='text-justify mt-2'>
                            Pranayam energizes the pranas (breathing energizes the life force).
                            <br /><br />
                            Prana (breath) or the life energy contains all the powers of the world. Pranayam (breathing) purifies the life energy. Deep breathing increases the oxygen content in the body.
                            <br /><br />
                            Disease in the body comes from negative thinking and deficiency of oxygen. Pranayam along with meditation (silence) the inside journey, is the only solution for curing disease without medication.
                            <br /><br />
                            Negative thinking has a direct effect on the respiratory system. The polluted air (toxins) present inside the body mix with blood and cause disease. Medicine can control a disease for a limited time, but actual healing can be done with Pranayam.
                            <br /><br />
                            Oxygen (the energy) is vital for the life force. Its deficiency can be fatal. A person who understands this synchronization of breathing leads a healthy and disease free life.
                            <br /><br />
                            Pranayam regulates the movement of breath & gives peace of mind. When the body gets full amount of oxygen with the process of Pranayam, it builds the immune system (defense mechanism) and thus increases the resistance to toxins from entering the body.
                            <br /><br />
                            This process, balances all the hormones and the body in general.
                            <br /><br />
                            When the air is thrown out toxins are also thrown out and when the air is taken the life energy is taken in. This builds the internal strength of the person and whole body becomes rejuvenated with fresh supply of oxygen. Pranayam is the Sanjivini (life saver) for life energy, it gives nutrition to the life energy.
                            <br /><br />
                            The inherent quality of Pran is "Motion". This quality of Pran is felt and experienced in Vayu (Air), which is always in motion.
                        </h4>
                        <h4 className='font-bold text-lg text-center mt-4'>Pran is the creation of Brahma (God) the Supreme Being !</h4>
                        <hr className='border-green-800 my-4 border-[1.5px]' />
                    </Element>
                    <Element name="Shortcut to Healing" id="Shortcut to Healing" className="mt-4">
                        <h3 className="text-2xl font-semibold py-2 text-center">Shortcut to Healing</h3>
                        <h4 className='font-bold text-lg text-center mt-4'>
                            BREATHING (Pranayam)
                            FOR ENERGY (Urja) & HEALING (Swasth)
                            A short cut
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            The more generously we use the treasures that we have with us for the benefit of others and ourselves, too, the more these treasures are available for us at the right time.
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            Do each breathing minimum 15 times twice daily, morning and evening for best results.
                        </h4>
                        <h4 className='font-semibold text-lg pt-2'>
                            For Cough, Cold and Allergies
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            Breath in deep. Fill the diaphragm. Chest expands to the fullest. Release out with a little force. 15 times more as you get comfortable. (Bahaya pranayam).
                        </h4>
                        <h4 className='font-semibold text-lg pt-2'>
                            Diabetes, Cholesterol and High BP. Weight Loss and the Stomach
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            Breath in deep filling the stomach. Stomach is fully bloated. Breath out long while pulling the stomach in as if the front of the stomach is touching the back bone. The chin will rest on the chest as you breath out. (Bhastrika pranayam).
                        </h4>
                        <h4 className='font-semibold text-lg pt-2'>
                            To throw out all Toxins from the system. Energizes the Endocrine System
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            Gives Oxygen to the body. Creates Divine Energy for peace and quite of mind.
                        </h4>
                        <h4 className='font-semibold text-lg pt-2'>
                            Diabetes, Thyroid, High BP, low Platelets, Asthma, Cholesterol, Fibroids in the uterus
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            Breathe in gently. Throw out the breath with a force while pulling in the stomach simultaneously. Create a gentle rhythm. Do not force. Stop if tired. 2-3 sets of 15 breaths. Morning and evening. Most powerful of all pranayams. (kapal bhati)
                        </h4>
                        <h4 className='font-bold text-lg text-center mt-4'>Takes 20-30 minutes morning and evening. Get new lease to life and optimum health.</h4>
                        <hr className='border-green-800 my-4 border-[1.5px]' />
                    </Element>
                </div>
            </div>
        </div>  
    )
}

export default Breathing