import csv
import json


map_genre_to_gid = {
  "Country": 0,
  "Latin": 1,
  "Vocal": 2,
  "Unknown": 3,
  "Avant-Garde": 4,
  "R&B;": 5,
  "Electronic": 6,
  "Folk": 7,
  "Blues": 8,
  "Comedy/Spoken": 9,
  "Jazz": 10,
  "Classical": 11,
  "Children's": 12,
  "International": 13,
  "Religious": 14,
  "Stage & Screen": 15,
  "Easy Listening": 16,
  "New Age": 17,
  "Pop/Rock": 18,
  "Reggae": 19
}


if __name__ == "__main__":
  genres = []
  for _ in range(20):
    genres.append([set() for n in range(1930, 2020, 10)])
  map_artist_to_genre = {}

  with open("./dataset/influence_data.csv", encoding='utf-8', mode='r') as f:
    csv_data = csv.reader(f)
    rows = []
    for row in [line for line in csv_data][1:]:
      map_artist_to_genre[int(row[0])] = map_genre_to_gid[row[2]]
    pass

  with open("./dataset/full_music_data.csv", encoding='utf-8', mode='r') as f:
    csv_data = csv.reader(f)
    rows = []
    for row in [line for line in csv_data][1:]:
      aid_list = [aid for aid in json.loads(row[1]) if aid in map_artist_to_genre]
      year = int(row[16])
      if year >= 2020:
        continue
      year_idx = int((year - 1930) / 10)
      for aid in aid_list:
        gid = map_artist_to_genre[aid]
        genres[gid][year_idx].add(aid)
    pass

  for genre in genres:
    for year_idx, item in enumerate(genre):
      genre[year_idx] = len(item)

  with open("./storage/genre_by_year.json", encoding='utf-8', mode='w') as f:
    json.dump(genres, f)

  pass
