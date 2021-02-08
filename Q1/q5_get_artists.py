import csv
import json


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

if __name__ == "__main__":
  data_dict = {}

  with open("./storage/map_aid_to_genre.json", mode='r', encoding='utf-8') as f:
    map_aid_to_genre = json.load(f)
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

  min_year = 1925
  max_year = 2020
  sum_per_year = {}
  for year in range(min_year, max_year + 1):
    sum_per_year[year] = 0

  with open("./dataset/full_music_data.csv", mode='r', encoding='utf-8') as f:
    csv_data = csv.reader(f)
    for row in [line for line in csv_data][1:]:
      aid_list = [aid for aid in json.loads(row[1]) if str(aid) in map_aid_to_genre]
      year = int(row[16])
      if year < min_year or year > max_year:
        continue
      contribution = int(row[15])
      for aid in aid_list:
        gid = map_genre_to_gid[map_aid_to_genre[str(aid)]]
        if aid not in data_dict:
          data_dict[aid] = {
            "gid": gid,
            "data": {}
          }
        if year not in data_dict[aid]["data"]:
          data_dict[aid]["data"][year] = 0
        data_dict[aid]["data"][year] += contribution / len(aid_list)
      sum_per_year[year] += contribution
    pass

  data_list = []

  for aid in data_dict:
    data = []
    year_min = 10000
    year_max = 0
    record = False
    for year in data_dict[aid]["data"]:
      if year > year_max:
        year_max = year
      if year < year_min:
        year_min = year
    for year in range(year_min, year_max + 1):
      if year in data_dict[aid]["data"]:
        if data_dict[aid]["data"][year] >= sum_per_year[year] * 0.015:
          record = True
        data.append([year, data_dict[aid]["data"][year]])
      else:
        data.append([year, 0])
    if record:
      data_list.append({
        "aid":  aid,
        "name": map_aid_to_aname[aid],
        "gid":  data_dict[aid]["gid"],
        "data": data
      })
    
  print(len(data_list))
  print(len([a for a in data_list if len(a["data"]) >= 1]))

  with open("./storage/all_artists.json", mode='w', encoding='utf-8') as f:
    json.dump([a for a in data_list if len(a["data"]) >= 1], f)

  pass