# Where Sacramento Meets Music and Code

## Table of Contents
1. [Introduction](#introduction)
2. [Resources](#resources)
3. [Future Goals](#future-goals)
4. [Disclaimer](#disclaimer)

<div id='introduction'/>
## Introduction

#### QUESTION

How many songs reference Sacramento, CA?

#### BACKGROUND

***Why Sacramento, CA?***

From 2009-2012, Sacramento, CA made Forbes' America's Most Miserable Cities list as a result of housing foreclosures, state taxes on income, and the Sacramento Kings season records and potential for relocating. In early 2013, the hashtag #SacramentoProud took off as a city/fan movement to keep the Kings in Sacramento, CA. By mid 2013, Kings fans, the Kings organization, Mayor Kevin Johnson, Sacramento City Council, Vivek Ranadive, the Sacramento investor group, and the Maloof family sealed the deal to transfer majority ownership and start building a new Sacramento arena in 2014.

Being born and raised in Sacramento, I'm bias and proud. I see the good, the bad, and the ugly. I understand this city's struggles growing up, especially during 2009-2013. Sacramento, CA has the loyalty of its community and the attitude of an underdog. Call it an unconditional love for my hometown a.k.a. "The Most Diverse and Integrated City in America".

*For more information:*

- [America's Most Diverse City 2002](http://content.time.com/time/nation/article/0,8599,340694-1,00.html)
- [Most Diverse and Integrated City 2015](http://fivethirtyeight.com/features/the-most-diverse-cities-are-often-the-most-segregated/)
- [Sacramento Kings Ownership](http://www.nba.com/kings/news/maloof-family-transfers-ownership-sacramento-kings-sacramento-investor-group)
- [Sacramento Kings Relocation](https://en.wikipedia.org/wiki/Failed_relocation_of_the_Sacramento_Kings)
- [No. 17 on America's Most Miserable Cities 2010](http://www.forbes.com/2010/02/11/americas-most-miserable-cities-business-beltway-miserable-cities_slide_18.html)
- [No. 5 on America's Most Miserable Cities 2011](http://www.forbes.com/2011/02/02/stockton-miami-cleveland-business-washington-miserable-cities_slide_6.html)
- [No. 5 on America's Most Miserable Cities](http://www.forbes.com/pictures/mli45hdlg/5-sacramento-calif/#aa34faa5879e)

***Why songs?***

In general, I listen to music all day, every day. It plays in the background as I'm coding, driving, exercising, socializing, etc. The mixture of sounds and word of mouth is a powerful outlet for artists to communicate creativity, emotions, and ideas. I specifically want to sample and highlight artists that give Sacramento, CA a shout out in their songs. At the moment, this project is limited to 250 songs, but will hopefully grow over time as I try to capture and discover more mainstream and local artists.

***Why a project?***

Prior to this project, I knew of a handful of mainstream songs that reference Sacramento, CA:

- "California Love" - 2Pac
- "Area Codes" - Ludacris
- This is Why I'm Hot" - MIMS
- "I Don't Fuck With You" - Big Sean ft E-40
- "New Bae" - Vic Mensa

In my mind, there had to be more than 5 songs out there. As a result, I aimed to collect data, visually display the results, and explain my findings. So as lyrical artists find ways to give a shout out to Sacramento through songs and lyrics, this project is my creative outlet that uniquely intersects Sacramento, code, and data visualization.

<div id='resources'/>
## Resources

#### Configuration

Now on the technical side of this project... Overall, it's a fun opportunity for me to dabble in some popular buzzword JavaScript tools and learn something new. The configuration is indeed overkill for its initial stage, but hopefully overtime it will blossom into what I want it to be.

*Playground & Libraries*

- [Node.js](https://nodejs.org/en/) + [npm](https://www.npmjs.com/)
- [SASS](http://sass-lang.com/)
- [Atom](https://atom.io/)
- [Flux](https://facebook.github.io/flux/)
- [Highcharts](http://www.highcharts.com/) + [react-highcharts](https://github.com/kirjs/react-highcharts)
- [React](https://facebook.github.io/react/index.html) + [jsx](https://facebook.github.io/react/docs/jsx-in-depth.html)
- [Webpack](https://webpack.github.io/)
- [Babel](https://babeljs.io/) + [ES6](https://babeljs.io/docs/learn-es2015/)

*Examples/Articles I've Come Across*

- [9 things every React.js beginner should know](https://camjackson.net/post/9-things-every-reactjs-beginner-should-know)
- [React Starter Kit](https://github.com/kriasoft/react-starter-kit)
- [Setting up React for ES6 with Webpack and Babel](https://www.twilio.com/blog/2015/08/setting-up-react-for-es6-with-webpack-and-babel-2.html)
- [Setting Up a React.js Environment Using Npm, Babel 6 and Webpack](https://www.codementor.io/reactjs/tutorial/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack)
- [5 Practical Examples For Learning The React Framework](http://tutorialzine.com/2014/07/5-practical-examples-for-learning-facebooks-react-framework/)
- [Flux: Tutorial – Todo List](https://facebook.github.io/flux/docs/todo-list.html)
- [Learn Raw React — no JSX, no Flux, no ES6, no Webpack…](http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/)
- [Using ES6 and ES7 in the Browser, with Babel 6 and Webpack](http://jamesknelson.com/using-es6-in-the-browser-with-babel-6-and-webpack/)
- [A Quick Tour Of ES6 (Or, The Bits You’ll Actually Use)](http://jamesknelson.com/es6-the-bits-youll-actually-use/)
- [The Six Things You Need To Know About Babel 6](http://jamesknelson.com/the-six-things-you-need-to-know-about-babel-6/)


#### GETTING DATA

*Searching for Data*

If you go down to [Disclaimer](#disclaimer) there's a long list of search nuisances I've learned the hard way. I jumped right in and manually guessed a bunch of search tokens and applied them to [AZLyrics](www.azlyrics.com), [MetroLyrics](www.metrolyrics.com), and [Genius](genius.com) search engines and scraped their page html using [Python](http://docs.python-guide.org/en/latest/scenarios/scrape/). I polled friends/family for songs they know of, and I did a manual search on Google, Spotify, and YouTube. This process NEEDS to be automated at one point. See [Future Goals](#future-goals).

#### CLEANING & ANALYZING DATA

As of July 5, 2016, I collected a sample size of 250 songs with a provided release year, song title, artist/featured artist, source page link, and sample lyrics that contain a reference to Sacramento, CA. The raw data is provided in the file 916.csv.

Words that serve as homographs were aggregated. For example, there are 6 SacTown, 13 Sac Town, 27 Sac-Town, 2 Sack Town, 1 SackTown; I combined them together to be 49 SacTown. For others like Sac-A-Indo and Jack-Ramento, which play on the sound, meaning, and the context of the song, I didn't convert them to Sacramento. This logic was applied to Sack to Sac and so on.

This part could be customized and automated with algorithms. For the time being I used tools like Excel and Sublime: they have built in functions like sort, count, sum, convert case, and permute lines.

#### CREATING GRAPHS

From past work projects, I've used [Highcharts](http://www.highcharts.com/) for basic responsive graphs so it was fitting to use it once again here.

Each graph is independent of the others and data had to be parsed and aggregated to get to where they are.
- Data Source Breakdown (pie graph)
- Number of Songs Over Time (spline graph)
- Sacramento References Category Breakdown (pie graph)
- Top 24 Common References Found, Sorted and Categorized (bar graph)
- Top 32 Artists Found Who Appear on Referencing Songs, Sorted (bar graph)

<div id='future-goals'/>
## Future Goals

I still don't have THE answer to my question in the [Introduction](#introduction), and probably never will, but I can definitely say I have reasonable estimate!

#### TODO

- Refactor code used to scrape AZLyrics and Genius lyric search engines
- Look into Genius's API
- Match artists/songs to genres
- Build automated web scraper to gather lyrics from current sample AZLyrics, Genius, and MetroLyrics
- Build csv reader/writer feature to transform data collected from lyric sources to calculate/sort data for data visualizations (apply algorithms!)
- Discover and include more artists/songs that may not provide written lyrics but exist on SoundCloud, Spotify, YouTube, etc
- Apply APIs from Spotify to search songs and create list
- Make client-side accessible

<div id='disclaimer'/>
## Disclaimer

No guarantee on accuracy; this project is for leisure and entertainment. It is given to the public as is.

#### CONSTRAINTS

***Time***

For current being, I gave myself leisure effort from June 22 to July 5, 2016. The data in this project is a sample size limited by my efforts. Thus, not enough time to actually read all lyrics, check the context of the token words, and listen to the songs for accuracy.

There are songs out there that probably existed prior to the time of the Internet. All of the data for this project requires that they exist on the Internet and I could find it through search engines.

***Potential for Misinterpretations***

Definition:

Sacramento is a Spanish word for sacrament, potentially used in the context of Catholicism. Some artists or songs may contain "sacramento" but be using the word in the Spanish sense.

Language:

Only songs that include lyrics were accepted.

Only lyrics that are mostly in English were accepted for this sample size. Unfortunately songs in Spanish, Portuguese, French, and Hmong were rejected in the case that I may misinterpret the artist's lyrics.

Spelling and Slang:

Lyrics are interpreted and limited my ability to decipher the spelling/slang of the author who contributed. Whether the author chose their spelling as a matter of showing creativity or accidentally, it made searching and parsing references plenty time consuming. For example, Sactown vs Sac-town vs Sac Town vs Sacktown.

Nicknames:

According to [Wikipedia](https://en.wikipedia.org/wiki/Sacramento,_California), Sacramento, CA has the following common nicknames: City of Trees, Sactown, Sac, Sacto, Sack-a-Tomatoes, Sac-a-Cement-o. However, as I continued this project's endeavor, I found several creative variations like Jack-Ramento, Sac-A-Indo, and of course the 916 (aka Nine One Six.

Literals + Symbolism:

There are literal city/county references within a name or a nickname, but there are clear symbols in the city/county that make a lyric shout out to Sacramento, CA. For example, Mack Road, Sacramento City College, Sacramento Kings, and the Capitol of California. Thus, data needed to be categorized by city/county, street/neighborhood, sports, education, landmarks, rivers, and everything else.

Location:

[Sacramento the city](https://en.wikipedia.org/wiki/Sacramento,_California) versus [Sacramento County](https://en.wikipedia.org/wiki/Sacramento_County,_California) versus [Sacramento Valley region](https://en.wikipedia.org/wiki/Sacramento_Valley) versus [Greater Sacramento metro area](https://en.wikipedia.org/wiki/Sacramento_metropolitan_area). Even though many artists may be referring to the city of Sacramento, depending on the audience, many people say they are from Sacramento, CA as they are in a neighboring city, county, region, or metro area.

There are multiple locations around the world named Sacramento. For this project I tried examining the surrounding context of the lyrics or assume if an artist has some relations or origins in California they are referencing Sacramento, CA.

*Here's a list of places that have a local area named Sacramento:*

- America: Pennsylvania, New Mexico, Nebraska, Kentucky, Illinois, Colorado, California
- Mexico: Sonora, Sinaloa, San Luis Potosi, Jalisco, Durango, Coahuila de Zaragoza, Chihuahua, Chiapas
- Peru: Moquegua, Ica, Arequipa
- Brazil: Rio Grande de Norte, Para, Minas Gerais
- Venezuela, Bolivarian Republic of: Tachira
- Uruguay: Colonia
- Philippines: Camarines Sur
- Panama: Panama
- Nicaragua: Rivas
- Guatemala: Chiquimula
- Cape Verde: Sao Domingos
- Costa Rica: Heredia
- Colombia: Magdalena
- Bolivia: La Paz
