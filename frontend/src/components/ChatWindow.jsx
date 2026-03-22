import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import "./ChatWindow.css";

const TypingIndicator = () => (
  <div className="typing-indicator-wrapper">
    <div className="avatar ai-avatar">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor" opacity="0.4"/>
        <circle cx="12" cy="12" r="4" fill="currentColor"/>
      </svg>
    </div>
    <div className="typing-bubble">
      <span className="dot" />
      <span className="dot" />
      <span className="dot" />
    </div>
  </div>
);

const WelcomeScreen = () => (
  <div className="welcome-screen">
    <div className="welcome-icon">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="currentColor"/>
      </svg>
    </div>
    <h2 className="welcome-title">How can I help you today?</h2>
    <p className="welcome-sub">Ask me anything — I'm powered by LLaMA 3.3 via Groq.</p>
    {/* <div className="welcome-chips">
      <div className="chip">💡 Explain quantum computing</div>
      <div className="chip">✍️ Write me a poem</div>
      <div className="chip">🐞 Debug my code</div>
      <div className="chip">📋 Summarize a topic</div>
    </div> */}
  </div>
);

const ChatWindow = ({ messages, isLoading, error }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isLoading]);

  return (
    <div className="chat-window" ref={containerRef}>
      {messages.length === 0 && !isLoading ? (
        <WelcomeScreen />
      ) : (
        <div className="messages-list">
          {messages.map((msg, idx) => (
            <MessageBubble key={idx} role={msg.role} content={msg.content} />
          ))}
          {isLoading && <TypingIndicator />}
          {error && (
            <div className="error-toast">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor"/>
              </svg>
              {error}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
