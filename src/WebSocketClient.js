export class WebSocketClient {
    WS_SERVER_URL = "ws://localhost:8080/ws";
    connection = null;

    constructor() {
        window.onload = this.initConnection;
    }

    initConnection () {
        this.connection = new WebSocket(this.WS_SERVER_URL);
        this.connection.onmessage = (event) => this.onMessage(event);
    }

    onMessage(event) {
        const message = event.data;
        console.log(message);
    }
}
