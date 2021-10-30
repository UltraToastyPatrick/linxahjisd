import { CommandInteraction } from "discord.js";
import {Discord, Slash, SlashChoice, SlashOption} from "discordx";

enum Games {
    AmongUs = "Among Us",
    JackBox = "Jack Box",
    Gartic = "Gartic Phone"
}

@Discord()
class AppDiscord{
    @Slash("gamenight")
    private gamenight(
        @SlashOption('game', { description: 'Game that will be played', type: "STRING", required: true })
        game: String,
        interaction: CommandInteraction
        ){
        interaction.reply(`${game}`)
    }

}