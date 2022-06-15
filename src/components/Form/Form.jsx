import React, { useState } from 'react';
import Card from '../Card/Card';
import './Form.scss';

const Form = () => {
  const [phoneState, setPhoneState] = useState('');
  const [messageState, setMessageState] = useState('');
  const [urlState, setUrlState] = useState('');
	const [copyState, setCopyState] = useState('Copy to clipboard');
  
  const handleSubmit = e => {
    e.preventDefault();
    setUrlState(`https://api.whatsapp.com/send?phone=${phoneState}&text=${encodeURIComponent(messageState)}`);
  };

	const copyToClipboard = (url) => {
    navigator.clipboard.writeText(url);
		setCopyState('Copied!');
		setTimeout(() => {
			setCopyState('Copy to clipboard');
		}, 2000);
  };

	const clearAll = () => {
		setPhoneState('');
		setMessageState('');
		setUrlState('');
	};

	function renderResult(url) {
		return (
			<div className="col s12 result-wrapper">
				<span type="text" id="result" className="result" readOnly={!!urlState}>{urlState}</span>
				<hr />
				<br />
				<div className="row">
					<div className="col s12 m6">
						<button
							className="btn waves-effect waves-light teal button-handler"
							onClick={() => {copyToClipboard(urlState)}}>{copyState}
							<i className="material-icons right">content_copy</i>
						</button>
					</div>
					<div className="col s12 m6">
						<a
							className="btn waves-effect waves-light teal button-handler"
							href={url}
							target="a_blank">Send WhatsApp
							<i className="material-icons right">open_in_new</i>
						</a>
					</div>
					<div className="col s12 m12">
						<button
							className="btn waves-effect waves-light teal accent-1 teal-text button-handler"
							onClick={() => {clearAll()}}>Clear all
							<i className="material-icons right">clear_all</i>
						</button>
					</div>
				</div>
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
								Create personalized WhatsApp messages and send them to whoever you want.
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
								value={phoneState}
								onChange={e => setPhoneState(e.target.value)}
								required
							/>
							<label htmlFor="phone">Write your phone number here 📱</label>
							<span className="helper-text">E.g 529831231237
								{' '}
								<span className="teal-text">Don't forget the prefix.</span>
							</span>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<textarea
								id="message"
								name="message"
								type="text"
								className="materialize-textarea validate"
								value={messageState}
								onChange={e => setMessageState(e.target.value)}
								required
							/>
							<label htmlFor="message">Write your message here ✍️</label>
						</div>
					</div>
					<div className="row">
						<div className="col s12">
							<button
								className="btn waves-effect waves-light teal button-handler"
								type="submit">Generate Link
								<i className="material-icons right">link</i>
							</button>
						</div>
						{urlState ? renderResult(urlState) : ''}
					</div>
				</form>
			</div>
		</Card>
  );
}

export default Form;
