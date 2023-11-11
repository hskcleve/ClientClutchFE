import Footer from "./Footer";
import Navbar from "./Navbar";
import Tile from "./Tile";
import Title from "./Title";
import { useState, useRef, useEffect } from "react";
import defaultMessages from "./defaultMessages";
import CallRepBubble from "./CallRepBubble";
import CallerBubble from "./CallerBubble";
import {
  getComplianceConfidentialityAnalysis,
  getFraudAnalysis,
  getSecurityAnalysis,
  getSentimentAnalysis,
} from "./api/common-service";

function App() {
  const [messages, setMessages] = useState(defaultMessages);
  const [inputMessage, setInputMessage] = useState("");
  const scrollableDivRef = useRef(null);
  const [securityAnalysis, setSecurityAnalysis] = useState("");
  const [fraudAnalysis, setFraudAnalysis] = useState("");
  const [compliConfiAnalysis, setCompliConfiAnalysis] = useState("");
  const [sentimentAnalysis, setSentimentAnalysis] = useState("");
  const [recommendedActions, setRecommendedActions] = useState("");

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
    if (messages.length > 0 && messages.length % 2 === 1) {
      const latestMsg = messages[messages.length - 1].message;
      getSecurityAnalysis(latestMsg).then((response) => {
        setSecurityAnalysis(
          response.result && String(response.result).includes("\n")
            ? ""
            : response.result
        );
      });
      getFraudAnalysis(latestMsg).then((response) =>
        setFraudAnalysis(
          response.result && String(response.result).includes("\n")
            ? ""
            : response.result
        )
      );
      getComplianceConfidentialityAnalysis(latestMsg).then((response) =>
        setCompliConfiAnalysis(
          response.result && String(response.result).includes("\n")
            ? ""
            : response.result
        )
      );
      getSentimentAnalysis(latestMsg).then((response) => {
        setSentimentAnalysis(
          response.result && String(response.result).includes("\n")
            ? ""
            : response.result
        );
        setRecommendedActions(response.recommended_actions);
      });
    }
  }, [messages]);

  return (
    <div className="bg-black min-h-screen flex flex-col justify-between">
      <Navbar />
      <Title title="Live Analysis" />
      <div className="flex px-10 pb-8 justify-around flex-grow gap-5 flex-col items-center lg:items-stretch lg:flex-row">
        <div className="flex w-full lg:flex-1">
          <Tile
            tileTitle={
              <>
                Transcription{" "}
                <span className="tracking-tighter text-xs ml-2 text-red-500">
                  <span className="text-3xl relative top-1">•</span> LIVE
                </span>
              </>
            }
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
                    className={`w-full p-2 text-xs sm:text-sm border rounded-md outline-none bg-transparent ${
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
                <div className="justify-between w-full flex mt-3">
                  <span
                    className="text-xs hover:underline hover:cursor-pointer hidden sm:block"
                    onClick={() => {
                      setMessages(defaultMessages);
                    }}
                  >
                    {`Reset simulated chat`}
                  </span>
                  <span
                    className="text-xs hover:underline hover:cursor-pointer hidden sm:block"
                    onClick={() => {
                      setMessages([]);
                    }}
                  >
                    {`Clear simulated chat`}
                  </span>
                  <div className="justify-between w-full flex sm:hidden">
                    <span
                      className="text-xs hover:underline hover:cursor-pointer"
                      onClick={() => {
                        setMessages(defaultMessages);
                      }}
                    >
                      {`Reset`}
                    </span>
                    <span
                      className="text-xs hover:underline hover:cursor-pointer"
                      onClick={() => {
                        setMessages([]);
                      }}
                    >
                      {`Clear`}
                    </span>
                  </div>
                </div>
              </div>
            }
          />
        </div>
        <div className="flex lg:flex-1 w-full flex-col gap-5">
          <Tile
            tileTitle="Security and Fraud Alerts"
            children={
              securityAnalysis || fraudAnalysis ? (
                <div className="flex h-full pt-5 text-xs sm:text-sm text-gray-500">
                  <ul>
                    <li>{securityAnalysis}</li>
                    <li>{fraudAnalysis}</li>
                  </ul>
                </div>
              ) : (
                <div className="flex h-full pt-5 text-xs sm:text-sm text-gray-500">
                  <ul>
                    <li>Nothing to report.</li>
                  </ul>
                </div>
              )
            }
          />
          <Tile
            tileTitle="Compliance and Information Confidentiality"
            children={
              compliConfiAnalysis ? (
                <div className="flex h-full pt-5 text-xs sm:text-sm text-gray-500">
                  <ul>
                    <li>{compliConfiAnalysis}</li>
                  </ul>{" "}
                </div>
              ) : (
                <div className="flex h-full pt-5 text-xs sm:text-sm text-gray-500">
                  <ul>
                    <li>Nothing to report.</li>
                  </ul>
                </div>
              )
            }
          />
          <Tile
            tileTitle="Sentiment and Speech Analysis"
            children={
              sentimentAnalysis ? (
                <div className="flex h-full pt-5 text-xs sm:text-sm text-gray-500">
                  <ul>
                    <li>{sentimentAnalysis}</li>
                  </ul>{" "}
                </div>
              ) : (
                <div className="flex h-full pt-5 text-xs sm:text-sm text-gray-500">
                  <ul>
                    <li>Nothing to report.</li>
                  </ul>
                </div>
              )
            }
          />
          <Tile
            tileTitle="Recommendations"
            children={
              <div className="flex h-full pt-5 text-xs sm:text-sm text-gray-500">
                <ul>
                  <li>{recommendedActions[0]}</li>
                  <li>{recommendedActions[1]}</li>
                </ul>{" "}
              </div>
            }
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
