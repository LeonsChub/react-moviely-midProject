import requests
from bs4 import BeautifulSoup
import json

url =  "https://www.imdb.com/search/title/?groups=top_100&sort=user_rating,desc"
req = requests.get(url)

soup = BeautifulSoup(req.content,'html5lib')

movies = []

movieList = soup.findAll('div', attrs = {'class':'lister-item mode-advanced'})

for movie in movieList:
	movieToAppend = {}
	movieInfo = movie.find('div', attrs = {'class':'lister-item-content'})
	movieToAppend['id'] = ('cryptoRandomString({length:5})')
	movieToAppend['title'] = (movieInfo.h3.a.text)
	movieToAppend['genres'] = (movieInfo.find('span',attrs={'class':'genre'}).text).strip().replace('\n','').replace(',','').split()
	movieToAppend['rating'] = (movieInfo.find('div',attrs = {'inline-block ratings-imdb-rating'}).strong.text)
	movieToAppend['favorite'] = False

	movies.append(movieToAppend)

with open('movieData.js','a') as file:
	for movie in movies:
		file.write(json.dumps(movie)+',\n')
	file.write(']')
	file.close()
