const Antispam = require('antispam-discord');
const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
const fs = require('fs');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('json/database.json');
const db = low(adapter);

db.defaults({ histoires: [], xp: []}).write()

var interserverCooldown = new Set();

client.login('NjAyNTg4MTgxNTI2NzQxMDAy.XVl9Vg.axOe3FMgNY_W33DOQfgUViRzDr8');

client.commands = new Discord.Collection();

client.on('ready', () => {
    console.log(`Je suis allumé !`);

    let bl = client.channels.get('609342868850475054');
let blacklist1 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("**__Je me suis correctement allumé !__**")
        .addField("J\'ai commancé mon travail dans ", client.guilds.size + " serveurs," + "\n" + client.channels.size + " channels," + "\n" + client.users.size + " utilisateurs.") 
        .setTimestamp();
    bl.send(blacklist1);

});
client.on('guildMemberAdd', function (member) {
    let embed = new Discord.RichEmbed()
        .setColor('#0CF3CC')
        .setDescription('**<@'+member.id + '> nous a rejoind !**')
        .addField("**ID du membre :**", member.id, true)
        .addField("**Il est donc :**", member.guild.memberCount+'èmes', true)
        .addField("**Compte créé le :**", member.createAt)
        .setFooter(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
    member.guild.channels.get('604356553512058900').send(embed)
    member.addRole('603765661361242142')
});
 
client.on('guildMemberRemove', function (member) {
    let embed = new Discord.RichEmbed()
        .setColor('#0CF3CC')
        .setDescription('**<@'+member.id + '> nous a quitté !**')
        .addField("ID du membre :", member.id, true)
        .addField("Nous somme donc :", member.guild.memberCount, true)
        .setFooter(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
    member.guild.channels.get('604356553512058900').send(embed)
});
client.on('message', message =>{
    if(message.author.bot) return;
    if(!message.guild) return;
    let chaine = message.guild.channels.find('name', '┊▷-logs-messages ');
    if(chaine) chaine.send("", {
        embed: {
        color: 0x00AAFF,
        author: message.author.name,
        title: '**__LOGS DES MESSAGES DU SERVEUR__**',
        description: `je surveille **${message.client.users.size}** utilisateurs`,
        fields: [ 
        {  
        name: '**__Auteur :__**',
        value: "**"+message.author.username+"**" + "\n" + "**"+message.author.id+"**",
        inline: true   
        }, {
        name: '**__Message :__**',
        value: message.content,
        inline: true
        }, {    
        name: '**__Channel :__**',
        value: "**<#"+message.channel.id+">**",
        }],
        thumbnail: {
        url: message.client.iconURL
        },
        timestamp: new Date(),
        footer: {
        text: '©Bot By TECHNOBOY',
    }}});
});
client.on('message', message => {

    var msgauthor = message.author.id;

    if(message.author.bot)return;

    if(!db.get("xp").find({user: msgauthor}).value()){
        db.get("xp").push({user: msgauthor, xp: 1}).write();
    }else{
        var userxpdb = db.get("xp").filter({user: msgauthor}).find('xp').value();
        console.log(userxpdb);
        var userxp = Object.values(userxpdb)
        console.log(userxp)
        console.log(`Nombre d'XP : ${userxp[1]}`)

        db.get("xp").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 1}).write();

    if (message.content === "t/level"){
        if (interserverCooldown.has(message.author.id)) return message.channel.send('**Vous ne pouvez utiliser level qu\'une fois toutes les 3 secondes**.').then(message => message.delete(3000));
        message.delete();
        var xp = db.get("xp").filter({user: msgauthor}).find('xp').value()
        var xpfinal = Object.values(xp);
        var xp_embed = new Discord.RichEmbed()
            .setTitle(`**__Total des XP de__** ***__${message.author.username}__***`)
            .setColor("RANDOM")
            .setDescription("*Affichage des XP*")
            .addField("**__XP:__**", `${xpfinal[1]} d'XP`)
            .setFooter("Continue comme ça !")
        message.channel.send({embed: xp_embed});
        interserverCooldown.add(message.author.id);
            setTimeout(function () {
                interserverCooldown.delete(message.author.id);
            }, 3000);
    }
    }
});
client.on("guildCreate", guild => {

    var embed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setTitle(`Server + (${client.guilds.size})`)
    .addField("**__Owner:__**" , '```fix'+'\n'+guild.owner.user.username+'\n'+'```', true)
    .addField("**__Owner ID:__**", '```cpp'+'\n'+'"'+guild.ownerID+'"'+'\n'+'```', true)
    .addField("**__Server:__**", '```fix'+'\n'+guild.name+'\n'+'```', true)
    .addField("**__Server ID:__**", '```cpp'+'\n'+'"'+guild.id+'"'+'\n'+'```', true)
    .setTimestamp()
    .setFooter("TECHNOBOT créer part TECHNOBOY")
    .setThumbnail()
    client.guilds.get('596020968707850240').channels.get('609407171788144661').send(embed)
}

);
client.on("guildDelete", guild => {

    var embed = new Discord.RichEmbed()
    .setColor("RED")
    .setTitle(`Server - (${client.guilds.size})`)
    .setTitle("**__Un serveur m'as enlevé !__**")
    .addField("**__Owner:__**" , '```fix'+'\n'+guild.owner.user.username+'\n'+'```', true)
    .addField("**__Owner ID:__**", '```cpp'+'\n'+'"'+guild.ownerID+'"'+'\n'+'```', true)
    .addField("**__Server:__**", '```fix'+'\n'+guild.name+'\n'+'```', true)
    .addField("**__Server ID:__**", '```cpp'+'\n'+'"'+guild.id+'"'+'\n'+'```', true)
    .setTimestamp()
    .setFooter("TECHNOBOT créer part TECHNOBOY")
    .setThumbnail()
    client.guilds.get('596020968707850240').channels.get('609407171788144661').send(embed)
}

);

