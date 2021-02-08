import json
import csv
from tsne import predict


map_aid_to_genre = {}
map_aid_to_aname = {}
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
map_gid_to_genre = [
  "Country",
  "Latin",
  "Vocal",
  "Unknown",
  "Avant-Garde",
  "R&B;",
  "Electronic",
  "Folk",
  "Blues",
  "Comedy/Spoken",
  "Jazz",
  "Classical",
  "Children's",
  "International",
  "Religious",
  "Stage & Screen",
  "Easy Listening",
  "New Age",
  "Pop/Rock",
  "Reggae"
]
map_song_to_aid = {}
map_song_to_year = {}


candidates = [
  1098, 5501, 7920, 36521, 37730, 154544, 182900, 187478, 219203, 246611, 295756, 315339, 325459, 337119, 346336, 350840, 354105, 355142, 446509, 472925, 486047, 540883, 574772, 750742, 757342, 796734, 863790, 883318, 932665
]


matrix = {
  "current": []
}

if __name__ == "__main__":
  with open("./storage/map_aid_to_genre.json", mode='r', encoding='utf-8') as f:
    map_aid_to_genre = json.load(f)
    pass

  with open("./storage/tsne-projection", mode='r', encoding='utf-8') as f:
    matrix["current"] = json.load(f)
    pass

  with open("./dataset/influence_data.csv", mode='r', encoding='utf-8') as f:
    csv_data = csv.reader(f)
    for row in [line for line in csv_data][1:]:
      aid = int(row[0])
      aname = row[1]
      map_aid_to_aname[aid] = aname
      aid = int(row[4])
      aname = row[5]
      map_aid_to_aname[aid] = aname
    pass

  with open("./dataset/full_music_data.csv", mode='r', encoding='utf-8') as f:
    csv_data = csv.reader(f)
    for i, row in enumerate([line for line in csv_data][1:]):
      aid_list = [aid for aid in json.loads(row[1]) if str(aid) in map_aid_to_genre]
      if len(aid_list) != 1:
        continue
      if map_aid_to_genre[str(aid_list[0])] != "Pop/Rock":
        continue
      year = int(row[16])
      if year < 1990:
        continue
      map_song_to_aid[i] = aid_list[0]
      map_song_to_year[i] = year
    pass

  songs = {}

  for i in range(1990, 2021):
    songs[i] = []

  each_year = {}
  for year in range(1990, 2021):
    each_year[year] = [0, 0]

  with open("./storage/q2_reform.csv", mode='r', encoding='utf-8') as f:
    csv_data = csv.reader(f)
    for i, row in enumerate([line for line in csv_data][1:]):
      if i not in map_song_to_aid:
        continue
      aid = map_song_to_aid[i]
      year = map_song_to_year[i]
      v = matrix["current"][i][-1]
      songs[year].append({
        "aid":  aid,
        "data": v
      })
      each_year[year][0] += v
      each_year[year][1] += v
    pass

  data = []

  for year in range(1990, 2000):
    print(year)
    aid_set = {}
    artists = []

    for song in songs[year]:
      if song["aid"] in candidates:
        if song["aid"] not in aid_set:
          aid_set[song["aid"]] = len(artists)
          artists.append({
            "aid":    song["aid"],
            "name":   map_aid_to_aname[song["aid"]],
            "self":   [],
            "sigma":  0
          })
        artists[aid_set[song["aid"]]]["self"].append(song["data"])

    artists = [a for a in artists if len(a["self"]) > 0]

    print(aid_set)
    
    for artist in artists:
      s = 0
      for d in artist["self"]:
        s += d
      artist["self"] = s / len(artist["self"])

      others = [0, 0]

      for end in range(year + 1, 2020):
        more = each_year[end]
        if others[1] == 0:
          others[0] += more[0]
          others[1] += more[1]
        else:
          o = abs(others[0] / others[1] - artist["self"])
          m = abs(more[0] / more[1] - artist["self"])
          if m > o:
            break
          else:
            others[0] += more[0]
            others[1] += more[1]

      artist["sigma"] = abs(others[0] / others[1] - artist["self"])

    data.append({
      "year": year,
      "list": artists
    })

  with open("./storage/q6_90s.json", mode='w', encoding='utf-8') as f:
    res = []
    for year, datum in enumerate(data):
      d = [{
        "name": a["name"],
        "sigma":a["sigma"]
      } for a in datum["list"]]
      d.sort(key=lambda m: m["sigma"])
      res.append({
        "year": year,
        "data": d
      })
    json.dump(res, f)
  pass
