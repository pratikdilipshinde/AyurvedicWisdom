import React, { useState, useEffect } from 'react';
import FloatingMenu from '../../components/FloatingMenu';
import { Element } from 'react-scroll';

const BeautyTips = () => {

    const menuItems = [
        "Acne"
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
                    <h1 className="text-5xl font-bold text-center">Beauty</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-4 px-4'>
                        <div className='bg-green-800 text-[#d0e4c2] rounded-2xl p-2'>
                            <h3 className='text-lg text-center'>A Thing of Beauty is a Joy forever!</h3>
                            <h3 className='text-lg text-center'>- John Keats</h3>
                        </div>
                        <div className='bg-green-800 text-[#d0e4c2] rounded-2xl p-2'>
                            <h3 className='text-lg text-center'>Everyone's born Beautiful <br />It's up to You to Enhance it!</h3>
                            <h3 className='text-lg text-center'>- Mini Guleria</h3>
                        </div>
                    </div>
                    <h3 className="text-2xl font-semibold py-2 text-center underline">BEAUTY OF A WOMAN:</h3>
                    <h3 className='text-lg text-center'>
                        The beauty of a woman
                        Is not the clothes she wears
                        The figure she carries
                        Or the way she combs her hair
                        The beauty of woman
                        Must be seen from her eyes.
                        Because that is the doorway to her heart,
                        The place where love resides.
                        The beauty of a woman
                        Is not in a facial mole
                        But the true beauty in a woman
                        Is reflected in her soul.
                        It is the caring she lovingly gives,
                        The passion she shows,
                        The beauty of a woman
                        With passing years only grows.
                    </h3>
                    <Element name="Acne" id="Acne" className="mt-2">
                        <h3 className="text-3xl font-semibold py-2 text-center">Acne</h3>
                        <h4 className="font-bold text-xl text-center underline py-2">Causes for Acne</h4>
                        <h4 className='text-indent-8 text-justify'>
                            Hormonal imbalance (testosterone) causing over stimulation of sebaceous glands is the single most factor causing acne. Acne happens when oil (sebaceous) glands secreting sebum become active around puberty. Sebum (oil) is a natural substance that lubricates and protects the skin, and under certain circumstances, cells that are close to the surface block the openings of sebaceous glands and cause a buildup of oil underneath. This oil stimulates bacteria (which live on everyones skin and generally cause no problems) to multiply and cause surrounding tissues to become inflamed. Inflammation near the skin's surface produces a pustule; deeper inflammation results in a pimple; deeper still forms a pus-filled cyst. If the oil breaks through to the surface, the result is a "whitehead". If the oil accumulates melanin pigment or becomes oxidized, the oil changes from white to black, and the result is a "blackhead". Blackheads are therefore not dirt, but oxidized oil.
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            Acne is a skin condition that is characterized by blackheads, whiteheads, inflamed pimples (pustules) and deeper lumps (nodules). Acne generally occurs on the face, but may break out on the neck, chest, back, shoulders and upper arms also.
                        </h4>
                        <h4 className='font-semibold text-lg pt-4'>Lemon</h4>
                        <h4 className='text-indent-8 text-justify'>
                            Lemon contains citric acid, which is very effective in treating acne. It also acts as an astringent and helps remove excess oil, kills bacteria, and normalizes the skin's pH balance. The vitamin C found in citrus fruits is vital for a healthy glowing skin. Using fruits belonging to this family naturally dry up the pimples. Here are some suggestions on how to prepare a homemade acne treatment using lemon:
                        </h4>
                        <ol className='list-decimal pl-8'>
                            <li>Apply fresh lemon juice on the acne and leave it overnight. Wash with water the following morning.</li>
                            <li>Mix one part of freshly squeezed lemon juice with an equal part of rose water. Put the mixture on affected areas for at least half an hour. Wash it afterwards with water.</li>
                        </ol>
                        <h4 className='font-semibold text-lg pt-4'>Aloe Vera</h4>
                        <h4 className='text-indent-8 text-justify'>
                            Aloe Vera is a cellular regenerator and has antibacterial and anti-fungal effects. Use Aloe Vera juice or gel to counteract infection and promote healing. For acne scars, using Aloe Vera juice morning and night for as long as necessary will help reduce the scars and improve skin complexion and color. The pulp of an Aloe plant is an excellent skin cleanser. Break off a portion and rub the pulp directly on the skin.
                        </h4>
                        <h4 className='font-semibold text-lg pt-4'>Cucumber</h4>
                        <h4 className='text-indent-8 text-justify'>
                            This has a cleansing action within the body by removing accumulated pockets of old waste material and chemical toxins. Cucumber purifies the blood and lymphatic system, resulting in a clearer skin. Juice a peeled cucumber in a blender and apply it to the acne. Another variation of this remedy is to drink four or five cups of cucumber juice daily for a week.
                        </h4>
                        <h4 className='font-semibold text-lg pt-4'>Garlic</h4>
                        <h4 className='text-indent-8 text-justify'>
                            Garlic is rich in alkaline salts and sulphur compounds; garlic is a blood purifier and keeps the skin clear of spots and pimples. Rub the acne with raw garlic several times a day and wash off once the application dries off. This is a good treatment for acne, but you should use it with extreme caution if you have sensitive skin as garlic is very strong, and can burn or irritate your skin. You can also use garlic juice by crushing the garlic and squeezing the juice through a piece of cheese cloth or a garlic press.
                        </h4>
                        <h4 className='font-semibold text-lg pt-4'>Cilantro</h4>
                        <h4 className='text-indent-8 text-justify'>
                            A teaspoon of cilantro juice, mixed with a pinch of turmeric powder, is another effective home remedy for pimples and blackheads. Apply the mixture on the face after thoroughly washing it every night before retiring. You may also use mint juice/holy basil/fenugreek juice in a similar manner. All of these have antiseptic, astringent properties, and thus help in healing the infection and dry up the excess sebum.
                        </h4>
                        <h4 className='font-semibold text-lg pt-4'>Water</h4>
                        <h4 className='text-indent-8 text-justify'>
                            Take a glass of water at room temperature. Fill the mouth with some water and rotate (squish) the water in the mouth till you feel that the water temperature has changed to slightly warm. Then throw the water out and repeat this process many times till you feel the mouth filled up with the sweet taste of saliva. Water takes away the excess heat of the body, activates the digestion, and dilutes the acid.
                        </h4>
                        <h4 className='font-semibold text-lg pt-4'>Sandalwood</h4>
                        <h4 className='text-indent-8 text-justify'>
                            Sandalwood is a mild astringent. It helps in strengthening and contraction of the muscles, gums and skin. It is effective in providing a tighter skin tone. Make a Sandal wood paste with rose water and apply on the scars. Allow it to dry and wash it off with cold water.
                        </h4>
                        <h4 className='font-semibold text-lg pt-4'>Rose Water</h4>
                        <h4 className='text-indent-8 text-justify'>
                            Rose water stimulates the skin, heightening the blood flow. Rose water controls and balances sebum production, making it useful for both dry and oily skin. It can balance and restore the skin's pH and helps tighten pores. Its antibacterial properties help fight acne, giving troubled skin a gentle rather than a harsh treatment. It is reputed to be useful in the treatment of all sorts of dermatitis. You may apply rose water on the face with a cotton ball before retiring to bed everyday.
                        </h4>
                        <h4 className='font-semibold text-lg pt-4'>Tea Tree Oil</h4>
                        <h4 className='text-indent-8 text-justify'>
                            This is very effective against acne as it contains bacteria-fighting substances called Terpenes. Acne is often caused by bacteria and the Terpenes either kill them or weaken them enough to be destroyed by protective antibodies. One should use tea tree oil as an "on spot" application to acne, and not on the entire face as it dries other areas with less active oil glands.
                        </h4>
                        <h4 className='font-semibold text-lg pt-4'>Disclaimer</h4>
                        <h4 className='text-indent-8 text-justify'>
                            If you are experiencing any or several of the symptoms, you should talk to your doctor about whether you have acne. It is recommended that you do a skin test before applying any of the above mentioned kitchen remedies. You must verify with your physician before applying this article's suggestions to your individual situation.
                        </h4>
                        <h4 className='font-bold text-lg text-center'>Courtesy DR. INDU ARORA from Tathaatsu</h4>
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

export default BeautyTips