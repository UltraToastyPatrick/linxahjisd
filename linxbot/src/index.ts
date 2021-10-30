import "reflect-metadata"
import { Client } from "discordx";
import { Intents, Interaction, Message } from "discord.js";
import { token, guildId } from "./config";

const client = new Client({
    botId: "Linxbot",
    classes: [`${__dirname}/commands/**/*.{ts, js}`],
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
    ],
    silent: false
})

client.on("ready", () => {
    client.clearApplicationCommands(guildId)
    console.log(">> Linxbot Started");
    client.initApplicationCommands();
})

client.on("interactionCreate",
    async (interaction: Interaction) => {
        client.executeInteraction(interaction);
    }
)

client.login(token);
