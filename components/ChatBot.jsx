import { useState } from 'react';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function ChatBot() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      by: 'bot',
      message: "Hello, I'm Buggy. I'm very knowledgeable about movies. Try asking me about a movie!"
    }
  ]);

  const [input, setInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setMessages([...messages, { by: 'user', message: input }]);
    setInput('');
  };

  return (
    <>
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: '1000',
          borderRadius: '1000px',
          width: '70px',
          height: '70px',
          backgroundColor: 'red',
          boxShadow: '0 0 10px rgba(0,0,0,0.5)',
          backgroundImage:
            'url(data:image/jpeg;base64,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)',
          backgroundPosition: '0 0',
          backgroundSize: 'cover'
        }}
        onClick={e => setOpen(!open)}></div>

      {/* {open && ( */}
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          boxShadow: '0 0  10px rgba(0, 0, 0, 0.5)',
          visibility: open ? 'visible' : 'hidden'
        }}>
        <iframe
          width="350"
          height="430"
          allow="microphone;"
          src="https://console.dialogflow.com/api-client/demo/embedded/c2d7655c-7266-4536-8d6e-f9643abe5cc7"></iframe>
      </div>
      {/* )} */}
      {/* {open && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '300px',
            height: '500px',
            borderRadius: '10px',
            zIndex: '2000',
            backgroundColor: 'black',
            color: 'white',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
          }}>
          <div
            style={{
              padding: '10px',
              backgroundColor: 'red',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
            <div>Meet Buggy</div>
            <div
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '1000px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                color: 'black'
              }}
              onClick={e => setOpen(false)}>
              <CloseIcon />
            </div>
          </div>

          <div
            style={{
              padding: '10px',
              overflowY: 'auto',
              flex: '1',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}>
            {messages.map((message, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'column-reverse',
                  width: '100%'
                }}>
                <div
                  style={{
                    width: '80%',
                    marginLeft: message.by === 'bot' ? '0' : 'auto',
                    marginRight: message.by !== 'bot' ? 'auto' : '0',
                    backgroundColor: message.by === 'bot' ? 'rgba(255,255,255,0.3)' : 'blue',
                    borderRadius: '10px',
                    padding: '10px'
                  }}>
                  {message.message}
                </div>
              </div>
            ))}
          </div>

          <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
            <input
              style={{
                color: 'white',
                flex: '1',
                outline: 'none',
                border: 'none',
                padding: '10px',
                font: 'inherit',
                backgroundColor: 'rgba(255,255,255,0.3)'
              }}
              placeholder="What do you want to know?"
              value={input}
              onChange={e => setInput(e.target.value)}
            />

            <Button>Send</Button>
          </form>
        </div>
      )} */}
    </>
  );
}
