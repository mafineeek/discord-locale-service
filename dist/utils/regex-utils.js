"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegexUtils = void 0;
const FILE_NAME_REGEX = /\.([^\s.]+)\.json/i;
class RegexUtils {
    static extractLangCode(input) {
        let langCode = this.findMatch(input, FILE_NAME_REGEX);
        if (!langCode) {
            return;
        }
        return langCode;
    }
    static findMatch(input, regex) {
        let match = regex.exec(input);
        if (match) {
            return match[1];
        }
    }
}
exports.RegexUtils = RegexUtils;
//# sourceMappingURL=regex-utils.js.map