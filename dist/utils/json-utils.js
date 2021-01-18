"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonUtils = void 0;
class JsonUtils {
    static joinString(input, escapeNewLine = false) {
        if (input instanceof Array) {
            if (escapeNewLine) {
                return input.join('\\n');
            }
            else {
                return input.join('\n');
            }
        }
        else {
            return input;
        }
    }
}
exports.JsonUtils = JsonUtils;
//# sourceMappingURL=json-utils.js.map