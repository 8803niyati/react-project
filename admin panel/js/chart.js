var options = {
    series: [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
    chart: {

    height: 340,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
// CALENDAR
$(document).ready(function() {
    calendarInit();
});


function calendarInit() {

  
    var date = new Date();
    var utc = date.getTime() + (date.getTimezoneOffset() * 60 * 1000); 
    var kstGap = 9 * 60 * 60 * 1000; 
    var today = new Date(utc + kstGap); 
  
    var thisMonth = new Date(today.getFullYear(), today.getMonth(), today.getDate());
   
  
    
    var currentYear = thisMonth.getFullYear(); 
    var currentMonth = thisMonth.getMonth(); 
    var currentDate = thisMonth.getDate(); 

    
    renderCalender(thisMonth);

    function renderCalender(thisMonth) {

        
        currentYear = thisMonth.getFullYear();
        currentMonth = thisMonth.getMonth();
        currentDate = thisMonth.getDate();

        var startDay = new Date(currentYear, currentMonth, 0);
        var prevDate = startDay.getDate();
        var prevDay = startDay.getDay();

        var endDay = new Date(currentYear, currentMonth + 1, 0);
        var nextDate = endDay.getDate();
        var nextDay = endDay.getDay();

       

        
        $('.year-month').text(currentYear + '.' + (currentMonth + 1));

      
        calendar = document.querySelector('.dates')
        calendar.innerHTML = '';
        
      
        for (var i = prevDate - prevDay + 1; i <= prevDate; i++) {
            calendar.innerHTML = calendar.innerHTML + '<div class="day prev disable">' + i + '</div>'
        }
        
        for (var i = 1; i <= nextDate; i++) {
            calendar.innerHTML = calendar.innerHTML + '<div class="day current">' + i + '</div>'
        }
        for (var i = 1; i <= (7 - nextDay == 7 ? 0 : 7 - nextDay); i++) {
            calendar.innerHTML = calendar.innerHTML + '<div class="day next disable">' + i + '</div>'
        }

      
        if (today.getMonth() == currentMonth) {
            todayDate = today.getDate();
            var currentMonthDate = document.querySelectorAll('.dates .current');
            currentMonthDate[todayDate -1].classList.add('today');
        }
    }

   
    $('.go-prev').on('click', function() {
        thisMonth = new Date(currentYear, currentMonth - 1, 1);
        renderCalender(thisMonth);
    });

    
    $('.go-next').on('click', function() {
        thisMonth = new Date(currentYear, currentMonth + 1, 1);
        renderCalender(thisMonth); 
    });
}
// maps
$(document).ready(function(){
    tippy('.tippy', {
      theme: 'light',
      size: 'big',
      arrow: true
    })
});

var options = {
    series: [44, 55, 13, 43, 22],
    chart: {
    width: 380,
    type: 'pie',
  },
  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  // 2

 
  var options = {
    series: [
    {
      data: [
        {
          x: '2008',
          y: [2800, 4500]
        },
        {
          x: '2009',
          y: [3200, 4100]
        },
        {
          x: '2010',
          y: [2950, 7800]
        },
        {
          x: '2011',
          y: [3000, 4600]
        },
        {
          x: '2012',
          y: [3500, 4100]
        },
        {
          x: '2013',
          y: [4500, 6500]
        },
        {
          x: '2014',
          y: [4100, 5600]
        }
      ]
    }
  ],
    chart: {
    height: 320,
    type: 'rangeBar',
    zoom: {
      enabled: false
    }
  },
  plotOptions: {
    bar: {
      isDumbbell: true,
      columnWidth: 3,
      dumbbellColors: [['#008FFB', '#00E396']]
    }
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    position: 'top',
    horizontalAlign: 'left',
    customLegendItems: ['Product A', 'Product B']
  },
  fill: {
    type: 'gradient',
    gradient: {
      type: 'vertical',
      gradientToColors: ['#00E396'],
      inverseColors: true,
      stops: [0, 100]
    }
  },
  grid: {
    xaxis: {
      lines: {
        show: true
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    }
  },
  xaxis: {
    tickPlacement: 'on'
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart4"), options);
  chart.render();