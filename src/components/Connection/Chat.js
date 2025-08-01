import './ChatPage.css';
import Header from '../Header/header';

function ChatPage() {
    return <>
      <Header/>
    <div className="chat-wrapper container-fluid px-0">
      <div className="chat-container container py-4">
        <div className="d-flex align-items-center mb-4">
          <img src="assets/Boy-1.jpg" alt="Rahul Yadav" className="rounded-circle me-3" width="50" height="50" />
          <div>
            <h5 className="mb-0">Rahul Yadav</h5>
            <small className="text-muted">Student</small>
          </div>
          <button className="btn btn-danger btn-sm ms-auto">Exit</button>
        </div>

       
        <div className="chat-box p-3">
          <div className="chat-bubble left">Hey! Can you help me learn React?</div>
          <div className="chat-bubble right">Sure! Let’s start with components.</div>
          <div className="chat-bubble left">Great! What’s a component?</div>
          <div className="chat-bubble right">It’s a reusable UI block like this chat bubble.</div>
        </div>

       
        <div className="chat-input mt-4 d-flex align-items-center">
          <input
            type="text"
            placeholder="Type your message........"
            className="form-control me-2 rounded-pill"
          />
          <button className="btn px-3 py-2">
            <img src='assets/send.png' width={40} />    
        </button>
        </div>
      </div>
    </div>
  </>
  
}

export default ChatPage;
