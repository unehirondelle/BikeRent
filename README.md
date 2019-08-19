## BikeRent
Simple web-application emulating bicycle rental service 

## Technologies/frameworks used:
Framework | Purpose | URL
------------ | ------------- | -------------
Bootstrap | Template | http://getbootstrap.com/
jQuery | Build the web page content using JSON data;<br> Build the cart based on user's actions| https://jquery.com/
CSS | Web page styling to make it similar to the main customer's website | https://www.w3schools.com/css/
Javascript | Form validation |https://www.javascript.com/

## Running the application
Go to the GitHub Page: https://unehirondelle.github.io/BikeRent/

## Expected results
* by clicking on + button on each product card the user puts product in the cart and can increase the product quantity with additional clicks on + button of such card. If the quantity > 0 but < limit for selected product such product appears in the cart
* by clicking on - button on each product card the user reduces the product quantity in the cart or removes such product from the cart completely in case the selected quantity of the product is 0
* manual input is disabled for quantity field
* when user tries to put quantity of a product which is over an available quantity the alert pops up saying the limit for selected product
* to place the order the user has to put all necessary data into "Contact information" and "Payment fields" according to required patterns; the validation goes on-the-fly showing the tip for the related field
* after submit "Place an order" button the form validation is executed; in case of success the alert "Thank you for your order" pops up; otherwise user keeps seeing the tip for wrong filled form field.
