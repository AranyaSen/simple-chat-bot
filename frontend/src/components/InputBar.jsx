import { useState, useRef, useEffect } from "react";
import "./InputBar.css";

const InputBar = ({ onSend, isLoading }) => {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  const handleSend = () => {
    if (!text.trim() || isLoading) return;
    onSend(text);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Auto-resize textarea
  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = Math.min(ta.scrollHeight, 160) + "px";
  }, [text]);

  return (
    <div className="input-bar">
      <div className={`input-wrapper ${isLoading ? "input-disabled" : ""}`}>
        <textarea
          ref={textareaRef}
          className="chat-textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Message AI Chat..."
          rows={1}
          disabled={isLoading}
        />
        <button
          className={`send-btn ${text.trim() && !isLoading ? "send-active" : ""}`}
          onClick={handleSend}
          disabled={!text.trim() || isLoading}
          title="Send (Enter)"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="currentColor"/>
          </svg>
        </button>
      </div>
      <p className="input-hint">Press Enter to send · Shift+Enter for new line</p>
    </div>
  );
};

export default InputBar;
