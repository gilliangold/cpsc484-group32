# Wellness Study Break
Group 32 Final Project for CPSC 484/584

# Description of Project
Students cannot be maximally productive all the time, but current study breaks often center around social media usage, which may not be the most restful or relaxing. Our installation of a Wellness Study Break seeks to address this problem by helping people engage in healthier activities while they are not doing work. Users can pick between a stretching or breathing exercise, either solo or with a partner! Once they complete the activity, they can see their results and are rewarded by getting to play with a 3D pet model!

# Tasks of Installation
(1) Selecting an activity: Users can choose from two options, including breathing and yoga, which are displayed on the screen with spatial positioning. Additionally, they can select either single-player or multiplayer modes. (CHANGE THIS BASED ON FEEDBACK FROM A5)

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
$(venv) pip3 install -r requirements.txt
```

# How to Run
First, navigate to the root of the repository and activate the virtual environment. Then, run the command:
```
$(venv) python3 app.py
```
Finally, navigate to http://127.0.0.1:8000/ in a web browser to preview the prototype

# Constraints in Deployment Environment
- We added a two-seconds wait time for each redirect to avoid skipping webpages during the process. Otherwise, an action from the user caught by the screen will be received by several webpages. Thus, users need to wait for 2 seconds to start their move based on the instructions.   
- Due to the delay of receiving kinect data, users need to wait for redirecting to the next page after their moves.
- The original design of the exercise duration is 5 minutes. For test and prototype purpose, the exercise will be finished in 1-2 minutes. The stretching completes when 2 / 8 exercises (shown on the screen) completed, and the breathing completes when 3 / 10 exercises (shown on the screen) completed.
- We implemented the redirect between different screens based on the wrist data. Users need to move their wrist along with the provided instructions to interact with the screen.
- The error prevention of the exercise is based on the detected number of players in the screen. With other people shown up in the background of the screen, the warning may popup unexpectedly.

# Collaboration Record
Gillian Gold (gg558)
- Organized meeting times and sent out reminder messages to advance progress.
- Created the welcome, activity choice, and player mode choice screens.
- Implemented the timeout function to return to the welcome screen after 3 minutes.
- Implemented the function to give an accuracy/completion score on the results page.
- Contributed to writing the README file.
- Collaborated on TV display debugging and testing.

Ben Sterling (bgs37)


Cathy Li (sl2857)
- Implemented the utilization of spatial data from screen control by receiving kinect data in the backend.
- Implemented the error prevention popup window in the exercise screen.
- Contributed to writing the README file.
- Collaborated on TV display debugging and testing.
