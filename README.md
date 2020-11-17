# Charles Perry Portfolio
### Technologies Used:
- Built using Next.js and deployed via Vercel.
- React Bootstrap was used for the carousel and navbar.
- GSAP was utilized for simple animations.


### Purpose
The purpose of this website is to display the projects that I built during my time in General Assembly's remote software engineering immersive Bootcamp, and also to give an explanation for my journey to becoming a software engineer.

### Current Issues/ Updates to be made
While the Bootstrap carousel is powerful and easy to implement, it has shortcomings in the fact that it does not directly allow for the use of captions underneath each slide, this caused an issue. To try and remedy this issue I had to build a separate caption component to display underneath, however, while trying to use the index state of the carousel I found that the index does not pass as a prop as it is updated. As a fix, I hardcoded the captions to be superset to the timing of the carousel and subsequently check its index state, as it stands now the text matches the image displayed, but I was forced to remove the ability for the user to select through the images as intended. This issue is still present in the mobile version of the website. I have yet to find the correct phrase to Google or the correct person to answer how to resolve this issue. Secondly, on some mobile platforms such as the Samsung Galaxy the animations I coded using GSAP don't work with react intersection as intended meaning that the text that should be displayed fades out before intended. The animations work fine on iPhone and desktop.


