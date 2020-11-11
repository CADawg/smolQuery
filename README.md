# smolQuery
## Why?

SmolQuery exists because sometimes even writing for loops makes you want to revert to jQuery, and jQuery is waay to large for "just modern browser" websites.

## Where?

Only modern browsers as I'm using modern language.

## Features

### Element Selector

`s("#selector")` will fetch you the element(s) specified. It returns a function which allows you to run things on each element by specifiying a function. It passes each element to the specified function individually.

### Fetch Wrapper 

`function(method = "POST", url, data = "", completed = r => r, config = {})`

Specify:
- Method : GET/POST/PUT .etc.
- URL: URL to request
- Data: If GET either a dictionary (converted to querystring), string (without ?), URLSearchParams or FormData. Any other request either a String, Dictionary (Converted to QueryString), FormData, Blob, BufferSource, URLSearchParams
- Completed: A function to run on success or failure
- Config: Any additional config for Fetch()

## Builds

### Full

You get the element selector and fetch wrapper.

### Slim

Only our Selector for elements is included in this build.
