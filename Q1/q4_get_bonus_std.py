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


if __name__ == "__main__":
  artists = {}
  tutors = {}

  origin = {}

  with open("./storage/q4_origin_std.json", mode='r', encoding='utf-8') as f:
    origin = json.load(f)

  with open("./dataset/influence_data.csv", mode='r', encoding='utf-8') as f:
    csv_data = csv.reader(f)
    for row in [line for line in csv_data][1:]:
      aid = int(row[0])
      if aid not in tutors:
        tutors[aid] = {
          "self":       [0 for _ in labels],
          "followers":  [],
          "std":        [0 for _ in labels]
        }
      tutors[aid]["followers"].append(int(row[4]))
      artists[aid] = {
        "songs":  [],
        "self":   [0 for _ in labels]
      }
      artists[int(row[4])] = {
        "songs":  [],
        "self":   [0 for _ in labels]
      }
    pass

  with open("./dataset/full_music_data.csv", mode='r', encoding='utf-8') as f:
    csv_data = csv.reader(f)
    for row in [line for line in csv_data][1:]:
      aid_list = json.loads(row[1])
      w = 1.0 / len(aid_list)
      item = []
      if row[8] == "-1":
        continue
      for i, _ in enumerate(labels):
        val = (float(row[2 + i]) - origin["min"][i]) / (origin["max"][i] - origin["min"][i])
        item.append(val)
      for aid in aid_list:
        if aid in artists:
          artists[aid]["songs"].append({
            "v":  item,
            "w":  w
          })
    pass

  artist_mean = []

  for aid in artists:
    artist = artists[aid]
    item = [0 for _ in labels]
    sum_w = 0
    for song in artist["songs"]:
      for i, v in enumerate(song["v"]):
        item[i] += v * song["w"]
      sum_w += song["w"]
    if len(artist["songs"]):
      for i, d in enumerate(item):
        artist["self"][i] = d / sum_w
      artist_mean.append({
        "aid":  aid,
        "mean": artist["self"]
      })

  with open("./storage/artist_mean.json", mode='w', encoding='utf-8') as f:
    json.dump(artist_mean, f)

  stds = [0 for _ in labels]
  valid_count = 0

  for tutor_id in tutors:
    if tutor_id not in artists:
      del tutors[tutor_id]
      continue
    tutor = tutors[tutor_id]
    tutor["self"] = artists[tutor_id]["self"]
    n_followers = 0
    for aid in tutor["followers"]:
      if aid in artists:
        for i, d in enumerate(artists[aid]["self"]):
          tutor["std"][i] += (d - tutor["self"][i]) ** 2
        n_followers += 1
    if n_followers == 0:
      del tutors[tutor_id]
      continue
    for i, _ in enumerate(tutor["std"]):
      tutor["self"][i] /= n_followers
      tutor["self"][i] **= 0.5
      stds[i] += tutor["self"][i]
    valid_count += 1

  for i, _ in enumerate(stds):
    stds[i] /= valid_count
    
  with open("./storage/q4_compare_std.json", mode='w', encoding='utf-8') as f:
    json.dump({
      "mean":       origin["mean"],
      "std_before": origin["std"],
      "std_after":  stds,
      "std_bonus":  [int(
        before / after * 10000
      ) / 10000 for before, after in zip(origin["std"], stds)]
    }, f)

  pass