exports.newUserTemplate = (user) => `<!DOCTYPE html>
<html>
  <head>
    <title>Welcome to IGPI</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333333;
        background-color: #f4f4f4;
        padding: 20px;
      }
      .container {
        background-color: #ffffff;
        max-width: 600px;
        margin: auto;
        padding: 20px;
        border: 1px solid #cccccc;
        border-radius: 5px;
      }
      .header {
        background-color: #0b8b68;
        color: #ffffff;
        padding: 10px;
        text-align: center;
        border-radius: 5px 5px 0 0;
      }
      .content {
        margin-top: 20px;
      }
      .footer {
        text-align: center;
        margin-top: 20px;
        font-size: 0.8em;
        color: #777777;
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
      a {
        color: #0077cc;
      }
      a:hover {
        text-decoration: underline;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Welcome to IGPI</h1>
      </div>
      <div class="content">
        <h2>Hi ${user?.otherNames?.split(" ")[0]},</h2>
        <p>
          Welcome to IGPI, Feeding Children, Empowering Women, and Training
          Farmers Worldwide.
        </p>
        <p>
          Inclusive Growth and Prosperity Initiative is dedicated to feeding
          children, empowering women, training farmers, responding to disasters,
          and serving communities in need.
        </p>
        <img
          src=${user?.passportPhoto}
          alt="passport"
          style="width: 30%; height: 30%; border-radius: 5px"
        />
        <p>Our Mission:</p>
        <ul>
          <li>
            Our mission is to ensure all people of Nigeria and Africans at large
            have access to the care and resources they need to make informed
            decisions about their lives, and become responsible citizens, who
            contributes to national development and unity.
          </li>
        </ul>
        <p>Our Vision:</p>
        <ul>
          <li>
            Helping us make Nigeria and Africa at large a better place. Whether
            it’s feeding children, empowering women, training farmers,
            responding to disasters, or serving a community in need, provision
            of health education / facilities, promoting cross cultural heritage,
            taking vulnerable children and youths off the street, provision of
            skills and leadership training and reliefs where necessary and
            promoting peaceful existence among member states, the goal is to
            bring help and hope where they are needed most.
          </li>
        </ul>
        <a href="http://www.igpinitiative.org/" target="_blank" class="button">Our website</a>
      </div>
      <div class="footer">
        <p>Thank you for choosing our IGPI.</p>
      </div>
    </div>
  </body>
</html>
`;
