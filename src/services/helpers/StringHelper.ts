export default class StringHelper {
    static CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    static createCode = (length: number = 6) => {
        const charactersLength = StringHelper.CHARS.length;
        let code = '';
        for (let i = 0; i < length; i += 1) {
            code += StringHelper.CHARS.charAt(
                Math.floor(Math.random() * charactersLength)
            );
        }
        return code;
    };
}
