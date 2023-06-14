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

// document ready, alternative $(function() {})
$(() => {
    app.init();

})

// ApiKey visual crossing weather
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


        // result object
        console.log(result.currentConditions.temp);

        

        // Convert fahrenheit to celcius and round it to no decimal
        
        const celcius = ((Math.round((5/9) * (result.currentConditions.temp - 32))))

        // Display temperature
        $(".weather").text(celcius);
        
        // Use change background function with celcius input from result response
        app.changeBackground(celcius);


    })

    return response;
}

// If temp greater or less, change background picture
app.changeBackground = (celcius) => {

    if (celcius > 20) {
        // Summer
        $('body').css("background-image", "url(../Weather-app-main/210316134738-02-wisdom-project-summer.jpg)")
    } else if (celcius > 10) {
        // Spring
        $('body').css("background-image", "url(../Weather-app-main/desktop-wallpaper-spring-park-spring-nature-in-jpg-format-for-flower-park.jpg)")
    } else {
        // Winter
        $('body').css("background-image", "url(../Weather-app-main/pm.jpg)")
    }
}

