import React, { useState } from 'react';
import Card from '../Card/Card';
import './Form.scss';

const Form = () => {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [url, setUrl] = useState('');
	const [copy, setCopy] = useState('Copy to clipboard');
  
  const handleSubmit = e => {
    e.preventDefault();
    setUrl(`https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`);
  };

	const copyToClipboard = (url) => {
    navigator.clipboard.writeText(url);
		setCopy('Copied!');
		setTimeout(() => {
			setCopy('Copy to clipboard');
		}, 2000);
  };

	function renderResult(url) {
		return (
			<div className="col s12 result-wrapper">
				<span type="text" id="result" className="result" readOnly={!!url}>{url}</span>
				<hr />
				<br />
				<button
					className="btn waves-effect waves-light teal button-handler"
					onClick={() => {copyToClipboard(url)}}>{copy}
					<i className="material-icons right">content_copy</i>
				</button>
			</div>
		);
	}

  return (
		<Card>
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
							<span className="helper-text">E.g <span className="teal-text">52</span>9831231237</span>
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
										required
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
								type="submit">Generate URL
								<i className="material-icons right">link</i>
							</button>
						</div>
						{url ? renderResult(url) : ''}
					</div>
				</form>
			</div>
		</Card>
  );
}

export default Form;
