import json
import random

from flask import Flask, request
from flask_cors import CORS

app = Flask(
    __name__,
    static_url_path="",
    static_folder="../client/build",
    template_folder="../client/build",
)
CORS(app)

GUESS_LENGTH = 4
GROUP_LENGTH = 4

with open("groups.json") as f:
    groups = json.load(f)
SEED = random.randrange(0, len(groups) - GROUP_LENGTH)
items = [
    {"tile": i.replace("_", " "), "engTile": engTile}
    for group in groups[SEED : SEED + GROUP_LENGTH]
    for i, engTile in group["items"]
]


@app.route("/groups")
def retrieve_groups():
    random.shuffle(items)
    return items


@app.route("/guess")
def submit_guess():
    guesses = request.args.getlist("guess[]")
    if len(guesses) != GUESS_LENGTH:
        return {"error": True}
    for group in groups[SEED : SEED + GROUP_LENGTH]:
        ita_items = [items[0] for items in group["items"]]
        if set(guesses) == set(ita_items):
            return {"correct": True, "category": group["category"]}
    return {"correct": False}


if __name__ == "__main__":
    app.run(debug=True)