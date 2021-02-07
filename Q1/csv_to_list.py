import csv
import json
import sys


if __name__ == "__main__":
  name = sys.argv[1]
  with open(name, mode='r', encoding='utf-8') as f:
    csv_data = csv.reader(f)
    data = []
    for row in [line for line in csv_data]:
      if abs(float(row[0])) > 50 or abs(float(row[1])) > 50:
        continue
      data.append([float(row[0]), float(row[1]), int(float(row[2]))])
  with open(name + ".json", mode='w', encoding='utf-8') as f:
    json.dump(data, f)
  pass
