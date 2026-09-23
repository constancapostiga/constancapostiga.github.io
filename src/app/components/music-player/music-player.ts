// src/app/components/music-player/music-player.ts
import { Component, ElementRef, ViewChild } from '@angular/core';

export type Song = {
  title: string;
  artist: string;
  src: string;
};

@Component({
  selector: 'app-music-player',
  standalone: true,
  templateUrl: './music-player.html',
  styleUrl: './music-player.scss',
})
export class MusicPlayerComponent {
  @ViewChild('audioPlayer') audioRef!: ElementRef<HTMLAudioElement>;

  isOpen = false;
  isPlaying = false;
  currentIndex = 0;

  playlist: Song[] = [
    { title: 'Border Control', artist: 'Tyler the Creator', src: '/audio/song1.mp4' },
  ];

  get currentSong(): Song {
    return this.playlist[this.currentIndex];
  }

  togglePopup(): void {
    this.isOpen = !this.isOpen;
  }

  togglePlay(): void {
    const audio = this.audioRef.nativeElement;
    if (this.isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  nextTrack(): void {
    this.currentIndex = (this.currentIndex + 1) % this.playlist.length;
    this.loadAndPlay();
  }

  prevTrack(): void {
    this.currentIndex = (this.currentIndex - 1 + this.playlist.length) % this.playlist.length;
    this.loadAndPlay();
  }

  private loadAndPlay(): void {
    setTimeout(() => {
      const audio = this.audioRef.nativeElement;
      audio.load();
      if (this.isPlaying) {
        audio.play();
      }
    });
  }
}