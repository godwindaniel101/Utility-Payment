SW Utility Payment requires Node.js 8+ and XAMPP/WAMP server to run.
  - Clone the repository into htdocs or any appropriate folder, depending on the server you have installed
  - Navigate into folder and open in terminal
  - Install Composer Dependencies
    ```composer install```
  - Create a copy of your .env file
   ```cp .env.example .env```
  - Generate an app encryption key
   ```php artisan key:generate```
  - Create an empty database for your project using your preferred database tools
  - In the .env file, add database information to allow Laravel to connect to the database
  - Migrate the database
    ```php artisan migrate```
  - Install Laravel Passport
    ```php artisan passport:install```
  - Install NPM Dependencies
    ```npm install```
  - Compile JavaScript
  ```npm run dev```
  - Run Application
  ```php artisan serve```



  -Get Default Access
  ```visit the link http://localhost:8000/default``

  -Default Admin Access
  -login with default admin access 
  -email developer@sw.com
  -password developer@sw.com