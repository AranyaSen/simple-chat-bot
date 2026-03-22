import "./MessageBubble.css";

const MessageBubble = ({ role, content }) => {
  const isUser = role === "user";

  return (
    <div className={`bubble-row ${isUser ? "row-user" : "row-ai"}`}>
      {!isUser && (
        <div className="avatar ai-avatar">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor" opacity="0.4"/>
            <circle cx="12" cy="12" r="4" fill="currentColor"/>
          </svg>
        </div>
      )}
      <div className={`bubble ${isUser ? "bubble-user" : "bubble-ai"}`}>
        {content}
      </div>
      {isUser && (
        <div className="avatar user-avatar">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
          </svg>
        </div>
      )}
    </div>
  );
};

export default MessageBubble;