client.on('message', message => {
    if(message.content === 't/captcha'){
        message.delete();

   let captcha = new Discord.RichEmbed()
    .setTitle('**Bonjour et Bienvenue !**')
    .addField('pour passé le captche il vous suffit de tapper le code de l\'image si dessous.', '[─────────────────────────────](https://discord.gg/brdxvN)')
    .setImage('https://qph.fs.quoracdn.net/main-qimg-0025b2b485965ef8cb19e933bcc367e1')
    .setFooter('le message ce supprimera sous 15secondes  |  '+message.author.tag, message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setTimestamp()
   message.channel.send(captcha).then(message => message.delete(15000));
    }
});

client.on('message', message => {
    if(message.content === 'W6 8HP') {
        message.delete();

        let catpcha = new Discord.RichEmbed()
            .setColor('RED')
            .setTitle('**Errer dans le code !**')
            .setDescription('**veuillez inscrire le code __sans__ majuscule et __sans__ espace !**')
            .setFooter(message.author.tag, message.author.avatarURL)
            .setThumbnail(message.author.avatarURL)
            .setTimestamp()
        message.channel.send(catpcha).then(message => message.delete(6000));
    }
});

client.on('message', message => {
    if(message.content === 't/w68hp') {
        message.delete();

        let catpcha = new Discord.RichEmbed()
            .setColor('RED')
            .setTitle('**Errer dans le code !**')
            .setDescription('**veuillez inscrire le code __sans__ le prefix !**')
            .setFooter(message.author.tag, message.author.avatarURL)
            .setThumbnail(message.author.avatarURL)
            .setTimestamp()
        message.channel.send(catpcha).then(message => message.delete(8000));
    }
});

client.on('message', message => {
    if(message.content === 't/W6 8HP') {
        message.delete();

        let catpcha = new Discord.RichEmbed()
            .setColor('RED')
            .setTitle('**Errer dans le code !**')
            .setDescription('**veuillez inscrire le code __sans__ majuscule, __sans__ espace et __sans__ le prefix !**')
            .setFooter(message.author.tag, message.author.avatarURL)
            .setThumbnail(message.author.avatarURL)
            .setTimestamp()
        message.channel.send(catpcha).then(message => message.delete(8000));
    }
});

client.on('message', message => {
    if(message.content === 'w68hp') {
        message.delete();

        let addRole = message.guild.roles.find(role => role.id === '610541782471540747')
        let delRole = message.guild.roles.find(role => role.id === '603765661361242142')
        let member = message.guild.member(message.author.id)

        if (delRole) {
            member.removeRole(delRole)
        }

        if (addRole) {
            
            message.author.send({
                        embed: {
                            color: 0x03e428,
                            description: `${member} **, vous avez reçut le rôle __Membre Validé__ avec succès !**`
                        }
                    })
            member.addRole(addRole)
            }

        let verify = client.channels.get('610871320527372288');
        let embed = new Discord.RichEmbed()
            .setColor("GREEN")
            .addField("**Un membre a passé le __Captcha__ !**", "__**Membre :**__ " + "\n" + member.user.username + "\n" +  "**__date de création du compte :__** " + "\n" + moment.utc(message.author.createdAt).format('LL'), true)
            .addField("┊   **je suis utiles** ", "┊   sur " + message.client.guilds.size + " serveurs," + "\n" + "┊   sur " + message.client.channels.size + " channels," + "\n" + "┊   pour " + message.client.users.size + " utilisateurs.", true)
        verify.send(embed);
    }
});

client.on('message', message => {
    if (message.content === `${client.user}`) {

        message.channel.send({
            embed: {
                color: 0x86e4ad,
                title: '**__TECHNOBOT__**',

                fields: [
                    {
                        name: '**Infos :**',
                        value: 'Mon préfix est [[t/]](https://technoboy-official.webnode.fr/bot/), pour plus d\'information, faite la commande [[t/help]](https://technoboy-official.webnode.fr/bot/).',
                    },
                    {
                        name: '**Nos réseaux :**',
                        value: '**__Instagramme :__** destructeur_du_71 \n **__Snap :__** loic_val56771 \n **__Discord :__** 〘†_TECHNOBOY_†〙#9480'
                    },
                    {
                        name: '╔══════════════════◃◖⟪۞⟫◗▹═══════════════════╗',
                        value: '╚═══════════════════-[ADD MOI](https://discordapp.com/oauth2/authorize?client_id=602588181526741002&scope=bot&permissions=1341644233)-═══════════════════╝',
                    }],
                    timestamp: new Date(),
                footer: {
                    text: '@TECHNOBOT#5479',
                    icon_url: 'https://images-ext-1.discordapp.net/external/iinuIThOHQdOWXjsoXsL6NlsRuO_kiq3CFrypi4NL_U/https/cdn.discordapp.com/attachments/603765758970953749/605845593646039041/ppdemonbot.png'
                } 
            }
        })
    }
});

fs.readdir('./Commandes/', (error, f) => {
    if (error) console.error(error);
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) return console.log('Aucune commande n\'a été trouvée !');

        commandes.forEach((f) => {
            let commande = require(`./Commandes/${f}`);
            console.log(`${f} commande chargée !`);

        client.commands.set(commande.help.name, commande);
        });
});

fs.readdir('./Events/', (error, f) => {
    if (error) console.error(error);
        console.log(`${f.length} events oppérationnel !`);

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            const event = f.split('.')[0];

        client.on(event, events.bind(null, client));
        });
});