"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringUtils = void 0;
const _1 = require(".");
class StringUtils {
    static replaceRefs(input, refDatas) {
        let output = input;
        for (let [refName, refData] of Object.entries(refDatas)) {
            let refString = _1.JsonUtils.joinString(refData, true);
            output = this.replaceAll(output, `{{REF:${refName}}}`, refString);
        }
        return output;
    }
    static replaceVariables(input, variables) {
        let output = input;
        for (let [varName, varValue] of Object.entries(variables)) {
            output = this.replaceAll(output, `{{${varName}}}`, varValue);
        }
        return output;
    }
    static replaceAll(input, findText, replaceText) {
        let refRegex = new RegExp(findText, 'g');
        return input.replace(refRegex, replaceText);
    }
}
exports.StringUtils = StringUtils;
//# sourceMappingURL=string-utils.js.map