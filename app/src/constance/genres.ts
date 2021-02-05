/*
 * @Author: Kanata You 
 * @Date: 2021-02-05 13:15:08 
 * @Last Modified by: Kanata You
 * @Last Modified time: 2021-02-05 14:19:26
 */

export type Genre = (
  "Classical" | "Pop/Rock" | "Reggae" | "New Age" | "Blues" | "Children's" | "Comedy/Spoken"
  | "R&B;" | "Electronic" | "Folk" | "Vocal" | "Unknown" | "Country" | "Easy Listening"
  | "Religious" | "Avant-Garde" | "Stage & Screen" | "Latin" | "Jazz" | "International"
);

export type genreInfo = {
  genre_id: number;
  name:     Genre;
  start:     number;
};

const genres: genreInfo[] = [{"genre_id": 0, "name": "Country", "start": 1930}, {"genre_id": 1, "name": "Latin", "start": 1930}, {"genre_id": 2, "name": "Vocal", "start": 1930}, {"genre_id": 3, "name": "Unknown", "start": 1970}, {"genre_id": 4, "name": "Avant-Garde", "start": 1950}, {"genre_id": 5, "name": "R&B;", "start": 1930}, {"genre_id": 6, "name": "Electronic", "start": 1960}, {"genre_id": 7, "name": "Folk", "start": 1930}, {"genre_id": 8, "name": "Blues", "start": 1930}, {"genre_id": 9, "name": "Comedy/Spoken", "start": 1930}, {"genre_id": 10, "name": "Jazz", "start": 1930}, {"genre_id": 11, "name": "Classical", "start": 1930}, {"genre_id": 12, "name": "Children's", "start": 1950}, {"genre_id": 13, "name": "International", "start": 1930}, {"genre_id": 14, "name": "Religious", "start": 1930}, {"genre_id": 15, "name": "Stage & Screen", "start": 1930}, {"genre_id": 16, "name": "Easy Listening", "start": 1930}, {"genre_id": 17, "name": "New Age", "start": 1960}, {"genre_id": 18, "name": "Pop/Rock", "start": 1930}, {"genre_id": 19, "name": "Reggae", "start": 1940}];

export const getGenreName = (gid: number) => genres[gid].name;


export default genres;
