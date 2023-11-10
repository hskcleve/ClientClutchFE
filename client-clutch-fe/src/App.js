import Footer from "./Footer";
import Navbar from "./Navbar";
import Tile from "./Tile";
import Title from "./Title";
import { useState, useRef, useEffect } from "react";
import defaultMessages from "./defaultMessages";
import CallRepBubble from "./CallRepBubble";
import CallerBubble from "./CallerBubble";
import { getSecurityAnalysis } from "./api/common-service";

function App() {
  const [messages, setMessages] = useState(defaultMessages);
  const [inputMessage, setInputMessage] = useState("");
  const scrollableDivRef = useRef(null);

  const handleInputKeyPress = (event) => {
    if (event.key === "Enter" && inputMessage.trim() !== "") {
      const newMessage = {
        message: inputMessage,
        timestamp: new Date(),
      };
      setMessages([...messages, newMessage]);
      setInputMessage("");
    }
  };

  useEffect(() => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollTop =
        scrollableDivRef.current.scrollHeight;
    }
    const latestMsg = messages[messages.length - 1].message;
    getSecurityAnalysis(latestMsg).then((response) => console.log(response));
  }, [messages]);

  return (
    <div className="bg-black min-h-screen flex flex-col justify-between">
      <Navbar />
      <Title title="Live Analysis" />
      <div className="flex px-10 pb-8 justify-around flex-grow gap-5">
        <div className="flex flex-1">
          <Tile
            tileTitle="Transcription"
            children={
              <div className="flex flex-col justify-between h-full">
                <div
                  ref={scrollableDivRef}
                  className="flex flex-col gap-2 pb-5 mt-5 overflow-scroll no-scrollbar"
                  style={{ height: "550px" }}
                >
                  {messages.map((msg, index) => (
                    <div key={msg.message + index}>
                      {index % 2 === 0 ? (
                        <CallerBubble msg={msg} index={index} />
                      ) : (
                        <CallRepBubble msg={msg} index={index} />
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex">
                  <input
                    className={`w-full p-2 border rounded-md outline-none bg-transparent ${
                      messages.length % 2 === 0
                        ? "border-purple-500"
                        : "border-blue-500"
                    }`}
                    type="text"
                    placeholder={
                      messages.length % 2 === 0
                        ? "Type customer's response..."
                        : "Type call rep's response..."
                    }
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleInputKeyPress}
                  />
                </div>
                <span
                  className="text-xs hover:underline hover:cursor-pointer"
                  onClick={() => {
                    setMessages(defaultMessages);
                  }}
                >
                  {`[X] Reset simulated chat`}
                </span>
              </div>
            }
          />
        </div>
        <div className="flex flex-1 flex-col gap-5">
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
