const Format = {
    toString(format: string, args: Array<any>): string {
        return format.replace(/{(\d+)}/g, function (match, value) {
            return typeof args[value] !== 'undefined' ? args[value] : match;
        });
    }
};

// Export constants
export default Format;