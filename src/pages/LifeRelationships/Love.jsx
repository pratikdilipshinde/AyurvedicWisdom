import React, { useState, useEffect } from 'react';
import FloatingMenu from '../../components/FloatingMenu';
import { Element } from 'react-scroll';
import love from '../../assets/images/love.png';

const Love = () => {

    const menuItems = [
        "About Love",
        "Freedom From Fear",
        "Unconditional Love",
        "Family and Love",
        "Mother's Love",
        "Love"
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
                    <h1 className="text-5xl font-bold text-center">Love</h1>
                    <Element name="About Love" id="About Love" className="mt-4">
                        <h3 className="text-3xl font-semibold py-2 text-center underline">About Love</h3>
                        <h4 className="font-bold text-xl text-center pt-2">THE ONE WHO IS FULL OF LOVE IS THE ONE WHO IS ALWAYS HAPPY</h4>
                        <h4 className='font-semibold text-lg pt-2'>
                            Contemplation:
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            When you are constantly having love for everyone, you'll have no negativity. Your unselfish love will make you have only positive thoughts and you'll find yourself in constant happiness.
                        </h4>
                        <h4 className='font-semibold text-lg pt-4'>
                            Application:
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            Start your day with thinking of all the people you come in contact with. Then take a thought in your mind that you have love for all of them. This thought will help you throughout the day. You'll find yourself accepting others as they are and having good wishes for them.
                        </h4>
                        <hr className='border-green-800 my-4 border-[1.5px]' />

                        <h4 className="font-bold text-xl text-justify">YOUR LOVE FOR GOD WILL MAKE YOU VICTORIOUS IN ALL SITUATIONS</h4>
                        <h4 className='font-semibold text-lg pt-2'>
                            Contemplation:
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            Your love for God will make you experience His companionship in everything you do. Where there is love there is never a moment of loneliness. Thus you will be able to move forward with courage in all the challenges that life brings.
                        </h4>
                        <h4 className='font-semibold text-lg pt-4'>
                            Application:
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            Think of one situation where you have found yourself failing. Now think that God is with you to help you in this situation. When you believe this, you will find that you'll get the courage to accept and face the situation. Then you can also work and bring about a change in the situation.
                        </h4>
                        <hr className='border-green-800 my-4 border-[1.5px]' />

                        <h4 className="font-bold text-xl text-justify">THE ONE WAY TO CHANGE OTHERS IS TO DEAL WITH THEM WITH LOVE</h4>
                        <h4 className='font-semibold text-lg pt-2'>
                            Contemplation:
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            When you have love for others, you will have good wishes for them. Your desire to change them will then be for their good and not for your own selfishness. Others will quickly respond to your unselfish love and you will find them changing.
                        </h4>
                        <h4 className='font-semibold text-lg pt-4'>
                            Application:
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            Think of one person you want to bring about a change in. Before you think of changing that person let there be a lot of love for that person in your mind. Also make sure the change you want in the other person is for his own good and not for your own selfish reason.
                        </h4>
                        <hr className='border-green-800 my-4 border-[1.5px]' />

                        <h4 className="font-bold text-xl text-justify">IT IS ONLY WHEN YOU HAVE LOVE FOR YOURSELF THAT YOU CAN FORGIVE YOURSELF</h4>
                        <h4 className='font-semibold text-lg pt-2'>
                            Contemplation:
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            Love gives you the power to forgive. Just as you find it easy to forgive a person you love, when you have love for yourself you can forgive yourself too. It is only then can you find yourself learning and progressing without making yourself heavy.
                        </h4>
                        <h4 className='font-semibold text-lg pt-4'>
                            Application:
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            When you find yourself making a mistake, remind yourself that if you have to progress you have to forgive yourself. Learn from your mistake in such a way that you never repeat it and forgive yourself. Then you'll be able to move forward with lightness.
                        </h4>
                        <hr className='border-green-800 my-4 border-[1.5px]' />

                        <h4 className="font-bold text-xl text-justify">WHERE THERE IS LOVE, THE HARDEST TASK BECOMES EASY TO PERFORM</h4>
                        <h4 className='font-semibold text-lg pt-2'>
                            Contemplation:
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            If something is difficult, it means there is no love. Where there is love, even a task as difficult and big as a mountain becomes as easy and light as cotton. Love makes work easier and lighter.
                        </h4>
                        <h4 className='font-semibold text-lg pt-4'>
                            Application:
                        </h4>
                        <h4 className='text-indent-8 text-justify'>
                            Today is the day to love your work. Whatever you are doing, remember that you love your work. Experiment with one thing that you have been finding it difficult to do with a reminder to yourself that you love it and that is the reason you are doing it.
                        </h4>
                        <hr className='border-green-800 my-4 border-[1.5px]' />
                    </Element>
                    <Element name="Freedom From Fear" id="Freedom From Fear" className="mt-4">
                        <h3 className="text-3xl font-semibold py-2 text-center">Freedom From Fear</h3>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            Fear is the great separator of mind from spirit. While you fear, you are unable to trust your divine origin. Some people want to keep you away from the power of your inner connection so that they may gain power over you.
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            Love neutralizes fear. At the human level of consciousness, love and fear are opposites. Fear will drive out love. Love will drive out fear. You choose whether you will give your energy to love or to fear.
                        </h4>
                        <h4 className='font-semibold text-lg mt-4'>
                            The Antidote to Fear:
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            Giving thanks is the expression of gratitude, and gratitude is one of the most beautiful secrets in spiritual life. Gratitude is an expression of love.
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            Love flows from the Creator of the universe through all forms of life and all forms of manifestation. Love is the universal force of preservation, which holds creation in manifestation.
                        </h4>
                        <h4 className='font-semibold text-lg mt-4'>
                            The Natural Flow of Love:
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            Love is as natural as the universe. There is a tension between the forces of creation and universal love. This tension controls the size of the universe.
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            You can block love, or you can allow it to flow naturally through you. Falling in love is an allowance of the flow of love through your heart. It is surrender to the underlying unity of all life. It is a place of apparent vulnerability, a willingness to take the risk that the illusion of separation will once again return if that love is later lost.
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            When you allow your heart to open to the universes flow of love, gratitude comes with that flow. Gratitude for being alive, for just existing, for just being in the flow of the adventure of life.
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            Gratitude for the Sun that gives us life. Gratitude for the Earth that gives us our home in the cosmos. Gratitude for the people that you love, and for those who share your journey through life.
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            Gratitude flows unimpeded from an open heart. When you allow, it flows as freely as the sunshine, unobstructed by judgments or conditions.
                        </h4>
                        <h3 className="text-3xl font-semibold py-2 text-center">Quality Of Life</h3>
                        <h4 className='text-center text-xl mt-2'>
                            Gratitude adds new meaning to the words, Quality of life. It really works! Try it.
                        </h4>
                        <div className="grid md:grid-cols-3 gap-6 items-center">
                            {/* Main Text */}
                            <div className="md:col-span-2 space-y-4">
                                <h4 className="font-semibold text-lg text-left mt-2">
                                    GRATITUDE AFFIRMATION:
                                </h4>
                                <h4 className="font-semibold text-lg text-center mt-2">
                                    I am grateful for life<br />
                                    And all that I love<br />
                                    I am grateful for the Earth<br />
                                    And the Sun up above<br />
                                    I am grateful for my spirit<br />
                                    And my inner being<br />
                                    For the One that I express<br />
                                    And the joy of this feeling<br />
                                </h4>
                                <h4 className="text-lg text-center mt-2">
                                    (excerpt from an article written by Owen Waters)
                                </h4>
                            </div>
            
                            {/* Image 1 */}
                            <div className="grid-col-1 justify-center m-auto">
                            <img
                                src={love}
                                alt="Love"
                                className="rounded-xl shadow-2xl w-full md:w-56 md:h-56"
                            />
                            {/* <h4 className='text-green-800 text-center text-2xl font-bold'>Neem Leaf </h4> */}
                            
                            </div>
                        </div>
                        <hr className='border-green-800 my-4 border-[1.5px]' />
                    </Element>
                    <Element name="Unconditional Love" id="Unconditional Love" className="mt-4">
                        <h3 className="text-3xl font-semibold py-2 text-center">Unconditional Love</h3>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            A story is told about a soldier who was finally coming home after having fought in Vietnam. He called his parents from San Francisco.
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            "Mom and Dad, I'm coming home, but I've a favor to ask. I have a friend I'd like to bring home with me."
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            "Sure," they replied, "we'd love to meet him." "There's something you should know," the son continued, "he was hurt pretty badly in the fighting. He stepped on a LAND MINE and lost an arm and a leg. He has nowhere else to go, and I want him to come live with us."
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            "I'm sorry to hear that, son. Maybe we can help him find somewhere to live." "No, Mom and Dad, I want him to live with us."
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            "Son," said the father, "you don't know what you're asking. Someone with such a handicap would be a terrible burden on us. We have our own lives to live, and we can't let something like this interfere with our lives. I think you should just come home and forget about this guy. He'll find a way to live on his own."
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            At that point, the son hung up the phone. The parents heard nothing more from him. A few days later, however, they received a call from the San Francisco police. Their son had died after falling from a building, they were told. The police believed it was suicide. The grief-stricken parents flew to San Francisco and were taken to the city morgue to identify the body of their son. They recognized him, but to their horror they also discovered something they didn't know, their son had only one arm and one leg. The parents in this story are like many of us. We find it easy to love those who are good-looking or fun to have around, but we don't like people who inconvenience us or make us feel uncomfortable.
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            We would rather stay away from people who aren't as healthy, beautiful, or smart as we are.
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            Thankfully, there's someone who won't treat us that way.
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            Someone who loves us with an unconditional love that welcomes us into the forever family, regardless of how messed up we are. Tonight, before you tuck yourself in for the night, say a little prayer that God will give you the strength you need to accept people as they are, and to help us all be more understanding of those who are different from us!!!
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            There's a miracle called Friendship that dwells in the heart. You don't know how it happens or when it gets started. But you know the special lift. And you realize that Friendship is God's most precious gift!
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            Friends are a very rare jewel, indeed. They make you smile and encourage you to succeed. They lend an ear, they share a word of praise, and they always want to open their hearts to us.
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            Never take some one for granted, hold every person close to your heart because you might wake up one day and realize that you have lost a diamond while you were too busy collecting stones. Remember this always in life.
                        </h4>
                    </Element>
                    <Element name="Family and Love" id="Family and Love" className="mt-4">
                        <h3 className="text-3xl font-semibold py-2 text-center">Family and Love</h3>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            After 21 years of marriage, my wife wanted me to take another woman out to dinner and a movie. She said I love you but I know this other woman loves you and would love to spend some time with you.
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            The other woman that my wife wanted me to visit was MY MOTHER, who has been a widow for 19 years, but the demands of my work and my three children had made it possible to visit her only occasionally. That night I called to invite her to go out for dinner and a movie.
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            "What's wrong, are you well," she asked? My mother is the type of woman who suspects that a late night call or a surprise invitation is a sign of bad news. "I thought that it would be pleasant to be with you," I responded. "Just the two of us." She thought about it for a moment, and then said, "I would like that very much."
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            That Friday after work, as I drove over to pick her up I was a bit nervous. When I arrived at her house, I noticed that she, too, seemed to be nervous about our date. She waited in the door with her coat on. She had curled her hair and was wearing the dress that she had worn to celebrate her last wedding anniversary. She smiled from a face that was as radiant as an angel's. "I told my friends that I was going to go out with my son, and they were impressed," she said, as she got into the car. "They can't wait to hear about our meeting."
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            We went to a restaurant that, although not elegant, was very nice and cozy. My mother took my arm as if she were the First Lady. After we sat down, I had to read the menu. Half way through the entrees, I lifted my eyes and saw Mom sitting there staring at me. A nostalgic smile was on her lips. "It was I who used to have to read the menu when you were small," she said. "Then it's time that you relax and let me return the favor," I responded.
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            During the dinner, we had an agreeable conversation - nothing extraordinary, but catching up on recent events of each other's life. We talked so much that we missed the movie. As we arrived at her house later, she said, "I'll go out with you again, but only if you let me invite you." I agreed.
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            "How was your dinner date?" asked my wife when I got home. "Very nice. Much more so than I could have imagined," I answered.
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            A few days later, my mother died of a massive heart attack. It happened so suddenly that I did to not get to do anything for her. Some time later, I received an envelope with a copy of a restaurant receipt from the same place mother and I had dined.
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            An attached note said: "I paid this bill in advance. I wasn't sure that I could be there; but nevertheless, I paid for two plates - one for you and the other for your wife. You will never know what that night meant for me. I love you, son."
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            At that moment, I understood the importance of saying in time: "I LOVE YOU!" and to give our loved ones the time that they deserve.
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            Nothing in life is more important than your family. Give them the time they deserve, because these things cannot be put off till "some other time."
                        </h4>
                    </Element>
                    <Element name="Mother's Love" id="Mother's Love" className="mt-4">
                        <h3 className="text-3xl font-semibold py-2 text-center">Mother's Love</h3>
                        <h4 className='text-indent-8 text-center mt-2'>
                            When you were 1 year old, she fed you and bathed you,
                            You thanked her by crying all night long.
                        </h4>
                        <h4 className='text-indent-8 text-center mt-2'>
                            When you were 2 years old she taught you to walk,
                            You thanked her by running away when she called.
                        </h4>
                        <h4 className='text-indent-8 text-center mt-2'>
                            When you were 3 years old she made all your meals with love,
                            You thanked her by tossing your plate on floor.
                        </h4>
                        <h4 className='text-indent-8 text-center mt-2'>
                            When you were 4 years old she gave you some crayon,
                            You thanked her by coloring the dining room table.
                        </h4>
                        <h4 className='text-indent-8 text-center mt-2'>
                            When you were 5 years old she dressed you for the holidays,
                            You thanked her by plopping into the nearest.
                        </h4>
                        <h4 className='text-indent-8 text-center mt-2'>
                            When you were 6 years old she walked you to school,
                            You thanked her by screaming "I am not going".
                        </h4>
                        <h4 className='text-indent-8 text-center mt-2'>
                            When you were 7 years old she bought you a baseball,
                            You thanked her by throwing it through the next-door-neighbor's window.
                        </h4>
                        <h4 className='text-indent-8 text-center mt-2'>
                            When you were 8 years old she handed you an ice-cream,
                            You thanked her by dipping it all over your lap.
                        </h4>
                        <h4 className='text-indent-8 text-center mt-2'>
                            When you were 9 years old she paid for your piano lessons,
                            You thanked her by never even bothering to practice.
                        </h4>
                        <h4 className='text-indent-8 text-center mt-2'>
                            When you were 10 years old she drove you all day, from soccer to gymnastics to one birthday party to another,
                            You thanked her by jumping out of car and never looking back.
                        </h4>
                        <h4 className='text-indent-8 text-center mt-2'>
                            When you were 11 years old she took you and your friends to the movies,
                            You thanked her by asking to sit in a different row.
                        </h4>
                        <h4 className='text-indent-8 text-center mt-2'>
                            When you 12 years old she warned not to watch certain TV shows,
                            You thanked her by waiting until she left the house.
                        </h4>
                        <h4 className='text-indent-8 text-center mt-2'>
                            When you were 13 she suggested a hair cut,
                            You thanked her by telling her she had no taste.
                        </h4>
                        <h4 className='text-indent-8 text-center mt-2'>
                            When you were 14 she paid for a month away in summer camp,
                            You thanked her by forgetting to write a single letter.
                        </h4>
                        <h4 className='text-indent-8 text-center mt-2'>
                            When you were 15 she came home from work looking for a hug,
                            You thanked her by having your bedroom door locked.
                        </h4>
                        <h4 className='text-indent-8 text-center mt-2'>
                            When you were 16 she taught you how to drive her car,
                            You thanked her by taking it every chance you could.
                        </h4>
                        <h4 className='text-indent-8 text-center mt-2'>
                            When you were 17 she expected an important call,
                            You thanked her by being on the phone all night.
                        </h4>
                        <h4 className='text-indent-8 text-center mt-2'>
                            When you were 18 she cried at your high school graduation,
                            You thanked her by staying out parting until dawn.
                        </h4>
                        <h4 className='text-indent-8 text-center mt-2'>
                            When you were 19 she paid for your college tuition drove you to campus carried your bags,
                            You thanked her by saying good-bye outside the dorm so you wouldn't be embarrassed in front of your friends.
                        </h4>
                        <h4 className='text-indent-8 text-center mt-2'>
                            When you were 20 she asked whether you were seeing anyone,
                            You thanked her by saying "It is none of your business".
                        </h4>
                        <h4 className='text-indent-8 text-center mt-2'>
                            When you were 21 she suggested certain careers for your future,
                            You thanked her by saying "I don't want to be like you".
                        </h4>
                        <h4 className='text-indent-8 text-center mt-2'>
                            When you were 22 she hugged you at your college graduation,
                            You thanked her by asking whether she could pay for a trip to Europe.
                        </h4>
                        <h4 className='text-indent-8 text-center mt-2'>
                            When you were 23 she gave you furniture for your first apartment,
                            You thanked her by telling your friends it was ugly.
                        </h4>
                        <h4 className='text-indent-8 text-center mt-2'>
                            When you were 24 she met your fiancé and asked about your plans for future,
                            You thanked her by glaring & growling "Muuuuther Please".
                        </h4>
                        <h4 className='text-indent-8 text-center mt-2'>
                            When you were 25 she helped to pay for your wedding and she cried and told you how deeply she loved you,
                            You thanked her by moving half way across the country.
                        </h4>
                        <h4 className='text-indent-8 text-center mt-2'>
                            When you were 30 she called with some advice on baby,
                            You thanked her by telling her "things are different now".
                        </h4>
                        <h4 className='text-indent-8 text-center mt-2'>
                            When you were 40 she called to remind you of a relative's birthday,
                            You thanked her by saying you were "really busy right now".
                        </h4>
                        <h4 className='text-indent-8 text-center mt-2'>
                            When you were 50 she fell ill and needed you to take care of her,
                            You thanked her by reading about the burden parents become to their children.
                        </h4>
                        <h4 className='text-indent-8 text-center mt-2'>
                            And one day she quietly died and everything you never did come crashing down like thunder on your heart.
                        </h4>
                        <hr className='border-green-800 my-4 border-[1.5px]' />
                    </Element>
                    <Element name="Love" id="Love" className="mt-4">
                        <h3 className="text-3xl font-semibold py-2 text-center">Love</h3>
                        <h4 className='text-right mt-2'>
                            - article from Swami Vivekananda
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            I had a friend who grew to be very close to me.
                            Once when we were sitting at the edge of a swimming pool, she filled the palm of her hand with some water and held it before me, and said this:
                            "You see this water carefully contained on my hand? It symbolizes Love".
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            This was how I saw it:
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            As long as you keep your hand caringly open and allow it to remain there, it will always be there. However, if you attempt to close your fingers round it and try to possess it, it will spill through the first cracks it find. This is the greatest mistake that people do when they meet love...they try to posses it, they demand, they expect... and just like the water spilling out of your hand, love will retrieve from you. For love is meant to be free, you cannot change its nature. If you love, allow them to be free beings.
                        </h4>
                        <h4 className='text-center mt-2'>
                            Give and don't expect.<br />
                            Advise, but don't order.<br />
                            Ask, but never demand.
                        </h4>
                        <h4 className='text-indent-8 text-justify mt-2'>
                            It might sound simple, but it is a lesson that may take a lifetime to truly practice. It is the secret to true love. To truly practice it, you must sincerely feel no expectations from those who you love, and yet GIVE an unconditional caring.
                        </h4>
                    </Element>
                </div>
            </div>
        </div>
    );
}

export default Love