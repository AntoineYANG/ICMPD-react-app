import csv
import json


labels = [
  "danceability",
  "energy",
  "valence",
  "tempo",
  "loudness",
  "mode",
  "key",
  "acousticness",
  "instrumentalness",
  "liveness",
  "speechiness",
  "explicit",
  "duration_ms"
]

stat = [
  [999, 0],
  [999, 0],
  [999, 0],
  [999, 0],
  [999, 0],
  [999, 0],
  [999, 0],
  [999, 0],
  [999, 0],
  [999, 0],
  [999, 0],
  [999, 0],
  [999, 0]
]

map_aid_to_genre = {}

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
  data = []
  genres = []

  with open("./storage/map_aid_to_genre.json", mode='r', encoding='utf-8') as f:
    map_aid_to_genre = json.load(f)
    pass

  with open("./dataset/full_music_data.csv", mode='r', encoding='utf-8') as f:
    csv_data = csv.reader(f)
    for row in [line for line in csv_data][1:]:
      if row[8] == "-1":
        continue
      aid_all = json.loads(row[1])
      genre_set = set()
      for aid in aid_all:
        aid = str(aid)
        if aid in map_aid_to_genre:
          genre_set.add(map_genre_to_gid[map_aid_to_genre[aid]])
      genre_set = list(genre_set)
      if len(genre_set) == 1:
        genre = genre_set[0]
      else:
        continue
      item = []
      for i, label in enumerate(labels):
        v = float(row[2 + i])
        item.append(v)
        if v > stat[i][1]:
          stat[i][1] = v
        if v < stat[i][0]:
          stat[i][0] = v
      data.append(item)
      genres.append(genre)
      pass
    pass

  for item in data:
    for i, s in enumerate(stat):
      item[i] = (item[i] - s[0]) / (s[1] - s[0])
    
  with open("./storage/q2_reform.csv", mode='w', encoding='utf-8') as f:
    # csv_writer = csv.writer(f)
    # csv_writer.writerows(data)
    for item, label in zip(data, genres):
      f.write(",".join([str(e) for e in item]) + "," + str(label) + "\n")
      # csv_writer.writerow(item)
    # json.dump(data, f)
    
  dd = []

  with open("./storage/dets.txt", mode='r', encoding='utf-8') as f:
    dets = f.read().split("\n")
    for line, g in zip(dets[:-1], genres[:-1]):
      d = [float(e) for e in line.split(",")]
      dd.append([d[0], d[1], g])
    
  with open("./storage/dets.json", mode='w', encoding='utf-8') as f:
    json.dump(dd, f)

  pass