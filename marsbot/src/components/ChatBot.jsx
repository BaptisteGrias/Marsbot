import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './ChatBot.css';

export default function ChatBot() {
  const [userInput, setUserInput] = useState('');
  const [userHistory, setUserHistory] = useState([]);
  const [botHistory, setBotHistory] = useState([]);

  const onKeyUp = (e) => {
    if (e.key === 'Enter') {
      setUserHistory([e.target.value, ...userHistory]);
      setUserInput('');
      matchReply(e.target.value);
    }
  };
  const handleChange = (e) => setUserInput(e.target.value);

  const matchReply = (userInput) => {
    const trigger = [
      ['hi', 'hey', 'hello'],
      ['how are you', 'how are things', 'how you doing'],
      ['what is going on', 'what is up'],
      ['happy', 'good', 'amazing', 'fantastic', 'cool'],
      ['bad', 'bored', 'tired', 'sad'],
      ['thanks', 'thank you'],
      ['bye', 'good bye', 'goodbye'],
    ];

    const reply = [
      ['Hello', 'Hi', "It's nice seeing you!"],
      ["I'm doing good... how are you?", 'I feel kind of lonely, how are you?', 'I feel happy, how are you?'],
      ['Nothing much', 'Exciting things!', "I'm happy to see you!"],
      ['Glad to hear it', "Yayyy!! That's the spirit!"],
      ['There is always a rainbow after the rain!'],
      ["You're welcome", 'No problem', "It's my pleasure!"],
      ['Goodbye, it was a nice talk'],
    ];

    const alternative = ['Same', 'Go on...', 'Try again please?', "I'm listening..."];

    let botMsg = generateReply(trigger, reply, userInput);

    if (!botMsg) {
      botMsg = alternative[Math.floor(Math.random() * alternative.length)];
    }
    setBotHistory([botMsg, ...botHistory]);
  };
  const generateReply = (trigger, reply, text) => {
    let item;
    let items;
    for (let x = 0; x < trigger.length; x++) {
      for (let y = 0; y < reply.length; y++) {
        if (text.includes(trigger[x][y])) {
          items = reply[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    return item;
  };

  return (
    <div className='chatbot-card'>
      <div className='human-input'>
        <InputGroup>
          <Form.Control type='text' placeholder='Ask me something' value={userInput} onChange={handleChange} onKeyPress={onKeyUp} />
        </InputGroup>
      </div>
      <div className='chatbox'>
        {userHistory.map((userReply, indx) => (
          <div className='conversation-box'>
            <div id='bot-reply'>
              <h3>Robot: {botHistory[indx]}</h3>
            </div>

            <div id='user-input'>
              <h3>Me: {userReply}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
