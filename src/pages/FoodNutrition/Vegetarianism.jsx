import React, { useState, useEffect } from 'react';
import FloatingMenu from '../../components/FloatingMenu';
import { Element } from 'react-scroll';

import kiwiImg from '../../assets/images/kiwi.jpg';
import appleImg from '../../assets/images/apple.jpg';
import orangeImg from '../../assets/images/orange.jpg';
import strawberryImg from '../../assets/images/strawberry.jpg';
import blueberryImg from '../../assets/images/blueberry.jpg';
import watermelonImg from '../../assets/images/watermelon.jpg';
import guavaImg from '../../assets/images/guava.jpg';
import papayaImg from '../../assets/images/papaya.jpg';
import tomatoImg from '../../assets/images/tomato.jpg';

const Vegetarianism = () => {

    const menuItems = [
        "Introduction",
        "Enrich Your Life",
        "Fruits That Heal"
    ];
        
    const [activeSection, setActiveSection] = useState(menuItems[0]);

    const fruitsData = [
        { name: "Apples", benefits: ["Protects your heart", "Prevents constipation", "Blocks diarrhea", "Improves lung capacity", "Cushions joints"] },
        { name: "Apricots", benefits: ["Combats cancer", "Controls blood pressure", "Saves your eyesight", "Shields against Alzheimer's", "Slows aging process"] },
        { name: "Artichokes", benefits: ["Aids digestion", "Lowers cholesterol", "Protects your heart", "Stabilizes blood sugar", "Guards against liver disease"] },
        { name: "Avocados", benefits: ["Battles diabetes", "Lowers cholesterol", "Helps stops strokes", "Controls blood pressure", "Smoothes skin"] },
        { name: "Bananas", benefits: ["Protects your heart", "Quiets a cough", "Strengthens bones", "Controls blood pressure", "Blocks diarrhea"] },
        { name: "Beans", benefits: ["Prevents constipation", "Helps hemorrhoids", "Lowers cholesterol", "Combats cancer", "Stabilizes blood sugar"] },
        { name: "Beets", benefits: ["Controls blood pressure", "Combats cancer", "Strengthens bones", "Protects your heart", "Aids weight loss"] },
        { name: "Blueberries", benefits: ["Combats cancer", "Protects your heart", "Stabilizes blood sugar", "Boosts memory", "Prevents constipation"] },
        { name: "Broccoli", benefits: ["Strengthens bones", "Saves eyesight", "Combats cancer", "Protects your heart", "Controls blood pressure"] },
        { name: "Cabbage", benefits: ["Combats cancer", "Prevents constipation", "Promotes weight loss", "Protects your heart", "Helps hemorrhoids"] },
        { name: "Cantaloupe", benefits: ["Saves eyesight", "Controls blood pressure", "Lowers cholesterol", "Combats cancer", "Supports immune system"] },
        { name: "Carrots", benefits: ["Saves eyesight", "Protects your heart", "Prevents constipation", "Combats cancer", "Promotes weight loss"] },
        { name: "Cauliflower", benefits: ["Protects against Prostate Cancer", "Combats Breast Cancer", "Strengthens bones", "Banishes bruises", "Guards against heart disease"] },
        { name: "Cherries", benefits: ["Protects your heart", "Combats Cancer", "Ends insomnia", "Slows aging process", "Shields against Alzheimer's"] },
        { name: "Chestnuts", benefits: ["Promotes weight loss", "Protects your heart", "Lowers cholesterol", "Combats Cancer", "Controls blood pressure"] },
        { name: "Chili Peppers", benefits: ["Aids digestion", "Soothes sore throat", "Clears sinuses", "Combats Cancer", "Boosts immune system"] },
        { name: "Figs", benefits: ["Promotes weight loss", "Helps stops strokes", "Lowers cholesterol", "Combats Cancer", "Controls blood pressure"] },
        { name: "Flax", benefits: ["Aids digestion", "Battles diabetes", "Protects your heart", "Improves mental health", "Boosts immune system"] },
        { name: "Garlic", benefits: ["Lowers cholesterol", "Controls blood pressure", "Combats cancer", "Kills bacteria", "Fights fungus"] },
        { name: "Grapefruit", benefits: ["Protects against heart attacks", "Promotes Weight loss", "Helps stops strokes", "Combats Prostate Cancer", "Lowers cholesterol"] },
        { name: "Grapes", benefits: ["Saves eyesight", "Conquers kidney stones", "Combats cancer", "Enhances blood flow", "Protects your heart"] },
        { name: "Green Tea", benefits: ["Combats cancer", "Protects your heart", "Helps stops strokes", "Promotes Weight loss", "Kills bacteria"] },
        { name: "Honey", benefits: ["Heals wounds", "Aids digestion", "Guards against ulcers", "Increases energy", "Fights allergies"] },
        { name: "Lemons", benefits: ["Combats cancer", "Protects your heart", "Controls blood pressure", "Smoothes skin", "Stops scurvy"] },
        { name: "Limes", benefits: ["Combats cancer", "Protects your heart", "Controls blood pressure", "Smoothes skin", "Stops scurvy"] },
        { name: "Mangoes", benefits: ["Combats cancer", "Boosts memory", "Regulates thyroid", "Aids digestion", "Shields against Alzheimer's"] },
        { name: "Mushrooms", benefits: ["Controls blood pressure", "Lowers cholesterol", "Kills bacteria", "Combats cancer", "Strengthens bones"] },
        { name: "Oats", benefits: ["Lowers cholesterol", "Combats cancer", "Battles diabetes", "Prevents constipation", "Smoothes skin"] },
        { name: "Olive Oil", benefits: ["Protects your heart", "Promotes Weight loss", "Combats cancer", "Battles diabetes", "Smoothes skin"] },
        { name: "Onions", benefits: ["Reduce risk of heart attack", "Combats cancer", "Kills bacteria", "Lowers cholesterol", "Fights fungus"] },
        { name: "Oranges", benefits: ["Supports immune systems", "Combats cancer", "Protects your heart", "Straightens respiration"] },
        { name: "Peaches", benefits: ["Prevents constipation", "Combats cancer", "Helps stops strokes", "Aids digestion", "Helps hemorrhoids"] },
        { name: "Peanuts", benefits: ["Protects against heart disease", "Promotes Weight loss", "Combats Prostate Cancer", "Lowers cholesterol", "Aggravates diverticulitis"] },
        { name: "Pineapple", benefits: ["Strengthens bones", "Relieves colds", "Aids digestion", "Dissolves warts", "Blocks diarrhea"] },
        { name: "Prunes", benefits: ["Slows aging process", "Prevents constipation", "Boosts memory", "Lowers cholesterol", "Protects against heart disease"] },
        { name: "Rice", benefits: ["Protects your heart", "Battles diabetes", "Conquers kidney stones", "Combats cancer", "Helps stops strokes"] },
        { name: "Strawberries", benefits: ["Combats cancer", "Protects your heart", "Boosts memory", "Calms stress"] },
        { name: "Sweet Potatoes", benefits: ["Saves your eyesight", "Lifts mood", "Combats cancer", "Strengthens bones"] },
        { name: "Tomatoes", benefits: ["Protects prostate", "Combats cancer", "Lowers cholesterol", "Protects your heart"] },
        { name: "Walnuts", benefits: ["Lowers cholesterol", "Combats cancer", "Boosts memory", "Lifts mood", "Protects against heart disease"] },
        { name: "Water", benefits: ["Promotes Weight loss", "Combats cancer", "Conquers kidney stones", "Smoothes skin"] },
        { name: "Watermelon", benefits: ["Protects prostate", "Promotes Weight loss", "Lowers cholesterol", "Helps stops strokes", "Controls blood pressure"] },
        { name: "Wheat Germ", benefits: ["Combats Colon Cancer", "Prevents constipation", "Lowers cholesterol", "Helps stops strokes", "Improves digestion"] },
        { name: "Wheat Bran", benefits: ["Combats Colon Cancer", "Prevents constipation", "Lowers cholesterol", "Helps stops strokes", "Improves digestion"] },
        { name: "Yogurt", benefits: ["Guards against ulcers", "Strengthens bones", "Lowers cholesterol", "Supports immune systems", "Aids digestion"] },
    ];

    const healingFruits = [
        { name: "Apple", image: appleImg, description: "An apple a day keeps the doctor away! Though low in Vitamin C, apples are rich in antioxidants and flavonoids that enhance Vitamin C’s effects—helping reduce the risk of colon cancer, heart attack, and stroke." },
        { name: "Strawberry", image: strawberryImg, description: "Strawberries are rich in antioxidants, protecting the body from cancer-causing and artery-clogging free radicals. Most berries offer similar youth-preserving benefits." },
        { name: "Watermelon", image: watermelonImg, description: "Watermelon is 92% water, packed with glutathione to boost immunity, lycopene to fight cancer, and Vitamin C & potassium. Its natural compounds also help protect and hydrate the skin like a natural SPF." },
        { name: "Blueberries", image: blueberryImg, description: "The best and most versatile in the health field... they get rid of all the free-radicals that invade our bodies" },
        { name: "Orange", image: orangeImg, description: "Sweetest medicine. Taking 2 - 4 oranges a day may help keep colds away, lower cholesterol, prevent & dissolve kidney stones as well as lessen the risk of colon cancer." },
        { name: "Kiwi", image: kiwiImg, description: "Tiny but mighty. This is a good source of potassium, magnesium, Vitamin E &fiber. It's Vitamin C content is twice that of an orange." },
        { name: "Guava", image: guavaImg, description: "Top awards for Vitamin C. They are the clear winners for their high Vitamin C content. Guava is also rich in fiber, which helps prevent constipation." },
        { name: "Papaya", image: papayaImg, description: "Papaya is rich in carotene, this is good for your eyes. (also good for gas and indigestion)" },
        { name: "Tomatoes", image: tomatoImg, description: "Very good as a preventative measure for men, keeps those prostrate problems from invading their bodies." }
    ];
    
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
                    <h1 className="text-5xl font-bold text-center">Vegetarianism</h1>
                    <Element name="Introduction" id="Introduction" className="mt-4">
                        <h3 className="text-3xl font-semibold py-2 text-center">Introduction</h3>
                        <h3 className="text-2xl font-semibold pt-2 text-center">
                            Vegetarianism necessary for leading a spiritual life and for meditation
                        </h3>
                        <h4 className="font-normal text-lg text-right">
                            - From the talks of <b>Paramahamsa Sri Nithyananda</b>
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            I talk on the strength of my own experience; it won't be easy for you to believe me. Because our minds have got accustomed to demanding 'scientific proof' for everything. We manage to accept concepts like Einstein's 'space-time' or the theories of quantum physics, even though we have never encountered (and never will encounter) these phenomena in our daily lives. Still, because tests have been made in a laboratory somewhere, and some statistics (which you can't understand) have been produced to support them, you feel compelled to believe. In fact, the greatest truths of our universe cannot be proved by science; they are beyond science. Even Einstein, and most modern quantum physicists, will agree to that!
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            Anyway, let me give you a scientific explanation of the advantages of vegetarianism in the spiritual life. To understand this, you must first understand something about the way the human brain works. The brain registers activity in terms of minute electric currents. When it receives information, or performs certain tasks, it generates electric currents of different frequencies or rhythms. These currents are called brain waves.
                        </h4>
                        <h4 className='font-semibold text-lg pt-4'>
                            There are 4 basic kinds of brain waves, corresponding to different activities:
                        </h4>
                        <ul className='list-disc pl-6'>
                            <li><b>Delta waves</b> produced during deep sleep</li>
                            <li><b>Alpha waves</b> produced during meditation</li>
                            <li><b>Theta waves</b> produced during periods of strong emotion</li>
                            <li><b>Beta waves</b> produced when the frontal lobe of the brain is stimulated, during complex mathematical or analytical activity</li>
                        </ul>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            Alpha waves induce a feeling of peace, tranquility and relaxed concentration that is typical of meditation and even telepathy. So all meditation techniques, whether consciously or unconsciously, try to create the right conditions for the production of alpha waves in the brain. The strange thing about alpha waves is, they are produced by the brain at times when oxygen supply to the brain is low. Normally we assume that lower oxygen supply will lower brain activity. But the fact is, during low-oxygen periods the brain goes into overdrive. The blood vessels in the brain dilate to allow more blood inflow, and this creates a feeling of relaxation. Simultaneously, the brain starts producing the 'relaxing' alpha waves. So one main condition for alpha wave production is lower oxygen supply to the brain. Contrary to what we think, this doesn't affect the brain adversely in any way.
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            Now coming to food. Meat is highly acidic in nature, and directly increases blood acidity. To compensate for this, the lungs take in lesser carbon-dioxide ( which is also acidic) and take in more oxygen instead. So the blood reaching the brain will also have more oxygen and less carbon dioxide. By contrast, vegetables reduce the acidity of blood. To maintain the pH balance (acid-alkali balance) in the blood, the lungs take in more acidic carbon dioxide. So the blood reaching the brain will also have less oxygen.
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            This creates the perfect condition for the brain to start producing alpha waves, which help in meditation. This is also why high altitudes with lower oxygen levels (e.g. the Himalayas) have been preferred by Rishis (sages) since ancient times. Of course, very few people are aware of the science behind vegetarianism. You don't need to know it, you can automatically feel the difference with a vegetarian diet.
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            Once you start meditating regularly, your body becomes gradually refined, becomes more fit for meditation. Then, just like your body knows which food to avoid when you have a stomach upset, it will naturally drop the foods, which stop you from meditating properly. But I say to you, don't force vegetarianism on yourself, even if you are going to take up meditation. If you do that, the repressed desires will grow stronger and you simply won't be able to come out of their influence. If you can drop meat without much trouble, do it.
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            Otherwise go ahead and enjoy it without worries or guilt. Please don't feel guilty about it! Ultimately, the guilt can cause more energy blockages in your system; it can do more harm than the meat! When your body is ready, it will drop the habit on its own.
                        </h4>
                        <hr className='border-green-800 my-4 border-[1.5px]' />
                    </Element>
                    <Element name="Enrich Your Life" id="Enrich Your Life" className="mt-4">
                        <h3 className="text-3xl font-semibold py-2 text-center">Enrich Your Life with Fruits and Vegetables</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                            {fruitsData.map((fruit) => (
                            <div
                                key={fruit.name}
                                className="bg-green-100 border border-green-300 rounded-xl shadow-md p-4 hover:shadow-lg transition"
                            >
                                <h2 className="text-xl font-semibold text-green-800 mb-2">
                                {fruit.name}
                                </h2>
                                <ul className="list-disc list-inside text-green-900 text-sm space-y-1">
                                {fruit.benefits.map((benefit, index) => (
                                    <li key={index}>{benefit}</li>
                                ))}
                                </ul>
                            </div>
                            ))}
                        </div>
                        <hr className='border-green-800 my-4 border-[1.5px]' />
                    </Element>
                    <Element name="Fruits That Heal" id="Fruits That Heal" className="mt-4">
                        <h3 className="text-3xl font-semibold py-2 text-center">Fruits That Heal</h3>
                        <div className="grid md:grid-cols-3 gap-4 px-4 mt-4">
                            {healingFruits.map((benefit, index) => (
                            <div key={index} className="bg-green-100 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105">
                                <div className="overflow-hidden rounded-t-3xl">
                                    <img src={benefit.image} alt={benefit.name} className="w-full h-40 object-cover transition-transform duration-500 hover:scale-110" />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-green-800 text-center">{benefit.name}</h3>
                                    <h4 className="text-green-800 mt-2 text-base">{benefit.description}</h4>
                                    {/* <a href="#" className="mt-4 block text-indigo-600 font-semibold hover:text-indigo-800">Read More</a> */}
                                </div>
                            </div>
                            ))}
                        </div>
                    </Element>
                </div>
            </div>
        </div>
    )
}

export default Vegetarianism