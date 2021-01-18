# Module made, generally for me

## Usage:

```js
const {MutlilingualService} = require("discord-locale-service");
const LangService = new MultilingualService('langs')
client.on("message", (message) => {
    if(message.content === 'test'){
        message.channel.send(LangService.getRef('TEST', 'pl', {var: var}))
    }
})
```

## Example JSON file
!! It must be named as lang.<language code>.json !!
```json
{
    refs:{
        "TEST": "Example test with example {{var}}"
    },
    embeds:{
        "example":{
            "title": "Title",
            "description": "desc"
        }
    }
}

if you want help - contact me here `мαƒιиєєєк#9999`