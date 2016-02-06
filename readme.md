# Description
**Lahar** is a small nodejs/Express proxy that create RESTful endpoints to communicate with ChatScript. You can host it on the same server as ChatScript or elsewhere.

Its goal is to provide URI that can be reached across different devices using standard HTTP requests. In other words, **Lahar** takes care of the socket negotiation, so you can communicate with ChatScript using POST and GET on your defined endpoints. It also allows you to interact with the proxied data on the fly to do analysis, custom logging, analytics, etc.

# Perks
* Accept XHR requests
* Return normalized JSON
* Improved error handling
* Analytics
* Test interface

# Installation
Requirements are Nodejs ^5.5.0
