"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const path_1 = __importDefault(require("path"));
const multilingual_service_1 = require("./multilingual-service");
let Config = require('../config/config.json');
let folderPath = path_1.default.join(__dirname, '../lang');
let multilingualService = new multilingual_service_1.MultilingualService(folderPath);
let client = new discord_js_1.Client();
client.on('ready', () => {
    console.log(`Logged in as '${client.user.tag}'!`);
});
client.on('message', async (msg) => {
    if (msg.content === 'test') {
        let ref = multilingualService.getRef('exampleReference', 'en');
        await msg.channel.send(ref);
    }
});
client.login(Config.token);
//# sourceMappingURL=test.js.map