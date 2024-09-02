import json
import random

from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

GUESS_LENGTH = 4
GROUP_LENGTH = 4

with open("groups.json") as f:
    groups = json.load(f)
SEED = random.randrange(0, len(groups) - GROUP_LENGTH)


@app.route("/groups")
def retrieve_groups():
    items = [
        i.replace("_", " ")
        for group in groups[SEED : SEED + GROUP_LENGTH]
        for i in group["items"]
    ]
    random.shuffle(items)
    return items


@app.route("/guess")
def submit_guess():
    guesses = request.args.getlist("guess[]")
    if len(guesses) != GUESS_LENGTH:
        return {"error": True}
    for category in groups[SEED : SEED + GROUP_LENGTH]:
        if set(guesses) == set(category["items"]):
            return {"correct": True, "category": category}
    return {"correct": False}


if __name__ == "__main__":
    app.run(debug=True)
