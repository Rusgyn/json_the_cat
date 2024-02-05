# json_the_cat

Fetch cats breed data from the API using request

Should take command line argument
`> node breedFetcher.js Siberian`


## How to

Allow user to specify the breed name using command-line arguments.

`> node breedFetcher.js Chartreux`

`\nThe Chartreux is generally silent but communicative. Short play sessions, mixed with naps and meals are their perfect day. Whilst appreciating any attention you give them, they are not demanding, content instead to follow you around devotedly, sleep on your bed and snuggle with you if you’re not feeling well.`

## Edge case

1. Breed Not found
an appropriate message if the requested breed is not found.

2. Request Failed
In the event that the request fails, the error argument in our callback function would NOT be undefined, and instead contain details.