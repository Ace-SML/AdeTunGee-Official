
export interface Song {
  id: string;
  title: string;
  artist: string;
  coverUrl: string;
  spotifyUrl: string;
  type: 'single' | 'album' | 'ep';
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  caption: string;
}

export interface NavLink {
  label: string;
  href: string;
}
