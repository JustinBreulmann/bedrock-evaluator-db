import { world } from "@minecraft/server";
const names = [];
/**
 * Database
 */
export class Database {
    /**
     * Create new Database
     * @param {String} name 
     */
    constructor(name) {
        this.name = JSON.stringify(name).slice(1, -1).replaceAll(/"/g, '\\"');
        this.initialize()
    }

    async initialize() {
        this.data = new Map();
        if (names.includes(this.name))
            throw new Error(`You can't have 2 of the same databases`);
        if (this.name.includes('"'))
            throw new TypeError(`Datenbank kann nicht "!" beinhalten`);
        if (this.name.length > 13 || this.name.length === 0)
            throw new Error(`Datenbank-Name muss mindestes 1 und maximal 13 Buchstaben beeinhalten`);
        names.push(this.name);
        
        try {
            await runCommand(`scoreboard objectives add "DB_${this.name}" dummy`);
            const objective = world.scoreboard.getObjective(`DB_${this.name}`);
            if (objective) {
                objective.getParticipants().forEach(e => this.data.set(e.displayName.split("_")[0].replaceAll(/\\"/g, '"'), JSON.parse(e.displayName.split("_").filter((v, i) => i > 0).join("_").replaceAll(/\\"/g, '"'))));
            }
        } catch (error) {
            console.warn(`Database initialization failed: ${error.message}`);
        }
    }
    /**
     * The length of the database
     */
    get length() {
        return this.data.size;
    }
    /**
     * Set a value from a key
     * @param {string} key Key to set
     * @param {any} value The value
     */
    set(key, value) {
        if (key.includes('_'))
            throw new TypeError(`Datenbank-Schlüssel können nicht "_" beinhalten`);
        if ((JSON.stringify(value).replaceAll(/"/g, '\\"').length + key.replaceAll(/"/g, '\\"').length + 1) > 32000)
            throw new Error(`Datenbank ist zu groß (max. 32000)`);
        
        try {
            if (this.data.has(key))
                runCommand(`scoreboard players reset "${key.replaceAll(/"/g, '\\"')}_${JSON.stringify(this.data.get(key)).replaceAll(/"/g, '\\"')}" "DB_${this.name}"`);
            runCommand(`scoreboard players set "${key.replaceAll(/"/g, '\\"')}_${JSON.stringify(value).replaceAll(/"/g, '\\"')}" "DB_${this.name}" 0`);
            this.data.set(key, value);
        } catch (error) {
            console.warn(`Database set operation failed: ${error.message}`);
        }
    }
    /**
     * Get a value from a key
     * @param {string} key Key to get
     * @returns {any} The value that was set for the key (or undefined)
     */
    get(key) {
        if (this.data.has(key))
            return this.data.get(key);
        return undefined;
    }
    /**
     * Test for whether or not the database has the key
     * @param {string} key Key to test for
     * @returns {boolean} Whether or not the database has the key
     */
    has(key) {
        if (!this.data.has(key))
            return false;
        return true;
    }
    /**
     * Delete a key from the database
     * @param {string} key Key to delete from the database
     */
    delete(key) {
        if (!this.data.has(key))
            return;
        try {
            runCommand(`scoreboard players reset "${key.replaceAll(/"/g, '\\"')}_${JSON.stringify(this.data.get(key)).replaceAll(/"/g, '\\"')}" "DB_${this.name}"`);
            this.data.delete(key);
        } catch (error) {
            console.warn(`Database delete operation failed: ${error.message}`);
        }
    }
    /**
     * Get an array of all keys in the database
     * @returns {string[]} An array of all keys in the database
     */
    keys() {
        return [...this.data.keys()];
    }
    /**
     * Get an array of all values in the database
     * @returns {any[]} An array of all values in the database
     */
    values() {
        return [...this.data.values()];
    }
    /**
     * Clears all values in the database
     */
    clear() {
        try {
            runCommand(`scoreboard objectives remove "DB_${this.name}"`);
            runCommand(`scoreboard objectives add "DB_${this.name}" dummy`);
            this.data.clear();
        } catch (error) {
            console.warn(`Database clear operation failed: ${error.message}`);
        }
    }
    /**
     * Loop through all keys and values of the database
     * @param {(key: string, value: any) => void} callback Code to run per loop
     */
    forEach(callback) {
        this.data.forEach((v, k) => callback(k, v));
    }
    *[Symbol.iterator]() {
        yield* this.data.entries();
    }
}
/**
 * Run a command!
 * @param {string} cmd Command to run
 * @returns {{ error: boolean, data: any }} Whether or not the command errors, and command data
 * @example runCommand(`give @a diamond`)
 */
async function runCommand(cmd) {
    try {
        return await world.getDimension('overworld').runCommand(cmd);
    } catch(err) {
        console.warn(`Command execution failed: ${err.message}`);
        throw new Error(err);
    }
}