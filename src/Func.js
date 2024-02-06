export const fullDate = () => {
    const today = new Date();

    const dayOfWeek = today.toLocaleString('en-US', { weekday: 'short' });
    const monthName = today.toLocaleString('en-US', { month: 'short' });
    const monthDay = today.getDate();

    return `${dayOfWeek}, ${monthName} ${monthDay}`;
};
export const getWeather = (coords, setWeather) => {
    if (coords.lat === 0 || coords.long === 0) {
        alert("There are no coordinates");
        return;
    }

    var url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.long}&units=metric&lang=he&appid=${process.env.REACT_APP_OPENWEATHERMAP_KEY}`;
    console.log(url);
    console.log(url + "&mode=html");
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(jsonData => {
            setWeather(jsonData);
            console.log(jsonData);
        })
        .catch(error => {
            console.error(error);
        })


    var url = `https://api.tomorrow.io/v4/timelines?location=${coords.long},${coords.lat}&fields=temperature&units=metric&apikey=${process.env.REACT_APP_TOMORROW_KEY}`
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(jsonData => {
            // setWeather(jsonData);
            console.log(jsonData);
        })
        .catch(error => {
            console.error(error);
        })
}

export const getCoordinates = (setCoords) => {
    if ("geolocation" in navigator) {
        // Geolocation is available
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                // console.log("Latitude:", latitude);
                // console.log("Longitude:", longitude);
                setCoords({ lat: latitude, long: longitude })
            },
            error => {
                // Handle any errors
                console.error("Error getting geolocation:", error.message);
            }
        );
    } else {
        // Geolocation is not available
        console.log("Geolocation is not available.");
    }
}


export const getHoliday = () => {
    var url = `https://calendarific.com/api/v2/holidays?&api_key=${process.env.REACT_APP_CALENDAR_KEY}&country=IL&year=2019`
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(jsonData => {
            console.log(jsonData);
        })
        .catch(error => {
            console.error(error);
        })
}


export const weather1 = (coords) => {
    if (coords.lat === 0 || coords.long === 0) {
        alert("There are no coordinates");
        return;
    }

    // const {lat, long} = coords;

    var url = `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.long}&${process.env.REACT_APP_OPENWEATHERMAP_KEY}`;
               

    console.log(url);
    // console.log(url + "&mode=html");
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(jsonData => {
            console.log(jsonData);
        })
        .catch(error => {
            console.error(error);
        })
   
}