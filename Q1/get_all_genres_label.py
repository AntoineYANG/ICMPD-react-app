import csv
import json


if __name__ == "__main__":
  genre_labels = set()
  genre_start = {}

  with open("./dataset/influence_data.csv", encoding='utf-8', mode='r') as f:
    csv_data = csv.reader(f)
    rows = []
    for row in [line for line in csv_data][1:]:
      genre_labels.add(row[2])
      rows.append(row)
      if row[2] not in genre_start or int(row[3]) < genre_start[row[2]]:
        genre_start[row[2]] = int(row[3])
      if row[6] not in genre_start or int(row[7]) < genre_start[row[6]]:
        genre_start[row[6]] = int(row[7])

    map_genre_to_id = {}

    with open("./storage/genre_labels.json", encoding='utf-8', mode='w') as f:
      all_genres = []
      for i, genre in enumerate(list(genre_labels)):
        all_genres.append({
          "genre_id": i,
          "name":     genre,
          "start":    genre_start[genre]
        })
        map_genre_to_id[genre] = i
      json.dump(all_genres, f)
      pass

    json_data = []
    influence_flow = []

    for row in rows:
      # if not row[2] == row[6]:
      influence_flow.append({
        "source_gid": map_genre_to_id[row[2]],
        "target_gid": map_genre_to_id[row[6]],
        "reversed":   int(row[7]) < int(row[3]),
        "year":       max(int(row[7]), int(row[3]))
      })
      json_data.append({
        "influencer_id":            int(row[0]),
        "influencer_name":              row[1],
        "influencer_main_genre":        row[2],
        "influencer_active_start":  int(row[3]),
        "follower_id":              int(row[4]),
        "follower_name":                row[5],
        "follower_main_genre":          row[6],
        "follower_active_start":    int(row[7])
      })

    pass

    with open("./storage/influence_flow.json", encoding='utf-8', mode='w') as f:
      json.dump(sorted(influence_flow, key=lambda d: d["year"]), f)
      pass

    with open("./storage/influence_flow_by_year.json", encoding='utf-8', mode='w') as f:
      key_year = {}
      influence_flow_by_year = []
      for influence in influence_flow:
        year = influence["year"]
        idx = -1
        if year not in key_year:
          idx = len(key_year)
          key_year[year] = idx
          influence_flow_by_year.append({
            "year": year,
            "flow": []
          })
        else:
          idx = key_year[year]
        found = False
        for flow in influence_flow_by_year[idx]["flow"]:
          if flow["source_gid"] == influence["source_gid"]\
              and flow["target_gid"] == influence["target_gid"]:
            flow["count"] += 1
            found = True
            break
        if not found:
          influence_flow_by_year[idx]["flow"].append({
            "source_gid": influence["source_gid"],
            "target_gid": influence["target_gid"],
            "count":      1
          })
      json.dump(sorted(influence_flow_by_year, key=lambda d: d["year"]), f)
      pass

  pass
