const app = {};

app.baseUrl = `http://api.weatherapi.com/v1/current.json`;

app.init = () => {
    console.log('Ready to go!')
};

$(() => {
    app.init();
})

const city = $('.city').val();

app.getWeatherDetails = () => {
    const response = $.ajax({
        url: `${app.baseUrl}?${city}`,
        method: 'GET',
        dataType: 'json',
        data: {
            apiKey: app.baseUrl
        }
    }).then(result => {

    })

    return response;
}