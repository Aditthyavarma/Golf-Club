<!Adithya>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Golf Club</title>
    <link
      rel="shortcut icon"
      href="https://sidcupfamilygolf.com/wp-content/themes/puttosaurus/favicons/favicon-32x32.png"
      type="image/x-icon"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/remixicon@3.4.0/fonts/remixicon.css"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />
    <style>
      #booking {
        padding: 50px 20px;
        background-color: #f5f5f5;
        text-align: center;
      }

      #booking h2 {
        font-size: 2.5rem;
        margin-bottom: 20px;
      }

      #booking form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        max-width: 500px;
        margin: 0 auto;
      }

      #booking input,
      #booking select,
      #booking button {
        padding: 10px;
        font-size: 1rem;
        width: 100%;
        max-width: 400px;
        border: 1px solid #ccc;
        border-radius: 5px;
      }

      #booking button {
        background-color: #2d6a4f;
        color: white;
        cursor: pointer;
        transition: background-color 0.3s;
      }

      #booking button:hover {
        background-color: #1b4332;
      }
    </style>
  </head>

  <body>
    <div id="google_translate_element"></div>

    <div id="nav">
      <img src="https://sidcupfamilygolf.com/wp-content/uploads/2023/02/logo-white.svg" alt="Golf Club Logo" />
      <h4>MEMBERSHIP</h4>
      <h4>GOLF ACADEMY</h4>
      <h4>CHAMPIONSHIP COURSE</h4>
      <h4>CLUBHOUSE</h4>
      <h4>TOURNAMENTS</h4>
    </div>

    <div id="cursor"></div>
    <div id="cursor-blur"></div>

    <video autoplay loop muted src="Assests/hero.mp4"></video>

    <div id="main">
      <div id="page1">
        <h1>
          EAT. DRINK. <br />
          PLAY.
        </h1>
        <h2>WELCOME TO GOLF Club!</h2>
        <p>
          Golf Club is a premier golfing destination offering a championship
          course, expert coaching, and first-class amenities...
        </p>
        <a href="#scroller-in" id="arrow">
          <i class="ri-arrow-down-line"></i>
        </a>
      </div>

      <div id="page2">
        <!-- scroller, about-us, cards, etc. (unchanged content) -->
        <!-- ... -->

        <div id="green-div">
          <img
            src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg"
            alt=""
          />
          <h4>
            SIGN UP FOR SIDCUP NEWS AND SPECIAL OFFERS STRAIGHT TO YOUR INBOX
          </h4>
          <img
            src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg"
            alt=""
          />
        </div>
      </div>

      <div id="page3">
        <p>
          Excellent couple of hours, relax and enjoy in the fun. Staff were
          accommodating...
        </p>
        <img
          id="colon1"
          src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg"
          alt=""
        />
        <img
          id="colon2"
          src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-right.svg"
          alt=""
        />
      </div>

      <div id="page4">
        <h1>WHAT ARE YOU WAITING FOR?</h1>
        <div class="elem">
          <h2>TOPTRACER RANGE</h2>
          <img
            src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/page-toptracer-1024x683.jpg"
            alt=""
          />
        </div>
        <div class="elem">
          <h2>GOLF LESSONS</h2>
          <img
            src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/page-lessons-1024x683.jpg"
            alt=""
          />
        </div>
        <div class="elem">
          <h2>ADVENTURE GOLF</h2>
          <img
            src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/page-ag-1024x682.jpg"
            alt=""
          />
        </div>
      </div>

      <div id="booking">
        <h2>Book Your Visit</h2>
        <form action="#" method="post">
          <select name="service" required>
            <option value="">Select a Service</option>
            <option value="toptracer">Toptracer Range</option>
            <option value="lessons">Golf Lessons</option>
            <option value="adventure">Adventure Golf</option>
          </select>
          <input type="date" name="date" required />
          <input type="time" name="time" required />
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <button type="submit">Submit Booking</button>
        </form>
      </div>

      <div id="footer">
        <img
          src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-footer.svg"
          alt=""
        />
        <div id="f1">
          <img
            src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/logo-white.svg"
            alt=""
          />
        </div>
        <div id="f2">
          <h3>TOPTRACER Ranges</h3>
          <h3>Golf Lessons</h3>
          <h3>Adventure Golf</h3>
        </div>
        <div id="f3">
          <h3>coffee shop</h3>
          <h3>LEAGUES</h3>
          <h3>Contact us</h3>
        </div>
        <div id="f4">
          <h4>
            A20, SIDCUP BYPASS <br />
            CHISLEHURST <br />
            KENT <br />
            BR7 6RP <br />
            TEL: 0208 309 0181 <br />
            GET DIRECTIONS <br />
          </h4>
        </div>
      </div>
    </div>

    <!-- Scripts -->
    <div id="mobile-nav-toggle">☰</div>
    <button id="scrollTopBtn">↑</button>

    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.1/gsap.min.js"
      crossorigin="anonymous"
    ></script>

    <label class="switch">
      <input type="checkbox" id="darkToggle" />
      <span class="slider"></span>
    </label>

    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.1/ScrollTrigger.min.js"
      crossorigin="anonymous"
    ></script>
    <script src="script.js"></script>
    <script type="text/javascript">
      function googleTranslateElementInit() {
        new google.translate.TranslateElement(
          { pageLanguage: 'en' },
          'google_translate_element'
        );
      }
    </script>
    <script
      type="text/javascript"
      src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    ></script>
  </body>
</html>
