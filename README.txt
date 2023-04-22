# Wellness Study Break
Group 32 Final Project for CPSC 484/584 

# Original Instructions (to be deleted)
Run the project: 
> Run `python3 app.py` in the terminal
> Go to different links in the brower for different webpages:
> - welcome: http://127.0.0.1:8000/
> - activity-choice: http://127.0.0.1:8000/activity_choice
> - breathe-player-mode: http://127.0.0.1:8000/player_mode?choice=stretch
> - stretch-player-mode: http://127.0.0.1:8000/player_mode?choice=breathe  
> - activities:    
>   - stretch: http://127.0.0.1:8000/exercise?choice=stretch   
>   - breathe: http://127.0.0.1:8000/exercise?choice=breathe    
>   - with player mode: http://127.0.0.1:8000/exercise?choice=breathe&mode=2     
> - result-breathe: http://127.0.0.1:8000/results?choice=breathe   
> - result-stretch: http://127.0.0.1:8000/results?choice=stretch
> - reward: http://127.0.0.1:8000/reward

(for new webpage, you can create similar functions in the app.py file)

- templates: html files
- static: css and js files

# Description of Project
Students cannot be maximally productive all the time, but current study breaks often center around social media usage, which may not be the most restful or relaxing. Our installation of a Wellness Study Break seeks to address this problem by helping people engage in healthier activities while they are not doing work. Users can pick between a stretching or breathing exercise, either solo or with a partner! Once they complete the activity, they can see their results and are rewarded by getting to play with a 3D pet model!

# Tasks of Installation
(1) Selecting an activity: Users can choose from two options, including breathing and yoga, which are displayed on the screen with spatial positioning. Additionally, they can select either single-player or multiplayer modes.

(2) Engaging in wellness-promoting activities: Once the user has chosen the activity and the mode, the system guides the user through a series of poses, each lasting 30 seconds. The system provides spatial positioning feedback on the right side of the screen to help users track their moves. Users are given a five-minute duration to complete the activity, and upon completion, their final completeness and accuracy are displayed, and they are rewarded.

# Installation
To install the dependencies for Wellness Study Break, navigate to the root of this repository and create a Python virtual environment.
```
$ python3 -m venv venv
```
Then, activate the virtual environment.
```
$ source venv/bin/activate
```
Within the virtual environment, upgrade pip and install the dependencies
```
$(venv) pip install --upgrade pip
$(venv) pip install -r requirements.txt
```

# How to Run
First, navigate to the root of the repository and activate the virtual environment. Then, run the command:
```
$(venv) python app.py
```
Finally, navigate to http://127.0.0.1:8000/ in a web browser to preview the prototype

# Constraints in Deployment Environment
TBD…

# Collaboration Record
Gillian Gold (gg558)


Ben Sterling (bgs37)


Cathy Li (sl2857)
