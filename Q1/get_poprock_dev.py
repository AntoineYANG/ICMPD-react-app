import csv
import json


map_aid_to_genre = {}

if __name__ == "__main__":
  data_dict = {}

  with open("./storage/map_aid_to_genre.json", mode='r', encoding='utf-8') as f:
    map_aid_to_genre = json.load(f)
    pass

  min_year = 1930
  max_year = 2010

  with open("./dataset/full_music_data.csv", mode='r', encoding='utf-8') as f:
    csv_data = csv.reader(f)
    for row in [line for line in csv_data][1:]:
      aid_list = [aid for aid in json.loads(row[1]) if str(aid) in map_aid_to_genre]
      year = int(row[16])
      contribution = int(row[15])
      if year < min_year:
        min_year = year
      elif year > max_year:
        max_year = year
      if year not in data_dict:
        data_dict[year] = [0, 0]
      for aid in aid_list:
        genre = map_aid_to_genre[str(aid)]
        if genre == "Pop/Rock":
          data_dict[year][0] += contribution / len(aid_list)
        data_dict[year][1] += contribution / len(aid_list)
    pass

  data_list = []

  for year in range(min_year, max_year + 1):
    if year not in data_dict:
      data_list.append({
        "year":   year,
        "value":  0
      })
    else:
      data_list.append({
        "year":   year,
        "value":  data_dict[year][0] / data_dict[year][1] if data_dict[year][1] else 0
      })
    
  with open("./storage/poprock_dev.json", mode='w', encoding='utf-8') as f:
    json.dump(data_list, f)

  pass