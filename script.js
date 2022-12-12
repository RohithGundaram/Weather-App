const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '23e5278a88mshb53370c32122a00p18d454jsn85f256503f29',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) =>{
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {

		console.log(response)
		// cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));
	
}

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Rajasthan', options)
.then(response => response.json())
.then(response => {

	console.log(response)
	Rcloud_pct.innerHTML = response.cloud_pct
	Rtemp.innerHTML = response.temp
	Rfeels_like.innerHTML = response.feels_like
	Rhumidity.innerHTML = response.humidity
	Rmin_temp.innerHTML = response.min_temp
	Rmax_temp.innerHTML = response.max_temp
	Rwind_speed.innerHTML = response.wind_speed
	Rwind_degrees.innerHTML = response.wind_degrees
	Rsunrise.innerHTML = response.sunrise
	Rsunset.innerHTML = response.sunset
})
.catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
.then(response => response.json())
.then(response => {

	console.log(response)
	Lcloud_pct.innerHTML = response.cloud_pct
	Ltemp.innerHTML = response.temp
	Lfeels_like.innerHTML = response.feels_like
	Lhumidity.innerHTML = response.humidity
	Lmin_temp.innerHTML = response.min_temp
	Lmax_temp.innerHTML = response.max_temp
	Lwind_speed.innerHTML = response.wind_speed
	Lwind_degrees.innerHTML = response.wind_degrees
	Lsunrise.innerHTML = response.sunrise
	Lsunset.innerHTML = response.sunset
})
.catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
.then(response => response.json())
.then(response => {

	console.log(response)
	Kcloud_pct.innerHTML = response.cloud_pct
	Ktemp.innerHTML = response.temp
	Kfeels_like.innerHTML = response.feels_like
	Khumidity.innerHTML = response.humidity
	Kmin_temp.innerHTML = response.min_temp
	Kmax_temp.innerHTML = response.max_temp
	Kwind_speed.innerHTML = response.wind_speed
	Kwind_degrees.innerHTML = response.wind_degrees
	Ksunrise.innerHTML = response.sunrise
	Ksunset.innerHTML = response.sunset
})
.catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
.then(response => response.json())
.then(response => {

	console.log(response)
	Bcloud_pct.innerHTML = response.cloud_pct
	Btemp.innerHTML = response.temp
	Bfeels_like.innerHTML = response.feels_like
	Bhumidity.innerHTML = response.humidity
	Bmin_temp.innerHTML = response.min_temp
	Bmax_temp.innerHTML = response.max_temp
	Bwind_speed.innerHTML = response.wind_speed
	Bwind_degrees.innerHTML = response.wind_degrees
	Bsunrise.innerHTML = response.sunrise
	Bsunset.innerHTML = response.sunset
})
.catch(err => console.error(err));
