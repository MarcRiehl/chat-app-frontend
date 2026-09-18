import { Component } from '@angular/core';
import { ChatService } from '../../services/chat/chat-service';
import { Chat } from '../../interfaces/chat/chat';
import { Header } from '../header/header';

@Component({
  imports: [Header],
  selector: 'app-mainpage',
  styleUrl: './mainpage.scss',
  templateUrl: './mainpage.html',
})
export class Mainpage {

}
