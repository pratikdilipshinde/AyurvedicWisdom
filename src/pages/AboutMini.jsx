import React from "react";

import myheroesImg from '../assets/images/myheroes.jpg';
import dance1 from '../assets/images/dance1.jpg';
import dance2 from '../assets/images/dance2.jpg';
import dance3 from '../assets/images/dance3.jpg';
import Mini1968 from '../assets/images/Mini1968.jpg';
import Mini1998 from '../assets/images/Mini1998.jpg';
import Mini2008 from '../assets/images/Mini2008.jpg';
import Mini2014 from '../assets/images/Mini2014.jpg';

    const AboutMini = () => (
        <div className='bg-[#c5e2b2]'>
            <div className="font-messiri mx-4 md:mx-16 p-6 text-green-950">
                <h1 className="text-4xl font-bold text-center my-4">About Mini</h1>
                <h4 className='font-semibold text-2xl text-center'>Mini's life is made up of the small things, well done!</h4>
                <div className="grid md:grid-cols-3 gap-6 items-center">
                    {/* Main Text */}
                    <div className="md:col-span-2 space-y-4">
                        <h4 className='text-justify mt-2'>
                            With her finely-honed sensitivity and exquisite awareness for detail, she is a superb craftswoman, blending the gifts of the technical expertise with the artisan's eye.
                        </h4>
                        <h4 className='text-justify mt-2'>
                            She finds fulfillment in the healing or helping and in giving humble service.
                        </h4>
                        <h4 className='text-justify mt-2'>
                            She often downplays her own importance and is modest to the extreme, more concerned with doing the job well than getting the credit.
                        </h4>
                        <h4 className='text-justify mt-2'>
                            She enjoys nurturing others by serving them something nutritious or doing a helpful service for them.
                        </h4>
                        <h4 className='text-justify mt-2'>
                            She is a perfectionist. When out of balance she often suffers from the princess-and-the-pea syndrome i.e. perceive (and annoyed by) things that others either don't see or may consider very minor.
                        </h4>
                        <h4 className='text-justify mt-2'>
                            She cannot rest until the "wrong" is made right!
                        </h4>
                    </div>
    
                    {/* Image 1 */}
                    <div className="grid-col-1 justify-center m-auto">
                        <h4 className='font-semibold text-xl py-2 text-center'>
                            My Heroes
                        </h4>
                        <img
                            src={myheroesImg}
                            alt="My Heroes"
                            className="rounded-xl shadow-2xl w-full md:w-fit md:h-72 mx-auto"
                        />
                        <h4 className='font-semibold text-lg pt-2 text-center'>
                            Mother Teresa & Princess Diana
                        </h4>
                    {/* <h4 className='text-green-800 text-center text-2xl font-bold'>Neem Leaf </h4> */}
                    
                    </div>
                </div>
                <h4 className='font-semibold text-2xl text-justify mt-4'>Her accomplishments</h4>
                <ol className="list-decimal pl-8 text-justify mt-4 space-y-2">
                    <li>She is an Indian classical dancer. An avid swimmer, horse rider, car racer and much more.</li>
                    <li>When she cooks, she puts all her love and warm wishes into the food.</li>
                    <li>Her love and passion are flowers - the art of Ikebana.</li>
                    <li>She is a licensed beauty consultant and a cosmetologist.</li>
                    <li>She has home remedies for most minor ailments & shares freely with whoever needs them.</li>  
                </ol>
                <h4 className='font-semibold text-2xl text-center mt-4'>She is beautiful inside and out.</h4>
                <h4 className='font-semibold text-xl text-center mt-2'>The passage of time has lent her dignity, experience and maturity which can only help to serve others.</h4>
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
                <h4 className='font-semibold text-2xl text-center mt-4'>Wonderful Passage of Time brings experience and maturity</h4>
                <div className="grid md:grid-cols-4 gap-4 items-center mt-4">
                    {/* Image 1 */}
                    <div className="md:col-span-1 justify-center m-auto">
                        <img
                            src={Mini1968}
                            alt="Mini1968"
                            className="rounded-xl shadow-2xl w-full md:w-fit md:h-56"
                        />
                        <h4 className='font-semibold text-lg pt-2 text-center'>
                            1968
                        </h4>
                    </div>
                    <div className="md:col-span-1 justify-center m-auto">
                        <img
                            src={Mini1998}
                            alt="Mini1998"
                            className="rounded-xl shadow-2xl w-full md:w-fit md:h-56"
                        />
                        <h4 className='font-semibold text-lg pt-2 text-center'>
                            1998
                        </h4>
                    </div>
                    <div className="md:col-span-1 justify-center m-auto">
                        <img
                            src={Mini2008}
                            alt="Mini2008"
                            className="rounded-xl shadow-2xl w-full md:w-fit md:h-56"
                        />
                        <h4 className='font-semibold text-lg pt-2 text-center'>
                            2008
                        </h4>
                    </div>
                    <div className="md:col-span-1 justify-center m-auto">
                        <img
                            src={Mini2014}
                            alt="Mini2014"
                            className="rounded-xl shadow-2xl w-full md:w-fit md:h-56"
                        />
                        <h4 className='font-semibold text-lg pt-2 text-center'>
                            2014
                        </h4>
                    </div>
                </div>
                <h4 className='font-bold text-2xl text-center mt-4'>Mini Dhingra Guleria</h4>
            </div>
        </div>
    );

export default AboutMini;
