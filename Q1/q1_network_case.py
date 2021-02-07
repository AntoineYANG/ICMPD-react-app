import csv
import json


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

nodes = {}

counted = {}
linked_nodes = []
links = []


def get_linked_nodes(aid, span=0):
  node = nodes[aid]
  # if span <= 0:
  #   if span < -3:
  #     return
  #   for _aid in node["following"]:
  #     get_linked_nodes(_aid, span=span-1)
  if span >= 0:
    if span > 3:
      return
    for _aid in node["follower"]:
      get_linked_nodes(_aid, span=span+1)
  if aid in counted:
    return
  linked_nodes.append({
    "id": aid,
    "name": map_aid_to_aname[aid],
    "category": map_genre_to_gid[map_aid_to_genre[str(aid)]],
    "symbolSize": 2 + nodes[aid]["popularity"] / 4,
    "level": span
  })
  counted[aid] = 1
  return


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
      links.append({
        "source": row[0],
        "target": row[4]
      })
    pass

  for row in rows:
    following = int(row[0])
    follower = int(row[4])
    nodes[following]["follower"].append(follower)
    nodes[follower]["following"].append(following)

  node_list = []

  get_linked_nodes(45475)

  node_list.sort(key=lambda d: d["mi"], reverse=True)
    
  with open("./storage/music_influence_case.json", mode='w', encoding='utf-8') as f:
    json.dump({
      "nodes": linked_nodes,
      "links": [link for link in links if (
        int(link["source"]) in counted and int(link["target"]) in counted
      )]
    }, f)

  pass