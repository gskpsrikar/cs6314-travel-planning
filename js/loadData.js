function loadHotelData(){
    var xmlString = `
      <hotels>
        <hotel>
          <city>Dallas</city>
          <name>Riverfront Lodge</name>
          <checkindate>2023-08-10</checkindate>
          <checkoutdate>2023-08-13</checkoutdate>
          <price>200</price>
        </hotel>
        <hotel>
          <city>Dallas</city>
          <name>Heritage</name>
          <checkindate>2023-08-10</checkindate>
          <checkoutdate>2023-08-13</checkoutdate>
          <price>140</price>
        </hotel>
        <hotel>
          <city>Dallas</city>
          <name>Sunny Valley Inn</name>
          <checkindate>2023-08-10</checkindate>
          <checkoutdate>2023-08-13</checkoutdate>
          <price>140</price>
        </hotel>
        <hotel>
          <city>Dallas</city>
          <name>Lone Star Retreat</name>
          <checkindate>2023-08-10</checkindate>
          <checkoutdate>2023-08-13</checkoutdate>
          <price>140</price>
        </hotel>
        <hotel>
          <city>Dallas</city>
          <name>Hillside Haven Resort</name>
          <checkindate>2023-09-10</checkindate>
          <checkoutdate>2023-09-13</checkoutdate>
          <price>140</price>
        </hotel>
        <hotel>
          <city>Corpus Christi</city>
          <name>Gulf Breeze Hotel</name>
          <checkindate>2023-09-10</checkindate>
          <checkoutdate>2023-09-13</checkoutdate>
          <price>140</price>
        </hotel>
        <hotel>
          <city>Beaumont</city>
          <name>Pine Forest Lodge</name>
          <checkindate>2023-09-06</checkindate>
          <checkoutdate>2023-09-09</checkoutdate>
          <price>140</price>
        </hotel>
        <hotel>
          <city>Dallas</city>
          <name>Canyon View Inn</name>
          <checkindate>2023-09-06</checkindate>
          <checkoutdate>2023-09-09</checkoutdate>
          <price>140</price>
        </hotel>
        <hotel>
          <city>Dallas</city>
          <name>Prairie Winds Resort</name>
          <checkindate>2023-09-06</checkindate>
          <checkoutdate>2023-09-09</checkoutdate>
          <price>140</price>
        </hotel>
        <hotel>
          <city>Dallas</city>
          <name>Hill Country Hideaway</name>
          <checkindate>2023-09-06</checkindate>
          <checkoutdate>2023-09-09</checkoutdate>
          <price>140</price>
        </hotel>
      </hotels>
    `;
  
    // Parse XML string into DOM object
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(xmlString, "text/xml");
  
    // Get flight nodes from XML DOM
    var hotels = xmlDoc.getElementsByTagName("hotel");
  
    // Loop through flight nodes and add them to the table
    for (var i = 0; i < hotels.length; i++) {
      var hotel = hotels[i];
      var city = hotel.getElementsByTagName("city")[0].textContent;
      var name = hotel.getElementsByTagName("name")[0].textContent;
      var checkindate = hotel.getElementsByTagName("checkindate")[0].textContent;
      var checkoutdate = hotel.getElementsByTagName("checkoutdate")[0].textContent;
      var price = hotel.getElementsByTagName("price")[0].textContent;
  
    var query = "INSERT INTO hotels (city, hotel_name, check_in_date, check_out_date, price) VALUES ('" + city + "', '"+ name + "', '" +checkindate +"', '"+checkoutdate+"'," +price+");";
    $.ajax({
        type: "POST",
        url: "/js/insert_data_into_database.php",
        data: {
            query: query
        },
        success: function(response) {
            // alert(response);
        },
        error: function(response) {
            alert("There is an error!");
        }
        });
    };
  };


  function loadCarsData(){
    var xmlString = `
      <hotels>
        <hotel>
          <city>Dallas</city>
          <name>Ford Mustang</name>
          <checkindate>2023-08-10</checkindate>
          <checkoutdate>2023-08-13</checkoutdate>
          <price>200</price>
        </hotel>
        <hotel>
          <city>Dallas</city>
          <name>Toyota Corolla</name>
          <checkindate>2023-08-10</checkindate>
          <checkoutdate>2023-08-13</checkoutdate>
          <price>140</price>
        </hotel>
        <hotel>
          <city>Dallas</city>
          <name>Honda Civic</name>
          <checkindate>2023-08-10</checkindate>
          <checkoutdate>2023-08-13</checkoutdate>
          <price>140</price>
        </hotel>
        <hotel>
          <city>Dallas</city>
          <name>Honda Accord</name>
          <checkindate>2023-08-10</checkindate>
          <checkoutdate>2023-08-13</checkoutdate>
          <price>140</price>
        </hotel>
        <hotel>
          <city>Dallas</city>
          <name>Nissan GTR</name>
          <checkindate>2023-09-10</checkindate>
          <checkoutdate>2023-09-13</checkoutdate>
          <price>140</price>
        </hotel>
        <hotel>
          <city>Richardson</city>
          <name>Toyota Camry</name>
          <checkindate>2023-09-10</checkindate>
          <checkoutdate>2023-09-13</checkoutdate>
          <price>140</price>
        </hotel>
        <hotel>
          <city>Richardson</city>
          <name>Ford Mustang</name>
          <checkindate>2023-09-06</checkindate>
          <checkoutdate>2023-09-09</checkoutdate>
          <price>140</price>
        </hotel>
        <hotel>
          <city>Dallas</city>
          <name>Nissan GTR</name>
          <checkindate>2023-09-06</checkindate>
          <checkoutdate>2023-09-09</checkoutdate>
          <price>140</price>
        </hotel>
        <hotel>
          <city>Dallas</city>
          <name>Toyota Supra</name>
          <checkindate>2023-09-06</checkindate>
          <checkoutdate>2023-09-09</checkoutdate>
          <price>140</price>
        </hotel>
        <hotel>
          <city>Dallas</city>
          <name>Toyota Corolla</name>
          <checkindate>2023-09-06</checkindate>
          <checkoutdate>2023-09-09</checkoutdate>
          <price>140</price>
        </hotel>
      </hotels>
    `;
  
    // Parse XML string into DOM object
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(xmlString, "text/xml");
  
    // Get flight nodes from XML DOM
    var hotels = xmlDoc.getElementsByTagName("hotel");
  
    // Loop through flight nodes and add them to the table
    for (var i = 0; i < hotels.length; i++) {
      var hotel = hotels[i];
      var city = hotel.getElementsByTagName("city")[0].textContent;
      var name = hotel.getElementsByTagName("name")[0].textContent;
      var checkindate = hotel.getElementsByTagName("checkindate")[0].textContent;
      var checkoutdate = hotel.getElementsByTagName("checkoutdate")[0].textContent;
      var price = hotel.getElementsByTagName("price")[0].textContent;
  
    var query = "INSERT INTO cars (city, car_name, check_in_date, check_out_date, price) VALUES ('" + city + "', '"+ name + "', '" +checkindate +"', '"+checkoutdate+"'," +price+");";
    $.ajax({
        type: "POST",
        url: "/js/insert_data_into_database.php",
        data: {
            query: query
        },
        success: function(response) {
            // alert(response);
        },
        error: function(response) {
            alert("There is an error!");
        }
        });
    };
  };


  function loadFlightsData(){
    var xmlString = `
      <flights>
        <flight>
          <origin>Dallas</origin>
          <destination>Austin</destination>
          <departure_date>2023-08-10</departure_date>
          <departure_time>01:30</departure_time>
          <arrival_date>2023-08-10</arrival_date>
          <arrival_time>02:30</arrival_time>
          <price>159</price>
        </flight>
        <flight>
          <origin>Dallas</origin>
          <destination>Austin</destination>
          <departure_date>2023-08-10</departure_date>
          <departure_time>02:30</departure_time>
          <arrival_date>2023-08-10</arrival_date>
          <arrival_time>03:30</arrival_time>
          <price>159</price>
        </flight>
        <flight>
          <origin>Dallas</origin>
          <destination>Austin</destination>
          <departure_date>2023-08-10</departure_date>
          <departure_time>03:30</departure_time>
          <arrival_date>2023-08-10</arrival_date>
          <arrival_time>04:30</arrival_time>
          <price>159</price>
        </flight>
        <flight>
          <origin>Dallas</origin>
          <destination>Austin</destination>
          <departure_date>2023-08-10</departure_date>
          <departure_time>04:30</departure_time>
          <arrival_date>2023-08-10</arrival_date>
          <arrival_time>05:30</arrival_time>
          <price>159</price>
        </flight>
        <flight>
          <origin>Dallas</origin>
          <destination>Austin</destination>
          <departure_date>2023-08-10</departure_date>
          <departure_time>05:30</departure_time>
          <arrival_date>2023-08-10</arrival_date>
          <arrival_time>06:30</arrival_time>
          <price>159</price>
        </flight>
        <flight>
          <origin>Dallas</origin>
          <destination>Austin</destination>
          <departure_date>2023-08-10</departure_date>
          <departure_time>06:30</departure_time>
          <arrival_date>2023-08-10</arrival_date>
          <arrival_time>07:30</arrival_time>
          <price>159</price>
        </flight>
        <flight>
          <origin>Dallas</origin>
          <destination>Austin</destination>
          <departure_date>2023-08-10</departure_date>
          <departure_time>07:30</departure_time>
          <arrival_date>2023-08-10</arrival_date>
          <arrival_time>08:30</arrival_time>
          <price>159</price>
        </flight>
        <flight>
          <origin>Dallas</origin>
          <destination>Austin</destination>
          <departure_date>2023-08-10</departure_date>
          <departure_time>08:30</departure_time>
          <arrival_date>2023-08-10</arrival_date>
          <arrival_time>09:30</arrival_time>
          <price>159</price>
        </flight>
        <flight>
          <origin>Dallas</origin>
          <destination>Austin</destination>
          <departure_date>2023-08-10</departure_date>
          <departure_time>09:30</departure_time>
          <arrival_date>2023-08-10</arrival_date>
          <arrival_time>10:30</arrival_time>
          <price>159</price>
        </flight>
        <flight>
          <origin>Dallas</origin>
          <destination>Austin</destination>
          <departure_date>2023-08-10</departure_date>
          <departure_time>10:30</departure_time>
          <arrival_date>2023-08-10</arrival_date>
          <arrival_time>11:30</arrival_time>
          <price>159</price>
        </flight>
      </flights>
    `;
  
    // Parse XML string into DOM object
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(xmlString, "text/xml");
  
    // Get flight nodes from XML DOM
    var flights = xmlDoc.getElementsByTagName("flight");
  
    // Loop through flight nodes and add them to the table
    for (var i = 0; i < flights.length; i++) {
      var flight = flights[i];
      var origin = flight.getElementsByTagName("origin")[0].textContent;
      var destination = flight.getElementsByTagName("destination")[0].textContent;
      var departure_date = flight.getElementsByTagName("departure_date")[0].textContent;
      var departure_time = flight.getElementsByTagName("departure_time")[0].textContent;
      var arrival_date = flight.getElementsByTagName("arrival_date")[0].textContent;
      var arrival_time = flight.getElementsByTagName("arrival_time")[0].textContent;
      var price = flight.getElementsByTagName("price")[0].textContent;
  
    var query = "INSERT INTO flights (origin, destination, departure_date, departure_time, arrival_date, arrival_time, price) VALUES ('" + origin + "', '"+ destination + "', '"+ departure_date + "', '"+ departure_time + "', '"+ arrival_date + "', '" +arrival_time + "', " + price + ");";

    $.ajax({
        type: "POST",
        url: "/js/insert_data_into_database.php",
        data: {
            query: query
        },
        success: function(response) {
            // alert(response);
        },
        error: function(response) {
            alert("There is an error!");
        }
        });
    };
  }