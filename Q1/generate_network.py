import csv
import json


genres = [
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
]

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
  data = {
    "type": "force",
    "categories": [{
      "name": g["name"],
      "keyword": {}
    } for g in genres],
    "nodes": [],
    "links": []
  }
  
  artists = set()
  a_values = {}
  map_aid_to_name = {}
  map_aid_to_gid = {}

  links = []

  with open("./dataset/influence_data.csv", encoding='utf-8', mode='r') as f:
    csv_data = csv.reader(f)
    for row in [line for line in csv_data][1:]:
      aid = int(row[0])
      links.append([aid, int(row[4])])
      if aid not in a_values:
        a_values[aid] = 1
      else:
        a_values[aid] += 1
      map_aid_to_name[aid] = row[1]
      artists.add(aid)
      gid = map_genre_to_gid[row[2]]
      map_aid_to_gid[aid] = gid
      aid = int(row[4])
      if aid not in a_values:
        a_values[aid] = 1
      else:
        a_values[aid] += 1
      artists.add(aid)
      map_aid_to_name[aid] = row[5]
      gid = map_genre_to_gid[row[6]]
      map_aid_to_gid[aid] = gid

  map_aid_to_idx = {}

  for i, aid in enumerate(list(artists)):
    map_aid_to_idx[aid] = i
    data["nodes"].append({
      "id":     aid,
      "name":   map_aid_to_name[aid],
      "value":  a_values[aid],
      "group":  map_aid_to_gid[aid]
    })

  for link in links:
    data["links"].append({
      "source": map_aid_to_idx[link[0]],
      "target": map_aid_to_idx[link[1]]
    })

  with open("./storage/influence_network.json", encoding='utf-8', mode='w') as f:
    data["nodes"].sort(key=lambda d: d["value"])
    json.dump(map_aid_to_gid, f)

  pass
