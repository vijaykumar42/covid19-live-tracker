(async function fetchUserData(){
    const res = await fetch('https://api.covid19india.org/data.json')
    const data = await res.json();
    console.log(data);

    document.getElementById('active').innerHTML = data.statewise[0].active;
    document.getElementById('confirmed').innerHTML = data.statewise[0].confirmed;
    document.getElementById('deaths').innerHTML = data.statewise[0].deaths;
    document.getElementById('recovered').innerHTML = data.statewise[0].recovered;

    var states =[];
    var confirmed =[];
    var recovered = [];
    var deaths =[];


    data.statewise.map(function(obj){
         states.push(obj.state);
         confirmed.push(obj.confirmed);
         recovered.push(obj.recovered);
         deaths.push(obj.deaths)
    })
    
    states.shift()
    confirmed.shift()
    recovered.shift()
    deaths.shift()
    console.log(states);

    
    var myChart = document.getElementById('myChart').getContext('2d')
    console.log(myChart);
    
    var chart = new Chart(myChart, {
        type: 'line',
        data: {
            labels:states,
            datasets:[{
               label:'confirmed cases',
               data:confirmed,
               backgroundColor:'#ffcc00',
               minBarLength:100
            },
            {
                label:'recovered cases ',
                data:recovered,
                backgroundColor:'green',
                minBarLength:100
             },
             {
                label:'deaths cases',
                data:deaths,
                backgroundColor:'red',
                minBarLength:100
             }]
        },
        options: {} 
    })
})();