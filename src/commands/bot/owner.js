const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `Siro Lemon`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `</Enpro>#6736`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `Brainless KingDom`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `[https://fb.com/Enpro.HallowedKnight]`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 