import { MessageEmbed } from 'discord.js';
import { FileData } from '../models/file-models';
export declare class EmbedBuilder {
    static buildEmbeds(fileData: FileData): {
        [embedName: string]: MessageEmbed;
    };
    private static buildEmbed;
    static populateEmbed(embed: MessageEmbed, variables?: {
        [name: string]: string;
    }): MessageEmbed;
}
//# sourceMappingURL=embed-builder.d.ts.map