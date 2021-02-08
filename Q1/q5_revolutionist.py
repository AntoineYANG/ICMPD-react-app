import csv
import json
from tsne import predict


map_aid_to_aname = {}
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

candidates_aid = [
  184502, 813392, 94210, 789775,
  41874, 754032, 139026, 354105, 66915, 894465,
  472102, 994823, 2639628, 367188, 883318, 2398414
]

map_aid_to_char = {}


if __name__ == "__main__":
  with open("./storage/map_aid_to_genre.json", mode='r', encoding='utf-8') as f:
    map_aid_to_genre = json.load(f)
    pass

  with open("./storage/artist_mean.json", mode='r', encoding='utf-8') as f:
    for d in json.load(f):
      map_aid_to_char[d["aid"]] = d["mean"]
    pass

  candidates = [{
    "aid": aid,
    "self": map_aid_to_char[aid],
    "following": 0,
    "follower": 0,
    "before": [0 for _ in range(13)],
    "after": [0 for _ in range(13)]
  } for aid in candidates_aid]

  with open("./dataset/influence_data.csv", mode='r', encoding='utf-8') as f:
    csv_data = csv.reader(f)
    for row in [line for line in csv_data][1:]:
      aid_from = int(row[0])
      aname = row[1]
      map_aid_to_aname[aid_from] = aname
      aid_to = int(row[4])
      aname = row[5]
      map_aid_to_aname[aid_to] = aname
      if aid_from in candidates_aid and aid_to in map_aid_to_char:
        candidate = candidates[candidates_aid.index(aid_from)]
        for i, d in enumerate(map_aid_to_char[aid_to]):
          candidate["after"][i] += d
        candidate["follower"] += 1
      if aid_to in candidates_aid and aid_from in map_aid_to_char:
        candidate = candidates[candidates_aid.index(aid_to)]
        for i, d in enumerate(map_aid_to_char[aid_from]):
          candidate["before"][i] += d
        candidate["following"] += 1
    pass

  print([c for c in candidates if c["follower"] == 0])
  candidates = [c for c in candidates if c["follower"] > 0]

  for a in candidates:
    for i, d in enumerate(a["before"]):
      a["before"][i] = d / a["following"]
    for i, d in enumerate(a["after"]):
      a["after"][i] = d / a["follower"]
    del a["following"]
    del a["follower"]
    a["self"] = predict(a["self"])
    a["before"] = predict(a["before"])
    a["after"] = predict(a["after"])

  with open("./storage/q5_revolutionists.json", mode='w', encoding='utf-8') as f:
    json.dump(candidates, f)

  pass