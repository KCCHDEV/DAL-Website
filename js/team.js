/*
THIS CODE BY LWJerri#3290
*/
const boxOwners = document.getElementById("owners_list");
const boxbotlist = document.getElementById("bot_list");
/*
you can use this api but if you need to create custome api check:
 https://github.com/Hadi-Koubeissi/discord-web-api
*/
const API = "https://discord-web-api.glitch.me/discord/user/";

const owners = [
    {
        "id": "631102214076891157",
        "post": "Dev | Owner Website/bot",
        "GHURL": "https://github.com/Hadi-Koubeissi",
        "InstaURL": "",
        "YTURL": "https://www.youtube.com/channel/UCmO0xdpxQr7fX2Csth_2JOQ"
    }
]

for (let indexOne = 0; indexOne < owners.length; indexOne++) {
    const elementOwners = owners[indexOne];

    $.getJSON(API + elementOwners.id)
        .then(output => {
            if (!output.username || !output.url) {
                setTimeout(function () {
                    document.querySelectorAll(".banner img").forEach(imgs => imgs.src = url + "../assets/bot.png");
                }, 1000);
            }

            const ownerList = "<div id='trigger' class='card' style='margin: 15px;'><div class='banner'><img src='" + output.url + "'></div></br></br></br></br><h2 class='name'>" + output.username + "</h2><div class='title'><h1 id='trigger2' style='font-size: 26px; color: #000000;'>" + elementOwners.post + "</h2></div><div class='actions'><div class='follow-btn' style='margin-bottom: 5px;'><a href='" + elementOwners.GHURL + "' target='_blank'><button style='color: #000000;'>GitHub</button></a></div><div class='follow-btn'><a href='" + elementOwners.YTURL + "' target='_blank'><button style='color: #000000;'>YouTube</button></a></div></div></div>"
            boxOwners.innerHTML += ownerList;
        });
}

const bot1 = [
    {
        "id": "915021697688666123",
        "post": "DAL Bot #1",
        "GHURL": "https://github.com/KCCHDEV/DAL-Music-Bot-Code",
        "InstaURL": "",
        "YTURL": "https://linktr.ee/dalmusicbot"
    }
]

for (let indexOne = 0; indexOne < bot1.length; indexOne++) {
    const botlist1 = bot1[indexOne];

    $.getJSON(API + botlist1.id)
        .then(output => {
            if (!output.username || !output.url) {
                setTimeout(function () {
                    document.querySelectorAll(".banner img").forEach(imgs => imgs.src = url + "../assets/bot.png");
                }, 1000);
            }

            const botlist1d = "<div id='trigger' class='card' style='margin: 15px;'><div class='banner'><img src='" + output.url + "'></div></br></br></br></br><h2 class='name'>" + output.username + "</h2><div class='title'><h1 id='trigger2' style='font-size: 26px; color: #000000;'>" + botlist1.post + "</h2></div><div class='actions'><div class='follow-btn' style='margin-bottom: 5px;'><a href='" + botlist1.GHURL + "' target='_blank'><button style='color: #000000;'>Copy code</button></a></div><div class='follow-btn'><a href='" + botlist1.YTURL + "' target='_blank'><button style='color: #000000;'>Invite</button></a></div></div></div>"
            boxOwners.innerHTML += botlist1d;
        });
}

const bot2 = [
    {
        "id": "974248856101466122",
        "post": "DAL Bot #2",
        "GHURL": "https://github.com/KCCHDEV/DAL-Music-Bot-Code",
        "InstaURL": "",
        "YTURL": "https://linktr.ee/dalmusicbot"
    }
]

for (let indexOne = 0; indexOne < bot1.length; indexOne++) {
    const botlist2 = bot2[indexOne];

    $.getJSON(API + botlist2.id)
        .then(output => {
            if (!output.username || !output.url) {
                setTimeout(function () {
                    document.querySelectorAll(".banner img").forEach(imgs => imgs.src = url + "../assets/bot.png");
                }, 1000);
            }

            const botlist2d = "<div id='trigger' class='card' style='margin: 15px;'><div class='banner'><img src='" + output.url + "'></div></br></br></br></br><h2 class='name'>" + output.username + "</h2><div class='title'><h1 id='trigger2' style='font-size: 26px; color: #000000;'>" + botlist2.post + "</h2></div><div class='actions'><div class='follow-btn' style='margin-bottom: 5px;'><a href='" + botlist2.GHURL + "' target='_blank'><button style='color: #000000;'>Copy code</button></a></div><div class='follow-btn'><a href='" + botlist2.YTURL + "' target='_blank'><button style='color: #000000;'>Invite</button></a></div></div></div>"
            boxOwners.innerHTML += botlist2d;
        });
}