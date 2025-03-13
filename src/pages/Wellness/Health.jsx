import React, { useState, useEffect } from 'react';
import FloatingMenu from '../../components/FloatingMenu';
import { Element } from 'react-scroll';

const Health = () => {
  const menuItems = [
    "Importance of Breakfast",
    "Gout",
    "Drinking Water",
    "Protect Your Heart",
    "How to Plan Your Meals",
    "Blood Sugar and Diabetes",
    "7 Don'ts After A Meal"
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
          <h1 className="text-5xl font-bold text-center">Health</h1>

          {/* Sections with Smooth Scrolling */}
          <Element name="Importance of Breakfast" id="Importance of Breakfast" className="mt-2">
            <h3 className="text-2xl font-semibold py-2 text-center underline">Importance of Breakfast</h3>
            <h4 className="text-center text-lg font-semibold">
              <b>"Eat breakfast like a king, lunch like a prince, and dinner like a pauper,"</b> is an old saying that rings true to this day.
            </h4>
            <p className="text-green-950 text-lg text-center">
              Breakfast should be a complete meal with whole grains, protein, and fiber. It enhances the immune system, improves skin, keeps you thin, and helps you live longer.
            </p>
            <ol className="list-decimal pl-8 text-justify">
              <li><b>Brain-Boosting Powers -</b> After a night of fasting, your brain needs a fresh supply of glucose (blood sugar) for fuel.</li>
              <li><b>Get Essential Nutrients -</b> Your morning meal is fortified with nutrients that your body needs to function healthily each day.</li>
              <li><b>Help Your Heart -</b> Making sure to get breakfast in your system does more than keep you awake - it promotes a healthy heart by preventing diabetes and lowering blood pressure.</li>
              <li><b>Reduce Metabolic Syndrome -</b> Instead of loading up on a heavy dinner, start your day off with a grand meal at breakfast time. Doing so may help prevent metabolic syndrome disorders like obesity and insulin resistance.</li>
              <li><b>Break the Fast -</b> Even though skipping breakfast is quite common, it is a form of disordered eating. Breakfast literally means breaking the fast.</li>
              <li><b>Enhance Immune System -</b> To fight the common wintertime colds and flus, you need to sit down and eat your breakfast. Breakfast boosts your body's gamma-interferon, a natural antiviral that directly activates immune cells.</li>
              <li><b>Improve Your Skin -</b> Eggs, the incredible and popular breakfast food, do way more than fill you up. No matter how they are prepped, eggs are fantastic for your skin. Lutein, a carotenoid antioxidant found in eggs, helps to preserve the skin's elasticity and protects skin cells from free radical damage.</li>
              <li><b>Keep Yourself Thin -</b> While eating breakfast alone will not help you magically shed the pounds, it may help your emotional relationship with food (and that invariably affects your weight) Prolonged fasting can increase your body's insulin response, which increases fat storage and weight gain. Breakfast also helps to prevent overeating.</li>
              <li><b>Stabilize Energy Levels -</b> A balance of carbohydrates, protein, and fiber is the key to any healthy breakfast, and eating foods with these components will increase your energy levels. Breakfast replenishes your glycogen stores, which supply muscles with immediate energy.</li>
              <li><b>Live Longer -</b> An apple a day may keep the doctor away, but a healthy breakfast may keep the reaper at bay, too.</li>
            </ol>
            <h4 className='text-center font-bold text-lg'>Studies show that people who lived to be 100 years old
              were consistent breakfast eaters.
            </h4>
          </Element>

          <Element name="Gout" id="Gout" className="mt-4">
            <h3 className="text-3xl font-semibold py-2 text-center">Gout</h3>
            <h4 className="font-bold text-xl text-center underline">
              OBESITY - HYPERTENSION - HEART PROBLEM - STROKE 
            </h4>
            <h4 className="font-bold text-lg text-center">
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
          </Element>

          <Element name="Drinking Water" id="Drinking Water" className="mt-4">
            <h3 className="text-3xl font-semibold py-2 text-center">Drinking Water</h3>
            <h4 className="font-bold text-xl text-center underline">Are you drinking enough water daily?</h4>
            <p className='text-justify'>
              Lack of water is the #1 trigger of daytime fatigue
              <br />
              8-10 glasses of water a day could significantly ease back and joint pain for up to 80% of sufferers
              <br />
              A mere 2% drop in body water can trigger fuzzy short-term memory, trouble with basic math, and difficulty focusing on the computer screen
              <br />
              Drinking 5 glasses of water daily decreases the risk of colon cancer by 45%
              <br />
              Slash the risk of breast cancer by 79%
              <br />
              50% less likely to develop bladder cancer
              <br />
              For dieters - one glass of water shuts down midnight hunger pangs
              <br />
              A University study
            </p>
          </Element>

          <Element name="Protect Your Heart" id="Protect Your Heart" className="mt-4">
            <h3 className="text-3xl font-semibold py-2 text-center">Protect Your Heart</h3>
            <h4 className='font-bold text-xl text-center underline'>
              Age-by-Age Guide
              <br />
              Small Changes, Big Results
              <br />
            </h4>
            <h4 className='font-bold text-lg text-center mt-2'>
              In Your 20s:
            </h4>
            <h4 className='font-semibold text-lg pt-4'>Drink Water</h4>
            <h4 className='text-indent-8'>
              The AHA recommends that women consume no more than 100 calories (6 teaspoons) of added sugar per day, and men no more than 150 calories (9 teaspoons). A single 12-ounce soft drink contains 130 calories, or about 8 teaspoons. Studies show that people who get a lot of their calories from added sugars often don't consume enough fiber, calcium, iron, zinc and vitamin A in their diets. What's more, drinking your 'discretionary calories' is less satisfying than eating them, so you're more likely to overeat, which may put you on the path to being overweight, having high blood pressure and being at higher risk for diabetes -- all dangers to your heart. If plain water is just too, well, plain, squirt a lemon or lime in it, drink seltzer or brew up some unsweetened iced tea.
            </h4>
            <h4 className='font-semibold text-lg pt-4'>Find a Better Stress Reliever</h4>
            <h4 className='text-indent-8'>
              People who smoke in their 20s and continue for the rest of their lives die on average 12 to 14 years younger than nonsmokers, it's easier to quit smoking in your 20s than it is later in life, because the habit is less ingrained. Any form of exercise is a better stress reducer than smoking, but people in their 20s might want to take advantage of their natural flexibility and try yoga or Pilates.
            </h4>
            <h4 className='font-semibold text-lg pt-4'>Learn Your Family History</h4>
            <h4 className='text-indent-8'>
              Talk to your parents and other relatives to find out what medical conditions run in your family. Although most people in their 20s aren't at imminent risk of heart attack or stroke. If your father had a heart attack before age 55 or your mother had one before age 65, or even if a grandparent, uncle or aunt had a heart attack or stroke at these young ages, you may be at increased risk and need to be doing everything possible now to protect your heart. You should also have your blood pressure checked every two years starting at age 18.
            </h4>
            <h4 className='font-bold text-lg text-center pt-4'>
              In Your 30s:
            </h4>
            <h4 className='font-semibold text-lg pt-4'>Set Exercise Goals</h4>
            <h4 className='text-indent-8'>
              These are prime weight-gaining years. The 30s are when many women start taking care of everyone but themselves, but these are important years to keep weight under control, and it's easier to lose weight in your 30s than when your metabolism starts slowing down in your 40s. Set exercise goals to help you lose your excess weight. Set a goal to walk every day. In other words, move more in any way you can. Same applies to the men.
            </h4>
            <h4 className='font-semibold text-lg pt-4'>Do Something You Love Every Day</h4>
            <h4 className='text-indent-8'>
              "Whatever activity makes you feel really good inside, make sure you do it for at least 15 or 20 minutes every day," says Dr. Wood. "For some people it might be meditation, for others it's running, and for others it may be reading. Whatever relaxes and restores you, carve out time each day to do it and it could become a habit for life."
            </h4>
            <h4 className='font-semibold text-lg pt-4'>Know Your Numbers</h4>
            <h4 className='text-indent-8'>
              Become familiar with your "three Bs": your body mass index, blood pressure and blood cholesterol. If any of your numbers are not in the target ranges for heart health, talk to your doctor about changes you can make to improve them. Here are the numbers you should aim for, according to the AHA:
            </h4>
            <ol className='list-decimal pl-8'>
              <li>Blood pressure: Less than 130/80 mm Hg</li>
              <li>Blood cholesterol: LDL (low-density lipoproteins, or "lousy cholesterol") below 100 mg/dL; HDL (high-density lipoprotein, or "healthy cholesterol") above 40 mg/dL for men and above 50 mg/dL for women;</li>
              <li>Triglycerides: Below 150 mg/dL.</li>
              <li>Body mass index: Healthy range is 18.6 to 24.9, with a waistline smaller than 35 inches for women, 40 inches for men.</li>
            </ol>
            <h4 className='font-bold text-lg text-center pt-4'>
              In Your 40s:
            </h4>
            <h4 className='font-semibold text-lg pt-4'>Weight Train</h4>
            <h4>
              <b>For women</b>, the 40s are when your body starts losing a lot of its lean muscle tissue and metabolism slows, making you more likely to gain weight. The AHA recommends women weight train at least two times a week, which can keep your metabolism up, strengthen your bones and help you look and feel great as you start heading toward menopause.
            </h4>
            <h4>
              <b>For Men</b> - visit the gym at least 3 times a week, strengthen your bones with weight training and Cardio exercises.
            </h4>
            <h4 className='font-semibold text-lg pt-4'>Nurture Your Relationships</h4>
            <h4 className='text-indent-8'>
              Realize how important relationships are in helping you get through difficult times and in helping encourage you to make healthy choices in your life. Now is the time to create and nurture that network of support around you. Research shows that people who are isolated in their 50s and 60s have more health problems than those who are surrounded by people who care about them. Spend time with people you love and care about, whether it's your spouse, children, siblings, friends, fellow church members or other loved ones.
            </h4>
            <h4 className='font-semibold text-lg pt-4'>Add Another Number</h4>
            <h4 className='text-indent-8'>
              Having your blood glucose (sugar) level checked every three years beginning at age 45 to help monitor your risks for diabetes and heart disease. The recommended level on a fasting blood glucose test is less than 100 mg/dL. If yours is higher, talk to your doctor about ways to lower your risk for diabetes.
            </h4>
            <h4 className='font-bold text-lg text-center pt-4'>
              In Your 50s:
            </h4>
            <h4 className='font-semibold text-lg pt-4'>Rethink when you Eat</h4>
            <h4 className='text-indent-8'>
              The often-repeated advice to eat breakfast like a king, lunch like a prince and dinner like a pauper is especially true as you age into your 50s and beyond. Most people need to eat fewer calories overall when they hit their 50s, and it's best to eat most of your calories earlier in the day and not be locked into the idea that you need three big meals a day. You need calories early in the day to rev up your metabolism and give you energy for the things you need to do, and it's fine to have a good-sized meal at lunchtime, but eating a lot in the evening may interfere with your sleep as your body works to digest the food. Most people in their 50s don't need a lot of calories for the activities they do at night. Those extra calories that aren't burned off just contribute to weight gain.
            </h4>
            <h4 className='font-semibold text-lg pt-4'>Get Screened</h4>
            <h4 className='text-indent-8'>
              The National Osteoporosis Foundation recommends a bone mineral density test after age 50 if you have risk factors such as being menopausal or having a family history of osteoporosis. Although not directly related to your heart, conditions that predispose to osteoporosis also predispose to heart disease -- namely, inactivity and poor diet. A bone mineral density test may pick up thinning bone problems that could predispose you to falls. If you fall, you may not be able to exercise for a while, which could set you up for weight gain and health problems. Strong bones help you have a strong heart.
            </h4>
            <h4 className='font-semibold text-lg pt-4'>Volunteer</h4>
            <h4 className='text-indent-8'>
              In your 20s and 30s, there tends to be a lot to be excited about: love, marriage, babies being born, careers taking off. By the time you reach your 50s, those big life events may be in your past, and you may instead be facing an empty nest, parents who are dying or already gone and the denouement of your career. Volunteering is a great way to bring more positives into your life. Whether it's by starting a new group related to a cause you care about or helping out someone in your community, having something that you're committed to can have a very positive impact on your life.
            </h4>
            <h4 className='font-bold text-lg text-center pt-4'>
              60s and Over:
            </h4>
            <h4 className='font-semibold text-lg pt-4'>Adjust Your Exercise to Accommodate Your Body</h4>
            <h4 className='text-indent-8'>
              It's important to maintain the momentum that you built up in your 30s, 40s and 50s. If you continue to be active into your senior years, your heart will look and act younger. In their 60s, some people start experiencing issues like arthritis and back pain, and you may have to switch from running to walking or from tennis to water aerobics. Find what works for you and keep doing it. Continue strength training twice a week, too. It will help you to maintain your lean body mass.
            </h4>
            <h4 className='font-semibold text-lg pt-4'>From intensive exercise take up Tai Chi</h4>
            <h4 className='text-indent-8'>
              Studies show that tai chi not only helps you de-stress, it helps to prevent balance problems that can lead to falls in your later years. It also helps reduce pain if you have any chronic conditions, and improves sleep, all of which are good for your heart.
            </h4>
            <h4 className='font-semibold text-lg pt-4'>Get Talking</h4>
            <h4 className='text-indent-8'>
              Call your doctor at the first sign of any unusual symptom, even if you don't think it's serious. In terms of heart disease, symptoms including chest pressure, tightness in your jaw, profound fatigue and shortness of breath with activity all may indicate heart problems. Your doctor may recommend more detailed screening to assess your risks, and, if necessary, treatment to help you live a longer, healthier life.
            </h4>
            <h4 className='font-bold text-lg text-center'>20 - 30 - 40 - 50 - or 60 live life to the fullest. Be happy and healthy</h4>
          </Element>
          <Element name="How to Plan Your Meals" id="How to Plan Your Meals" className="mt-4">
            <h3 className="text-3xl font-semibold py-2 text-center">How to Plan Your Meals</h3>
            <p className='text-justify'>
              For protein (meats), use the size of your palm as a measurement.
              <br />
              <br />
              Have water as often as possible, certainly between alcoholic drinks, and food too. This will help maintain hydration and control appetite.
              <br />
              <br />
              Eat slowly and concentrate on enjoying the flavors of different foods.
              Eating slowly will help you not to overeat.
              <br />
              <br />
              It is also important to avoid drinking alcoholic beverages before having something to eat. Alcohol dehydrates, and reduces blood sugar levels leading to sugar-cravings. Alcohol also stimulates the appetite. Make your first drink non-alcoholic
              <br />
              <br />
              Follow any alcoholic drink with one that's non-alcoholic, such as water or orange juice.
              <br />
              <br />
              Avoid high-calorie drinks like eggnog, fruit punch and beer. Stick to sparkling water and light beer (if you have to).
              <br />
              <br />
              If you're doing any party-hopping or same-day holiday visiting, eat one meal in stages. Limit yourself to the main course at one gathering, dessert-only at your next stop.
            </p>
            <h4 className='font-semibold text-lg pt-4'>Dietary Modifications For A Quick And Effective Weight-loss:</h4>
            <p className='text-justify text-indent-8'>
              You should eat higher than normal protein as it gives a feeling of satiety and also increases the basal metabolic rate of the body, resulting in burning of stored calories. Good quality protein in the form of low fat milk, lean meats and whole pulses should be included in all the meals. A high protein meal reduces your appetite and thus the total calorie intake.
            </p>
            <p className='text-justify text-indent-8'>
              Fried foods and high fat foods like processed cheese, butter, chocolates, fatty meats, ice creams and salad dressings should be avoided.
            </p>
            <p className='text-justify text-indent-8'>
              Carbohydrates should be taken in complex forms, as in whole grain cereals. Simple carbs like sugar should be restricted and sweets should be avoided.
            </p>
            <p className='text-justify text-indent-8'>
              Fruits and vegetables should be taken in plenty, as they are low in calories and provide fiber.
            </p>
            <p className='text-justify text-indent-8'>
              High fiber foods are typically low in calories and very filling, so you reduce your overall calorie intake. Dietary fiber also helps in burning of the stored calories in our body. The good sources of fiber are cereals like rice, wheat, maize and millets; legumes like beans; all vegetables and fruits.
            </p>
            <p className='text-justify text-indent-8'>
              Having the vegetables and fruits unpeeled, as much as possible, helps. Substitute sugar-rich fruit juices and colas with plain tea (without cream/ milk and sugar). The ability of tea to promote good health has long been believed in many countries, especially Japan, China, India and England. Nobody knows exactly, or when, the first cup of tea was brewed. According to folklore, Emperor Shen Nung who reigned over China in 2737 BC discovered the stimulating effect of tea accidentally when wild tea leaves fell into his pot of boiling drinking water. Chinese have probably been drinking tea in some form or the other since the fourth century AD and considering that wild tea grew in many parts of Assam, it is not unlikely that tea drinking in India too is as old as in China. Research has shown the anti-cancer properties of antioxidant polyphenols. Studies have suggested that tea's polyphenols may reduce the risk of gastric, esophageal and skin cancers; help the immune system; lower cholesterol levels; and keep the heart healthy. This is especially true for green tea and black tea. Tea is also calorie-free, so it helps in weight loss. Tea is fairly rich in most of the B group vitamins. Apart from these, it is also a good source of vitamin E and K and Beta-carotene (changes into vitamin A in our body). Tea contains traces of minerals like copper, fluoride and manganese too.
            </p>
            <p className='text-justify text-indent-8'>
              So, at the end of the festive season, when you put away your party crockery and cutlery, resolve to follow a healthy diet regime - at least for a fortnight. Have a high protein, high fiber diet - and see the extra pounds melt away.
            </p>
            <h4 className='font-bold text-lg text-right'>EXCERPT FROM TATHAASTU</h4>
          </Element>
          <Element name="Blood Sugar and Diabetes" id="Blood Sugar and Diabetes" className="mt-4">
            <h3 className="text-3xl font-semibold py-2 text-center">Blood Sugar and Diabetes</h3>
            <p className='text-justify text-indent-8'>
              When you eat, your body breaks the food down into sugar and sends it to your blood stream. Then your Pancreas makes Insulin to help get the sugar into the cells for energy needed in your daily life.
            </p>
            <h4 className='font-semibold text-lg pt-4'>Early Warning Signs</h4>
            <ol className='list-decimal pl-8'>
              <li>Excessive thirst, hunger and /or unexplained weight loss</li>
              <li>Increased urination</li>
              <li>Constant fatigue and irritability</li>
              <li>Blurred vision</li>
              <li>Tingling or numbness of hands and feet</li>
              <li>Itchy dry skin</li>
              <li>Sores and wounds that are slow to heal</li>
            </ol>
            <p className='text-justify'>
              Diabetes is often called a silent killer. You may not even know you have diabetes until you get a heart attack.
            </p>
            <p className='text-justify'>
              Thus testing your blood sugar periodically is very important.
            </p>
            <h4 className='font-semibold text-lg pt-4'>Know your numbers</h4>
            <p className='text-justify pt-2'>
              <b>NORMAL:</b> 99 mg and lower<br />
              <b>PRE DIABETES:</b> 100 - 125<br />
              <b>TYPE 2 DIABETES:</b> 126 and higher<br />
            </p>
            <p className='text-justify pt-2'>
              <b>Type 1 Diabetes:</b> When your body does not produce ANY Insulin<br />
              <b>Type 2 Diabetes:</b> When you do not make enough Insulin, or what you make does not work well.
            </p>
            <h4 className='font-semibold text-lg pt-4'>Early prevention</h4>
            <p className='text-justify'>
              If you're overweight or obese, you're at greater risk for serious health conditions, including diabetes. That's the bad news.
              <br />
              Now, here's the good news. "Maintaining an adequate weight and exercising regularly can help prevent diabetes."
              <br />
              Diabetes can be controlled, and in some cases prevented, with diet modifications and weight loss.
            </p>
            <h4 className='font-bold text-lg text-center'>SO EARLY DETECTION IS A MUST</h4>
          </Element>
          <Element name="7 Don'ts After A Meal" id="7 Don'ts After A Meal" className="mt-4">
            <h3 className="text-3xl font-semibold py-2 text-center">7 Don'ts After A Meal</h3>
            <p className='text-justify'>
              <b>Don't smoke:</b> Experiment from experts proves that smoking a cigarette after meal is comparable to smoking 10 cigarettes (chance of cancer is higher).
            </p>
            <p className='text-justify'>
              <b>Don't eat fruits immediately:</b> Immediately eating fruits after meals will cause stomach to be bloated with air. Therefore take fruit 1-2 hr after meal or 1hr before meal.
            </p>
            <p className='text-justify'>
              <b>Don't drink tea:</b> Because tea leaves contain a high content of acid. This substance will cause the Protein content in the food we consume to be hardened thus difficult to digest.
            </p>
            <p className='text-justify'>
              <b>Don't loosen your belt:</b> Loosening the belt after a meal will easily cause the intestine to be twisted and blocked.
            </p>
            <p className='text-justify'>
              <b>Don't bathe:</b> Bathing will cause the increase of blood flow to the hands, legs and body thus the amount of blood around the stomach will therefore decrease. This will weaken the digestive system in our stomach.
            </p>
            <p className='text-justify'>
              <b>Don't walk about:</b> People always say that after a meal walk a hundred steps and you will live till 99. In actual fact this is not true. Walking will cause the digestive system to be unable to absorb the nutrition from the food we intake.
            </p>
            <p className='text-justify'>
              <b>Don't sleep immediately:</b> The food we intake will not be able to digest properly. Thus will lead to gastric problems and infection in our intestine.
            </p>
          </Element>
        </div>
      </div>
    </div>
  );
};

export default Health;
