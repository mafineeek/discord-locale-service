"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbedBuilder = void 0;
const discord_js_1 = require("discord.js");
const utils_1 = require("../utils");
class EmbedBuilder {
    static buildEmbeds(fileData) {
        let defaultEmbed = this.buildEmbed(fileData.default);
        let embeds = {};
        for (let [embedName, embedData] of Object.entries(fileData.embeds)) {
            let embed = this.buildEmbed(embedData, defaultEmbed);
            embeds[embedName] = embed;
        }
        return embeds;
    }
    static buildEmbed(embedData, defaultEmbed) {
        let embed = new discord_js_1.MessageEmbed(defaultEmbed ?? undefined);
        let title = utils_1.JsonUtils.joinString(embedData.title);
        if (title) {
            embed.setTitle(title);
        }
        let url = embedData.url;
        if (url) {
            embed.setURL(url);
        }
        let thumbnail = embedData.thumbnail;
        if (thumbnail) {
            embed.setThumbnail(thumbnail);
        }
        let description = utils_1.JsonUtils.joinString(embedData.description);
        if (description) {
            embed.setDescription(description);
        }
        let fields = embedData.fields;
        if (fields) {
            for (let field of fields) {
                field.name = utils_1.JsonUtils.joinString(field.name);
                field.value = utils_1.JsonUtils.joinString(field.value);
                if (field.inline !== undefined) {
                    embed.addField(field.name, field.value, field.inline);
                }
                else {
                    embed.addField(field.name, field.value);
                }
            }
        }
        let image = embedData.image;
        if (image) {
            embed.setImage(image);
        }
        let footer = embedData.footer;
        let footerText = utils_1.JsonUtils.joinString(footer?.text);
        let footerIcon = footer?.icon;
        if (footerText && footerIcon) {
            embed.setFooter(footerText, footerIcon);
        }
        else if (footerText) {
            embed.setFooter(footerText);
        }
        // TODO: Allow date or number timestamp
        let timestamp = embedData.timestamp;
        if (timestamp) {
            embed.setTimestamp();
        }
        let color = embedData.color;
        if (color) {
            embed.setColor(color);
        }
        return embed;
    }
    static populateEmbed(embed, variables) {
        if (embed.title) {
            embed.title = utils_1.StringUtils.replaceVariables(embed.title, variables);
        }
        if (embed.description) {
            embed.description = utils_1.StringUtils.replaceVariables(embed.description, variables);
        }
        for (let [index, field] of embed.fields.entries()) {
            embed.fields[index].name = utils_1.StringUtils.replaceVariables(field.name, variables);
            embed.fields[index].value = utils_1.StringUtils.replaceVariables(field.value, variables);
        }
        if (embed.footer?.text) {
            embed.footer.text = utils_1.StringUtils.replaceVariables(embed.footer.text, variables);
        }
        return embed;
    }
}
exports.EmbedBuilder = EmbedBuilder;
//# sourceMappingURL=embed-builder.js.map