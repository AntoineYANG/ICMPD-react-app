import csv
import json


map_aid_to_genre = {}

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
  data_dict = {}

  with open("./storage/map_aid_to_genre.json", mode='r', encoding='utf-8') as f:
    map_aid_to_genre = json.load(f)
    pass

  min_year = 1930
  max_year = 2010

  with open("./dataset/full_music_data.csv", mode='r', encoding='utf-8') as f:
    csv_data = csv.reader(f)
    for row in [line for line in csv_data][1:]:
      aid_list = [aid for aid in json.loads(row[1]) if str(aid) in map_aid_to_genre]
      year = int(row[16])
      if year < min_year:
        min_year = year
      elif year > max_year:
        max_year = year
      if year not in data_dict:
        data_dict[year] = [0 for _ in labels]
      for aid in aid_list:
        genre = map_aid_to_genre[str(aid)]
        for i, label in enumerate(labels):
          if label == "key" and row[2 + i] == "-1":
            continue
          contribution = float(row[2 + i])
          if genre == "Pop/Rock":
            data_dict[year][i] += contribution / len(aid_list)
    pass

  data_list = [{
    "label":  label,
    "data":   []
  } for label in labels]

  for year in range(min_year, max_year + 1):
    if year in data_dict:
      for i, label in enumerate(labels):
        data_list[i]["data"].append([
          year, data_dict[year][i]
        ])
    
  with open("./storage/poprock_change.json", mode='w', encoding='utf-8') as f:
    json.dump(data_list, f)

  pass