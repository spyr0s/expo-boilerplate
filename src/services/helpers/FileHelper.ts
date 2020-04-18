export default class FileHelper {
    static getFilename(path: string) {
        return path.replace(/^.*[\\/]/, '');
    }
}
