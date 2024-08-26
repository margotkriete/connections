# 1. Generate list of 1000? common nouns/adjectives?
# 2. For each adjective, retrieve synonyms from wordnet; store these in a DB
# 3. Group words by synonym (category)
# 4. Write API to retrieve groups of 4 words per category

# GET /grouping - return {[category_name: 'name', items: ['item1','item2'...x4]]x4}
import nltk

nltk.download("wordnet")
nltk.download("omw-1.4")

from nltk.corpus import wordnet as wn

synsets = list(wn.all_synsets("n", lang="ita"))

for synset in synsets:
    lemmas = synset.lemma_names("ita")
    if len(lemmas) > 3:
        print(f"synset: {synset.name()}")
        print(f"lemmas {lemmas}")
    #     print(f"l")
