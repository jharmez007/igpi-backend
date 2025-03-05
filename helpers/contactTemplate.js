exports.newContactTemplate = (contact) => `<!DOCTYPE html>
<html>
  <head>
  <title>Thank You For Getting in Touch</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      background-color: #f4f4f4;
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
      color: #007BFF;
    }
    a {
      color: #007BFF;
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
			<h1>Thanks for Reaching Out, ${contact?.name?.split(" ")[0]}! 💬</h1>
			<p>Hi ${contact?.name?.split(" ")[0]},</p>
			<p>We’ve received your message and wanted to let you know that we’ll get back to you as soon as possible.</p>
			<br>
			<p>We’ll typically respond within 24 hours. In the meantime, feel free to browse our website for more information about us:</p>
			<p><a href="https://www.igpinitiative.org/" target="_blank" class="button">Visit Our Website</a></p>
			<p>Thank you for contacting us, and we’ll be in touch soon!</p>
			<p>Warm regards,</p>
			<p><strong>Inclusive Growth and Prosperity Initiative</strong></p>
			<div class="footer">
				<p>&copy; 2024 <a href="https://www.igpinitiative.org/" target="_blank">Our website</a>. All rights reserved.</p>
			</div>
		</div>
  </body>
</html>
`;
