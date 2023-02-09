const app = {};

app.baseUrl = `http://api.weatherapi.com/v1/current.json`;

app.init = () => {
    console.log('Ready to go!')
};

$(() => {
    app.init();
})

app.getWeatherDetails = () => {
    const response = $.ajax({
        url: `${app.baseUrl}`,
        method: 'GET',
        dataType: 'json',
        data: {
            apiKey: app.baseUrl
        }
    })

    return response;
}