import React, { useState, useEffect } from 'react';
import AircallPhone from 'aircall-everywhere';
import '../assets/styles/demo.css';
import '../assets/styles/reset.css';
import AircallIcon from '../assets/images/aircall-icon.svg';

function AircallMockup() {
  const [phoneVisible, setPhoneVisible] = useState(false);
  const [phone, setPhone] = useState(null);
  //const [dialInfo, setDialInfo] = useState(null);
  //const [isLoggedInInfo, setIsLoggedInInfo] = useState(null);
  //const [button, setButton] = useState(true)
  const [callEvents, setCallEvents] = useState([]);

  useEffect(() => {
    if (phone) {
      phone.on('incoming_call', (callInfos) => {
        setPhoneVisible(true);
        const message = `Incoming call from ${callInfos.from} to ${callInfos.to} ringing!`;
        addCallLog('incoming_call', callInfos, message);
        setStatusMessage('#call-events', 'success', message);
      });

      phone.on('call_end_ringtone', (callInfos) => {
        const message = `Ringing ended. call was ${callInfos.answer_status}`;
        addCallLog('call_end_ringtone', callInfos, message);
        setStatusMessage(
          '#call-events',
          callInfos.answer_status === 'answered' ? 'success' : 'warning',
          message
        );
      });

      phone.on('call_ended', (callInfos) => {
        const message = `Call ended. Lasted ${callInfos.duration} seconds`;
        addCallLog('call_ended', callInfos, message);
        setStatusMessage('#call-events', 'warning', message);
      });

      phone.on('comment_saved', (callInfos) => {
        const message = 'Comment about the last call saved';
        addCallLog('comment_saved', callInfos, message);
        setStatusMessage('#call-events', 'success', message);
      });

      phone.on('outgoing_call', (callInfos) => {
        const message = `Outgoing call from ${callInfos.from} to ${callInfos.to} ...`;
        addCallLog('outgoing_call', callInfos, message);
        setStatusMessage('#call-events', 'success', message);
      });

      phone.on('outgoing_answered', (callInfos) => {
        const message = 'Outgoing call answered!';
        addCallLog('outgoing_answered', callInfos, message);
        setStatusMessage('#call-events', 'success', message);
      });
    }
  }, [phone]);

  const loadPhone = () => {
    setPhoneVisible(true);
    // setButton(false);
    const newPhone = new AircallPhone({
      domToLoadPhone: '#phone',
      onLogin: (settings) => {
        setStatusData('#user-info', settings, '// user informations');
        setStatusMessage('#phone-loading', 'success', 'Phone is loaded and ready to use!');
      },
      onLogout: () => {
        setStatusData('#user-info', '', '// user informations');
        setStatusMessage('#phone-loading', 'danger', 'Phone is not loaded or logged in');
      }
    });
    setPhone(newPhone);
  };
  

//   const dialNumber = () => {
//     phone.send('dial_number', { phone_number: '+33123456789' }, (success, data) => {
//       setPhoneVisible(true);
//       setDialInfo({ success, data });
//     });
//   };

//   const checkIsLoggedIn = () => {
//     phone.isLoggedIn((response) => {
//       setIsLoggedInInfo(response
//         ? 'User is logged in'
//         : 'User is logged out')
//     });
//   };

  const addCallLog = (id, payload, log) => {
    const currentTime = new Date(Date.now());
    const htmlBlock = (
      <div key={`${id}-${payload.call_id}`}>
        <input type="checkbox" id={`${id}-${payload.call_id}`} />
        <label htmlFor={`${id}-${payload.call_id}`}>
          <span>{currentTime.toLocaleTimeString()}: {log}</span>
          <pre className="prettyprint"><code>{JSON.stringify(payload, null, 2)}</code></pre>
        </label>
      </div>
    );
    setCallEvents((prevEvents) => [...prevEvents, htmlBlock]);
  };

  const setStatusMessage = (selector, type, message) => {
    const statusBox = document.querySelector(selector);
    statusBox.classList.remove('alert-danger', 'alert-success', 'alert-warning');
    statusBox.classList.add(`alert-${type}`);
    statusBox.textContent = message;
  };

  const setStatusData = (selector, data, label) => {
    const dataBox = document.querySelector(selector);
    const toPrettify = `${label}\n${JSON.stringify(data, null, 2)}`;
  
    if (window.PR) {
      dataBox.innerHTML = window.PR.prettyPrintOne(toPrettify);
    } else {
      dataBox.textContent = toPrettify;
    }
  };

  return (
    <div className="container">
      <div id="phone-container" className={phoneVisible? "": "d-none"}>
        <div className="arrow-up"></div>
        <div id="phone"></div>
      </div>

      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <div className="nav-content">
  </div>

  <div className="nav-content" style={{ display: 'flex', alignItems: 'center' }}>
   
    <a id="phone-aircall" className={phoneVisible ? "" : "d-none"} style={{ marginLeft: 'auto' }}>
      <img src={AircallIcon} alt="Aircall Icon" onClick={() => setPhoneVisible(!phoneVisible)} />
    </a>
  </div>
</nav>


      <main role="main">
        
        <div className="container">
          
          <h2>Load Aircall Phone</h2>

          <div className="row">
            <div className="left">
              

              <button className="button" id="load-phone-button" onClick={loadPhone}>Load phone</button>
              <pre className="prettyprint"><code id="user-info">// user informations</code></pre>

              <div className="alert alert-danger" id="phone-loading">
                Phone is not loaded or logged in.
              </div>
            </div>
            <div className="right">
              
            </div>
          </div>

          <h2>Call lifecycle events</h2>

          <div className="row">
            <div className="left">
              {/* <p>
                There are multiple events happening during the lifecycle of a phone call. Try making
                an outbound or inbound call to see what happens!
              </p>
              <p>
                The list of all available events is documented on our
                <a
                  href="https://github.com/aircall/aircall-everywhere#on--send"
                  title="Aircall Everywhere - Github"
                  >Github repo</a
                >.
              </p> */}

              <p id="waiting-events">Waiting for events...</p>

              <div id="call-events-log">{callEvents}</div>
              <div className="alert alert-warning" id="call-events">
                Not in a call
              </div>
            </div>
            <div className="right">
              
            </div>
          </div>

          
        </div>
      </main>
    </div>
  );
}

export default AircallMockup;