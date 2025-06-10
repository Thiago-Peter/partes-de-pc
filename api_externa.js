$(document).ready(function () {
    $('#btnSearch').click(function () {
      const city = $('#city').val();
      const apiKey = 'SUA_API_KEY_AQUI';
  
      if (!city) {
        alert('Por favor, digite o nome da cidade!');
        return;
      }
  
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;
  
      $.ajax({
        url: url,
        type: 'GET',
        success: function (data) {
          const temp = data.main.temp;
          const desc = data.weather[0].description;
          const cityName = data.name;
          const country = data.sys.country;
  
          $('#result').html(`
            <h2>Clima em ${cityName}, ${country}</h2>
            <p>Temperatura: ${temp} °C</p>
            <p>Condição: ${desc}</p>
          `);
        },
        error: function () {
          $('#result').html('<p>Não foi possível obter os dados do clima. Verifique o nome da cidade ou tente novamente.</p>');
        }
      });
    });
  });