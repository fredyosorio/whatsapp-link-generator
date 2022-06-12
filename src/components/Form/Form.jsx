import React, { useState } from 'react';
import './Form.scss';

const Form = () => {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [url, setUrl] = useState('');
  
  const handleSubmit = e => {
    setUrl(`https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`);
    console.log('url is:', url);
    e.preventDefault();
  };

  return (
    <div className="container-fluid">
      <div className="header-accent teal"></div>
      <div className="card-wrap">
        <div className="card">
          <div className="card-detail teal accent-1"></div>
          <div className="form-wrap">
            <form onSubmit={e => {handleSubmit(e)}}>
              <div className="row">
                <div className="input-field col s12">
                  <h4>Whatsapp Link Generator</h4>
                  <p className="teal-text margin-negative">
                    Create personalized WhatsApp messages and send them to whoever you want (or yourself).
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input 
                    id="phone"
                    name="phone"
                    type="number"
                    className="validate"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    required
                  />
                  <label htmlFor="phone">Write your phone number here 📱</label>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <div className="row">
                    <div className="input-field col s12">
                      <textarea
                        id="message"
                        className="materialize-textarea"
                        onChange={e => setMessage(e.target.value)}
                      />
                      <label htmlFor="message">Write your message here ✍️</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <button
                    className="btn waves-effect waves-light teal button-handler"
                    type="submit"
                    name="action">Generate
                    <i className="material-icons right">link</i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
