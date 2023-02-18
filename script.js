const app = {};

app.baseUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline`;

app.init = () => {
    console.log('Ready to go!')
    app.getWeatherDetails();
    $('#myForm').submit(function() {
        const value = $(this).serialize();
    
        console.log("Hello");
    })
    
    
};

$(() => {
    app.init();
})

$('#myForm').submit(function() {
    const value = $(this).serialize();

    console.log("Hello");
})



app.apiKey = 'VNVKESJ99JE2WNXUHH7739FJE';


app.getWeatherDetails = () => {
    const response = $.ajax({
        url: `${app.baseUrl}/toronto`,
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