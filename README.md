# Wellness Study Break
Group 32 Final Project for CPSC 484/584

# Description of Project
Students cannot be maximally productive all the time, but current study breaks often center around social media usage, which may not be the most restful or relaxing. Our installation of a Wellness Study Break seeks to address this problem by helping people engage in healthier activities while they are not doing work. Users can pick between a stretching or breathing exercise, either solo or with a partner! Once they complete the activity, they can see their results and are rewarded by getting to play with a 3D pet model!

# Tasks of Installation
(1) Selecting an activity: Users can choose from two options, including breathing and yoga, which are displayed on the screen with spatial positioning. Additionally, they can select either single-player or multiplayer modes. Since people feel like they do not have a lot of time to take a break, these choices allow users to feel in control of how they are choosing how they spend the time to focus on their mental/physical health.


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
- We added a two-second wait time for each redirect between webpages to avoid skipping pages during the process. Otherwise, an action from the user caught by the screen will be received by several webpages. Thus, users are instructed to wait for 2 seconds to start their gesture.   
- Due to the delay in receiving kinect data, users are asked to wait for redirecting to the next page after their moves.
- We implemented the redirect between different screens based on the wrist data. Users need to move their wrist along with the provided instructions to interact with the screen.
- To prevent more users for an exercise than the system is expecting, we implemented an error prevention measure based on the detected number of players in view. However, as our implementation environment has a high-traffic corridor in part of the frame, the warning may popup unexpectedly.

# Collaboration Record
Gillian Gold (gg558)
- Organized meeting times and sent out reminder messages to advance progress.
- Created the welcome, activity choice, and player mode choice screens.
- Worked on the results, multiplayer results, reward choice screens.
- Implemented the timeout function to return to the welcome screen after 3 minutes.
- Implemented the function to give an accuracy/completion score on the results page.
- Contributed to writing the README file.
- Collaborated on TV display debugging and testing.

Ben Sterling (bgs37)
- Created the results, multiplayer results, reward choice, and reward pet screens.  
- Implemented the utilization of spatial data for switching between images on the reward pages in the backend
- Contributed to writing the README file.  
- Collaborated on TV display debugging and testing.

Graditude Statement: I personally struggled with the implementing languages/systems, but Cathy and Gillian were patient while I was learning, and both individually took the time out to teach me things I didn't understand and took extra looks over my code. They went above and beyond in supporting me, and I really appreciated it!

Cathy Li (sl2857)
- Created the exercise screens with different activities (stretch/breathe) and player modes (single/multiple).
- Implemented the utilization of spatial data for switching between screens by receiving kinect data in the backend.
- Implemented the error prevention popup window in the exercise screen.
- Contributed to writing the README file.
- Collaborated on TV display debugging and testing.
