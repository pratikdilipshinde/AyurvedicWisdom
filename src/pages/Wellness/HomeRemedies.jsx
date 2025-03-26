import React, { useState, useEffect } from 'react';
import FloatingMenu from '../../components/FloatingMenu';
import { Element } from 'react-scroll';
import honeyImg from '../../assets/images/honey.jpg';
import cinnamonImg from '../../assets/images/cinnamon.jpg';
import fruitsImg from '../../assets/images/fruits.jpg';

import kiwiImg from '../../assets/images/kiwi.jpg';
import appleImg from '../../assets/images/apple.jpg';
import orangeImg from '../../assets/images/orange.jpg';
import strawberryImg from '../../assets/images/strawberry.jpg';
import watermelonImg from '../../assets/images/watermelon.jpg';
import papayaguavaImg from '../../assets/images/papayaguava.jpg';

import asparagusImg from '../../assets/images/asparagus.jpg';
import onionsImg from '../../assets/images/onions.jpg';
import datesImg from '../../assets/images/dates.jpg';

const HomeRemedies = () => {

    const menuItems = [
            "Cinnamon and Honey",
            "Food as Medicine",
            "Eating Fruit to Cure Cancer",
            "Asparagus for Cancer",
            "Onions",
            "Dates"
        ];
            
        const [activeSection, setActiveSection] = useState(menuItems[0]);

        const benefits = [
            { title: "KIWI", img: kiwiImg, description: "Tiny but mighty, and a good source of potassium, magnesium, vitamin E & fiber. Its vitamin C content is twice that of an orange!" },
            { title: "ORANGES", img: orangeImg, description: "Oranges a day may help keep colds away, lower cholesterol, prevent & dissolve kidney stones, and reduce the risk of colon cancer." },
            { title: "STRAWBERRY", img: strawberryImg, description: "Protective Fruit. Strawberries have the highest total antioxidant power among major fruits & protect the body from cancer-causing, blood vessel-clogging free radicals." },
            { title: "APPLE", img: appleImg, description: "AN APPLE a day keeps the doctor away? Although an apple has a low vitamin C content, it has antioxidants & flavonoids which enhances the activity of vitamin C, thereby helping to lower the risk of colon cancer, heart attack & stroke." },
            { title: "WATERMELON", img: watermelonImg, description: "Coolest thirst quencher. Composed of 92% water, it is also packed with a giant dose of Glutathione, which helps boost our immune system. Also a key source of lycopene, the cancer-fighting oxidant. Also found in watermelon: Vitamin C & Potassium." },
            { title: "GUAVA & PAPAYA", img: papayaguavaImg, description: "Top awards for vitamin C. They are the clear winners for their high vitamin C content. Guava is also rich in fiber, which helps prevent constipation. Papaya is rich in carotene, good for your eyes." },
            
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
                <div className="font-messiri max-w-full mx-12 shadow-md rounded-lg p-6 flex gap-6">
                    {/* Left Floating Menu */}
                    <div className="w-1/5">
                    <FloatingMenu menuItems={menuItems} activeSection={activeSection} />
                    </div>

                    {/* Right Content Section */}
                    <div className="w-4/5 h-fit overflow-y-auto p-4 border text-green-950">
                        <h1 className="text-5xl font-bold text-center">Home Remedies</h1>
                        <Element name="Cinnamon and Honey" id="Cinnamon and Honey" className="mt-4">
                            <h3 className="text-3xl font-semibold py-2 text-center underline">Cinnamon and Honey</h3>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-4 px-4'>
                                <div className="grid-col-1 justify-center m-auto">
                                    <img
                                        src={honeyImg}
                                        alt="Honey"
                                        className="rounded-xl shadow-2xl w-full md:w-fit md:h-48"
                                    />
                                </div>
                                <div className="grid-col-1 justify-center m-auto">
                                    <img
                                        src={cinnamonImg}
                                        alt="Cinnamon"
                                        className="rounded-xl shadow-2xl w-full md:w-fit md:h-48"
                                    />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold py-2 text-center underline">A Magical Cure for Numerous Problems</h3>
                            <h4 className='font-semibold text-lg pt-4'>Very Important:</h4>
                            <h4 className='text-indent-8 text-justify'>
                                Facts on Honey and Cinnamon: It is found that a mixture of honey and cinnamon cures most diseases. Honey is produced in most of the countries of the world. Scientists of today also accept honey as a very effective medicine for all kinds of diseases.
                            </h4>
                            <h4 className='text-indent-8 text-justify mt-2'>
                                Honey can be used without any side effects for any kind of disease. Today's science says that even though honey is sweet, if taken in the right dosage as a medicine, it does not harm diabetic patients. Weekly World News, a Canadian magazine [January 17, 1995 issue], has given the following list of diseases that can be cured by honey and cinnamon as researched by western scientists:
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                HEART DISEASES:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Make a paste of honey and cinnamon powder, apply on bread, instead of jelly and jam, and eat it regularly for breakfast. It reduces the cholesterol in the arteries and saves the patient from heart attack. Also, for those who have already had an attack, if they do this process daily, it is a preventative measure against the next attack. Regular use of the above process relieves loss of breath and strengthens the heart beat. In America and Canada, various nursing homes have treated patients successfully and have found that as you age, the arteries and veins lose their flexibility and get clogged; honey and cinnamon revitalize the arteries and veins.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                LONGEVITY:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Tea made with honey and cinnamon powder, when taken regularly, arrests the ravages of old age. Take four spoons of honey, one spoon of cinnamon powder and three cups of water and boil to make a tea. Drink 1/4 cup, three to four times a day. It keeps the skin fresh and soft and arrests old age. Life spans also increases and even a 100 year old, starts performing the chores of a 20-year-old.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                CANCER:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Recent research in Japan and Australia has revealed that advanced cancer of the stomach and bones have been cured successfully. Patients suffering from these kinds of cancer should daily take one tablespoon of honey with one teaspoon of cinnamon powder for one month three times a day.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                WEIGHT LOSS:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                On a daily basis, drink honey and cinnamon powder boiled in one cup of water in the morning one half hour before breakfast [on an empty stomach] and at night before sleeping. If taken regularly, it reduces the weight of even the most obese person. Also, drinking this mixture regularly does not allow the fat to accumulate in the body even though the person may eat a high calorie diet.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                FATIGUE:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Recent studies have shown that the sugar content of honey is more helpful rather than being detrimental to the strength of the body. Senior citizens, who take honey and cinnamon powder in equal parts, are more alert and flexible. Dr. Milton, who has done research, says that a half Tablespoon of honey taken in a glass of water and sprinkled with cinnamon powder, taken daily after brushing and in the afternoon at about 3:00 P.M. When the vitality of the body starts to decrease, increases the vitality of the body within a week.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                INDIGESTION:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Cinnamon powder sprinkled on two tablespoons of honey taken before food relieves acidity and digests the heaviest of meals.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                IMMUNE SYSTEM:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Daily use of honey and cinnamon powder strengthens the immune system and protects the body from bacterial and viral attacks. Scientists have found that honey has various vitamins and iron in large amounts. Constant use of Honey strengthens the white blood corpuscles to fight bacterial and viral diseases.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                BLADDER INFECTIONS:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Take two table spoons of Cinnamon powder and one tea spoon honey in a Glass of lukewarm water and drink it. It destroys the germs in the bladder.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                CHOLESTEROL:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Two tablespoons of honey and three teaspoons of Cinnamon Powder mixed in 16 ounces of tea water, given to a cholesterol patient, was found to reduce the level of cholesterol in the blood by 10 percent within two hours. As mentioned for arthritic patients, if taken three times a day, any chronic Cholesterol is cured. According to information received in the said Journal, pure honey taken with food daily relieves complaints of Cholesterol.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                COLDS:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Those suffering from common or severe colds should take one tablespoon lukewarm honey with 1/4 spoon cinnamon powder daily for three days. This Process will cure most chronic cough, cold, and clear the sinuses.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                UPSET STOMACH:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Honey taken with cinnamon powder cures stomach ache and also clears stomach ulcers from the root.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                GAS:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                According to studies done in India and Japan, Honey is taken with cinnamon powder relieves the stomach of gas.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                ARTHRITIS:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Arthritis patients may take daily [morning and night], one cup of hot water with two spoons of honey and one small teaspoon of cinnamon powder. If taken regularly, even chronic arthritis can be cured. In a recent research conducted at Copenhagen University, it was found that when the doctors treated their patients with a mixture of one tablespoon of Honey and one half teaspoon of Cinnamon powder before breakfast, they found that within a week, out of the 200 people so treated, 73 patients were totally relieved of pain, and within a month, mostly all the patients who could not walk or move around because of arthritis started walking without pain.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                INFLUENZA:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                A scientist in Spain has proved that honey contains a natural ingredient which kills the influenza germs and saves the patient from flu.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                PIMPLES:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Take three tablespoons of honey and one teaspoon of cinnamon powder and make a paste. Apply this paste on the pimples before sleeping and wash it next morning with warm water. If done daily for two weeks, it removes pimples from the root.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                SKIN INFECTIONS:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Applying honey and cinnamon powder in equal parts on the affected parts cures eczema, ringworm and all types of skin infections.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                BAD BREATH:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                People of South America, first thing in the morning, gargle with one teaspoon of honey and cinnamon powder mixed in hot water, so their breath stays fresh throughout the day.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                HEARING LOSS:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Daily (morning and night) honey and cinnamon powder, taken in equal parts restores hearing. Remember when we were kids? We had toast with real butter and cinnamon sprinkled on it!
                            </h4>
                            <hr className='border-green-800 my-4 border-[1.5px]' />
                        </Element>
                        <Element name="Food as Medicine" id="Food as Medicine" className="mt-4">
                            <h3 className="text-3xl font-semibold py-2 text-center underline">Food as Medicine</h3>
                            <h4 className='font-semibold text-lg pt-2'>
                                HEADACHE? EAT FISH!:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Eat plenty of fish -- fish oil helps prevent headaches. 
                                So does ginger, which reduces inflammation and pain.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                HAVE FEVER? EAT YOGURT:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Eat lots of yogurt before pollen season.
                                Also-eat honey from your area (local region) daily.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                TO PREVENT STROKE DRINK TEA:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Prevent buildup of fatty deposits on artery walls with regular doses of tea.
                                (Actually, tea suppresses my appetite and keeps the pounds from invading...
                                Green Tea is great for our immune system)!
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                INSOMNIA (CAN'T SLEEP?) HONEY:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Use honey as a tranquilizer and sedative.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                ASTHMA? EAT ONIONS:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Eating onions helps ease constriction of bronchial tubes.
                                (When I was young, my mother would make onion packs to place on our chest, helped the respiratory ailments and actually made us breathe better).
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                ARTHRITIS? EAT FISH, TOO:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Salmon, tuna, mackerel and sardines actually prevent arthritis.
                                (Fish has omega oils, good for our immune system).
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                UPSET STOMACH? BANANAS - GINGER:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Bananas will settle an upset stomach.
                                Ginger will cure morning sickness and nausea.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                BLADDER INFECTION? DRINK CRANBERRY JUICE:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                High-acid cranberry juice controls harmful bacteria.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                BONE PROBLEMS? EAT PINEAPPLE:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                The manganese in pineapple can prevent bone fractures and osteoporosis.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                BONE PROBLEMS? EAT PINEAPPLE:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                The manganese in pineapple can prevent bone fractures and osteoporosis.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                PREMENSTRUAL SYNDROME (PMS)? EAT CORNFLAKES:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Women can ward off the effects of PMS with cornflakes, which help reduce depression, anxiety and fatigue.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                MEMORY PROBLEMS? EAT OYSTERS:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Oysters help improve your mental functioning by supplying much-needed zinc.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                COLDS? EAT GARLIC:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Clear up that stuffy head with garlic. (Remember, garlic lowers cholesterol, too.)
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                COUGHING? USE RED PEPPERS:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                A substance similar to that found in the cough syrups is found in hot red pepper. Use red (cayenne) pepper with caution-it can irritate your tummy.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                BREAST CANCER? EAT WHEAT, BRAN AND CABBAGE:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Helps to maintain estrogen at healthy levels.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                LUNG CANCER? EAT DARK GREEN AND ORANGE AND VEGGIES:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                A good antidote is beta-carotene, a form of Vitamin A found in dark green and orange vegetables.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                ULCERS? EAT CABBAGE ALSO:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Cabbage contains chemicals that help heal both gastric and duodenal ulcers.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                DIARRHEA? EAT APPLES:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Grate an apple with its skin, let it turn brown and eat it to cure this condition. (Bananas are good for this ailment)
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                CLOGGED ARTERIES? EAT AVOCADO:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Mono unsaturated fat in avocados lowers cholesterol.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                HIGH BLOOD PRESSURE? EAT CELERY AND OLIVE OIL:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Olive oil has been shown to lower blood pressure.
                                Celery contains a chemical that lowers pressure too.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                BLOOD SUGAR IMBALANCE? EAT BROCCOLI AND PEANUTS:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                The chromium in broccoli and peanuts helps regulate insulin and blood sugar.
                            </h4>
                            <hr className='border-green-800 my-4 border-[1.5px]' />
                        </Element>
                        <Element name="Eating Fruit to Cure Cancer" id="Eating Fruit to Cure Cancer" className="mt-4">
                            <h3 className="text-3xl font-semibold py-2 text-center">Eating Fruit to Cure Cancer</h3>
                            <img
                                src={fruitsImg}
                                alt="Fruits"
                                className="rounded-xl shadow-2xl w-full md:w-fit md:h-fit"
                            />
                            <h4 className='text-indent-8 text-justify mt-2'>
                                We all think eating fruit means just buying fruit, cutting it up and popping it into our mouths. It's not that simple. It's important to know how and when to eat fruit.
                                So What's the correct way to eat fruit?
                            </h4>
                            <h4 className='font-semibold text-center text-lg pt-2'>
                                IT MEANS NOT EATING FRUIT AFTER A MEAL! <br />
                                FRUIT SHOULD BE EATEN ON AN EMPTY STOMACH.
                            </h4>
                            <h4 className='text-indent-8 text-justify mt-2'>
                                Eating fruit like that plays a major role in detoxifying your system, supplying you with a great deal of energy for weight loss and other life activities.
                            </h4>
                            <h4 className='font-semibold text-center text-lg pt-2'>
                                FRUIT IS THE MOST IMPORTANT FOOD
                            </h4>
                            <h4 className='text-indent-8 text-justify mt-2'>
                                Let's say you eat two slices of bread, then a slice of fruit. The slice of fruit is ready to go straight through the stomach into the intestines, but it's prevented from doing so.
                                In the meantime, the whole meal rots and ferments, and turns to acid. The minute the fruit comes into contact with the food in the stomach, and digestive juices, the entire mass of food begins to spoil.
                            </h4>
                            <h4 className='text-indent-8 text-justify mt-2'>
                                Eat your fruit on an empty stomach, or before your meal!You've heard people complain: Every time I eat watermelon I burp, when I eat durian my stomach bloats, when I eat a banana I feel like running to the toilet, etc. This will not happen if you eat the fruit on an empty stomach. Fruit mixes with the putrefying other food and produces gas. Hence, you bloat!
                            </h4>
                            <h4 className='font-semibold text-center text-lg pt-2'>
                                OTHER BENEFITS
                            </h4>
                            <h4 className='text-indent-8 text-justify mt-2'>
                                Graying hair, balding, nervous outburst, and dark circles under the eyes
                                all of these will NOT happen if you eat fruit on an empty stomach.

                                Although fruits like orange and lemon are acidic, all fruit becomes alkaline in our body, according to Dr. Herbert Shelton who did research on this matter.
                                If you have mastered the correct way of eating fruit, you have the Secret of Beauty, Longevity, Health, Energy, Happiness and normal weight.

                                When you need to drink fruit juice drink only fresh fruit juice, NOT from the cans.
                                Don't drink juice that has been heated. Don't eat cooked fruit; you don't get the nutrients at all. You get only the taste... Cooking destroys all of the vitamins.

                                Eating a whole fruit is Better than drinking the juice. If you should drink the juice, drink it mouthful by mouthful slowly, because you must let it mix with your saliva before swallowing it.
                            </h4>
                            <h4 className='font-semibold text-center text-lg pt-2'>
                                FASTING FOR A GLOWING SKIN
                            </h4>
                            <h4 className='text-indent-8 text-justify mt-2'>
                                You can go on a 3-day fruit-fast to cleanse your body.
                                Eat fruit and drink fruit juice for just 3 days, and you will be surprised when your friends say how radiant you look!
                            </h4>
                            {/* Card Grid */}
                            <div className="grid md:grid-cols-3 gap-4 px-4 mt-4">
                                {benefits.map((benefit, index) => (
                                <div key={index} className="bg-green-800 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105">
                                    <div className="overflow-hidden rounded-t-3xl">
                                        <img src={benefit.img} alt={benefit.title} className="w-full h-60 object-cover transition-transform duration-500 hover:scale-110" />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold text-white text-center">{benefit.title}</h3>
                                        <h4 className="text-white mt-2 text-base">{benefit.description}</h4>
                                        {/* <a href="#" className="mt-4 block text-indigo-600 font-semibold hover:text-indigo-800">Read More</a> */}
                                    </div>
                                </div>
                                ))}
                            </div>
                            <h4 className='font-semibold text-center text-lg pt-2 mt-4'>
                                Drinking Cold water after a meal = Cancer!
                            </h4>
                            <h4 className='text-indent-8 text-justify mt-2'>
                                Can u believe this? For those who like to drink cold water, this applies to you. It's nice to have a cold drink after a meal, however, the cold water will solidify the oily stuff that you've just consumed, which slows digestion.

                                Once this 'sludge' reacts with the acid, it will break down and be absorbed by the intestine faster than the solid food. It will line the intestine. Very soon, this will turn into fats and lead to cancer.
                            </h4>
                            <h4 className='font-bold text-lg text-center'>FAST FOR GLOWING SKIN</h4>
                            <hr className='border-green-800 my-4 border-[1.5px]' />
                        </Element>
                        <Element name="Asparagus for Cancer" id="Asparagus for Cancer" className="mt-4">
                            <h3 className="text-3xl font-semibold py-2 text-center">Asparagus for Cancer</h3>
                            <div className="grid md:grid-cols-3 gap-6 items-center">
                                {/* Main Text */}
                                <div className="md:col-span-2 space-y-4">
                                    <h4 className="font-normal text-lg text-center mt-2">
                                        A woman has been taking the full-stalk canned style asparagus that she pureed and took 4 tablespoons in the morning and 4 tablespoons later in the day. She did this for over a month. She is on chemo pills for Stage 3 lung cancer in the pleural area and her cancer cell count went from 386 down to 125 as of this past week. Her oncologist said she does not need to see him for 3 months.
                                    </h4>
                                    <h4 className="font-semibold text-lg text-center mt-2">
                                        THE ARTICLE: Richard R.Vensal, D.D.S
                                        (Asparagus might cure cancer)
                                    </h4>
                                </div>
                
                                {/* Image 1 */}
                                <div className="grid-col-1 justify-center m-auto">
                                <img
                                    src={asparagusImg}
                                    alt="Asparagus"
                                    className="rounded-xl shadow-2xl w-full md:w-56 md:h-48"
                                />
                                {/* <h4 className='text-green-800 text-center text-2xl font-bold'>Neem Leaf </h4> */}
                                
                                </div>
                            </div>
                            <h4 className='font-semibold text-lg pt-2'>
                                Case No.1:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                A man with an almost hopeless case of Hodgkin's disease (cancer of the lymph glands) Within 1 year of starting the asparagus therapy, his doctors were unable to detect any signs of cancer, and he was back on a schedule strenuous exercise.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                Case No.2:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                A successful businessman 68 years old, suffered from cancer of the bladder for 16 years. After years of medical treatments, including radiation without improvement, he went on asparagus. Within months, examinations revealed that his bladder tumor had disappeared and that his kidneys were normal.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                Case No.3:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                On March 5th 1971, a man with lung cancer was put on the operating table where they found cancer so widely spread that it was inoperable. The surgeon sewed him up and declared his case hopeless. On April 5th he heard about the asparagus therapy and immediately started taking it. By August x-ray pictures revealed that all signs of the cancer had disappeared.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                Case No.4:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                A woman troubled for a number of years with skin cancer, finally developed different skin cancers which were diagnosed as advanced. Within 3 months of starting on asparagus, her skin specialist said that her skin looked fine and no more skin lesions. This woman reported that the asparagus therapy also cured her kidney disease, which started in 1949. She had over 10 operations for kidney stones, it was an inoperable, terminal, kidney condition. She attributes the cure of this kidney trouble entirely to asparagus.
                            </h4>
                            <h4 className='text-indent-8 text-justify mt-2'>
                                I was not surprised at this result, as `The elements of materia medica', edited in 1854by a Professor at the University of Pennsylvania, stated that asparagus was used as a popular remedy for kidney stones. He even referred to experiments in 1739, on the power of asparagus in dissolving stones. Note the dates !
                            </h4>
                            <h4 className='font-semibold text-center text-lg pt-2'>
                                For the treatment
                            </h4>
                            <h4 className='text-center text-lg pt-2'>
                                Asparagus should be cooked before using, and therefore canned asparagus is just as good as fresh.
                                (Giant and Stokely contain no pesticides or preservatives)
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                Process:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Place the cooked asparagus in a blender and liquefy to make a puree, and store in the refrigerator. Give the patient 4 full tablespoons twice daily, morning and evening. Patients usually show some improvement in from 2-4 weeks. It can be diluted with water and used as a cold or hot drink. This suggested dosage is based on present experience, but certainly larger amounts can do no harm and may be needed in some cases.
                            </h4>
                            <h4 className='font-semibold text-indent-8 text-justify mt-2'>
                                It has been reported by the US National Cancer Institute, that asparagus is the highest tested food containing Glutathione, which is considered one of the body's most potent anti carcinogens and antioxidants.
                            </h4>
                            <h4 className='text-indent-8 text-justify mt-2'>
                                Asparagus also contains a good supply of protein called Histones, which are believed to be active in controlling cell growth. For that reason, asparagus may be called cell growth normalizer.
                            </h4>
                            <hr className='border-green-800 my-4 border-[1.5px]' />
                        </Element>
                        <Element name="Onions" id="Onions" className="mt-4">
                            <h3 className="text-3xl font-semibold py-2 text-center">Onions</h3>
                            <div className="grid md:grid-cols-3 gap-6 items-center">
                                {/* Main Text */}
                                <div className="md:col-span-2 space-y-4">
                                    <h4 className="font-semibold text-lg text-center mt-2">
                                        Good and the bad we need to know
                                    </h4>
                                    <h4 className="font-normal text-lg text-center mt-2">
                                        In 1919 when the flu killed 40 million people there was this Doctor who visited many farmers to see if he could help them combat the flu. Many of the farmers and their families had contracted the flu and many had died.
                                    </h4>
                                    <h4 className="font-normal text-lg text-center mt-2">
                                        The doctor came upon this one farmer and, to his surprise, all were very healthy. When the doctor asked the farmer what he was doing that was different, the wife replied she placed an unpeeled onion in a dish in the rooms of the home. The doctor placed one of the onions under the microscope and he did find the flu virus in the onion. It obviously had absorbed the bacteria, therefore, keeping the family healthy.
                                    </h4>
                                    
                                </div>
                
                                {/* Image 1 */}
                                <div className="grid-col-1 justify-center m-auto">
                                <img
                                    src={onionsImg}
                                    alt="Onions"
                                    className="rounded-xl shadow-2xl w-full md:w-56 md:h-48"
                                />
                                {/* <h4 className='text-green-800 text-center text-2xl font-bold'>Neem Leaf </h4> */}
                                
                                </div>
                            </div>
                            <h4 className='font-semibold text-lg pt-2'>
                                Example 1:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Hairdresser once had many of her employees coming down with the flu, and also many of her customers. She placed several bowls of onions, around in her shop. To her surprise, none of her staff got sick. We did it last year and it works.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                Example 2:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                I contracted pneumonia, and, needless to say, I was very ill. I came across an article that said to cut both ends off an onion; place it in an empty jar; and place the jar next to the sick patient at night. It said the onion would be black in the morning from the germs. Sure enough it happened Just like that! The onion was a mess and I began to feel better.
                            </h4>
                            <h4 className="font-semibold text-lg text-center mt-2">
                                Another thing I read in the article was that onions and garlic placed around the room saved many from the black plague years ago. They have powerful antibacterial, antiseptic properties.
                            </h4>
                            <h4 className='text-indent-8 text-justify mt-2'>
                                More important information - Many times when we have stomach problems we don't know what to blame. Maybe it's the onions that are to blame. The reason onions are so good at preventing us from getting colds, and flu, is that onions absorb bacteria. This is also the reason we should not eat an onion that has sat for a time after it has been cut open.LEFT-OVER ONIONS ARE POISONOUS.
                            </h4>
                            <h4 className='text-indent-8 text-justify mt-2'>
                                I was touring Mullins Food Products, makers of mayonnaise. Questions about food poisoning came up, and I wanted to share what I learned from a chemist.

                                Ed, who was our tour guide, is a food chemistry whiz. During the tour, someone asked if we really needed to worry about mayonnaise. Ed's answer will surprise you.
                            </h4>
                            <h4 className='text-indent-8 text-justify mt-2'>
                                Ed said all commercially made mayo is completely safe. "It doesn't have to be refrigerated. Although there's no harm in refrigerating it, but it's not really necessary." He explained the pH in mayonnaise is set at a point that bacteria could not survive in that environment. Ed says when food poisoning is reported; the first thing the officials look for is when the 'victim' last ate ONIONS and where those onions came from (in the potato salad?). Ed says it's not the mayonnaise that spoils in the outdoors. It's probably the ONIONS, and if not the onions, it's the POTATOES.
                            </h4>
                            <h4 className='text-indent-8 text-justify mt-2'>
                                He explained onions are a huge magnet for bacteria, especially uncooked onions. You should never plan to keep a portion of a sliced onion. He says it's not even safe if you put it in a zip-lock bag and place it in your refrigerator. It's already contaminated enough just by being cut open. And can be a danger to you (watch out for those onions you put on your hotdogs at the baseball park!). Ed says if you take the leftover onion and cook it like crazy you'll probably be okay, but if you slice that leftover onion and put on your sandwich, you're asking for trouble. In a potato salad both the onions, and the moist potato, will attract and grow bacteria faster than any commercial mayonnaise will.
                            </h4>
                            <h4 className='text-indent-8 text-justify mt-2'>
                                Please remember: it is dangerous to cut an onion and plan to cook it the next day. The onion becomes highly poisonous, even after a single night, and creates toxic bacteria. These bacteria may cause adverse stomach infections because of excess bile secretions and even food poisoning.
                            </h4>
                            <h4 className='font-bold text-lg text-center'>So the message here is:</h4>
                            <h4 className='font-bold text-lg text-center'>BEWARE of onions and love onions as a cure for almost all infections.</h4>
                            <hr className='border-green-800 my-4 border-[1.5px]' />
                        </Element>
                        <Element name="Dates" id="Dates" className="mt-4">
                            <h3 className="text-3xl font-semibold py-2 text-center">Dates</h3>
                            <div className="grid md:grid-cols-3 gap-6 items-center">
                                {/* Main Text */}
                                <div className="md:col-span-2 space-y-4">
                                    <h4 className="font-normal text-lg text-center mt-2">
                                        Health benefits of dates are uncountable, as this fruit is affluent in natural fibres. Dates are even rich in several vitamins and minerals. These natural products contain oil, calcium, sulphur, iron, potassium, phosphorous, manganese, copper and magnesium which are advantageous for health. It is said that consumption of one date daily is necessary for a balanced and healthy diet. Dates help in fighting constipation, intestinal disorders, weight gain, heart problems, sexual weakness, diarrhoea and abdominal cancer.
                                    </h4>
                                    
                                </div>
                
                                {/* Image 1 */}
                                <div className="grid-col-1 justify-center m-auto">
                                <img
                                    src={datesImg}
                                    alt="Dates"
                                    className="rounded-xl shadow-2xl w-full md:w-56 md:h-48"
                                />
                                {/* <h4 className='text-green-800 text-center text-2xl font-bold'>Neem Leaf </h4> */}
                                
                                </div>
                            </div>
                            <h4 className='text-indent-8 text-justify mt-4'>
                                Health benefits of dates have made them the best nourishment for muscle development. People consume dates in several ways, like mixing the paste of the dates with milk, yoghurt or with bread or butter to make the food tasty and healthy. This paste is beneficial for both adults and children, especially during the time of recovery. According to the modern medicine survey, it is known that dates are useful in preventing abdominal cancer. It is also seen that many Muslims break their fast by eating dates and water according to their traditions. Breaking fast with eating dates helps us to avoid overeating of the food after the fast. When the body absorbs the nutritional value of the dates, the feeling of hunger gets pacified.
                            </h4>
                            <h4 className='text-indent-8 text-justify mt-2'>
                                Dates are termed as crown of sweets and ideal food, which easily balances and digests food. It gives extra energy to a tired human body within half an hour after taking it. Dates are considered to be the best diet for confinement of the women. It is said that taking one date in a day will help you to maintain your healthy eyes for your lifetime. They are effective in guarding the night blindness problems.
                            </h4>
                            <h3 className="font-semibold text-xl text-center mt-2">
                                Benefits of dates
                            </h3>
                            <h4 className='font-semibold text-lg pt-2'>
                                Constipation:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Date is termed to be a laxative food. This is the reason that dates are beneficial for people suffering from constipation. For getting the laxative effect from dates, you need to soak dates for one full night in water. You should consume these soaked dates in the morning like syrup to get their actual advantages.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                Intestinal Disorders:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                The nicotinic content that is present in the dates is said to be beneficial for curing any kinds of intestinal disorders. Continuous intake of dates helps to maintain a check on the growth of the pathological organisms and thus, helps in the rise of friendly bacteria in the intestines
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                Weight Gain:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Dates are said to be a part of healthy diet. They consist of sugar, fats, proteins as well as many essential vitamins. If the dates are consumed with the paste of cucumber, one can easily come out from the problem of over-slimming. One kilogram of dates contains almost 3,000 calories. These calories alone are sufficient to meet the daily requirements of a human body.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                Healthy Heart:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Dates are quite helpful in maintaining your heart in a healthy condition. When soaked for a night and crushed in the morning and consumed, they prove to be quite advantageous for weak hearts. They help in fortifying the heart, if taken twice in a week.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                Sexual Weakness:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Dates are even beneficial for increasing sexual stamina in the human body. A handful of dates, when soaked in fresh goats milk for the night and then grinded in the same milk with the mixture of cardamom powder and honey, becomes a very useful tonic for increasing sex endurance and sterility caused due to functional disorders.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                Diarrhea:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Ripe dates contain potassium. Potassium is beneficial for controlling diarrhea They are easily digestible, which helps to cope up with the problems of diarrhea.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                Intoxication:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Dates are known as an excellent remedy for alcoholic intoxication. Dates provide quick relief in the case of alcoholic intoxication. They should be rubbed and soaked overnight for getting more nutritious values from them.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                Abdominal Cancer:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Dates are beneficial for curing abdominal cancer. They work as useful tonic for all age groups. They work as better as the medicines, and are natural and do not bear any side effects in the body. They can be easily digested and used for supplying extra and needed energy.
                            </h4>
                            <h4 className='font-semibold text-lg pt-2'>
                                SUGGESTION:
                            </h4>
                            <h4 className='text-indent-8 text-justify'>
                                Although dates carry tremendous nutritional values, great care should be taken in their selection because they consists of sticky surface which attracts various impurities in them. Hence, you should consume only those dates that are processed and packed properly. Make sure to wash them thoroughly before consuming. This will help remove the impurities present in them.
                            </h4>
                        </Element>
                    </div>
                </div>
            </div>
        )
}

export default HomeRemedies