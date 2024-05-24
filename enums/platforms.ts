interface PlatformsProps {
  value: string,
  text: string
}


const platforms: PlatformsProps[] = [
  { "value": "ps4", "text": "PlayStation 4" },
  { "value": "ps5", "text": "PlayStation 5" },
  { "value": "xbox_one", "text": "Xbox One" },
  { "value": "xbox_series_x", "text": "Xbox Series X" },
  { "value": "switch", "text": "Nintendo Switch" },
  { "value": "xbox_360", "text": "Xbox 360" },
  { "value": "ps3", "text": "PlayStation 3" },
  { "value": "wii_u", "text": "Wii U" },
  { "value": "wii", "text": "Wii" },
  { "value": "3ds", "text": "Nintendo 3DS" },
  { "value": "ps_vita", "text": "PlayStation Vita" }
]

export default platforms;


export function GetPlatformName(platform:string) {
  const data = platforms.find(obj => obj.value === platform);
  return data;
}
