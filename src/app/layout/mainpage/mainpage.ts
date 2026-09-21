import { Component, inject, OnInit, signal } from '@angular/core';
import { ChatService } from '../../services/chat/chat-service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Chat, NewChat } from '../../interfaces/chat/chat';
import { Header } from '../header/header';
import { DatePipe } from '@angular/common';

@Component({
  imports: [Header, DatePipe, ReactiveFormsModule],
  selector: 'app-mainpage',
  styleUrl: './mainpage.scss',
  templateUrl: './mainpage.html',
})
export class Mainpage implements OnInit {
  private chatService = inject(ChatService);

  chats = signal<Chat[]>([]);

  loadChats() {
    this.chatService.getChats().subscribe({
      next: (data) => {
        this.chats.set(data);

        // console.log('Anzahl:', this.chats().length);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  sendChatForm = new FormGroup({
    name: new FormControl('', {
      validators: [
        Validators.required,
        Validators.maxLength(30)
      ],
      nonNullable: true
    }),
    message: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true
    })
  });

  get name() {
    return this.sendChatForm.controls.name;
  }

  get message() {
    return this.sendChatForm.controls.message;
  }


  formMessage = '';
  messageType: 'success' | 'error' | '' = '';

  onSubmit() {
    if (this.sendChatForm.valid) {
      const { name, message } = this.sendChatForm.getRawValue();
      const chat: NewChat = {
        name,
        message
      };

      this.chatService.sendChat(chat).subscribe({
        next: (chat) => {
          // console.log('Chat gespeichert:', chat);
          this.sendChatForm.reset();
          this.loadChats();
        },
        error: (error) => {
          console.error('Fehler beim Speichern:', error);
        }
      });
    }
  }



  ngOnInit() {
    console.log('ngOnInit');
    this.loadChats();
  }

}

