# 1. Generate list of 1000? common nouns/adjectives?
# 2. For each adjective, retrieve synonyms from wordnet; store these in a DB
# 3. Group words by synonym (category)
# 4. Write API to retrieve groups of 4 words per category

# GET /grouping - return {[category_name: 'name', items: ['item1','item2'...x4]]x4}
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
    if len(lemmas) > 4:
        category = lemmas[0]
        items = lemmas[1:5]
        groups.append({"category": category, "items": items})

print(groups)