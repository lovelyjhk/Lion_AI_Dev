# Fetch data from an API
async def fetchData(url):
    try:
        response = await fetch(url)
        data = await response.json()
        return data
    except Exception as error:
        print('Error fetching data:', error)

def main():
    url = 'https://jsonplaceholder.typicode.com/todos/1'
    data = fetchData(url)
    print(data)