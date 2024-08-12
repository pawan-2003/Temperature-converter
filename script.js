document.getElementById('convertButton').addEventListener('click', function() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitInput = document.getElementById('unitInput').value;
    const convertedTemperature = document.getElementById('convertedTemperature');

    if (isNaN(temperatureInput)) {
        convertedTemperature.textContent = "Please enter a valid number!";
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let result;

    switch(unitInput) {
        case 'celsius':
            result = `${temperature}°C = ${(temperature * 9/5 + 32).toFixed(2)}°F = ${(temperature + 273.15).toFixed(2)}K`;
            break;
        case 'fahrenheit':
            result = `${temperature}°F = ${((temperature - 32) * 5/9).toFixed(2)}°C = ${((temperature - 32) * 5/9 + 273.15).toFixed(2)}K`;
            break;
        case 'kelvin':
            result = `${temperature}K = ${(temperature - 273.15).toFixed(2)}°C = ${((temperature - 273.15) * 9/5 + 32).toFixed(2)}°F`;
            break;
    }

    convertedTemperature.textContent = result;
});
