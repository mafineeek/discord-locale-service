"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultilingualService = void 0;
const discord_js_1 = require("discord.js");
const path_1 = __importDefault(require("path"));
const embed_builder_1 = require("./services/embed-builder");
const utils_1 = require("./utils");
let Config = require('../config/config.json');
class MultilingualService {
    // TODO: Optional "options" object
    constructor(folderPath) {
        this.internalDatas = {};
        let fileNames = utils_1.FileUtils.readFileNames(folderPath);
        for (let fileName of fileNames) {
            // Extract file language code
            let langCode = utils_1.RegexUtils.extractLangCode(fileName);
            if (!langCode || this.internalDatas[langCode]) {
                continue;
            }
            let filePath = path_1.default.join(folderPath, fileName);
            let rawFileData = this.getFileData(filePath);
            if (!rawFileData) {
                continue;
            }
            let internalData = { refs: {}, embeds: {} };
            for (let [refNam, refData] of Object.entries(rawFileData.refs)) {
                let ref = utils_1.JsonUtils.joinString(refData);
                internalData.refs[refNam] = ref;
            }
            internalData.embeds = embed_builder_1.EmbedBuilder.buildEmbeds(rawFileData);
            this.internalDatas[langCode] = internalData;
        }
    }
    getFileData(filePath) {
        // Read file
        let fileContents = utils_1.FileUtils.readFile(filePath);
        // Check if file is JSON
        let fileData;
        try {
            let replacedFileContents = fileContents;
            // Replace up to X levels deep
            for (let i = 0; i < Config.replacementLevels; i++) {
                let rawFileData = JSON.parse(replacedFileContents);
                replacedFileContents = utils_1.StringUtils.replaceRefs(replacedFileContents, rawFileData.refs);
            }
            fileData = JSON.parse(replacedFileContents);
        }
        catch (error) {
            return;
        }
        return fileData;
    }
    getEmbed(embedName, langCode, variables) {
        let embed = this.internalDatas[langCode]?.embeds[embedName];
        if (!embed) {
            return;
        }
        let newEmbed = new discord_js_1.MessageEmbed(embed);
        if (!variables) {
            return newEmbed;
        }
        return embed_builder_1.EmbedBuilder.populateEmbed(newEmbed, variables);
    }
    getRef(refName, langCode, variables) {
        let ref = this.internalDatas[langCode]?.refs[refName];
        if (!ref) {
            return;
        }
        if (!variables) {
            return ref;
        }
        return utils_1.StringUtils.replaceVariables(ref, variables);
    }
}
exports.MultilingualService = MultilingualService;
//# sourceMappingURL=multilingual-service.js.map