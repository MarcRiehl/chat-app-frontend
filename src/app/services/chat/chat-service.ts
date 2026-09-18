import { Service } from '@angular/core';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chat, NewChat } from '../../interfaces/chat/chat';

@Injectable({
    providedIn: 'root'
})

export class ChatService {

    private http = inject(HttpClient);

    private apiUrl = 'http://127.0.0.1:8000/chat/';

    getChats() {
        return this.http.get<Chat[]>(this.apiUrl);
    }

    sendChat(chat: NewChat) {
        return this.http.post<Chat>(this.apiUrl, chat);
    }

}
