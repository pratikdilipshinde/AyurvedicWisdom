import React from "react";

const CardGrid = ({ title, items }) => {
  const chunkItems = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const rows = chunkItems(items, 3);

  return (
    <div className="bg-[#c5e2b2] min-h-fit py-10 px-4 md:px-16 font-messiri">
      <h2 className="text-5xl font-semibold text-center text-green-900 mb-10">{title}</h2>

      {rows.map((rowItems, rowIndex) => (
        <div
          key={rowIndex}
          className={`grid gap-6 justify-items-center mb-6 ${
            rowItems.length === 3
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              : rowItems.length === 2
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
              : "grid-cols-1"
          }`}
        >
          {rowItems.map((item, idx) => (
            <a
              key={idx}
              href={item.path}
              className="bg-green-50 border border-green-700 rounded-2xl shadow-md w-full max-w-sm py-6 px-8 text-center hover:shadow-lg transition hover:scale-105 cursor-pointer"
            >
              <h3 className="text-3xl font-semibold text-green-900 mb-2">{item.link}</h3>
              <p className="text-green-800 text-base">Click to Read More</p>
            </a>
          ))}
        </div>
      ))}
    </div>
  );
};

// Individual pages
export const Wellness = () => (
  <CardGrid
    title="Wellness"
    items={[
      { link: "Health", path: "/wellness/health" },
      { link: "Healing", path: "/wellness/healing" },
      { link: "Home Remedies", path: "/wellness/home-remedies" },
      { link: "Acupressure", path: "/wellness/acupressure" },
      { link: "Beauty Tips", path: "/wellness/beauty-tips" },
    ]}
  />
);

export const FoodNutrition = () => (
  <CardGrid
    title="Food & Nutrition"
    items={[
      { link: "Vegetarianism", path: "/food-nutrition/vegetarianism" },
      { link: "Recipes", path: "/food-nutrition/recipes" },
    ]}
  />
);

export const MindSpirituality = () => (
  <CardGrid
    title="Mind & Spirituality"
    items={[
      { link: "Meditation", path: "/mind-spirituality/meditation" },
      { link: "Prayers", path: "/mind-spirituality/prayers" },
      { link: "Breathing", path: "/mind-spirituality/breathing" },
      { link: "Yoga", path: "/mind-spirituality/yoga" },
      { link: "Peace", path: "/mind-spirituality/peace" },
      { link: "Powerful Thoughts", path: "/mind-spirituality/powerful-thoughts" },
    ]}
  />
);

export const LifeRelationships = () => (
  <CardGrid
    title="Life & Relationships"
    items={[
      { link: "Determination", path: "/life-relationships/determination" },
      { link: "Life", path: "/life-relationships/life" },
      { link: "Love", path: "/life-relationships/love" },
      { link: "Happiness", path: "/life-relationships/happiness" },
      { link: "Innocence", path: "/life-relationships/innocence" },
      { link: "Laughter", path: "/life-relationships/laughter" },
      { link: "Friendship", path: "/life-relationships/friendship" },
    ]}
  />
);

export const NewbornParent = () => (
  <CardGrid
    title="Newborn & Parent"
    items={[{ link: "Newborn & Parent", path: "/newborn-parent" }]}
  />
);

export const AboutMini = () => (
  <CardGrid
    title="About Mini"
    items={[{ link: "About Mini", path: "/about-mini" }]}
  />
);

export default Wellness;