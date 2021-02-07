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
  [99999999999, 0]
]


if __name__ == "__main__":
  data = []
  popularity = []
  sum_popularity = 0

  with open("./dataset/full_music_data.csv", mode='r', encoding='utf-8') as f:
    csv_data = csv.reader(f)
    for row in [line for line in csv_data][1:]:
      if row[8] == "-1":
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
      popularity.append(float(row[15]))
      sum_popularity += float(row[15])
      pass
    pass

  for item in data:
    for i, s in enumerate(stat):
      item[i] = (item[i] - s[0]) / (s[1] - s[0])
    
  with open("./storage/full_music_weighted.json", mode='w', encoding='utf-8') as f:
    dm = []
    for item, p in zip(data, popularity):
      dm.append(item + [p])
    json.dump(dm, f)

  mean = [0 for _ in labels]
  # 加权求平均
  for item, p in zip(data, popularity):
    w = p / sum_popularity
    for i, d in enumerate(item):
      mean[i] += d * w

  head = [0 for _ in labels]
  # 分子
  for item in data:
    for i, d in enumerate(item):
      head[i] += (d - mean[i]) ** 2

  std = [0 for _ in labels]
  # 结果
  for i, _ in enumerate(labels):
    std[i] = 1 / (head[i] / len(data)) ** 0.5
    
  with open("./storage/q4_origin_std.json", mode='w', encoding='utf-8') as f:
    json.dump({
      "mean": mean,
      "std":  std,
      "min":  [d[0] for d in stat],
      "max":  [d[1] for d in stat]
    }, f)

  pass