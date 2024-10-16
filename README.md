### Connessioni

This is a basic spin-off of the NYT Connections game. The objective is to group the tiles into four groups of four, each group tied by a common category. This version is in Italian and, to simplify the game for learning purposes, all groupings are Italian synonyms (so no pop culture, proper nouns, nor wordplay, yet).

### Play locally

To run the game locally:

1. Clone this repository.
2. Run `npm install` to install the required Node modules.
3. Run `cd client/`, then `npm run dev`.

The game should run on `https://localhost:5173`.

### Play deployed version

The game is also deployed at [https://connections-xih1.onrender.com/](https://connections-xih1.onrender.com/).

### Implementation

The groups of synonyms are generated using the Python NLTK [wordnet](https://www.nltk.org/howto/wordnet.html) library, specifically their `lemma` and `synset` functions. Synsets are language-specific sets of synonyms that share a common meaning, and lemmas represent a specific sense of a word.

A Flask server serves two routes, `/groups` and `/guess` to retrieve synonym groups and check for correct guesses, respectively.

The frontend uses React and TypeScript.
