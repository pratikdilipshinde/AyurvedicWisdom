import React, { useState, useEffect } from 'react';
import FloatingMenu from '../../components/FloatingMenu';
import { Element } from 'react-scroll';

import alsiImg from '../../assets/images/alsi.jpg';
import ajwainImg from '../../assets/images/ajwain.jpg';
import dhaniaImg from '../../assets/images/dhania.jpg';
import dhaniapattaImg from '../../assets/images/dhaniapatta.jpg';
import dalchinniImg from '../../assets/images/dalchinni.jpg';
import elaichiImg from '../../assets/images/elaichi.jpg';
import gheeImg from '../../assets/images/ghee.jpg';
import haldiImg from '../../assets/images/haldi.jpg';
import hingImg from '../../assets/images/hing.jpg';
import imliImg from '../../assets/images/imli.jpg';
import jeeraImg from '../../assets/images/jeera.jpg';
import jaiffalImg from '../../assets/images/jaiffal.jpg';
import javitriImg from '../../assets/images/javitri.jpg';
import kesarImg from '../../assets/images/kesar.jpg';
import longImg from '../../assets/images/long.jpg';
import methiImg from '../../assets/images/methi.jpg';
import methreImg from '../../assets/images/methre.jpg';
import raeeImg from '../../assets/images/raee.jpg';
import saunfImg from '../../assets/images/saunf.jpg';
import tejpattaImg from '../../assets/images/tejpatta.jpg';
import postoImg from '../../assets/images/posto.jpg';

import alugobirecipeImg from '../../assets/images/alugobirecipe.jpg';
import dalrecipeImg from '../../assets/images/dalrecipe.jpg';


