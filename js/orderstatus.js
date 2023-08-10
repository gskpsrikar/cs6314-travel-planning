//----------------------------------- POPULATE FLIGHT DETAILS ------------------------------------------//
if (localStorage.getItem("tripType") !== null){
    document.getElementById("tripType").innerHTML = localStorage.getItem("tripType");
} else {
    document.getElementById("tripType").innerHTML = "Not Selected";
};
if (localStorage.getItem("origin") !== null){
    document.getElementById("origin").innerHTML = localStorage.getItem("origin");
} else {
    document.getElementById("origin").innerHTML = "Not Selected";
};
if (localStorage.getItem("destination") !== null){
    document.getElementById("destination").innerHTML = localStorage.getItem("destination");
} else {
    document.getElementById("destination").innerHTML = "Not Selected";
};
if (localStorage.getItem("onwardDepartureDate") !== null){
    document.getElementById("onwardDepartureDate").innerHTML = localStorage.getItem("onwardDepartureDate");
} else {
    document.getElementById("onwardDepartureDate").innerHTML = "Not Selected";
};
if (localStorage.getItem("onwardArrivalDate") !== null){
    document.getElementById("onwardArrivalDate").innerHTML = localStorage.getItem("onwardArrivalDate");
} else {
    document.getElementById("onwardArrivalDate").innerHTML = "Not Selected";
};
if (localStorage.getItem("returnDepartureDateInput") !== null){
    document.getElementById("returnDepartureDateInput").innerHTML = localStorage.getItem("returnDepartureDateInput");
} else {
    document.getElementById("returnDepartureDateInput").innerHTML = "Not Selected";
};
if (localStorage.getItem("returnArrivalDateInput") !== null){
    document.getElementById("returnArrivalDateInput").innerHTML = localStorage.getItem("returnArrivalDateInput");
} else {
    document.getElementById("returnArrivalDateInput").innerHTML = "Not Selected";
};
if (localStorage.getItem("adults") !== null){
    document.getElementById("adults").innerHTML = localStorage.getItem("adults");
} else {
    document.getElementById("adults").innerHTML = "Not Selected";
};
if (localStorage.getItem("children") !== null){
    document.getElementById("children").innerHTML = localStorage.getItem("children");
} else {
    document.getElementById("children").innerHTML = "Not Selected";
};
if (localStorage.getItem("infants") !== null){
    document.getElementById("infants").innerHTML = localStorage.getItem("infants");
} else {
    document.getElementById("infants").innerHTML = "Not Selected";
};
//------------------------------------------------------------------------------------------------------//

//----------------------------------- POPULATE HOTEL DETAILS -------------------------------------------//
if (localStorage.getItem("hotelCity") !== null){
    document.getElementById("hotelCity").innerHTML = localStorage.getItem("hotelCity");
} else {
    document.getElementById("hotelCity").innerHTML = "Not Selected";
};

if (localStorage.getItem("hotelCheckInDate") !== null){
    document.getElementById("hotelCheckInDate").innerHTML = localStorage.getItem("hotelCheckInDate");
} else {
    document.getElementById("hotelCheckInDate").innerHTML = "Not Selected";
};

if (localStorage.getItem("hotelCheckOutDate") !== null){
    document.getElementById("hotelCheckOutDate").innerHTML = localStorage.getItem("hotelCheckOutDate");
} else {
    document.getElementById("hotelCheckOutDate").innerHTML = "Not Selected";
};

if (localStorage.getItem("selected_hotel") !== null){
    document.getElementById("hotel").innerHTML = JSON.parse(localStorage.getItem("selected_hotel"))['hotel'];
} else {
    document.getElementById("hotel").innerHTML = "Not Selected";
};
//------------------------------------------------------------------------------------------------------//

//----------------------------- -POPULATE RENTAL CAR DETAILS -------------------------------------------//
if (localStorage.getItem("carCity") !== null){
    document.getElementById("carCity").innerHTML = localStorage.getItem("carCity");
} else {
    document.getElementById("carCity").innerHTML = "Not Selected";
};

if (localStorage.getItem("carPickUpDate") !== null){
    document.getElementById("carPickUpDate").innerHTML = localStorage.getItem("carPickUpDate");
} else {
    document.getElementById("carPickUpDate").innerHTML = "Not Selected";
};

if (localStorage.getItem("carDropDate") !== null){
    document.getElementById("carDropDate").innerHTML = localStorage.getItem("carDropDate");
} else {
    document.getElementById("carDropDate").innerHTML = "Not Selected";
};

if (localStorage.getItem("selected_car") !== null){
    document.getElementById("car").innerHTML = JSON.parse(localStorage.getItem("selected_car"))['car'];
} else {
    document.getElementById("car").innerHTML = "Not Selected";
};
//----------------------------------------------------------------------------------------------------//