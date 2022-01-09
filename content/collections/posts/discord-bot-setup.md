---
title: How to set up your own Discord Bot
date: 2022-01-09T17:05:44+01:00
tags: ["Discord", "Bot", "Red-DiscordBot", "Docker"]
author: ["FLKY"]
url: "/posts/discord-bot-setup"
description: "How to set up your own Discord Bot using the Red-DiscordBot and Docker"
cover:
    image: "https://media.discordapp.net/attachments/929076177841307698/929786562521215036/unknown.png"           # image path/url
    caption: "Red-DiscordBot"         # display caption under cover
    relative: false     # when using page bundles set this to true

---

I'm going to assume that you already have Docker installed and configured. If you don't, simply follow the Docker installation tutorial [here](https://docs.docker.com/get-docker/).

## Step 1: Obtain a token

Since we want our bot to work, we need to obtain a token. This token is used to authenticate the bot.
To obtain a token, go to discords [Developer Portal](https://discordapp.com/developers/applications/) and click

![New Application](https://media.discordapp.net/attachments/929076177841307698/929771578516996116/unknown.png)

in the top right corner next to your profile picture.

A prompt will pop up asking you to enter the application's name. This name is only used within the application list and upon the initial bot creation, you can simply the bot later to something different.

![Create an application](https://media.discordapp.net/attachments/929076177841307698/929772179132915742/unknown.png)

Just enter an arbitrary name and click 

![Create](https://media.discordapp.net/attachments/929076177841307698/929773958973247538/unknown.png)

You should now be greeted with the `General Information` page of the application you just created.
In the Navigation bar on the left, select `Bot` and the click 

![Add Bot](https://media.discordapp.net/attachments/929076177841307698/929774295083806800/unknown.png)

A prompt like this should have appeared.

![Add a bot to this app?](https://media.discordapp.net/attachments/929076177841307698/929774567638073345/unknown.png)

Just click 

![Yes, do it!](https://media.discordapp.net/attachments/929076177841307698/929774794734440538/unknown.png)

and continue.
Congratulations, you have just added your first bot!
For red to work we need to enable all intents under `Privileged Gateway Intents` like this

![Privileged Gateway Intents](https://media.discordapp.net/attachments/929076177841307698/929784303599116379/unknown.png#center)

Next click on the copy button next to the Regenerate button, and you should now have your first token.

![Token](https://media.discordapp.net/attachments/929076177841307698/929776104443637811/unknown.png)

Now you're pretty much set up for the second step.

## Step 2: Install and run the bot

Since we want to get the bot up and running quickly, I'm going to use the [Docker multi-arch container](https://docs.docker.com/compose/overview/) by PhasecoreX to automate the process.

Open a terminal and paste the following command:

```ps1
docker run -v /local_folder_for_persistence:/data -e TOKEN=bot_token -e PREFIX=. phasecorex/red-discordbot
```

Within this command, you need to replace `/local_folder_for_persistence` with the path to your local folder where you want to store the bot's data. Next, you need to switch out `bot_token` with the bots token we obtained in [Step 1](#step-1-obtain-a-token). The last thing we need to change is the prefix. This is the prefix that is used to call commands and can be everything you want.

Now just run the command and Docker will do the rest for you.


## Step 3 (Optional): Do the initial setup

Once Docker has finished the setup, you should see a printout like this:

![Printout](https://media.discordapp.net/attachments/929076177841307698/929786562521215036/unknown.png#center)

Click the URL on the bottom to invite bot to your server.
This is currently the barebones version of your bot and has almost no commands or functionality. To fix this, you need to either dm the bot or send the following message in any channel of the server you invited it to:

```plain
p!load admin alias audio cleanup customcom downloader economy filter general image mod modlog mutes permissions reports trivia warnings
```
I also recommend you to run

```plain
p!helpset usemenus
```
so the bot uses menus and doesn't spam the chat.

Aaand you're done with your initial configuration and setup! It's that easy!
Everything you want to do from now on is up to you!

