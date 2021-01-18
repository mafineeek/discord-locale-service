import { MessageEmbed } from 'discord.js';
export declare class MultilingualService {
    private internalDatas;
    constructor(folderPath: string);
    private getFileData;
    getEmbed(embedName: string, langCode: string, variables?: {
        [name: string]: string;
    }): MessageEmbed;
    getRef(refName: string, langCode: string, variables?: {
        [name: string]: string;
    }): string;
}
//# sourceMappingURL=multilingual-service.d.ts.map