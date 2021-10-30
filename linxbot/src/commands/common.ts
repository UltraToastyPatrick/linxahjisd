import { CommandInteraction } from "discord.js";
import { Discord, Slash } from "discordx"

@Discord()
abstract class AppDiscord {
    @Slash("ping")
    private ping(interaction: CommandInteraction) {
        interaction.reply(`Response Latency: ${Date.now() - interaction.createdTimestamp}ms`);
    }
    @Slash("help")
    private help(interaction: CommandInteraction) {
        interaction.reply(`TODO`);        
    }
    @Slash("mute")
    private mute(interaction: CommandInteraction) {
        interaction.reply(`TODO`);
    }
    @Slash("kick")
    private kick(interaction: CommandInteraction) {
        interaction.reply(`TODO`);
    }
    @Slash("ban")
    private ban(interaction: CommandInteraction) {
        interaction.reply(`TODO`);
    }
}