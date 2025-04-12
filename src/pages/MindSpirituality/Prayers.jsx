import React, { useState, useEffect } from 'react';
import FloatingMenu from '../../components/FloatingMenu';
import { Element } from 'react-scroll';

import goldentempleImg from '../../assets/images/goldentemple.jpg';
import hindutempleImg from '../../assets/images/hindutemple.jpg';
import jewishtempleImg from '../../assets/images/jewishtemple.jpg';
import muslimtempleImg from '../../assets/images/muslimtemple.jpg';
import christiantempleImg from '../../assets/images/christiantemple.jpg';
import lordshivaImg from '../../assets/images/lordshiva.jpg';
import ganesh1Img from '../../assets/images/ganesh1.png';
import ganesh2Img from '../../assets/images/ganesh2.png';
import prayinghandsImg from '../../assets/images/prayinghands.jpg';

import mrityunjayaMantra from '../../assets/audio/mmm3.mp3';

const Prayers = () => {

    const menuItems = [
        "Sikh Prayer",
        "Hindu Prayer",
        "Jewish Prayer",
        "Muslim Prayer",
        "Christian Prayer",
        "Maha Mrityunjaya Mantra",
        "Ganesha"
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
                    <h1 className="text-5xl font-bold text-center">Prayers</h1>
                    <Element name="Sikh Prayer" id="Sikh Prayer" className="mt-4">
                        <h3 className="text-3xl font-semibold py-2 text-center">Sikh Prayer</h3>
                        <div className="grid md:grid-cols-3 gap-6 items-center">
                            {/* Main Text */}
                            <div className="md:col-span-2 space-y-4">
                                <h3 className="text-xl font-normal pt-2 text-center">
                                    Mool Mantar (Basic prayer for all needs)
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    {/* Main Text */}
                                    <div className="md:col-span-1 space-y-4">
                                        <h4 className='font-semibold text-lg pt-2 text-center'>
                                            Ik Onkaar<br />
                                            Sat Naam<br />
                                            Kartaa Purakh<br />
                                            Nirbh-a-u<br />
                                            Nirvair<br />
                                            Akaal Moorat<br />
                                            Ajoonee Saibhang<br />
                                            Gur Parsaad
                                        </h4>
                                    </div>
                                    <div className="md:col-span-1 space-y-4">
                                        <h4 className='font-semibold text-lg pt-2 text-center'>
                                            There is only one God<br />
                                            His name is the only truth<br />
                                            He is the creator of the universe<br />
                                            He is without fear<br />
                                            He is without enemies<br />
                                            He is immortal<br />
                                            He is from times immemorial<br />
                                            We worship him by his grace
                                        </h4>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-semibold text-center">
                                    Waheguru
                                </h3>
                            </div>
            
                            {/* Image 1 */}
                            <div className="md:col-span-1 justify-center m-auto">
                                <img
                                    src={goldentempleImg}
                                    alt="Golden Temple"
                                    className="rounded-xl shadow-2xl w-full md:w-fit md:h-64"
                                />
                                {/* <h4 className='text-green-800 text-center text-2xl font-bold'>Neem Leaf </h4> */}
                            </div>
                        </div>
                        <hr className='border-green-800 my-4 border-[1.5px]' />
                    </Element>
                    <Element name="Hindu Prayer" id="Hindu Prayer" className="mt-4">
                        <h3 className="text-3xl font-semibold py-2 text-center">Hindu Prayer</h3>
                        <div className="grid md:grid-cols-3 gap-6 items-center">
                            {/* Main Text */}
                            <div className="md:col-span-2 space-y-4">
                                <h3 className="text-xl font-normal pt-2 text-center">
                                    The Gayatri Mantra (From Bhagwat Geeta)
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    {/* Main Text */}
                                    <div className="md:col-span-1 space-y-4">
                                        <h4 className='font-semibold text-lg pt-2 text-center'>
                                            Om Bhur Bhuva Svaha<br />
                                            Tat Savitur Varenyam<br />
                                            Bhargo Devasya<br />
                                            Dhee mahi<br />
                                            DhiYo Yo nah<br />
                                            Pracho daya
                                        </h4>
                                    </div>
                                    <div className="md:col-span-1 space-y-4">
                                        <h4 className='font-semibold text-lg pt-2 text-center'>
                                            O'Lord -protector of life and breath<br />
                                            Remover of all miseries<br />
                                            Creator and the highest intelligence<br />
                                            Possessing eternal qualities<br />
                                            May Thine qualities and inspirations<br />
                                            Pass on to us
                                        </h4>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-semibold text-center">
                                    OM mmmm
                                </h3>
                            </div>
            
                            {/* Image 1 */}
                            <div className="md:col-span-1 justify-center m-auto">
                                <img
                                    src={hindutempleImg}
                                    alt="Hindu Temple"
                                    className="rounded-xl shadow-2xl w-full md:w-fit md:h-64"
                                />
                                {/* <h4 className='text-green-800 text-center text-2xl font-bold'>Neem Leaf </h4> */}
                            </div>
                        </div>
                        <hr className='border-green-800 my-4 border-[1.5px]' />
                    </Element>
                    <Element name="Jewish Prayer" id="Jewish Prayer" className="mt-4">
                        <h3 className="text-3xl font-semibold py-2 text-center">Jewish Prayer</h3>
                        <div className="grid md:grid-cols-3 gap-6 items-center">
                            {/* Main Text */}
                            <div className="md:col-span-2 space-y-4">
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    {/* Main Text */}
                                    <div className="md:col-span-1 space-y-4">
                                        <h4 className='font-semibold text-lg pt-2 text-center'>
                                            Barukh ata Adonai<br />
                                            Eloheinu<br />
                                            melekh ha-olam<br />
                                            Shah Israel Adonaj<br />
                                            Elohejnu Adonaj Echad<br />
                                            Kados Kados Adonaj Cvaot
                                        </h4>
                                    </div>
                                    <div className="md:col-span-1 space-y-4">
                                        <h4 className='font-semibold text-lg pt-2 text-center'>
                                            Blessed are you lord<br />
                                            Our God<br />
                                            King of the Universe<br />
                                            O! hear me Lord<br />
                                            You are the only one<br />
                                            Holy Holy! Lord of Power
                                        </h4>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-semibold text-center">
                                    Amen, Selah
                                </h3>
                            </div>
            
                            {/* Image 1 */}
                            <div className="md:col-span-1 justify-center m-auto">
                                <img
                                    src={jewishtempleImg}
                                    alt="Jewish Temple"
                                    className="rounded-xl shadow-2xl w-full md:w-fit md:h-56"
                                />
                                {/* <h4 className='text-green-800 text-center text-2xl font-bold'>Neem Leaf </h4> */}
                            </div>
                        </div>
                        <hr className='border-green-800 my-4 border-[1.5px]' />
                    </Element>
                    <Element name="Muslim Prayer" id="Muslim Prayer" className="mt-4">
                        <h3 className="text-3xl font-semibold py-2 text-center">Muslim Prayer</h3>
                        <div className="grid md:grid-cols-3 gap-6 items-center">
                            {/* Main Text */}
                            <div className="md:col-span-2 space-y-4">
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    {/* Main Text */}
                                    <div className="md:col-span-1 space-y-4">
                                        <h4 className='font-semibold text-lg pt-2 text-center'>
                                            Bismillah<br />
                                            E Rahman E Rahim<br />
                                            Laa Ilaaha Illia-lah
                                        </h4>
                                    </div>
                                    <div className="md:col-span-1 space-y-4">
                                        <h4 className='font-semibold text-lg pt-2 text-center'>
                                            Everthing starts with the name of Allah<br />
                                            Infinitely compassionate & Merciful Lord<br />
                                            There is only one Allah, who we worship
                                        </h4>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-semibold text-center">
                                    Allahu Akbar
                                </h3>
                            </div>
            
                            {/* Image 1 */}
                            <div className="md:col-span-1 justify-center m-auto">
                                <img
                                    src={muslimtempleImg}
                                    alt="Muslim Temple"
                                    className="rounded-xl shadow-2xl w-full md:w-fit md:h-56"
                                />
                                {/* <h4 className='text-green-800 text-center text-2xl font-bold'>Neem Leaf </h4> */}
                            </div>
                        </div>
                        <hr className='border-green-800 my-4 border-[1.5px]' />
                    </Element>
                    <Element name="Christian Prayer" id="Christian Prayer" className="mt-4">
                        <h3 className="text-3xl font-semibold py-2 text-center">Christian Prayer</h3>
                        <div className="grid md:grid-cols-3 gap-6 items-center">
                            {/* Main Text */}
                            <div className="md:col-span-2 space-y-4">
                                <h4 className='font-semibold text-lg pt-2 text-center'>
                                    Our Father who art in heaven, hallowed be The name<br />
                                    Thy kingdom come, Thy will be done on earth as it is in heaven<br />
                                    Give us this day our daily bread, And forgive us our trespasses<br />
                                    even as we forgive those who trespass against us<br />
                                    Lead us not into temptation but deliver us from evil<br />
                                    For Thine is the kingdom and the power and the glory.
                                </h4>
                                <h3 className="text-2xl font-semibold text-center">
                                    Amen
                                </h3>
                            </div>
            
                            {/* Image 1 */}
                            <div className="md:col-span-1 justify-center m-auto">
                                <img
                                    src={christiantempleImg}
                                    alt="Christian Temple"
                                    className="rounded-xl shadow-2xl w-full md:w-fit md:h-56"
                                />
                                {/* <h4 className='text-green-800 text-center text-2xl font-bold'>Neem Leaf </h4> */}
                            </div>
                        </div>
                        <hr className='border-green-800 my-4 border-[1.5px]' />
                        <h4 className='text-center font-bold text-lg'>
                            Amazing !<br/>
                            There is only one God, one Lord, one Universal Intelligence<br/>
                            And we ALL pray to that ONE Entity
                        </h4>
                        <hr className='border-green-800 my-4 border-[1.5px]' />
                    </Element>
                    <Element name="Maha Mrityunjaya Mantra" id="Maha Mrityunjaya Mantra" className="mt-4">
                        <h3 className="text-3xl font-semibold py-2 text-center">Maha Mrityunjaya Mantra</h3>
                        <div className="grid md:grid-cols-3 gap-6 items-center">
                            {/* Main Text */}
                            <div className="md:col-span-2 space-y-4">
                                <h3 className="text-lg font-normal pt-2 text-center">
                                    Address to LORD SHIVA. Chanting of this Mantra, creates Divine vibrations which ward off all the negative and evil forces and surrounds us with a powerful protective shield
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    {/* Main Text */}
                                    <div className="md:col-span-1 space-y-4">
                                        <h4 className='font-semibold text-lg pt-2 text-center'>
                                            Om Tryambhakam Yajamahe<br />
                                            Sugandhim Pushtivardhanam<br />
                                            Urvarukamiva Bandhanan<br />
                                            Mrityor Mukshiya Maamritat
                                        </h4>
                                    </div>
                                    <div className="md:col-span-1 space-y-4">
                                        <h4 className='font-semibold text-lg pt-2 text-center'>
                                            We worship the Three-eyed One (Lord Siva)<br />
                                            Master of all senses and qualities<br />
                                            He release us from the bondage of death<br />
                                            (Moksha) He grants us immortality
                                        </h4>
                                    </div>
                                </div>
                            </div>
            
                            {/* Image 1 */}
                            <div className="md:col-span-1 justify-center m-auto">
                                <img
                                    src={lordshivaImg}
                                    alt="Lord Shiva"
                                    className="rounded-xl shadow-2xl w-full md:w-fit md:h-56"
                                />
                                <audio loop controls className="w-full mt-2">
                                    <source src={mrityunjayaMantra} type="audio/mpeg" />
                                    {/* Fallback text for browsers that don't support the audio element */}
                                    Your browser does not support the audio element.
                                </audio>
                                {/* <h4 className='text-green-800 text-center text-2xl font-bold'>Neem Leaf </h4> */}
                            </div>
                        </div>
                        <hr className='border-green-800 my-4 border-[1.5px]' />
                    </Element>
                    <Element name="Ganesha" id="Ganesha" className="mt-4">
                        <h3 className="text-3xl font-semibold py-2 text-center">Ganesha</h3>
                        <h4 className='font-normal text-lg text-center'>
                            Surrender completely
                            and attain supreme Love !
                        </h4>
                        <h4 className='font-semibold text-2xl pt-2 text-center'>
                            Shree Ganesh Vandana Mantra
                        </h4>
                        <div className="grid md:grid-cols-3 gap-6 items-center">
                            {/* Image 1 */}
                            <div className="md:col-span-1 justify-center m-auto">
                                <img
                                    src={ganesh1Img}
                                    alt="Ganesha Image 1"
                                    className="rounded-xl shadow-2xl w-full md:w-fit md:h-56"
                                />
                                {/* <h4 className='text-green-800 text-center text-2xl font-bold'>Neem Leaf </h4> */}
                            </div>
                            {/* Main Text */}
                            <div className="md:col-span-1 space-y-4">
                                <h4 className='font-semibold text-lg pt-2 text-center'>
                                    Chuklam Baratharam Vishnum<br />
                                    Shashi Varnam Chaturbhujam<br />
                                    Prasanna Vadanam Dhyayet<br />
                                    Sarva Vighnopa Shantaye<br />
                                    Agajanana Padmargam Gajanana<br />
                                    Mahirsham Aneka Dantam Bhaktanam<br />
                                    Eka Dantam Upasmahe
                                </h4>
                                <h3 className="text-2xl font-semibold text-center">
                                    This is a powerful prayer of Lord Ganesh
                                </h3>
                            </div>
            
                            {/* Image 2 */}
                            <div className="md:col-span-1 justify-center m-auto">
                                <img
                                    src={ganesh2Img}
                                    alt="Ganesha Image 2"
                                    className="rounded-xl shadow-2xl w-full md:w-fit md:h-56"
                                />
                                {/* <h4 className='text-green-800 text-center text-2xl font-bold'>Neem Leaf </h4> */}
                            </div>
                        </div>
                        <div className="text-center mx-auto mt-4">
                            <img
                                src={prayinghandsImg}
                                alt="Praying Hands"
                                className="rounded-xl shadow-2xl w-full md:w-fit md:h-56 mx-auto"
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

export default Prayers