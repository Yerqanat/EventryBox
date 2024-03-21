from bs4 import BeautifulSoup
import requests

results =  []
for x in range(1,4):
  url = f'https://www.racexasia.com/events/page/{x}'
  result = requests.get(url).text
  soup = BeautifulSoup(result, "html.parser")
  titles = soup.find_all('a', {'class':'title'})
  for title in titles:
    results.append(title)
  
print(len(results))