const app = {};

app.baseUrl = `http://api.weatherapi.com/v1/current.json`;

app.init = () => {
    console.log('Ready to go!')
};

$(() => {
    app.init();
    app.getWeatherDetails();
})
app.apiKey = 'cf988d77297848bb983202927230902';
const city = $('.city').val();

app.getWeatherDetails = () => {
    const response = $.ajax({
        url: `${app.baseUrl}?${city}`,
        method: 'GET',
        dataType: 'json',
        data: {
            apiKey: app.apiKey
        }
    }).then(result => {
        console.log(result);
    })

    return response;
}