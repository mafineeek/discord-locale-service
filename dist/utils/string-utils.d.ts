export declare class StringUtils {
    static replaceRefs(input: string, refDatas: {
        [refName: string]: string | string[];
    }): string;
    static replaceVariables(input: string, variables: {
        [name: string]: string;
    }): string;
    static replaceAll(input: string, findText: string, replaceText: string): string;
}
//# sourceMappingURL=string-utils.d.ts.map