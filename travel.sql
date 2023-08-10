-- --------------------------------------------------------
-- Table structure for table `flights`
-- --------------------------------------------------------
CREATE TABLE flights (
  `flight_id` INT(8) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `origin` VARCHAR(50) NOT NULL,
  `destination` VARCHAR(50),
  `departure_date` DATE NOT NULL,
  `departure_time` TIME NOT NULL,
  `arrival_date` DATE NOT NULL,
  `arrival_time` TIME NOT NULL,
  `price` INT NOT NULL
);

-- --------------------------------------------------------
-- Table structure for table `hotels`
-- --------------------------------------------------------
CREATE TABLE hotels (
  `hotel_id` INT(8) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `city` VARCHAR(50) NOT NULL,
  `hotel_name` VARCHAR(50) NOT NULL,
  `check_in_date` DATE NOT NULL,
  `check_out_date` DATE NOT NULL,
  `price` INT NOT NULL
);


-- --------------------------------------------------------
-- Table structure for table `cars`
-- --------------------------------------------------------
CREATE TABLE cars (
  `car_id` INT(8) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `city` VARCHAR(50) NOT NULL,
  `car_name` VARCHAR(50) NOT NULL,
  `check_in_date` DATE NOT NULL,
  `check_out_date` DATE NOT NULL,
  `price` INT NOT NULL
);


-- --------------------------------------------------------
-- Table structure for table `users`
-- --------------------------------------------------------
CREATE TABLE users (
  `passenger_id` INT(10) PRIMARY KEY,
  `first_name` VARCHAR(50) NOT NULL,
  `last_name` VARCHAR(50) NOT NULL,
  `age` INT NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL
);


-- --------------------------------------------------------
-- Table structure for table `booking_flight`
-- --------------------------------------------------------
CREATE TABLE booking_flight (
  `book_id` INT(8) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `passenger_id` varchar(50) NOT NULL,
  `flight_id` INT(8) UNSIGNED NOT NULL,
  `status` VARCHAR(50) NOT NULL
);


-- --------------------------------------------------------
-- Table structure for table `booking_hotel`
-- --------------------------------------------------------
CREATE TABLE booking_hotel (
  `book_id` INT(8) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `passenger_id` INT(10) UNSIGNED NOT NULL,
  `hotel_id` INT(8) UNSIGNED NOT NULL,
  `status` VARCHAR(50) NOT NULL
);


-- --------------------------------------------------------
-- Table structure for table `booking_car`
-- --------------------------------------------------------
CREATE TABLE booking_car (
  `book_id` INT(8) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `passenger_id` INT(10) UNSIGNED NOT NULL,
  `car_id` INT(8) UNSIGNED NOT NULL,
  `status` VARCHAR(50) NOT NULL
);



INSERT INTO users (passenger_id, first_name, last_name, age, email, password)
VALUES ('john', 'doe', 25, 'jd@gmail.com', 'password');

INSERT INTO hotels (city, hotel_name, check_in_date, check_out_date, price)
VALUES ('Dallas', 'Lemon Tree', '2023-08-10', '2023-08-13', 130);

INSERT INTO hotels (city, hotel_name, check_in_date, check_out_date, price)
VALUES ('Dallas', 'Trump Tower', '2023-08-10', '2023-08-13', 200);