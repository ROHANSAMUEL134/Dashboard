document.addEventListener("DOMContentLoaded", () => {
    const themeToggler = document.getElementById("theme");
    const tinyBall = document.getElementById("tiny-ball");
    var css = document.getElementById("css");
    themeToggler.addEventListener("click", () => {
        if(tinyBall.style.float!='right'){
            tinyBall.style.float = 'right';
            css.href="dark.css";
            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(drawChart);
            function drawChart() {
              var data = google.visualization.arrayToDataTable([
                ['Month', 'Users'],
                ['JAN',  600],
                ['FEB',  800],
                ['MAR',  880],
                ['APR',  640],
                ['MAY',  700],
                ['JUN',  900],
                ['JUL',  1040],
                ['AUG',  1300],
                ['SEP',  1340],
                ['OCT',  1380],
                ['NOV',  1430],
                ['DEC',  1499]
              ]);

              var options = {
                title: 'User Activity',
                titleTextStyle: {color: 'white'},
                curveType: 'function',
                legend: { position: 'bottom', 
                  textStyle:{ 
                    color: "white" 
                  }
                },
                series: {
                  0: { color: 'rgb(201, 37, 201)', lineWidth: 4 }
                },
                backgroundColor : '#1D1D29'
              };

              var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

              google.visualization.events.addListener(chart, 'ready', function () {
                styleAxisLabels();
              });

              chart.draw(data, options);
            }

            function styleAxisLabels() {
              var labels = document.querySelectorAll('#curve_chart text');
              labels.forEach(function(label) {
                if (label.textContent.match(/JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC/)) {
                  label.setAttribute('fill', 'rgb(100, 100, 100)');
                  label.setAttribute('font-size', '9px');
                }
                if (label.textContent.match(/FEB|APR|JUN|AUG|OCT|DEC/)) {
                  let transform = label.getAttribute('transform') || '';
                  label.setAttribute('transform', transform + ' translate(0, -14)');
                }
              });
            }
        } else {
            tinyBall.style.float = 'left';
            css.href="light.css";
            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(drawChart);
            function drawChart() {
              var data = google.visualization.arrayToDataTable([
                ['Month', 'Users'],
                ['JAN',  600],
                ['FEB',  800],
                ['MAR',  880],
                ['APR',  640],
                ['MAY',  700],
                ['JUN',  900],
                ['JUL',  1040],
                ['AUG',  1300],
                ['SEP',  1340],
                ['OCT',  1380],
                ['NOV',  1430],
                ['DEC',  1499]
              ]);

              var options = {
                title: 'User Activity',
                curveType: 'function',
                legend: { position: 'bottom' },
                series: {
                  0: { color: 'rgb(201, 37, 201)', lineWidth: 4 }
                }          
              };

              var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

              google.visualization.events.addListener(chart, 'ready', function () {
                styleAxisLabels();
              });

              chart.draw(data, options);
            }

            function styleAxisLabels() {
              var labels = document.querySelectorAll('#curve_chart text');
              labels.forEach(function(label) {
                if (label.textContent.match(/JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC/)) {
                  label.setAttribute('fill', 'rgb(100, 100, 100)');
                  label.setAttribute('font-size', '9px');
                }
                if (label.textContent.match(/FEB|APR|JUN|AUG|OCT|DEC/)) {
                  let transform = label.getAttribute('transform') || '';
                  label.setAttribute('transform', transform + ' translate(0, -14)');
                }
              });
            }
          }
    });    
});

