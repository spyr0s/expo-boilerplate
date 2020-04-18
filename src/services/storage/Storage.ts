import { AsyncStorage } from 'react-native';

export default class Storage {
    static KEY_THEME: string = '@theme';

    static KEY_LOCALE: string = '@locale';

    static setItem(key: string, value: object | number | string): Promise<any> {
        const val =
            typeof value === 'object'
                ? JSON.stringify(value)
                : value.toString();
        return AsyncStorage.setItem(key, val)
            .then(() => {
                return true;
            })
            .catch(e => console.error(e));
    }

    static getItem(key: string): Promise<any> {
        return AsyncStorage.getItem(key)
            .then(value => {
                if (value) {
                    try {
                        const val = JSON.parse(value);
                        return val;
                    } catch (e) {
                        return value;
                    }
                }
                return null;
            })
            .catch(e => console.error(e));
    }

    static removeItem(key: string): Promise<void> {
        return AsyncStorage.removeItem(key);
    }

    static multiremove(keys: string[]): Promise<void> {
        return AsyncStorage.multiRemove(keys);
    }
}
