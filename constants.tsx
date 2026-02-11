
import { Song, GalleryItem, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Music', href: '#music' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const SPOTIFY_ARTIST_URL = 'https://open.spotify.com/artist/7pTgwdFt0K2bvMmGfoHtsJ?si=vxzxBFOnSkOVcB_8E81gRg';
export const LATEST_RELEASE_URL = 'https://open.spotify.com/album/5cL1gpcF842aeOZniUl3CF?si=4jeI9M5xTV-axkUJRyscjw';

export const FEATURED_SONGS: Song[] = [
  {
    id: '1',
    title: 'Memories',
    artist: 'AdeTunGee',
    coverUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=800',
    spotifyUrl: LATEST_RELEASE_URL,
    type: 'single'
  },
  {
    id: '2',
    title: 'Doctor of Words',
    artist: 'AdeTunGee',
    coverUrl: 'https://images.unsplash.com/photo-1514525253361-bee8718a300a?auto=format&fit=crop&q=80&w=800',
    spotifyUrl: SPOTIFY_ARTIST_URL,
    type: 'single'
  },
  {
    id: '3',
    title: 'Rising Truth',
    artist: 'AdeTunGee',
    coverUrl: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=800',
    spotifyUrl: SPOTIFY_ARTIST_URL,
    type: 'single'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: '1', imageUrl: 'https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?auto=format&fit=crop&q=80&w=800', caption: 'Deep in the Rhythm' },
  { id: '2', imageUrl: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&q=80&w=800', caption: 'The Doctor of Words' },
  { id: '3', imageUrl: 'https://images.unsplash.com/photo-1520193343412-d59839933710?auto=format&fit=crop&q=80&w=800', caption: 'Lyrical Honesty' },
  { id: '4', imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800', caption: 'Vibing' },
  { id: '5', imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800', caption: 'Studio Flow' },
  { id: '6', imageUrl: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80&w=800', caption: 'Stage Presence' }
];

export const SOCIALS = [
  { id: 'spotify', name: 'Spotify', url: SPOTIFY_ARTIST_URL },
  { id: 'audiomack', name: 'Audiomack', url: 'https://audiomack.com/iamadetungee' },
  { id: 'instagram', name: 'Instagram', url: 'https://www.instagram.com/adetungee/' },
  { id: 'twitter', name: 'Twitter', url: 'https://x.com/SamuelAdet62199' },
  { id: 'youtube', name: 'YouTube', url: 'https://www.youtube.com/@IAmAdeTunGee' },
];
