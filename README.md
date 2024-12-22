# Weather App

This project is a **Weather App** built using HTML, CSS, and JavaScript. The app leverages the asynchronous nature of JavaScript through the use of `async/await` to fetch real-time weather data from a weather API. It provides users with current weather information for any city across the globe and displays an error message if an invalid city name is entered.


## Features

- **Real-Time Weather Updates**: Fetches and displays the current weather for any city worldwide.
- **Global Coverage**: Supports weather data for all cities around the globe.
- **Error Handling**: Alerts the user if the entered city name is incorrect or unavailable.
- **Modern Design**: Built with a responsive and visually appealing interface using CSS.

## Technologies Used

- **HTML**: Structuring the layout of the app.
- **CSS**: Styling the app to make it visually engaging and responsive.
- **JavaScript**: Implementing functionality, including fetching data and managing user interactions.

## How It Works

1. The user enters the name of a city in the input field.
2. JavaScript uses the `fetch` API with `async/await` to make a request to a weather API (e.g., OpenWeatherMap, WeatherStack, etc.).
3. The app parses the API response and displays the weather data (e.g., temperature, weather condition) on the screen.
4. If the user enters an invalid city name, an error message is displayed.

## Setup and Installation

1. Clone or download the repository to your local machine.
2. Open the project folder and locate the `index.html` file.
3. Open the `index.html` file in your browser to view the app.
4. Ensure you have an active internet connection to fetch data from the weather API.

### API Key
This project requires an API key from a weather service provider. Follow these steps to set up the API key:

1. Sign up on a weather API platform (e.g., OpenWeatherMap).
2. Generate an API key from the platform.
3. Insert the API key into the JavaScript file where the API endpoint is defined.

## Usage

1. Open the Weather App in your browser.
2. Enter the name of the city in the search bar and click the search button.
3. View the real-time weather data displayed on the screen.
4. If the entered city name is invalid, an error message will appear.

## Challenges Solved

- **Asynchronous Operations**: The project demonstrates how to handle asynchronous API calls using `async/await` effectively.
- **Error Handling**: Implemented robust error handling to notify users of invalid inputs.

## Future Improvements

- **Add Forecast Data**: Extend functionality to include a 5-day weather forecast.
- **Location Detection**: Automatically detect the user’s location and display the weather.
- **Enhanced UI**: Improve the UI/UX with advanced CSS animations and themes.
- **Offline Mode**: Add functionality to cache data for offline usage.

## License
This project is open-source and available under the MIT License.

## Contact
For any queries or suggestions, feel free to reach out!

