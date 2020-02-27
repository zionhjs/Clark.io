import axios from 'axios';
const request = require('superagent');

if (Meteor.isServer) {
	BrowserPolicy.content.allowOriginForAll('gpmodules.js');
	BrowserPolicy.content.allowOriginForAll('media.giphy.com');
	BrowserPolicy.content.allowOriginForAll('www.dropbox.com');
	BrowserPolicy.content.allowOriginForAll('*.list-manage.com');
	BrowserPolicy.content.allowOriginForAll('*.amazonaws.com');
	BrowserPolicy.content.allowOriginForAll('*.mailchimp.com');
	BrowserPolicy.content.allowOriginForAll('*.googleapis.com');
	BrowserPolicy.content.allowOriginForAll('*.google-analytics.com');
	BrowserPolicy.content.allowOriginForAll('*.gstatic.com');
	BrowserPolicy.content.allowOriginForAll('*.cloudinary.com');
	BrowserPolicy.content.allowOriginForAll('*.doubleclick.net');
	BrowserPolicy.content.allowOriginForAll('*.typeform.com');

	Meteor.methods({
		subscribeUser: function (email) {
			console.log('incoming email: ', email);
			const clientSecret = '42944ad2e048540628d6039d5375e41b755b998f3219fd89e1';
			axios.post('https://field-test.us18.list-manage.com/subscribe/post-json?u=f8eb694c0a3a074483eb49151&amp;id=5e163e6344', {
				headers: {
					'Content-Type': 'application/json;charset=utf-8',
					'Authorization': `Bearer ${clientSecret}`,
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Credentials': true,
					'Access-Control-Max-Age': 86400
				},
				form: JSON.stringify({
					email_address: email,
					status: 'subscribed'
				})
			})
				.then(res => {
					console.log('res: ', res.status);
				})
				.catch(error => {
					console.log('err: ', error.response);
				});

			// var Mailchimp = require('mailchimp-api-v3');

			// var mailchimp = new Mailchimp(clientSecret);

			// //Promise style
			// mailchimp.post(
			// 	'/lists/5e163e6344/members',
			// 	{
			// 		email_address: email,
			// 		status: 'subscribed'
			//     }
			// )
			// .then(res => {
			// 	console.log('res: ', res.status);
			// })
			// .catch(err => {
			// 	console.log('err: ', err.response);
			// })

			// request.post({
			// 	url: 'https://field-test.us18.list-manage.com/subscribe/post-json?u=f8eb694c0a3a074483eb49151&amp;id=5e163e6344',
			// 	headers: {
			// 		'Content-Type': 'application/json',
			// 		'Authorization': 'Basic ' + clientSecret
			// 	},
			// 	form: JSON.stringify({
			// 		email_address: email,
			// 		status: 'subscribed'
			// 	})
			// }, err => {
			// 	console.log('err: ', err.status);
			// });
		},

		sendEmail: function (to, from, subject, text, html) {
			// check([to, from, subject, text, html], [String]);

			// Let other method calls from the same client start running,
			// without waiting for the email sending to complete.
			this.unblock();

			Email.send({
				to: to,
				from: from,
				subject: subject,
				text: text,
				html: html
			});
		}
	});

	// Function once Meteor starts up
	Meteor.startup(function () {
		var basicAuth = new HttpBasicAuth("ft-user", "retail");
		// basicAuth.protect();
	});
}
