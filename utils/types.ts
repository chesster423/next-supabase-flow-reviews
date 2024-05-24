export interface GameDataProps {
  id: number | undefined | null,
  game_name: string, 
  description: string,
  platform: string,
  genre: string,
  rating: string,
  hours_played: string,
  comment: string,
  image: string | undefined | null;
}
