 
        async function fetchWeather() {
            const city = document.getElementById("city").value;
            const units = document.getElementById("units").value;
            const apiKey = "d25b60ce1ae4c0a9db9eeebceafdcaca";
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${"d25b60ce1ae4c0a9db9eeebceafdcaca"}`;

            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error("City not found");
                
                const data = await response.json();
                displayWeather(data, units);
            } catch (error) {
                document.getElementById("weather").innerHTML = `<p class="error">${error.message}</p>`;
            }
        }

        function displayWeather(data, units) {
            const temperature = data.main.temp;
            const condition = data.weather[0].description;
            const icon = data.weather[0].icon;
            const unitSymbol = units === "metric" ? "°C" : "°F";

            document.getElementById("weather").innerHTML = `
                <h2>${data.name}</h2>
                <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${condition}">
                <p class="weather-info">Temperature: <span>${temperature} ${unitSymbol}</span></p>
                <p class="weather-info">Condition: <span>${condition}</span></p>
            `;
        }
