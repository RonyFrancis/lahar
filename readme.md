# Description
**Lahar** is a small nodejs/Express proxy that creates RESTful endpoints to communicate with [ChatScript](https://github.com/bwilcox-1234/ChatScript). You can host it on the same server as CS or elsewhere.

**Lahar** is AKA *the Sumerian cattle-god or goddess*.

Its goal is to provide URI that can be reached across different devices using standard HTTP requests. In other words, **Lahar** takes care of the socket negotiation, so you can communicate with CS using POST and GET. As a side effect, it also allows you to interact with the proxied data on the fly to run analysis, custom logging, analytics, etc.

*Lahar was developed partly through the [LabLabLab](http://www.lablablab.net/en/about/) research project.*

**Lahar is a work in progress and should only be used as such. Please do report bugs and features request. Of course, all pull request are super welcome.** :ice_cream: :squirrel:

# Perks
* Asynchronous XHR requests
* Return normalized JSON
* Improved error handling
* Analytics
* Test interface

# Installation
**nodejs ^5.5.0 is required on the host system. Preview versions might work but just haven't been tested so far.**
**nodemon ^1.8.1 is required for development.**

First off clone the repo to your server's directory:  
`git clone git@github.com:kuzyn/lahar.git`  
`cd lahar`

Then edit your server configuration in the config.js file:
```javascript
{
    server: {
      port: 1024,
      host: "localhost",
      allowHalfOpen: true
    },
    name: "HARRY"
  }
```

Start Lahar:
`npm run serve`

Yay. You can now visit your server, see the client, send XHR to your server who will forward them to CS.

# License
The MIT License (MIT)
Copyright (c) 2016 Samuel Cousin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
