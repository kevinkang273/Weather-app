const app = {};

app.baseUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`;

app.init = () => {
    console.log('Ready to go!')
    app.getWeatherDetails();
};

$(() => {
    app.init();
    app.getWeatherDetails();
})
app.apiKey = 'VNVKESJ99JE2WNXUHH7739FJE';
const city = $('.city').val();

// app.url = `https://api.open-meteo.com/v1/forecast`;

app.getWeatherDetails = () => {
    const response = $.ajax({
        url: `${app.baseUrl}toronto`,
        method: 'GET',
        dataType: 'json',
        data: {
            key: app.apiKey
        }
    }).then(result => {
        console.log(result);
    })

    return response;
}