import csv
import json


map_aid_to_aname = {}
map_aid_to_genre = {}

nodes = {}


def count_contribution(node, span=1):
  n_following = len(node["following"])
  if n_following == 0:
    return
  # 计算直接贡献
  w = 1.0 / n_following / span
  # 间接贡献
  x = 0
  if span <= 3:
    for aid in node["follower"]:
      follower = nodes[aid]
      plus = count_contribution(follower, span=span+1)
      x += plus
  if span == 1:
    # 赋值
    for aid in node["following"]:
      following = nodes[aid]
      following["mi"] += w + x * w
  return w


map_aid_to_popularity = {}


if __name__ == "__main__":
  with open("./storage/map_aid_to_genre.json", mode='r', encoding='utf-8') as f:
    map_aid_to_genre = json.load(f)
    pass

  with open("./dataset/data_by_artist.csv", mode='r', encoding='utf-8') as f:
    csv_data = csv.reader(f)
    for row in [line for line in csv_data][1:]:
      aid = int(row[1])
      p = float(row[14])
      map_aid_to_popularity[aid] = p
    pass

  with open("./dataset/influence_data.csv", mode='r', encoding='utf-8') as f:
    csv_data = csv.reader(f)
    rows = []
    for row in [line for line in csv_data][1:]:
      rows.append(row)
      aid = int(row[0])
      aname = row[1]
      popularity = map_aid_to_popularity[aid] if aid in map_aid_to_popularity else 0
      nodes[aid] = {
        "following":  [],
        "follower":   [],
        "mi":         0,
        "popularity": popularity
      }
      map_aid_to_aname[aid] = aname
      aid = int(row[4])
      aname = row[5]
      popularity = map_aid_to_popularity[aid] if aid in map_aid_to_popularity else 0
      nodes[aid] = {
        "following":  [],
        "follower":   [],
        "mi":         0,
        "popularity": popularity
      }
      map_aid_to_aname[aid] = aname
    pass

  for row in rows:
    following = int(row[0])
    follower = int(row[4])
    nodes[following]["follower"].append(follower)
    nodes[follower]["following"].append(following)

  node_list = []

  i = 0
  for aid in nodes:
    node = nodes[aid]
    count_contribution(node)
    i += 1
    print(i / len(nodes))

  for aid in nodes:
    node = nodes[aid]
    node_list.append({
      "aid":  aid,
      "name": map_aid_to_aname[aid],
      "genre":map_aid_to_genre[str(aid)],
      "mi":   node["mi"]
    })

  node_list.sort(key=lambda d: d["mi"], reverse=True)
    
  with open("./storage/music_influence.json", mode='w', encoding='utf-8') as f:
    json.dump(node_list, f)

  pass