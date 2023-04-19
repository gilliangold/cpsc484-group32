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

@app.route("/results_stretch", methods=['GET', 'POST'])
def results_stretch():
    choice = request.args.get("choice", "stretch")
    mode = request.args.get("mode", "1")
    html = render_template("results_stretch.html", choice=choice, mode=mode)
    return make_response(html)

@app.route("/results_breathe", methods=['GET', 'POST'])
def results_breathe():
    choice = request.args.get("choice", "breathe")
    mode = request.args.get("mode", "1")
    html = render_template("results_breathe.html", choice=choice, mode=mode)
    return make_response(html)

@app.route("/results_breathe_two", methods=['GET', 'POST'])
def results_breathe_two():
    choice = request.args.get("choice", "breathe")
    mode = request.args.get("mode", "1")
    html = render_template("results_breathe_two.html", choice=choice, mode=mode)
    return make_response(html)

@app.route("/results_stretch_two", methods=['GET', 'POST'])
def results_stretch_two():
    choice = request.args.get("choice", "stretch")
    mode = request.args.get("mode", "1")
    html = render_template("results_stretch_two.html", choice=choice, mode=mode)
    return make_response(html)

@app.route("/reward", methods=['GET', 'POST'])
def reward():
    mode = request.args.get("mode", "1")
    html = render_template("reward.html", mode=mode)
    return make_response(html)


if __name__ == "__main__":
    app.run(debug=True, port=8001)