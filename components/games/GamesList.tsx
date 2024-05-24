import Link from "next/link";
import {GetPlatformName} from "@/enums/platforms";
import {GetGenreName} from "@/enums/genre";
import { GameDataProps } from '@/utils/types';
import { useState, useEffect } from 'react';

interface GameListProps {
  games: GameDataProps[] | undefined | null;
}

const GamesList = async ({ games }: GameListProps) => {

  const platformName = (platform: string) => {
    return GetPlatformName(platform)?.text;
  }

  const genreName = (genre: string) => {
    return GetGenreName(genre)?.text;
  }

  return (
    <div className="overflow-x-auto">
      <Link href="/dashboard/games/create" className='text-right'>Create</Link>
      <table className="min-w-full bg-[#04090c]">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">#</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Genre</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Platform</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Rating</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Delete</th>
          </tr>
        </thead>
        <tbody>
          {games?.map((game: any) => (
            <tr key={game.id}>
              <td className="py-2 px-4 border-b border-gray-200 text-cyan-700"><Link href={`/dashboard/games/${game.id}`}>{game.id}</Link></td>
              <td className="py-2 px-4 border-b border-gray-200">{game.game_name}</td>
              <td className="py-2 px-4 border-b border-gray-200">{genreName(game.genre)}</td>
              <td className="py-2 px-4 border-b border-gray-200">{platformName(game.platform)}</td>
              <td className="py-2 px-4 border-b border-gray-200">{game.rating}</td>
              <td className="py-2 px-4 border-b border-gray-200">
              <button className="bg-red-500 text-white text-xs py-1 px-4 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                Delete
            </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GamesList;
