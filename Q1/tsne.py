from sklearn import manifold
# from sklearn.externals import joblib
import pandas as pd
import json
import sys


def fit():
  tsne = manifold.TSNE(n_components=1, init='pca', random_state=0)
  data = pd.read_csv('./storage/q2_reform.csv')
  X = data.iloc[:,:-1]
  X_new = tsne.fit_transform(X)
  source = X.values.tolist()
  target = X_new.tolist()
  with open("./storage/tsne-projection", mode='w', encoding='utf-8') as f:
    json.dump([s + t for s, t in zip(source, target)], f)
    pass
  # joblib.dump(tsne, "train_model.m")
  return

matrix = {
  "current": []
}

def load():
  with open("./storage/tsne-projection", mode='r', encoding='utf-8') as f:
    matrix["current"] = json.load(f)
    pass

def predict(chars):
  if len(matrix["current"]) == 0:
    load()
  min_idx, min_val = -1, 9999
  for e, origin in enumerate(matrix["current"]):
    dist = 0
    for i in range(13):
      l = (chars[i] - origin[i]) ** 2
      dist += l
      if min_idx > 0 and dist >= min_val:
        break
    if min_idx == -1 or dist < min_val:
      min_val = dist
      min_idx = e
  return matrix["current"][min_idx][13]

if __name__ == '__main__':
  if len(sys.argv) > 1 and sys.argv[1] == "fit":
    print("Running t-SNE fitting")
    fit()
    exit(0)
  
  test_X = [
    [0.4416285092717291, 0.23614918367346946, 0.3943852040816325, 0.4485613135750061, 0.7309863497356776, 0.7081632653061225, 0.48283858998144685, 0.8367090812228496, 0.004299176635819494, 0.20994357142857145, 0.0635475061393853, 0.0, 0.054939666103147426]
  ]

  load()

  res = predict(test_X[0])
  print(res)

  pass
