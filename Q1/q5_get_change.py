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


if __name__ == "__main__":
  data = {}

  origin = {}

  with open("./storage/q4_origin_std.json", mode='r', encoding='utf-8') as f:
    origin = json.load(f)

  with open("./dataset/full_music_data.csv", mode='r', encoding='utf-8') as f:
    csv_data = csv.reader(f)
    for row in [line for line in csv_data][1:]:
      item = []
      if row[8] == "-1":
        continue
      year = int(row[16])
      if year not in data:
        data[year] = {
          "self": [0 for _ in labels],
          "count":  0
        }
      for i, _ in enumerate(labels):
        val = (float(row[2 + i]) - origin["min"][i]) / (origin["max"][i] - origin["min"][i])
        data[year]["self"][i] += val
      data[year]["count"] += 1
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
    
  with open("./storage/q5_change_all.json", mode='w', encoding='utf-8') as f:
    json.dump(change, f)

  pass