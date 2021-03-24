import { Injectable } from "@angular/core";
import { WebsocketService } from "./websocket.service";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: "root"
})
export class GameWsClient {
    public messages: Subject<String>;

    constructor(wsService: WebsocketService) {
        this.messages = <Subject<String>>wsService.connect(environment.wsServerUrl)
            .pipe(
                map(
                    (response: MessageEvent): String => {
                       console.log(response.data);
                       return response.data;
                    }
                ));
    }

    sendMessage(message: String) {
        this.messages.next(message);
    }
}