const Recipes = () => {

    const menuItems = [
        "Indian Spices",
        "Turmeric Recipes",
        "Myth About Indian Curry"
    ];

    const spices = [
        { name: "Alsi", meaning: "Flax seeds", image: alsiImg },
        { name: "Ajwain", meaning: "Carraway seeds", image: ajwainImg },
        { name: "Dhania", meaning: "Coriander seeds", image: dhaniaImg },
        { name: "Dhania Patta", meaning: "Coriander leaves (Cilantro)", image: dhaniapattaImg },
        { name: "Dal Chinni", meaning: "Cinnamon", image: dalchinniImg },
        { name: "Elaichi", meaning: "Cardamom", image: elaichiImg },
        { name: "Ghee", meaning: "Clarified Butter", image: gheeImg },
        { name: "Haldi", meaning: "Turmeric Powder", image: haldiImg },
        { name: "Hing", meaning: "Asafoetida", image: hingImg },
        { name: "Imli", meaning: "Tamarind", image: imliImg },
        { name: "Jeera", meaning: "Cumin Seeds", image: jeeraImg },
        { name: "Jaiffal", meaning: "Mace", image: jaiffalImg },
        { name: "Javitri", meaning: "Star Anise", image: javitriImg },
        { name: "Kesar", meaning: "Saffron", image: kesarImg },
        { name: "Long", meaning: "Cloves", image: longImg },
        { name: "Methi", meaning: "Fresh Fenugreek", image: methiImg },
        { name: "Methre", meaning: "Fenugreek Seeds", image: methreImg },
        { name: "Raee", meaning: "Mustard Seeds", image: raeeImg },
        { name: "Saunf", meaning: "Fennel Seeds", image: saunfImg },
        { name: "Tej Patta", meaning: "Bay Leaf", image: tejpattaImg },
        { name: "Posto", meaning: "Poppy Seeds", image: postoImg },
    ];

    const recipes = [
        {
            title: "Alu Gobi (Potatoes and Cauliflower)",
            image: alugobirecipeImg,
            ingredients: [
                "2” fresh ginger, chopped fine",
                "Potatoes & Cauliflower cut in equal small pieces",
                "1/2 tsp Cumin seeds",
                "1/2 - 3/4 tsp Turmeric",
                "Salt to taste",
                "Red crushed peppers (optional)",
                "Black pepper & chopped cilantro for garnish"
            ],
            method: [
                "Heat oil in a non-stick wok and add ginger. Cook until lightly brown.",
                "Add cumin seeds. When they splutter, add potatoes and cauliflower.",
                "Mix well with spices and cover to cook on low heat, stirring every 5 mins.",
                "When nearly done, add cilantro and black pepper, cook for 3–5 more mins.",
                "Serve with Indian roti or rice."
            ]
        },
        {
            title: "Dal (Lentils)",
            image: dalrecipeImg,
            ingredients: [
                "1/2 cup Red lentils (Masoor dal)",
                "1/2 cup Yellow lentils (Moong dal)",
                "1/2 onion, finely chopped",
                "1 small tomato, chopped",
                "Chopped cilantro",
                "1/2 tsp Cumin seeds",
                "Salt to taste",
                "3/4 tsp Turmeric"
            ],
            method: [
                "Rinse lentils until water runs clear. Boil with 3 cups water.",
                "Skim foam, add salt & turmeric, simmer with lid slightly open for 15–20 mins.",
                "In another pan, sauté onions in oil. Add cumin, then tomato and cilantro.",
                "Combine with dal (this is the tarka). Simmer to desired consistency.",
                "Add lemon juice for extra flavor. Serve with rice."
            ]
        }
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
                    <h1 className="text-5xl font-bold text-center">Recipes</h1>
                    <Element name="Indian Spices" id="Indian Spices" className="mt-4">
                        <h3 className="text-3xl font-semibold py-2 text-center">Indian Spices</h3>
                        <div className="grid md:grid-cols-3 gap-4 px-4 mt-4">
                            {spices.map((spice, index) => (
                            <div key={index} className="bg-green-100 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105">
                                <div className="overflow-hidden rounded-t-3xl">
                                    <img src={spice.image} alt={spice.name} className="w-full h-32 object-cover transition-transform duration-500 hover:scale-110" />
                                </div>
                                <div className="p-2">
                                    <h3 className="text-xl font-semibold text-green-800 text-center">{spice.name}</h3>
                                    <h4 className="text-green-800 text-center text-base">{spice.meaning}</h4>
                                    {/* <a href="#" className="mt-4 block text-indigo-600 font-semibold hover:text-indigo-800">Read More</a> */}
                                </div>
                            </div>
                            ))}
                        </div>
                        <hr className='border-green-800 my-4 border-[1.5px]' />
                    </Element>
                    <Element name="Turmeric Recipes" id="Turmeric Recipes" className="mt-4">
                        <h3 className="text-3xl font-semibold py-2 text-center">Turmeric Recipes</h3>
                        <div className="space-y-10">
                            {recipes.map((recipe, idx) => (
                                <div
                                key={idx}
                                className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-md hover:shadow-lg transition flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
                                >
                                <div className="flex-1">
                                    <h2 className="text-xl font-semibold text-green-800 mb-3">
                                    {recipe.title}
                                    </h2>
                                    <h3 className="font-semibold mb-1 text-green-700">Ingredients:</h3>
                                    <ul className="list-disc list-inside text-sm text-green-800 mb-3">
                                    {recipe.ingredients.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                    </ul>
                                    <h3 className="font-semibold mb-1 text-green-700">Method:</h3>
                                    <ol className="list-decimal list-inside text-sm text-green-800">
                                    {recipe.method.map((step, i) => (
                                        <li key={i}>{step}</li>
                                    ))}
                                    </ol>
                                </div>
                                <img
                                    src={recipe.image}
                                    alt={recipe.title}
                                    className="w-full md:w-96 h-96 object-cover rounded-lg"
                                />
                                </div>
                            ))}
                        </div>
                        <hr className='border-green-800 my-4 border-[1.5px]' />
                    </Element>
                    <Element name="Myth About Indian Curry" id="Myth About Indian Curry" className="mt-4">
                        <h3 className="text-3xl font-semibold py-2 text-center">Myth About Indian Curry</h3>
                        <div className="p-2 shadow-md space-y-6">
                            <div>
                                <h2 className="text-xl font-semibold text-green-900 mb-2">Herbs - Spices - Chilies</h2>
                                <h4 className="text-green-800  leading-relaxed text-indent-8">
                                    Curry is not necessarily hot. It can be flavorful, aromatic, or chili hot. In fact, the word “curry” refers to a dish with a soupy consistency—made with herbs, spices, and/or chilies. Flavor comes from spices (like cumin, coriander), aroma from herbs (like cilantro, mint), and heat from chilies (red, green). Use any or all in combination to create your preferred curry.
                                </h4>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-green-900 mb-2">Basic North Indian Curry Paste</h2>
                                <h4 className="text-green-800  mb-2">This paste can be prepped and frozen for months. It forms the base of various Indian dishes.</h4>
                                <ul className="list-disc list-inside  text-green-900 mb-4">
                                    <li>4 onions</li>
                                    <li>200g fresh ginger or 4 Tbsp paste</li>
                                    <li>1 garlic pod or 2 Tbsp paste</li>
                                </ul>
                                <h4 className="text-green-800 text-indent-8 mb-2">
                                    Coarsely chop the ingredients and fry them in 3 Tbsp oil for ~20 mins until dark brown. Add 1 small can of tomato paste and cook until oil separates. This paste can now be frozen.
                                </h4>
                                <h4 className="text-green-800 text-indent-8">
                                    When cooking, heat 1 Tbsp oil, add the paste, then spices (1 cinnamon stick, 2 black + 2 green cardamom, 2 cloves, 1 tsp cumin). Sauté with your chosen ingredient (beans, peas, chicken, etc.) and add 1/3 tsp turmeric, salt, and chili or paprika. Add water and simmer 20 mins. Adjust consistency with water if needed.
                                </h4>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-green-900 mb-2">What You Can Cook With This Paste:</h2>
                                <ul className="list-disc list-inside  text-green-900">
                                    <li>2 cans of garbanzo, kidney, or black-eyed beans</li>
                                    <li>Vegetables like potatoes, peas, or both</li>
                                    <li>Chicken or fish</li>
                                </ul>
                                <h4 className="text-green-800  mt-2">
                                    Always garnish with fresh cilantro. Best served with hot naan, roti, or boiled rice.
                                </h4>
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

export default Recipes