import csv
import json


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

if __name__ == "__main__":
  data_dict = [{} for _ in range(20)]

  with open("./storage/map_aid_to_genre.json", mode='r', encoding='utf-8') as f:
    map_aid_to_genre = json.load(f)
    pass

  min_year = 1925
  max_year = 2020

  with open("./dataset/full_music_data.csv", mode='r', encoding='utf-8') as f:
    csv_data = csv.reader(f)
    for row in [line for line in csv_data][1:]:
      aid_list = [aid for aid in json.loads(row[1]) if str(aid) in map_aid_to_genre]
      year = int(row[16])
      if year < min_year or year > max_year:
        continue
      contribution = float(row[15])
      for aid in aid_list:
        gid = map_genre_to_gid[map_aid_to_genre[str(aid)]]
        if year not in data_dict[gid]:
          data_dict[gid][year] = 0
        data_dict[gid][year] += contribution / len(aid_list)
    pass

  data_list = []

  for gid, _ in enumerate(data_dict):
    genre = map_gid_to_genre[gid]
    data_list.append({
      "genre":  genre,
      "value": [
        (
          [year, data_dict[gid][year]] if year in data_dict[gid] else [year, 0]
        ) for year in range(min_year, max_year + 1)
      ]
    })
    
  with open("./storage/q5_dev.json", mode='w', encoding='utf-8') as f:
    json.dump(data_list, f)

  pass