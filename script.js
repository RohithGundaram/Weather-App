const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '23e5278a88mshb53370c32122a00p18d454jsn85f256503f29',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));