/// <reference types="node" />
import { IncomingMessage, Server } from 'http';
import Game from './game.js';
declare type Files = {
    [fileName: string]: string;
};
declare type ExtensionToTypeMap = {
    [extension: string]: string;
};
export default class GameServer extends Server {
    files: Files;
    game: Game;
    static extensionToTypeMap: ExtensionToTypeMap;
    constructor();
    start(port?: number): Promise<void>;
    static parseBody(req: IncomingMessage): Promise<unknown>;
}
export {};
