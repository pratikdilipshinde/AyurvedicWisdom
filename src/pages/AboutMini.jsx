import React from "react";

const timeline = [
    { year: 1968, img: "https://via.placeholder.com/100x130?text=1968" },
    { year: 1998, img: "https://via.placeholder.com/100x130?text=1998" },
    { year: 2008, img: "https://via.placeholder.com/100x130?text=2008" },
    { year: 2014, img: "https://via.placeholder.com/100x130?text=2014" },
];

    const AboutMini = () => (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
        <h1 className="text-3xl font-bold text-center text-green-800">About Us</h1>

        <p className="text-center text-red-600 font-semibold">
        Mini's life is made up of the small things, well done!
        </p>

        <div className="text-gray-700 space-y-4 text-sm leading-relaxed">
        <p>
            With a keen eye for detail and deep sensitivity, Mini blends technical skill with artistic vision. She finds fulfillment in healing, helping, and humble service.
        </p>
        <p>
            Modest by nature, she values doing a job well over recognition. She nurtures others through nutritious food and acts of service.
        </p>
        <p>
            A perfectionist, Mini is deeply attuned to the smallest details and can’t rest until things are just right.
        </p>
        </div>

        <div>
        <h2 className="text-lg font-semibold text-green-800 mb-2">Her Accomplishments</h2>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Indian classical dancer, swimmer, horse rider, car racer</li>
            <li>Expresses love through cooking with care</li>
            <li>Loves flower arranging – Ikebana</li>
            <li>Licensed beauty consultant and cosmetologist</li>
            <li>Shares home remedies freely for common ailments</li>
        </ul>
        </div>

        <div className="text-sm text-gray-700 italic">
        <p className="font-semibold text-green-700">She is beautiful inside and out.</p>
        <p>
            With time, Mini has gained dignity, wisdom, and maturity that now serve to help others.
        </p>
        <p className="text-right">(Written by a loving friend)</p>
        </div>

        <div className="text-center pt-6 border-t">
        <h2 className="text-md font-semibold text-red-700 mb-4">
            Wonderful Passage of Time brings experience and maturity
        </h2>
        <div className="flex justify-center gap-4 flex-wrap">
            {timeline.map((item) => (
            <div key={item.year} className="text-center">
                <img
                src={item.img}
                alt={`Mini in ${item.year}`}
                className="w-24 h-32 object-cover rounded shadow"
                />
                <p className="mt-1 text-xs text-gray-600">{item.year}</p>
            </div>
            ))}
        </div>
        <p className="mt-4 text-sm font-medium text-green-700">Mini Dhingra Guleria</p>
        </div>
    </div>
    );

export default AboutMini;
