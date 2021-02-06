import csv
import json


map_aid_to_genre = {}

if __name__ == "__main__":
  data_dict = {}

  with open("./storage/map_aid_to_genre.json", mode='r', encoding='utf-8') as f:
    map_aid_to_genre = json.load(f)
    pass

  with open("./dataset/full_music_data.csv", mode='r', encoding='utf-8') as f:
    csv_data = csv.reader(f)
    for row in [line for line in csv_data][1:]:
      aid_list = [aid for aid in json.loads(row[1]) if str(aid) in map_aid_to_genre]
      year = int(row[16])
      contribution = int(row[15])
      for aid in aid_list:
        genre = map_aid_to_genre[str(aid)]
        if genre == "Pop/Rock":
          if aid not in data_dict:
            data_dict[aid] = {}
          if year not in data_dict[aid]:
            data_dict[aid][year] = 0
          data_dict[aid][year] += contribution / len(aid_list)
    pass

  data_list = []

  for aid in data_dict:
    data = []
    year_min = 10000
    year_max = 0
    for year in data_dict[aid]:
      if year > year_max:
        year_max = year
      if year < year_min:
        year_min = year
    for year in range(year_min, year_max + 1):
      if year in data_dict[aid]:
        data.append([year, data_dict[aid][year]])
      else:
        data.append([year, 0])
    data_list.append({
      "aid":  aid,
      "data": data
    })
    
  print(len(data_list))
  print(len([a for a in data_list if len(a["data"]) >= 5]))

  with open("./storage/poprock_artists.json", mode='w', encoding='utf-8') as f:
    json.dump([a for a in data_list if len(a["data"]) >= 5], f)

  pass