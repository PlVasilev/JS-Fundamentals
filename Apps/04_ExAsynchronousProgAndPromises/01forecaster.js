function attachEvents() {
    let locationUrl = 'https://judgetests.firebaseio.com/locations.json';
    let locations = [];
    let count = 0;
    function wetherNow(condition){
        switch (condition) {
              case 'Sunny': return '&#x2600;' ;
              case 'Partly sunny': return '&#x26C5;';
              case 'Overcast': return'&#x2601;';
              case 'Rain':return '&#x2614;'
        }
    }
    function displayError(err) {
        $('#forecast').html("Error");
        $('#forecast').css("display", "block");
    }
    $.ajax({
        method: "GET",
        url: locationUrl
    }).then(function (result) {
        for (const location of result) {
            locations.push(location)
        }
    }).catch(function (err) {
        displayError(err)
    });

    $('#submit').on('click',function () {
        $('#current').empty();
        $('#upcoming').empty();
        count = 0;
        for (const location of locations) {
            if (location.name === $('#location').val()){
                $.ajax({
                    method: "GET",
                    url: `https://judgetests.firebaseio.com/forecast/today/${location.code}.json`
                }).then(function (todaysForecast) {
                    let todaysWether = wetherNow(todaysForecast.forecast.condition);
                    let condition = $('<span class="condition"></span>');
                    condition.append($(`<span class="forecast-data">${todaysForecast.name}</span>`));
                    condition.append($(`<span class="forecast-data">${todaysForecast.forecast.low}&#176;/${todaysForecast.forecast.high}&#176;</span>`));
                    condition.append($(`<span class="forecast-data">${todaysForecast.forecast.condition}</span>`));
                    $('#current').append('<div class="label">Current conditions</div>');
                    $('#current').append($(`<span class="condition symbol">${todaysWether}</span>`)).append(condition)
                }).catch(function (err) {
                    displayError(err)
                });
                $.ajax({
                    method: "GET",
                    url: `https://judgetests.firebaseio.com/forecast/upcoming/${location.code}.json`
                }).then(function (treedDayForecast) {
                    $('#upcoming').append('<div class="label">Three-day forecast</div>');
                    for (const element of treedDayForecast.forecast) {
                        let upcoming = $('<span class="upcoming"></span>')
                        let symbol = wetherNow(element.condition);
                        upcoming.append($(`<span class="symbol">${symbol}</span>`));
                        upcoming.append($(`<span class="forecast-data">${element.low}&#176;/${element.high}&#176;</span>`));
                        upcoming.append($(`<span class="forecast-data">${element.condition}</span>`));
                        $('#upcoming').append(upcoming)
                    }
                    $('#forecast').css('display',"block")
                }).catch(function (err) {
                    displayError(err)
                })
                break;
            } else {
                count++;
                if (count === locations.length) {
                 displayError()
                }
            }
        }
    })
}