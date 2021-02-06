import csv
import json


map_aid_to_aname = {}

nodes = {}


def count_contribution(node, span=1):
  n_following = len(node["following"])
  if n_following == 0:
    return 0
  # 计算直接贡献
  w = 1.0 / n_following / span
  # 间接贡献
  x = 0
  for aid in node["follower"]:
    follower = nodes[aid]
    plus = count_contribution(follower, span=span+1)
    x += plus
  # 赋值
  for aid in node["following"]:
    following = nodes[aid]
    following["mi"] = w + x
  return w


if __name__ == "__main__":
  with open("./dataset/influence_data.csv", mode='r', encoding='utf-8') as f:
    csv_data = csv.reader(f)
    rows = []
    for row in [line for line in csv_data][1:]:
      rows.append(row)
      aid = int(row[0])
      aname = row[1]
      nodes[aid] = {
        "following":  [],
        "follower":   [],
        "mi":         0
      }
      map_aid_to_aname[aid] = aname
      aid = int(row[4])
      aname = row[5]
      nodes[aid] = {
        "following":  [],
        "follower":   [],
        "mi":         0
      }
      map_aid_to_aname[aid] = aname
    pass

  for row in rows:
    following = int(row[0])
    follower = int(row[4])
    nodes[following]["follower"].append(follower)
    nodes[follower]["following"].append(following)

  node_list = []
  for aid in nodes:
    node = nodes[aid]
    count_contribution(node)


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