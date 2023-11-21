import React, { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

function DiscussionForum() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  
  useEffect(() => {
    fetchMessages();
  }, []);
  
  const fetchMessages = async () => {
    const res = await fetch('http://localhost:3001/messages');
    const data = await res.json();
    setMessages(data);
  }
  
  const addMessage = async () => {
    const message = {
      text: newMessage,
      timestamp: new Date().toISOString(),
      name: localStorage.getItem('username'),
    };
    
    const res = await fetch('http://localhost:3001/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    });
    
    setNewMessage('');
    fetchMessages();
  }
  
  return (
    <div className="discussion-container">
      <div className="message-list"> 
        {messages.map(message => (<>
          <Card key={message.timestamp} className="message-card">
            <Card.Body>
              <Card.Text>{message.text}</Card.Text> 
              <Card.Subtitle className="text-muted">
                By {message.name} at {message.timestamp}
              </Card.Subtitle>
            </Card.Body>
          </Card>
          <br></br>
          </>
        ))}
      </div>

      <Form className="new-message-form">
        <Form.Group>
          <Form.Control 
            as="textarea" 
            rows={3}
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)} 
            placeholder='Type your message here and click on send button.' 
          />
        </Form.Group>
        <br></br>
        <Button variant="primary" onClick={addMessage}>
          Send
        </Button>
      </Form>
    </div>
  );
}

export default DiscussionForum;