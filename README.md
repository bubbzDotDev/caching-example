# In-Memory Caching Example

## Running the App

1. Use `npm run start` in the project directory to start the app.
1. Navigate a browser window to [http://localhost:8000/goat0](http://localhost:8000/goat0).
1. Check logs in terminal where server is running.
1. Refresh the page before the key gets deleted to verify cached key being fetched by watching logs.
1. Try with other two goats, replacing `/goat0` in URL with `/goat1` or `/goat2`.

## What is Happening?

1. When a path is first loaded via the URL, it's corresponding key, e.g., `goat0`, is saved in memory with a value of its path to the associated art file.
1. After ten seconds, the key/value pair in memory are deleted.
1. If you refresh the page before it is deleted, you'll notice the logs with say `"... fetching cached key: ..."` instead of the initial `"... fetching non-cached key ..."` you saw after first page load.
1. If you refresh the page after it is deleted, you'll see the same behavior as initial page load: `"... fetching non-cached key ..."`

Special thanks to Admiral Potato from [The Unaffiliated Developer Standup Meetup Group](https://www.meetup.com/the-unaffiliated-developer-standup/) for helping me create this example app.
