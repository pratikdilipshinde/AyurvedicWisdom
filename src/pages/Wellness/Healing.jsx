import React, { useState, useEffect } from 'react';
import FloatingMenu from '../../components/FloatingMenu';
import { Element } from 'react-scroll';
import turmeric1 from '../../assets/images/turmeric1.jpg';
import turmeric2 from '../../assets/images/turmeric2.jpg';

const Healing = () => {

  const menuItems = [
      "Turmeric",
      "Coconut Oil and Alzheimer's Disease",
      "Dengue Fever Remedy",
      "Healthy Juices",
      "Gout"
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
      <div className="font-messiri max-w-full mx-12 shadow-md rounded-lg p-6 flex gap-6">
        {/* Left Floating Menu */}
        <div className="w-1/5">
          <FloatingMenu menuItems={menuItems} activeSection={activeSection} />
        </div>

        {/* Right Content Section */}
        <div className="w-4/5 h-fit overflow-y-auto p-4 border text-green-950">
          <h1 className="text-5xl font-bold text-center">Healing</h1>

          <Element name="Turmeric" id="Turmeric" className="mt-4">
            <h3 className="text-3xl font-bold py-2 text-center underline">Turmeric</h3>
            <h3 className="text-xl font-semibold py-2 text-center underline">Super Spice Secrets</h3>
            <h4 className="font-semibold text-lg text-center">By Dr. Mercola</h4>
            
            <div className="grid md:grid-cols-3 gap-6 items-center">
              {/* Main Text */}
              <div className="md:col-span-2 space-y-4">
                <h4 className='font-semibold text-lg pt-4'>
                  Can This Miracle Spice Stop Cancer, Alzheimer's and Arthritis?
                </h4>
                <h4 className='text-indent-8'>
                  For more than 5,000 years, turmeric has been an important part of Eastern cultural. Valued for its medicinal properties and warm, peppery flavor, this yellow-orange spice has recently earned a name for itself in Western medicine as well.
                </h4>
                <h4 className='text-indent-8'>
                  Turmeric comes from the root of the Curcuma longa plant, which is native to southern India, and is widely used as an ingredient in curry dishes and yellow mustard. Research shows this spice as one of natures most powerful potential healers.
                </h4>
                <h4 className='text-indent-8'>
                  Dr. David Frawely, founder and director of the American Institute for Vedic Studies in Santa Fe, New Mexico said - "If I had only one single herb to depend upon for all possible health and dietary needs, I would without hesitation choose the Indian spice Turmeric. There is little it cannot do in the realm of healing and much that no other herb is able to accomplish."
                </h4>
              </div>

              {/* Image 1 */}
              <div className="grid-col-1 justify-center m-auto">
                <img
                  src={turmeric1}
                  alt="Turmeric"
                  className="rounded-xl shadow-2xl w-full md:w-56 md:h-44"
                />
                {/* <h4 className='text-green-800 text-center text-2xl font-bold'>Neem Leaf </h4> */}
                <img
                  src={turmeric2}
                  alt="Turmeric"
                  className="rounded-xl shadow-2xl w-full md:w-56 md:h-44 mt-2"
                />
                {/* <h4 className='text-green-800 text-center text-2xl font-bold'>Ashwagandha</h4> */}
              </div>
            </div>
            <h4 className='font-semibold text-lg pt-4'>
              Turmeric's Beneficial Effects in a Nutshell
            </h4>
            <ul className='list-disc pl-6'>
              <li>Strengthens and improves digestion</li>
              <li>Supports healthy liver function and detoxification</li>
              <li>Purifies your blood</li>
              <li>Contains Curcuminoids - fight cancer, arthritis & Alzheimer's</li>
              <li>Protect against childhood leukemia</li>
            </ul>
            <h4 className='font-semibold text-lg pt-4'>
              Turmeric's Beneficial Effects in a Nutshell
            </h4>
            <h4 className='text-indent-8'>
              Turmeric's Active Anti-Inflammatory Ingredient is curcumin -- the pigment that gives turmeric its yellow-orange color, and which is thought to be responsible for many of its medicinal effects.
            </h4>
            <h4 className='font-semibold text-lg pt-4'>
              Turmeric's Cancer-Fighting Properties
            </h4>
            <h4 className='text-indent-8'>
              In India, colon, breast, prostate and lung -- is 10 times lower.
            </h4>
            <h4 className='font-semibold text-lg pt-4'>
              Turmeric's Essential Role for Your Liver
            </h4>
            <h4 className='text-indent-8'>
              Increases bile flow, a detoxification enzyme in the to help body digest fats.
            </h4>
            <h4 className='font-semibold text-lg pt-4'>
              Turmeric for Heart, Brain and Overall Health
            </h4>
            <h4 className='text-indent-8'>
              Turmeric inhibits free radical damage of fats, including cholesterol. Rich in vitamin B6, associated with a reduced risk of heart disease.
              Turmeric's volatile oils also have external anti-bacterial action. Helps prevent bacterial wound infections and accelerate wound healing.
            </h4>
            <h4 className='font-semibold text-lg pt-4'>
              Turmeric is beneficial for:
            </h4>
            <ul className='list-disc pl-6'>
              <li>Cystic fibrosis:	Type 2 diabetes	Crohn's disease</li>
              <li>Psoriasis:	Rheumatoid arthritis	Cataracts</li>
              <li>Gallstones:	Muscle regeneration	Inflammatory bowel disease</li>
            </ul>
          </Element>
          <Element name="Coconut Oil and Alzheimer's Disease" id="Coconut Oil and Alzheimer's Disease" className="mt-4">
            <h3 className="text-3xl font-bold py-2 text-center">Coconut Oil and Alzheimer's Disease</h3>
            <h4 className='text-indent-8'>
              The most effective treatment for Alzheimer's may be sitting on your cupboard shelf. Doctor discovers effectiveness of coconut oil in fighting neuro degeneration, Parkinson's disease, multiple sclerosis, autism, dementia, epilepsy,and various emotional disorders.
            </h4>
            <h4 className='text-indent-8'>
              Coconut oil or the fatty acids in coconut oil on epilepsy are the most thoroughly studied and documented. However, new research on Alzheimer's disease has shown that coconut oil may be the best alternative treatment for this otherwise untreatable condition.
            </h4>
            <h4 className='text-indent-8'>
              Recently, a letter was sent to Supreme Court Justice Sandra Day O'Connor and other Members of the Alzheimer Study Group. Here are some of the contents of the letter.
            </h4>
            <h4 className='text-indent-8'>
              The letter was written by <b>Mary T. Newport, MD, Director of Neonatology</b> at Spring Hill Regional Hospital in Florida. About five years ago Dr. Newport's husband, Steve, began to develop signs of Alzheimer's disease. At the time Steve was only 53 years old. Steve's latest MRI showed extensive atrophy in the amygdala and hippocampus, the areas affected by Alzheimer's.
            </h4>
            <h4 className='text-indent-8'>
              Some clinical trials recruiting Alzheimer's patients for studies to test the effectiveness of two experimental drugs. one of them, Ketasyn, showed great promise. In preliminary studies persons with Alzheimer's disease demonstrated overall improvement in mental ability in as little as 45 days. Positive results were noticeable in some of the subject after just a single dose.
            </h4>
            <h4 className='text-indent-8'>
              The active ingredient in Ketasyn is medium chain triglycerides (MCT) which are derived from coconut oil. Since the drug is not approved for treatment of Alzheimer's by the FDA it is not commercially available.
            </h4>
            <h4 className='text-indent-8'>
              The daily dosage of MCT oil used in preliminary studies was equivalent to about 21⁄2 tablespoons of coconut oil (virgin coconut oil).
            </h4>
            <h4 className='text-indent-8'>
              I started adding 21⁄2 tablespoons to my husband's oatmeal at breakfast says Dr. Newport. "Within a few days there was noticeable improvement in his gait, his ability to converse, his sense of humor has returned; he remembers the month and the season immediately, which he could not remember if repeated over and over to him before. He is following through on things that he wants to accomplish during the course of the day. To see this much improvement in such a short time is very encouraging for both of us. He is well aware that he is suffering from this disease and fully supports and enjoys our dietary change."
            </h4>
            <h4 className='font-semibold text-lg pt-4'>
              How do the medium chain triglycerides in coconut oil fight Alzheimer's disease?
            </h4>
            <h4 className='text-indent-8'>
              During digestion, MCTs are broken down into medium chain fatty acids, some of which are converted into ketones. Nerve tissue, including the brain, relies on glucose for energy. Nerve cells can also convert ketones into energy. When food is restricted and adequate glucose is unavailable, the body converts fat into ketones, which supplies the brain with the energy it needs to function properly.
            </h4>
            <h4 className='text-indent-8'>
              The use of MCTs to treat neurological disorders has been around for a number of years, but little has been done to use this knowledge to development treatments for Alzheimer's and other neurological conditions. MCTs and coconut oil are natural products and as such, are not patentable, so drug manufacturers have little interest in researching their therapeutic potential.
            </h4>
          </Element>
          <Element name="Dengue Fever Remedy" id="Dengue Fever Remedy" className="mt-4">
            <h3 className="text-3xl font-bold py-2 text-center">Dengue Fever Remedy</h3>
            <h4 className=''>
              My friend's son was in the critical stage at the ICU when his blood platelet count drops to 15 after 15 liters of blood transfusion.
            </h4>
            <h4 className='text-indent-8'>
              He confessed to me that he gave his son raw juice of the papaya leaves. From a platelet count of 45 after 20 liters of blood transfusion, and after drinking the raw papaya leaf juice, his platelet count jumps instantly to 135. Even the doctors and nurses were surprised. After the second day he was discharged. So he asked me to pass this good news around.
            </h4>
            <h4 className='text-indent-8'>
              Accordingly it is raw papaya leaves, 2pcs just cleaned and pound and squeeze with filter cloth. You will only get one tablespoon per leaf. So two tablespoon per serving once a day. Do not boil or cook or rinse with hot water, it will loose its strength. Only the leafy part and no stem or sap. It is very bitter and you have to swallow it like "Won Low Kat". But it works.
            </h4>
            <h4 className='font-semibold text-lg pt-4'>
              Papaya Juice - Cure for Dengue
            </h4>
            <h4 className='text-indent-8'>
              A friend of mine had dengue last year. It was a very serious situation for her as her platelet count had dropped to 28,000 after 3 days in hospital and water has started to fill up her lung. She had difficulty in breathing. She was only 32-year old. Doctor says there's no cure for dengue. We just have to wait for her body immune system to build up resistance against dengue and fight its own battle. She already had 2 blood transfusion and all of us were praying very hard as her platelet continued to drop since the first day she was admitted.
            </h4>
            <h4 className='text-indent-8'>
              Fortunately her mother-in-law heard that papaya juice would help to reduce the fever and got some papaya leaves, pounded them and squeeze the juice out for her. The next day, her platelet count started to increase, her fever subside. We continued to feed her with papaya juice and she recovered after 3 days!!!
            </h4>
            <h4 className='text-indent-8'>
              It's believed one's body would be overheated when one is down with dengue, papaya juice has a cooling effect. It helps to reduce the level of heat in one's body, thus the fever will go away.
            </h4>
          </Element>
          <Element name="Healthy Juices" id="Healthy Juices" className="mt-4">
            <h3 className="text-3xl font-bold py-2 text-center">Healthy Juices</h3>
            <ul className='list-disc pl-6'>
              <li><b>Carrot + Ginger + Apple:</b> Boost and cleanse the system</li>
              <li><b>Apple + Cucumber + Celery:</b> Prevents cancer, reduces cholesterol, eliminates stomach upset and headache</li>
              <li><b>Tomato + Carrot + Apple:</b> Improves skin complexion and eliminates bad breath</li>
              <li><b>Bitter gourd + Apple + Milk:</b> Helps eliminate bad breath and reduce internal body heat</li>
              <li><b>Orange + Ginger + Cucumber:</b> Improves Skin texture, moisturizes the skin. Reduces body heat</li>
              <li><b>Pineapple + Apple + Watermelon:</b> Dispels excess salt. Nourishes the bladder and kidney.</li>
              <li><b>Apple + Cucumber + Kiwi:</b> Improves skin complexion</li>
              <li><b>Pear & Banana:</b> Regulates sugar content</li>
              <li><b>Carrot + Apple + Pear + Mango:</b> Counteracts toxicity. Decreases blood pressure. Fights oxidization.</li>
              <li><b>Honeydew + Grape + Watermelon + Milk:</b> Rich in vitamin C + Vitamin B2. Increase cell activity. Strengthen body immunity.</li>
              <li><b>Papaya + Pineapple + Milk:</b> Rich in vitamin C, E, Iron. Improve skin complexion. Stabilizes metabolism.</li>
              <li><b>Banana + Pineapple + Milk:</b> Rich in vitamin with nutritious. Prevents constipation.</li>
            </ul>
          </Element>
          <Element name="Gout" id="Gout" className="mt-4">
            <h3 className="text-3xl font-semibold py-2 text-center">Gout</h3>
            <h4 className="font-bold text-lg text-center underline">
              OBESITY - HYPERTENSION - HEART PROBLEM - STROKE 
            </h4>
            <h4>
              (A Vicious food cycle and all the related diseases)
            </h4>
            <p className="text-green-950 text-justify text-indent-8">
              Hypertension is associated [with] obesity. Gout is a hypertensive state; [so is] heart disease. So that's why we want to avoid hypertension; because of heart disease and stroke. The simplest possible hypothesis is: Whatever causes all these diseases causes hypertension too.
            </p>
            <p className="text-green-950 text-justify text-indent-8">
              You get fat because you eat too much. You get heart disease because of saturated fat. You get diabetes because you're sedentary. You get hypertension because of salt, and you get gout because of meat and alcohol. Yet hypertension is a common condition on all of them, so maybe it's something else.
            </p>
            <p className="text-green-950 text-justify text-indent-8">
              Simplest possible hypothesis is [that] it's the carbohydrates from the diet; the sugar and the refined carbohydrates that raise insulin and in turn raises blood pressure, causes hypertension, causes obesity, causes diabetes, causes heart disease
            </p>
            <p className="text-green-950 text-justify text-indent-8">
              Low-carbohydrate diet without sugars
              not only all heart disease risk factors improve and
              diabetes risk factors improve, but blood pressure drops too
            </p>
            <h4 className='font-bold text-lg text-center'>Gout - blood pressure - heart problems - hypertension - obesity</h4>
          </Element>
        </div>
      </div>
    </div>
  );
}

export default Healing