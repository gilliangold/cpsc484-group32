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

@app.route("/player_mode", methods=['GET', 'POST'])
def player_mode():
    choice = request.args.get("choice", "stretch")
    if choice == "stretch":
        html = render_template("stretch-player-mode.html")
    else:
        html = render_template("breathe-player-mode.html")
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
    if choice == "stretch":
        if mode == "1":
            html = render_template("results_stretch.html", choice=choice, mode=mode)
        else:
            html = render_template("results_stretch_two.html", choice=choice, mode=mode)
    else:
        if mode == "1":
            html = render_template("results_breathe.html", choice=choice, mode=mode)
        else:
            html = render_template("results_breathe_two.html", choice=choice, mode=mode)
    return make_response(html)

@app.route("/reward", methods=['GET', 'POST'])
def reward():
    mode = request.args.get("mode", "1")
    action = request.args.get("left", "up")
    if action == "left":
        html = render_template("reward_left.html", mode=mode)
    elif action == "up":
        html = render_template("reward_up.html", mode=mode)
    else: 
        html = render_template("reward_origin.html", mode=mode)
    return make_response(html)


if __name__ == "__main__":
    app.run(debug=True, port=8000)