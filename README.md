# json_the_cat

Fetch cats breed data from the API using request

The breedFetcher.js file is exported using module.
User/Client will be using the index.js file to make the request.

Should take command line argument.

`> node index.js Siberian`


## How to

Allow user to specify the breed name using command-line arguments.

`> node index.js Chartreux`

`The Chartreux is generally silent but communicative. Short play sessions, mixed with naps and meals are their perfect day. Whilst appreciating any attention you give them, they are not demanding, content instead to follow you around devotedly, sleep on your bed and snuggle with you if you’re not feeling well.`

## Edge case

This function should call the callback with either an error if there's a error or null if there isn't, for the first argument. The table below shows in more detail what to pass into callback for each of the two scenarios.

1. outcome: success
error value: null
description value: description from body
2. outcome: failure	
error value: the error we get from request
description value: null
