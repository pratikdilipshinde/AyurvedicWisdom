import React from "react";

const conversations = [
  { speaker: "Wife", text: "What are you doing?" },
  { speaker: "Husband", text: "Nothing..." },
  { speaker: "Wife", text: "Nothing...? You've been reading our marriage certificate for an hour." },
  { speaker: "Husband", text: "I was looking for the expiry date." },
  { speaker: "Wife", text: "Do you want dinner?" },
  { speaker: "Husband", text: "Sure! What are my choices?" },
  { speaker: "Wife", text: "Yes or no." },
  { speaker: "Wife", text: "You always carry my photo in your wallet. Why?" },
  { speaker: "Hubby", text: "When there is a problem, no matter how great, I look at your picture and the problem disappears." },
  { speaker: "Wife", text: "You see how miraculous and powerful I am for you?" },
  { speaker: "Hubby", text: "Yes! I see your picture and ask myself what other problem can there be greater than this one?" },
  { speaker: "Girl", text: "When we get married, I want to share all your worries, troubles, and lighten your burden." },
  { speaker: "Boy", text: "It's very kind of you, darling, but I don't have any worries or troubles." },
  { speaker: "Girl", text: "Well that's because we aren't married yet." },
  { speaker: "Newly Married Man", text: "Would you have married me if my father hadn't left me a fortune?" },
  { speaker: "Wife", text: "Honey, I'd have married you, NO MATTER WHO LEFT YOU A FORTUNE!" },
  { speaker: "Wife", text: "What do you like most in me, my pretty face or my sexy body?" },
  { speaker: "Husband", text: "Your sense of humor!" },
];

const ChatBox = () => {
  return (
    <div className="max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-center text-gray-800 mb-4">💬 Funny Marriage Conversations</h2>
      <div className="space-y-2">
        {conversations.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.speaker === "Husband" || msg.speaker === "Boy" || msg.speaker === "Hubby" || msg.speaker === "Newly Married Man" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`px-4 py-2 max-w-[70%] rounded-lg ${
                msg.speaker === "Husband" || msg.speaker === "Boy" || msg.speaker === "Hubby" || msg.speaker === "Newly Married Man"
                  ? "bg-blue-500 text-white"
                  : "bg-green-600 text-white"
              }`}
            >
              <p className="font-bold">{msg.speaker}:</p>
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatBox;
