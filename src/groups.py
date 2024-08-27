import json
import random

from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


with open("groups.json") as f:
    groups = json.load(f)


@app.route("/groups")
def retrieve_groups():
    rand_num = random.randrange(0, len(groups) - 4)
    items = [
        i.replace("_", " ")
        for group in groups[rand_num : rand_num + 4]
        for i in group["items"]
    ]
    random.shuffle(items)
    return items


@app.route("/guess", methods=["GET"])
def submit_guess():
    # add separate /guess endpoint to look up category
    # probably cache categories too? or store in DB
    return


if __name__ == "__main__":
    app.run(debug=True)
