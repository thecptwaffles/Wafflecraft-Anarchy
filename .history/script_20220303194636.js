MinecraftAPI.getServerStatus(' 71.218.138.226', {
    port: 32479 // optional, only if you need a custom port
}, function (err, status, server, players) {
    if (err) {
    return document.querySelector('.server-online').innerHTML = 'Error loading status';
    }

    // you can change these to your own message!
    document.querySelector('.server-online').innerHTML = status.online ? 'online' : 'offline';

    document.querySelector('.server-motd').innerHTML = status.motd;

    document.querySelector('.server-players').innerHTML = status.players.now;

    document.querySelector('.server-max').innerHTML = status.players.max

    document.querySelector('.server-version').innerHTML = status.server.name
}
);
