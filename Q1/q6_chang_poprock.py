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

map_aid_to_genre = {}


if __name__ == "__main__":
  data = {}

  origin = {}

  with open("./storage/map_aid_to_genre.json", mode='r', encoding='utf-8') as f:
    map_aid_to_genre = json.load(f)
    pass

  with open("./storage/q4_origin_std.json", mode='r', encoding='utf-8') as f:
    origin = json.load(f)

  with open("./dataset/full_music_data.csv", mode='r', encoding='utf-8') as f:
    csv_data = csv.reader(f)
    for row in [line for line in csv_data][1:]:
      item = []
      if row[8] == "-1":
        continue
      aid_list = [aid for aid in json.loads(row[1]) if str(aid) in map_aid_to_genre]
      year = int(row[16])
      p = int(row[15])
      if p == 0:
        continue
      if year not in data:
        data[year] = {
          "self": [0 for _ in labels],
          "count":  0
        }
      for aid in aid_list:
        genre = map_aid_to_genre[str(aid)]
        for i, _ in enumerate(labels):
          contribution = float(row[2 + i])
          if genre == "Pop/Rock":
            for i, _ in enumerate(labels):
              w = p / len(aid_list)
              val = (float(row[2 + i]) - origin["min"][i]) / (origin["max"][i] - origin["min"][i])
              data[year]["self"][i] += val * p
              data[year]["count"] += w
    pass

  change = []

  for i, label in enumerate(labels):
    d = []
    for year in range(1925, 2021):
      if year not in data:
        d.append([year, -1])
        continue
      count = data[year]["count"]
      if count == 0:
        d.append([year, -1])
      else:
        d.append([year, data[year]["self"][i] / count])
    change.append({
      "label": label,
      "data": d
    })
    
  with open("./storage/q6_change_poprock.json", mode='w', encoding='utf-8') as f:
    json.dump(change, f)

  pass