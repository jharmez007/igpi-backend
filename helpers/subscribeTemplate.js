exports.newSubscribeTemplate = (subscribe) => `<!DOCTYPE html>
<html>
  <head>
    <title>Welcome to IGPI</title>
    <style>
		body {
			font-family: Arial, sans-serif;
			line-height: 1.6;
			background-color: #f9f9f9;
			color: #333;
			margin: 0;
			padding: 0;
		}
		.email-container {
			max-width: 600px;
			margin: 20px auto;
			background: #ffffff;
			border-radius: 8px;
			box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
			padding: 20px;
		}
		h1 {
			color: #4CAF50;
		}
		a {
			color: #4CAF50;
			text-decoration: none;
		}
		.footer {
			margin-top: 20px;
			font-size: 12px;
			color: #777;
		}
		.button {
			display: inline-block;
			padding: 10px 20px;
			color: #fff !important;
			background-color: #0b8b68;
			text-decoration: none;
			border-radius: 5px;
			margin-top: 20px;
        }
  </style>
  </head>
  <body>
    <div class="email-container">
			<h1>Welcome to Our Community, IGPI! 🎉</h1>
			<p>Hi ${subscribe?.lastName?.split(" ")[0]},</p>
			<p>Thank you for subscribing! 🎊 We're thrilled to have you join our community.</p>
			<p>As a subscriber, you’ll receive:</p>
			<ul>
			<li>Exclusive updates on our latest projects</li>
			<li>Early access to special offers or insights</li>
			<li>Tips and resources tailored to your interests</li>
			</ul>
			<p>Feel free to reply to this email if you have any questions or suggestions—we’d love to hear from you!</p>
			<p>Stay tuned for our first update coming your way soon.</p>
			<p>Warm regards,</p>
			<p><strong>Inclusive Growth and Prosperity Initiative</strong><br><a href="https://www.igpinitiative.org/" target="_blank" class="button">Visit Our website</a></p>
			<p>P.S. Make sure to follow us on <a href="https://www.tiktok.com/@igpi4all?_t=8penjOB9fDK&_r=1">social media</a> for more exciting updates!</p>
			<div class="footer">
			<p>&copy; 2024 <a href="https://www.igpinitiative.org/" target="_blank">Our website</a> All rights reserved.</p>
			</div>
    </div>
  </body>
</html>
`;