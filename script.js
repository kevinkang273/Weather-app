const app = {};

app.baseUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline`;

app.init = () => {
    console.log('Ready to go!')



    // Get value of city typed in
    $('.city').keyup(function (event) {
        
        if (event.key === "Enter") {
            const valueEntered = $('.city').val();
            app.getWeatherDetails(valueEntered);
            
        }
    })
    
    

};

$(() => {
    app.init();

})


app.apiKey = 'VNVKESJ99JE2WNXUHH7739FJE';


app.getWeatherDetails = (city) => {
    const response = $.ajax({
        url: `${app.baseUrl}/${city}`,
        method: 'GET',
        dataType: 'json',
        data: {
            key: app.apiKey
        }
    }).then(result => {
        console.log(result);
        $(".weather").text(result.currentConditions.temp);
    })

    return response;
}