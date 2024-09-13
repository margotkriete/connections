import nltk

nltk.download("wordnet")
nltk.download("omw-1.4")

from nltk.corpus import wordnet as wn

groups = []

# Save synonyms in list, extract first synonym as the key
# probably too blunt and first synonym isn't necessarily
# representative, but enough to get started
category_set = set()
for synset in list(wn.all_synsets("n")):
    # "synsets" are language-specific but lemmas cross languages
    lemmas = synset.lemma_names("ita")
    if len(lemmas) > 4:
        category = lemmas[0]
        items = lemmas[1:5]
        if category not in category_set:
            groups.append(
                {
                    "category": category,
                    "items": [[item, synset.name()[:-5]] for item in items],
                }
            )
        category_set.add(category)

print(groups)
