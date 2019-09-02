module.exports = async(client) => {
    setInterval(function(){

        var jeuxs = [
        `MENTIONNE MOI`,
        `être sur ${client.guilds.size} serveurs`];
      
        var jeux = jeuxs[Math.floor(Math.random()*jeuxs.length)];
    
        client.user.setPresence({ 
          game:{ 
            name: jeux, 
            type: 0
          } 
        });
    }, 7000);
};