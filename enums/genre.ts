interface GenreProps {
  value: string,
  text: string
}

 const genre: GenreProps[] = [
  { "value": "action", "text": "Action" },
  { "value": "adventure", "text": "Adventure" },
  { "value": "rpg", "text": "Role-Playing Game (RPG)" },
  { "value": "simulation", "text": "Simulation" },
  { "value": "strategy", "text": "Strategy" },
  { "value": "sports", "text": "Sports" },
  { "value": "puzzle", "text": "Puzzle" },
  { "value": "arcade", "text": "Arcade" },
  { "value": "platformer", "text": "Platformer" },
  { "value": "shooter", "text": "Shooter" },
  { "value": "racing", "text": "Racing" },
  { "value": "fighting", "text": "Fighting" },
  { "value": "stealth", "text": "Stealth" },
  { "value": "survival", "text": "Survival" },
  { "value": "horror", "text": "Horror" },
  { "value": "music", "text": "Music" },
  { "value": "party", "text": "Party" },
  { "value": "board", "text": "Board" },
  { "value": "educational", "text": "Educational" },
  { "value": "idle", "text": "Idle" },
  { "value": "rhythm", "text": "Rhythm" },
  { "value": "sandbox", "text": "Sandbox" },
  { "value": "trivia", "text": "Trivia" },
  { "value": "card", "text": "Card" },
  { "value": "mmo", "text": "Massively Multiplayer Online (MMO)" },
  { "value": "roguelike", "text": "Roguelike" },
  { "value": "visual_novel", "text": "Visual Novel" }
]

export default genre;

export function GetGenreName(g:string) {
  const data = genre.find(obj => obj.value === g);
  return data;
}
