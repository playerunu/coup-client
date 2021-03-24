import { Component, OnInit } from "@angular/core";
import Phaser from "phaser";
import {GameWsClient} from "../services/game-ws-client.service";

@Component({
    selector: "app-game",
    templateUrl: "./game.component.html",
    styleUrls: ["./game.component.css"]
})
export class GameComponent implements OnInit {
    phaserGame: Phaser.Game;
    config: Phaser.Types.Core.GameConfig;

    constructor(
        private wsClient: GameWsClient
    ) {
        this.config = {
            type: Phaser.AUTO,
            height: 600,
            width: 800,
            scene: [MainScene],
            parent: "gameContainer",
            physics: {
                default: "arcade",
                arcade: {
                    gravity: { y: 100 }
                }
            }
        };
    }

    ngOnInit() {
        this.phaserGame = new Phaser.Game(this.config);
        setInterval( () => {
            this.wsClient.sendMessage("duke");
        }, 1000);
    }
}

class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: "main" });
    } create() {
        console.log("create method");
    } preload() {
        console.log("preload method");
    } update() {
        console.log("update method");
    }
}
