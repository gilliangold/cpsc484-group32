from flask import *

app = Flask(__name__, template_folder='templates')

@app.route("/", methods=['GET', 'POST'])
def home():
    html = render_template("welcome.html")
    return make_response(html)

@app.route("/activity_choice", methods=['GET', 'POST'])
def activity_choice():
    html = render_template("activity-choice.html")
    return make_response(html)

@app.route("/breathe_player_mode", methods=['GET', 'POST'])
def breathe_player_mode():
    html = render_template("breathe-player-mode.html")
    return make_response(html)

@app.route("/stretch_player_mode", methods=['GET', 'POST'])
def stretch_player_mode():
    html = render_template("stretch-player-mode.html")
    return make_response(html)

@app.route("/exercise", methods=['GET', 'POST'])
def exercise():
    choice = request.args.get("choice", "stretch")
    mode = request.args.get("mode", "1")
    html = render_template("exercise.html", choice=choice, mode=mode)
    return make_response(html)

@app.route("/results", methods=['GET', 'POST'])
def results():
    choice = request.args.get("choice", "stretch")
    mode = request.args.get("mode", "1")
    html = render_template("results.html", choice=choice, mode=mode)
    return make_response(html)

@app.route("/reward", methods=['GET', 'POST'])
def reward():
    choice = request.args.get("choice", "stretch")
    mode = request.args.get("mode", "1")
    html = render_template("reward.html", choice=choice, mode=mode)
    return make_response(html)



if __name__ == "__main__":
    app.run(debug=True, port=8000)