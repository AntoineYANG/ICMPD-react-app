from sklearn import manifold
import pandas as pd
import json


def fit():
  tsne = manifold.TSNE(n_components=2, init='pca', random_state=0)
  data = pd.read_csv('./storage/q2_reform.csv')
  X = data.iloc[:,:-1]
  X_new = tsne.fit_transform(X)
  source = X.values.tolist()
  target = X_new.tolist()
  with open("./storage/tsne-projection-2d.json", mode='w', encoding='utf-8') as f:
    json.dump([s + t for s, t in zip(source, target)], f)
    pass
  return

if __name__ == '__main__':
  fit()

  pass
