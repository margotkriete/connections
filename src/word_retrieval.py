import nltk

nltk.download("wordnet")
nltk.download("omw-1.4")

from nltk.corpus import wordnet as wn

groups = []

# Save synonyms in list, extract first synonym as the key
# probably too blunt and first synonym isn't necessarily
# representative, but enough to get started
for synset in list(wn.all_synsets("n")):
    # "synsets" are language-specific but lemmas cross languages
    lemmas = synset.lemma_names("ita")
    print("synset", synset)
    if len(lemmas) > 4:
        category = lemmas[0]
        items = lemmas[1:5]
        groups.append({"category": category, "items": items})

print(groups)
