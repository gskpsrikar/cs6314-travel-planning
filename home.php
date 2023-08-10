<link rel="stylesheet" href="css/mystyle.css">

<html>
<body>
    <title>Home Page</title>
    <div class="headerClassGeneric centeredText">
        <p>
            <span class="headerTitle">
                Travel
            </span>

            <span id="datetime" class="headerCaption">
                <p id="datetime"></p>
            </span> 
        </p>
    </div>
        
    <div class="NavBar fontSerif">
        <ul>
            <li><a class="active" href="#home">Home</a></li>
            <li><a href="./pages/flights.html">Flights</a></li>
            <li><a href="./pages/hotels.html">Hotels</a></li>
            <li><a href="./pages/hotels.html">Rental Cars</a></li>
            <li class="liLastChild"><a href="./pages/contact.html">Contact</a></li>
            <li class="liLastChild"><a href="./pages/orderstatus.html">Order Status</a></li>
            <li><a href="./pages/specialoffers.html">Special Offers</a></li>
            
        </ul>
    </div>

    <div class="centerSection footer-columns">
        <div class="centerSectionCol1">
            <h1>
                Our Statement
            </h1>
        </div>

        <div class="centerSectionCol2">
            <p>
                <strong>Welcome to our all-in-one travel booking platform!</strong> Whether you're planning a 
                vacation, a business trip, or a quick getaway, we've got you covered. Discover
                 a wide range of flights from top airlines, choose from a variety of rental 
                 cars to suit your needs, and explore a vast selection of hotels for every budget.
                  With our user-friendly interface, finding and booking your ideal travel 
                  arrangements has never been easier. Enjoy seamless and hassle-free travel
                 planning with our secure booking system and dedicated customer support. 
                 Start your journey today and let us take care of the details while you focus 
                 on creating unforgettable memories. Bon voyage!
            </p>

            <hr>

            <form>
                Do you think you'll find what you are looking for?
                <label>
                  <input type="radio" name="feedback" value="Yes" class="radio-button">
                  Yes
                </label>
                <label>
                  <input type="radio" name="feedback" value="female" class="radio-button">
                  No
                </label>
              </form>
        </div>
        
    </div>

    <footer class="footer">

        <div class="footer-columns">
            
          <div class="footerCol2">

            <h3>Student Details</h3>
            First Name: Srikar <br>
            Last Name: GSKP <br>
            Net ID: SXS210570

          </div>

          <div class=" footerCol2 mailing-list">
            <h3>Mailing List</h3>
            <form>
                <input type="text" class="mailing-list-input" placeholder="Enter your email">
                <br><br>
                <input type="submit" value="Subscribe" class="submit-button">
            </form>
          </div>
          
          <div class="footerCol2 footerCol3">
            <h3>Change background color</h3>
            <input type="color" id="colorPicker">
    <button id="applyBtn" onclick="changeColor()">Apply Color</button>
          </div>
        </div>
      </footer>
</body>
<script src="./js/common.js"></script>
</html>
