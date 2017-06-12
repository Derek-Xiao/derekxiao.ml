from flask import Flask, jsonify, send_file, request
import numpy as np
import configparser
from os import getcwd, listdir
import json
from os.path import join, exists, isfile
import math

app = Flask(__name__, static_url_path="/static")


@app.route('/')
def index():
    return send_file("static/index.html")


@app.route('/get/blog')
def get_blog():
    blog_name = request.args["blog-id"]
    path = join("data", "blog", blog_name)
    result = {
        "id": blog_name,
        "status": 0,
        "message": "blog not exists",
    }
    if exists(path):
        with open(path, "rb") as md_file:
            result["status"] = 1
            result["message"] = md_file.read().decode("UTF-8")
            return jsonify(result)
    else:
        return jsonify(result)


@app.route('/get/blog-list')
def get_blog_list():
    blog_root = join("data", "blog")
    files = listdir(blog_root)
    return "\n".join([f for f in files if isfile(join(blog_root, f))])


@app.route('/get/cv')
def get_cv():
    r = []
    with open(join(*["data", "intro", "cv.txt"]), "rb") as cv_file:
        content = cv_file.readlines()
        for line in content:
            if len(line) == 0:
                continue
            line = line.decode("UTF-8")
            line = line.replace("\n", "").replace("\r", "")
            ts = line.split("|")
            p = {}
            p["date"] = ts[0]
            p["title"] = ts[1]
            p["description"] = ""
            if len(ts) > 2:
                p["description"] = ts[2]
            r.append(p)
        return jsonify(r)


if __name__ == '__main__':
    app.run(port=80, host="0.0.0.0", threaded=True)
