import Footer from "./Footer";
import Navbar from "./Navbar";
import Tile from "./Tile";
import Title from "./Title";
import { useState } from "react";

function App() {
  const defaultMessages = [
    {
      message: "Hi, I'm calling to inquire about my account balance",
      timestamp: Date.now(),
    },
    {
      message:
        "Great! I'd be happy to assist you with that. Can you please verify your account by providing your name and date of birth?",
      timestamp: Date.now(),
    },
    {
      message:
        "Sure, my name is John Doe, and my date of birth is January 15, 1980.",
      timestamp: Date.now(),
    },
    {
      message:
        "Thank you, John. I see your account here. Your current balanace is $5000. Is there anything else I can help you with?",
      timestamp: Date.now(),
    },
    {
      message: "Nope, that's all I needed. Thank you for your help!",
      timestamp: Date.now(),
    },
  ];
  const [messages, setMessages] = useState(defaultMessages);

  return (
    <div className="bg-black min-h-screen flex flex-col justify-between">
      <Navbar />
      <Title title="Live Analysis" />
      <div className="flex px-10 pb-8 justify-around flex-grow gap-5">
        <div className="flex flex-grow">
          <Tile tileTitle="Transcription" />
        </div>
        <div className="flex flex-grow flex-col gap-5">
          <Tile tileTitle="Security and Fraud Alerts" />
          <Tile tileTitle="Compliance and Information Confidentiality" />
          <Tile tileTitle="Sentiment and Speech Analysis" />
          <Tile tileTitle="Recommendations" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
