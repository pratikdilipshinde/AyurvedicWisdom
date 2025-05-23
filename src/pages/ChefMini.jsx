import React from "react";

import myheroesImg from '../assets/images/myheroes.jpg';
import dance1 from '../assets/images/dance1.jpg';
import dance2 from '../assets/images/dance2.jpg';
import dance3 from '../assets/images/dance3.jpg';
import Mini1968 from '../assets/images/Mini1968.jpg';
import Mini1998 from '../assets/images/Mini1998.jpg';
import Mini2008 from '../assets/images/Mini2008.jpg';
import Mini2014 from '../assets/images/Mini2014.jpg';

import miniYTimg from '../assets/images/inkitchen.jpg';

import aboutminiImg from '../assets/images/minikitchen.jpg';

    const ChefMini = () => (
        <div className='bg-[#c5e2b2]'>
            <div className="font-messiri mx-4 md:mx-16 p-6 text-green-950">
                <h1 className="text-5xl font-bold text-center my-4">Chef Mini</h1>
                <h4 className='font-semibold text-3xl text-center'>Mini's life is made up of the small things, well done!</h4>
                <div className="grid md:grid-cols-3 gap-6 items-center">
                    {/* Main Text */}
                    <div className="md:col-span-2 space-y-3">
                        <h4 className='text-justify text-lg mt-2'>
                            With her finely-honed sensitivity and exquisite awareness for detail, she is a superb craftswoman, blending the gifts of the technical expertise with the artisan's eye.
                        </h4>
                        <h4 className='text-justify text-lg mt-2'>
                            She finds fulfillment in the healing or helping and in giving humble service.
                        </h4>
                        <h4 className='text-justify text-lg mt-2'>
                            She often downplays her own importance and is modest to the extreme, more concerned with doing the job well than getting the credit.
                        </h4>
                        <h4 className='text-justify text-lg mt-2'>
                            She enjoys nurturing others by serving them something nutritious or doing a helpful service for them.
                        </h4>
                        <h4 className='text-justify text-lg mt-2'>
                            She is a perfectionist. When out of balance she often suffers from the princess-and-the-pea syndrome i.e. perceive (and annoyed by) things that others either don't see or may consider very minor.
                        </h4>
                        <h4 className='text-justify text-lg mt-2'>
                            She cannot rest until the "wrong" is made right!
                        </h4>
                    </div>
    
                    {/* Image 1 */}
                    <div className="grid-col-1 justify-center m-auto">
                        <h4 className='font-semibold text-2xl py-2 text-center'>
                            My Heroes
                        </h4>
                        <img
                            src={myheroesImg}
                            alt="My Heroes"
                            className="rounded-xl shadow-2xl w-full md:w-fit md:h-72 mx-auto"
                        />
                        <h4 className='font-semibold text-xl pt-2 text-center'>
                            Mother Teresa & Princess Diana
                        </h4>
                    {/* <h4 className='text-green-800 text-center text-2xl font-bold'>Neem Leaf </h4> */}
                    
                    </div>
                </div>
                <hr className='border-green-800 my-4 border-[1.5px]' />
                <h4 className='font-semibold text-3xl text-center mt-6'>Chef's Story</h4>
                <div className="grid md:grid-cols-4 gap-6 items-center">
                    {/* Main Text */}
                    <div className="md:col-span-3 space-y-3">
                        <h4 className='text-justify text-lg mt-2 text-indent-8'>
                            I have a passion for cooking and seeing the smile on people's faces when they eat my food. People ask why my food is so tasty, I always say that after cooking I put a bit of love in it.
                        </h4>
                        <h4 className='text-justify text-lg mt-2 text-indent-8'>
                            Each dish should have its own distinctive taste. When combining herbs and spices it is imperative not to allow them to take over the original taste of the item being cooked. Herbs and spices are there to enhance the taste not take away from the importance of the vegetable or grain or lentils.
                        </h4>
                        <h4 className='text-justify text-lg mt-2 text-indent-8'>
                            Being an ardent believer in the Ayurvedic science behind the goodness of the food I use that skill to bring out the best in my food. Lot of research has gone into my recipes to help enhance the Immune system in the body, especially important today, to combat the viruses invading us.
                        </h4>
                    </div>
    
                    {/* Image 1 */}
                    <div className="grid-col-1 justify-center m-auto">
                        <h4 className='font-semibold text-2xl py-2 text-center'>
                            Chef Mini
                        </h4>
                        <img
                            src={aboutminiImg}
                            alt="About Mini Image"
                            className="rounded-xl shadow-2xl w-full md:w-full md:h-56 mx-auto"
                        />
                    {/* <h4 className='text-green-800 text-center text-2xl font-bold'>Neem Leaf </h4> */}
                    
                    </div>
                    
                </div>
                <h4 className='text-justify text-lg mt-2 text-indent-8'>
                    I have nearly 40 years’ experience in Catering, Event Planning and teaching cooking. Many years as banquet manager of 5 star hotels, Jebel Ali Hotel and The Hilton in Dubai. I had the pleasure of teaching Indian cooking to International chefs.
                    I also held cooking classes for high school girls and young married ladies in Dubai in the 80’s.
                </h4>
                <hr className='border-green-800 my-4 border-[1.5px]' />
                <h4 className='font-semibold text-3xl text-center mt-6'>Her accomplishments</h4>
                <div className="grid md:grid-cols-3 gap-6 items-center">
                    {/* Main Text */}
                    <div className="md:col-span-2 space-y-3">
                        <ol className="list-decimal pl-8 text-justify text-xl mt-4 space-y-2">
                            <li>She is an Indian classical dancer. An avid swimmer, horse rider, car racer and much more.</li>
                            <li>When she cooks, she puts all her love and warm wishes into the food.</li>
                            <li>Her love and passion are flowers - the art of Ikebana.</li>
                            <li>She is a licensed beauty consultant and a cosmetologist.</li>
                            <li>She has home remedies for most minor ailments & shares freely with whoever needs them.</li>  
                        </ol>
                    </div>
    
                    {/* Image 1 */}
                    <div className="grid-col-1 justify-center m-auto">
                        
                        <img
                            src={miniYTimg}
                            alt="About Mini Image"
                            className="rounded-xl shadow-2xl w-full md:w-full md:h-60 mx-auto"
                        />
                    {/* <h4 className='text-green-800 text-center text-2xl font-bold'>Neem Leaf </h4> */}
                    
                    </div>
                </div>
                <hr className='border-green-800 my-4 border-[1.5px]' />
                <h4 className='font-semibold text-3xl text-center mt-4'>She is beautiful inside and out.</h4>
                <h4 className='font-semibold text-2xl text-center mt-2'>The passage of time has lent her dignity, experience and maturity which can only help to serve others.</h4>
                <h4 className='font-semibold text-lg text-right mt-2'>(Written by a loving friend)</h4>
                <div className="grid md:grid-cols-3 gap-4 items-center mt-4">
                    {/* Image 1 */}
                    <div className="md:col-span-1 justify-center m-auto">
                        <img
                            src={dance1}
                            alt="Dance 1"
                            className="rounded-xl shadow-2xl w-full md:w-fit md:h-64 mx-auto"
                        />
                    </div>
                    <div className="md:col-span-1 justify-center m-auto">
                        <img
                            src={dance2}
                            alt="Dance 2"
                            className="rounded-xl shadow-2xl w-full md:w-fit md:h-64 mx-auto"
                        />
                    </div>
                    <div className="md:col-span-1 justify-center m-auto">
                        <img
                            src={dance3}
                            alt="Dance 3"
                            className="rounded-xl shadow-2xl w-full md:w-fit md:h-64 mx-auto"
                        />
                    </div>
                </div>
                <hr className='border-green-800 my-4 border-[1.5px]' />
                <h4 className='font-semibold text-3xl text-center mt-4'>Wonderful Passage of Time brings experience and maturity</h4>
                <div className="grid md:grid-cols-4 gap-4 items-center mt-4">
                    {/* Image 1 */}
                    <div className="md:col-span-1 justify-center m-auto">
                        <img
                            src={Mini1968}
                            alt="Mini1968"
                            className="rounded-xl shadow-2xl w-full md:w-fit md:h-40"
                        />
                        <h4 className='font-semibold text-lg pt-2 text-center'>
                            1968
                        </h4>
                    </div>
                    <div className="md:col-span-1 justify-center m-auto">
                        <img
                            src={Mini1998}
                            alt="Mini1998"
                            className="rounded-xl shadow-2xl w-full md:w-fit md:h-40"
                        />
                        <h4 className='font-semibold text-lg pt-2 text-center'>
                            1998
                        </h4>
                    </div>
                    <div className="md:col-span-1 justify-center m-auto">
                        <img
                            src={Mini2008}
                            alt="Mini2008"
                            className="rounded-xl shadow-2xl w-full md:w-fit md:h-40"
                        />
                        <h4 className='font-semibold text-lg pt-2 text-center'>
                            2008
                        </h4>
                    </div>
                    <div className="md:col-span-1 justify-center m-auto">
                        <img
                            src={Mini2014}
                            alt="Mini2014"
                            className="rounded-xl shadow-2xl w-full md:w-fit md:h-40"
                        />
                        <h4 className='font-semibold text-lg pt-2 text-center'>
                            2014
                        </h4>
                    </div>
                </div>
                <h4 className='font-bold text-3xl text-center mt-4'>Mini Dhingra Guleria</h4>
            </div>
        </div>
    );

export default ChefMini;
