window.onload = function () {

    // GENERAL CONFIGS v0.1

    //Site title
    let title = 'Epic Civs';

    //Server Ip (counter)
    var serverIp = 'play.kurafuto.fun';
    var serverIpPort = 25565;

    //Banner image (url) 
    var bannerTop = 'img/bannerTop.png';

    //--------------- Home Gallery ---------------
    //Firs text / image (url)
    var text_Gfirst = '独立地牢';
    var image_Gfirst = 'img/hg1.png';
    //Second text / image (url)
    var text_Gsecond = '独立矿场'
    var image_Gsecond = 'img/hg2.png';
    //Third text / image (url)
    var text_Gtrird = '自建城镇文明'
    var image_Gtrird = 'img/hg3.png';
    //--------------------------------------------

    //Type Server (FullPVP, MiniGame, Survival, and others...)
    var typeServer = 'RPG RTS Rouge';

    //--------------- Home Gallery ---------------
    // Image automatically changes according to the name :)
    //Firs player nick / comment text
    var firstPlayerName = 'Shepred_T';
    var firstPlayerComment = "这是未曾设想的道路";
    //Second player nick / comment text
    var secondPlayerName = 'None';
    var secondPlayerComment = "空位";
    //Third player nick / comment text
    var trirdPlayerName = '空位';
    var trirdtPlayerComment = "空位";
    //--------------------------------------------

    //Social media links / banner (url)
    var urlYoutube = "https://space.bilibili.com/10078071?spm_id_from=333.976.0.0";
    var bannerSocialImage = "img/buttonsSocial.png";


    //------------------ DO NOT MODIFY THE CONTENT BELOW ------------------
    //------------------ DO NOT MODIFY THE CONTENT BELOW ------------------
    //------------------ DO NOT MODIFY THE CONTENT BELOW ------------------

    try {

        document.getElementById('serverIpText').innerHTML = serverIp;
        document.getElementById('title').innerHTML = title;
        document.getElementById('bannerTop').style.backgroundImage = "url(" + bannerTop + ")";
        document.getElementById('image_Gfirst').style.backgroundImage = "url(" + image_Gfirst + ")";
        document.getElementById('text_Gfirst').innerHTML = text_Gfirst;
        document.getElementById('image_Gsecond').style.backgroundImage = "url(" + image_Gsecond + ")";
        document.getElementById('text_Gsecond').innerHTML = text_Gsecond;
        document.getElementById('image_Gtrird').style.backgroundImage = "url(" + image_Gtrird + ")";
        document.getElementById('text_Gtrird').innerHTML = text_Gtrird;
        document.getElementById('typeServer').innerHTML = typeServer;
        document.getElementById('firstPlayerName').innerHTML = firstPlayerName;
        document.getElementById('secondPlayerName').innerHTML = secondPlayerName;
        document.getElementById('trirdPlayerName').innerHTML = trirdPlayerName;
        document.getElementById('firstPlayerImage').src = "https://cravatar.eu/helmavatar/" + firstPlayerName + "/190.png";
        document.getElementById('secondPlayerImage').src = "https://cravatar.eu/helmavatar/" + secondPlayerName + "/190.png";
        document.getElementById('trirdPlayerImage').src = "https://cravatar.eu/helmavatar/" + trirdPlayerName + "/190.png";
        document.getElementById('firstPlayerComment').innerHTML = firstPlayerComment;
        document.getElementById('secondPlayerComment').innerHTML = secondPlayerComment;
        document.getElementById('trirdtPlayerComment').innerHTML = trirdtPlayerComment;
        document.getElementById('urlYoutube').href = urlYoutube;
        document.getElementById('bannerSocialImage').style.backgroundImage = "url(" + bannerSocialImage + ")";

    } catch (e) {


    }


    MinecraftAPI.getServerStatus(serverIp, {
        port: serverIpPort // optional, only if you need a custom port
    }, function (err, status) {
        if (err) {
            return document.querySelector('.server-status').innerHTML = 'Error loading status';
        }

        document.getElementById('serverStatus').innerHTML = status.online ? '在线' : '离线';
        document.getElementById('playersOn').innerHTML = status.players.now;
        document.getElementById('playersMax').innerHTML = status.players.max;
    });

    setTimeout(() => {
        var status = document.getElementById('serverStatus');
        if (status.textContent == '在线') {
            status.style.color = 'green'
        } else {
            status.style.color = 'red'
        }
    }, 2000);

}

function copyIp() {
    let ip = document.getElementById('serverIpText').innerHTML;
    navigator.clipboard.writeText(ip);
}