import theme from './ChartTheme.jsx';
import Highcharts from 'highcharts';
Highcharts.setOptions(theme);
export default[
  {
    container : 'source-breakdown',
    title : 'Lyric Sources Breakdown',
    description : "This data required that I collect the link of each song and run a count on how many songs came from each source. As the results show, Genius and AzLyrics are the most effective for scraping lyrics. ",
    options : {
      chart: {
        spacingBottom: 0,
        spacingTop: 0,
        spacingLeft: 0,
        spacingRight: 0,
        height: '450',
        type: 'pie'
      },
      credits: {
        enabled: false
      },
      title: {
        text: null
      },
      subtitle: {
        text: null
      },
      legend: {
        align: 'center',
        layout: 'vertical',
        verticalAlign: 'bottom'
      },
      tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b><br><b>{point.y} songs</b> of {point.total}',
        crosshairs: false
      },
      plotOptions: {
        pie: {
          size: '100%',
          allowPointSelect: true,
          shadow: false,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        },
        series: {
          states: {
            hover: {
              enabled: true,
              halo: {
                size: 0
              }
            }
          }
        }
      },
      series: [
        {
          name: 'Brands',
          colorByPoint: true,
          startAngle: 100,
          data: [
            {
              name: 'GENIUS.COM',
              selected: true,
              sliced: true,
              y: 79,
              color: theme.colors[7]
            }, {
              name: 'AZLYRICS.COM',
              y: 74,
              color: theme.colors[8]
            }, {
              name: 'SPOTIFY.COM',
              y: 19,
              color: theme.colors[10]
            }, {
              name: 'OTHER: < 5 SONGS',
              y: 19,
              color: theme.colors[9]
            }, {
              name: 'TIDIDO.COM',
              y: 13,
              color: theme.colors[11]
            }, {
              name: 'SHAZAM.COM',
              y: 13,
              color: theme.colors[12]
            }, {
              name: 'METROLYRICS.COM',
              y: 11,
              color: theme.colors[13]
            }, {
              name: 'SOUNDCLOUD.COM',
              y: 8,
              color: theme.colors[14]
            }, {
              name: 'YOUTUBE.COM',
              y: 8,
              color: theme.colors[15]
            }, {
              name: 'BANDCAMP.COM',
              y: 7,
              color: theme.colors[16]
            }
          ]
        }
      ]
    }
  }, {
    container : 'time-vs-frequency',
    title : 'Frequency of Shout Out Songs Over Time',
    description : "This data required that I collect the year of each song and run a count on how many songs correspond to the year released. None of the lyric sources made it easy to date when these songs were first released. Accuracy is based on what I could find on Google, a lot of the years found were manual look-ups. Also note, I collected data up until mid-2016, the data for that year may be incomplete.",
    options : {
      chart: {
        type: 'spline'
      },
      credits: {
        enabled: false
      },
      title: {
        text: null
      },
      subtitle: {
        text: null
      },
      xAxis: {
        type: 'category',
        crosshair: {
          width: 1,
          color: '#A0A0A3'
        }
      },
      yAxis: {
        title: {
          text: 'Number of Songs'
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        spline: {
          marker: {
            enabled: false
          }
        },
        series: {
          states: {
            hover: {
              enabled: true,
              halo: {
                size: 0
              }
            }
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      tooltip: {
        shadow: false,
        animation: false,
        crosshairs: true,
        pointFormat: '<b>{point.y} songs</b> of 251'
      },
      series: [
        {
          name: 'Year',
          color: theme.colors[17],
          data: [
            [
              1957, 1
            ],
            [
              1958, 0
            ],
            [
              1959, 0
            ],
            [
              1960, 0
            ],
            [
              1961, 0
            ],
            [
              1962, 0
            ],
            [
              1963, 0
            ],
            [
              1964, 0
            ],
            [
              1965, 0
            ],
            [
              1966, 0
            ],
            [
              1967, 0
            ],
            [
              1968, 0
            ],
            [
              1969, 0
            ],
            [
              1970, 0
            ],
            [
              1971, 1
            ],
            [
              1972, 1
            ],
            [
              1973, 0
            ],
            [
              1974, 0
            ],
            [
              1975, 0
            ],
            [
              1976, 1
            ],
            [
              1977, 0
            ],
            [
              1978, 0
            ],
            [
              1979, 1
            ],
            [
              1980, 0
            ],
            [
              1981, 0
            ],
            [
              1982, 1
            ],
            [
              1983, 0
            ],
            [
              1984, 0
            ],
            [
              1985, 1
            ],
            [
              1986, 1
            ],
            [
              1987, 1
            ],
            [
              1988, 0
            ],
            [
              1989, 0
            ],
            [
              1990, 1
            ],
            [
              1991, 0
            ],
            [
              1992, 2
            ],
            [
              1993, 3
            ],
            [
              1994, 6
            ],
            [
              1995, 12
            ],
            [
              1996, 5
            ],
            [
              1997, 6
            ],
            [
              1998, 13
            ],
            [
              1999, 8
            ],
            [
              2000, 10
            ],
            [
              2001, 12
            ],
            [
              2002, 7
            ],
            [
              2003, 8
            ],
            [
              2004, 7
            ],
            [
              2005, 6
            ],
            [
              2006, 6
            ],
            [
              2007, 10
            ],
            [
              2008, 9
            ],
            [
              2009, 5
            ],
            [
              2010, 9
            ],
            [
              2011, 12
            ],
            [
              2012, 11
            ],
            [
              2013, 18
            ],
            [
              2014, 9
            ],
            [
              2015, 35
            ],
            [2016, 12]
          ]
        }
      ]
    }
  }, {
    container : 'category-breakdown',
    title : 'Shout Out Word Category Breakdown',
    description : 'This data required that I track every unique Sacramento, CA references per song, sort each reference into a category, and count references per category. Note: a song may name drop multiple references like Sacramento, SacTown, 916, and Kings.',
    options : {
      chart: {
        spacingBottom: 0,
        spacingTop: 0,
        spacingLeft: 0,
        spacingRight: 0,
        height: '410',
        type: 'pie'
      },
      credits: {
        enabled: false
      },
      title: {
        text: null
      },
      subtitle: {
        text: null
      },
      legend: {
        align: 'center',
        layout: 'vertical',
        verticalAlign: 'bottom'
      },
      tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b><br><b>{point.y} references</b> of {point.total}<br>from 251 songs',
        crosshairs: false
      },
      plotOptions: {
        pie: {
          size: '100%',
          allowPointSelect: true,
          shadow: false,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        },
        series: {
          states: {
            hover: {
              enabled: true,
              halo: {
                size: 0
              }
            }
          }
        }
      },
      series: [
        {
          name: 'Brands',
          colorByPoint: true,
          data: [
            {
              name: 'CITY/COUNTY',
              y: 253,
              selected: true,
              sliced: true,
              color: theme.colors[0]
            }, {
              name: 'STREET/NEIGHBORHOOD',
              y: 44,
              color: theme.colors[1]
            }, {
              name: 'SPORTS',
              y: 23,
              color: theme.colors[2]
            }, {
              name: 'EDUCATION',
              y: 10,
              color: theme.colors[3]
            }, {
              name: 'LANDMARKS',
              y: 5,
              color: theme.colors[4]
            }, {
              name: 'OTHER',
              y: 4,
              color: theme.colors[5]
            }, {
              name: 'RIVERS',
              y: 2,
              color: theme.colors[6]
            }
          ]
        }
      ]
    }
  }, {
    container : 'word-vs-frequency',
    title : 'Shout Out Word Frequency',
    description : 'This data is based on unique references per song, not the number of occurances per song. For instance, if a song says Sacramento 8 times and SacTown 5 times, each reference was only counted once. Homophone references were combined; for example, SackTown, Sac-Town, and Sac Town were counted towards SacTown. This chart shows references ranked from most used to least and is limited to references that are mentioned in more than 1 song; it is also color categorized by reference type.',
    options : {
      chart: {
        type: 'bar',
        height: '700'
      },
      credits: {
        enabled: false
      },
      title: {
        text: null
      },
      subtitle: {
        text: null
      },
      xAxis: {
        type: 'category',
        categories: [
          "SACRAMENTO",
          "SACTOWN",
          "SAC",
          "916",
          "KINGS",
          "SACRAMENTO KINGS",
          "CITY OF TREES",
          "FLORIN",
          "MEADOWVIEW",
          "SAC KINGS",
          "SACTO",
          "SOUTH SAC",
          "MACK",
          "SAC CITY",
          "STOCKTON",
          "CAPITOL",
          "DEMARCUS COUSINS",
          "ELK GROVE",
          "FLORIN HIGH",
          "FOLSOM",
          "FREEPORT",
          "GREENHAVEN",
          "OAK PARK",
          "RUTTER PARK",
          "TREE CITY"
        ]
      },
      yAxis: {
        title: {
          text: 'Number of References'
        },
        align: 'right'
      },
      legend: {
        layout: 'horizontal',
        verticalAlign: 'bottom'
      },
      plotOptions: {
        bar: {
          cursor: 'pointer',
          stacking: 'normal'
        },
        series: {
          states: {
            hover: {
              enabled: true,
              halo: {
                size: 0
              }
            }
          }
        }
      },
      dataLabels: {
        enabled: true,
        align: 'left',
        format: '{point.y}'
      },
      tooltip: {
        pointFormat: '<b>{point.y}</b> of 341 references<br>from 251 songs',
        crosshairs: false
      },
      series: [
        {
          name: 'CITY/COUNTY',
          legendIndex: 0,
          color: theme.colors[0],
          data: [
            {
              x: 0,
              y: 144
            }, {
              x: 1,
              y: 52
            }, {
              x: 2,
              y: 28
            }, {
              x: 3,
              y: 12
            }, {
              x: 6,
              y: 4
            }, {
              x: 10,
              y: 4
            }, {
              x: 17,
              y: 2
            }, {
              x: 19,
              y: 2
            }, {
              x: 24,
              y: 2
            }
          ]
        }, {
          name: 'STREET/NEIGHBORHOOD',
          legendIndex: 1,
          color: theme.colors[1],
          data: [
            {
              x: 7,
              y: 4
            }, {
              x: 8,
              y: 4
            }, {
              x: 11,
              y: 4
            }, {
              x: 12,
              y: 3
            }, {
              x: 14,
              y: 3
            }, {
              x: 20,
              y: 2
            }, {
              x: 21,
              y: 2
            }, {
              x: 22,
              y: 2
            }, {
              x: 23,
              y: 2
            }
          ]
        }, {
          name: 'SPORTS',
          legendIndex: 2,
          color: theme.colors[2],
          data: [
            {
              x: 4,
              y: 10
            }, {
              x: 5,
              y: 6
            }, {
              x: 9,
              y: 4
            }, {
              x: 16,
              y: 2
            }
          ]
        }, {
          name: 'EDUCATION',
          legendIndex: 3,
          color: theme.colors[3],
          data: [
            {
              x: 13,
              y: 3
            }, {
              x: 18,
              y: 2
            }
          ]
        }, {
          name: 'LANDMARKS',
          legendIndex: 4,
          color: theme.colors[4],
          data: [
            {
              x: 15,
              y: 2
            }
          ]
        }
      ]
    }
  }, {
    container : 'artist-vs-frequency',
    title : 'Frequency of Shout Outs by an Artist',
    description : "This data required that I track the main artists and the featured artists, and count their appearance on 251 songs. This means that all artists are treated equally even if it may not be their song, or they were not the ones to mention the shout out. This chart shows artists who have collaborated on more than 1 song. Important to note that most of the songs are from rappers who have relations to Sacramento, CA.",
    options : {
      chart: {
        type: 'bar',
        height: '800'
      },
      credits: {
        enabled: false
      },
      title: {
        text: null
      },
      subtitle: {
        text: null
      },
      xAxis: {
        type: 'category',
        labels: {
          align: 'right'
        }
      },
      yAxis: {
        title: {
          text: 'Number of Songs'
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          states: {
            hover: {
              enabled: true,
              halo: {
                size: 0
              }
            }
          }
        }
      },
      dataLabels: {
        enabled: true,
        align: 'left',
        format: '{point.y}'
      },
      tooltip: {
        pointFormat: '<b>{point.y}</b> of 339 artists<br>from 251 songs',
        crosshairs: false
      },
      series: [
        {
          name: 'Population',
          color: theme.colors[17],
          data: [
            [
              "BROTHA LYNCH HUNG", 18
            ],
            [
              "CHUUWEE", 14
            ],
            [
              "X-RAIDED (A.K.A NEFARIOUS)", 10
            ],
            [
              "SOOSH*E!", 9
            ],
            [
              "E-40", 7
            ],
            [
              "TECH N9NE", 5
            ],
            [
              "VUE PETER", 5
            ],
            [
              "C-BO", 4
            ],
            [
              "LUKE TAILOR", 4
            ],
            [
              "BERNER", 3
            ],
            [
              "BUENO", 3
            ],
            [
              "CAKE", 3
            ],
            [
              "CHARLIE BROWN JR.", 3
            ],
            [
              "COOLAYCOO", 3
            ],
            [
              "DIVERZITY", 3
            ],
            [
              "HOLLOW TIP", 3
            ],
            [
              "LUDACRIS", 3
            ],
            [
              "LUNASICC", 3
            ],
            [
              "SNOOP DOGG", 3
            ],
            [
              "TOO $HORT", 3
            ],
            [
              "YOUNG DIZZY", 3
            ],
            [
              "AMPICHINO", 2
            ],
            [
              "BAD AZZ", 2
            ],
            [
              "BEASTIE BOYS", 2
            ],
            [
              "CIMORELLI", 2
            ],
            [
              "DR. DRE", 2
            ],
            [
              "G-MACC", 2
            ],
            [
              "RAPPIN' 4 TAY", 2
            ],
            [
              "SPICE 1", 2
            ],
            [
              "TBONE", 2
            ],
            [
              "THE GUY WHO SINGS SONGS ABOUT CITIES & TOWNS", 2
            ],
            ["TRU", 2]
          ]
        }
      ]
    }
  }
];
