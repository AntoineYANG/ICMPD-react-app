/*
 * @Author: Kanata You 
 * @Date: 2021-02-05 13:15:08 
 * @Last Modified by: Kanata You
 * @Last Modified time: 2021-02-05 20:23:54
 */

export type Genre = (
  "Classical" | "Pop/Rock" | "Reggae" | "New Age" | "Blues" | "Children's" | "Comedy/Spoken"
  | "R&B;" | "Electronic" | "Folk" | "Vocal" | "Unknown" | "Country" | "Easy Listening"
  | "Religious" | "Avant-Garde" | "Stage & Screen" | "Latin" | "Jazz" | "International"
);

export type genreInfo = {
  genre_id: number;
  name:     Genre;
  start:    number;
  data:     number[];
};

const genres: genreInfo[] = [
  {"genre_id": 0, "name": "Country", "start": 1930, "data": [12, 25, 36, 79, 89, 115, 171, 134, 64]},
  {"genre_id": 1, "name": "Latin", "start": 1930, "data": [1, 11, 25, 44, 48, 70, 97, 82, 38]},
  {"genre_id": 2, "name": "Vocal", "start": 1930, "data": [34, 34, 74, 67, 43, 50, 60, 34, 7]},
  {"genre_id": 3, "name": "Unknown", "start": 1930, "data": [0, 0, 0, 0, 1, 0, 1, 0, 0]},
  {"genre_id": 4, "name": "Avant-Garde", "start": 1930, "data": [1, 1, 2, 3, 2, 4, 3, 4, 1]},
  {"genre_id": 5, "name": "R&B;", "start": 1940, "data": [3, 8, 30, 122, 183, 177, 242, 234, 106]},
  {"genre_id": 6, "name": "Electronic", "start": 1940, "data": [0, 0, 1, 1, 10, 24, 57, 58, 40]},
  {"genre_id": 7, "name": "Folk", "start": 1930, "data": [0, 2, 16, 52, 29, 18, 25, 17, 5]},
  {"genre_id": 8, "name": "Blues", "start": 1930, "data": [12, 6, 19, 33, 36, 26, 37, 22, 4]},
  {"genre_id": 9, "name": "Comedy/Spoken", "start": 1930, "data": [0, 2, 5, 9, 8, 13, 7, 3, 0]},
  {"genre_id": 10, "name": "Jazz", "start": 1930, "data": [23, 33, 133, 141, 109, 88, 88, 48, 10]},
  {"genre_id": 11, "name": "Classical", "start": 1930, "data": [3, 9, 7, 7, 8, 8, 7, 8, 3]},
  {"genre_id": 12, "name": "Children's", "start": 1950, "data": [0, 0, 0, 1, 0, 0, 0, 0, 0]},
  {"genre_id": 13, "name": "International", "start": 1930, "data": [5, 3, 9, 18, 25, 24, 17, 12, 6]},
  {"genre_id": 14, "name": "Religious", "start": 1930, "data": [0, 2, 1, 4, 6, 19, 35, 26, 13]},
  {"genre_id": 15, "name": "Stage & Screen", "start": 1930, "data": [6, 11, 12, 8, 7, 12, 12, 11, 5]},
  {"genre_id": 16, "name": "Easy Listening", "start": 1930, "data": [0, 4, 12, 12, 6, 6, 5, 5, 0]},
  {"genre_id": 17, "name": "New Age", "start": 1940, "data": [0, 0, 0, 1, 7, 12, 8, 7, 3]},
  {"genre_id": 18, "name": "Pop/Rock", "start": 1930, "data": [3, 9, 33, 281, 502, 711, 893, 787, 325]},
  {"genre_id": 19, "name": "Reggae", "start": 1940, "data": [2, 2, 4, 23, 39, 36, 46, 48, 23]}
];

export const getGenreName = (gid: number) => genres[gid].name;


export default genres;
