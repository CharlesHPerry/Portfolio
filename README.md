# Charles Perry Portfolio
### Technologies Used:
- Built using Next.js and deployed via vercel.
- React Bootstrap was used for the carosel and navbar.
- GSAP was utilized for simple animations.

### Purpose
The purpose of this website is to display the projects that I built during my time in General Assembly's remote software engineering immersive bootcamp, and also to give an explination for my journey to becoming a software engineer.

### Current Issues/ Updates to be made
While the Bootstrap carosel is powerful and easy to implement, it has shortcomings in the fact that it does not directly allow for the use of captions underneath each slide, this caused an issue. To try and remedy this issue I had to build a seperate caption component to display underneath, however while trying to use the index state of the carosel I found that the index does not pass as a prop as it is updated. As a fix I hard coded the captions to be super set to the timing of the carose and subsequently check its index state, as it stands now the text matches the image desplayed, but I was forced to remove the ability for the user to select through the images as intended. This issue is still present in the mobile version of the website. I have yet to find the correct phrase to Google or the correct person to answer how to resolve this issue. Secondly, on some mobile platforms such as the Samsung Galaxy the animations I coded using GSAP don't work with react intesection as intended meaning that the text that should be displayed fades out before intended. The animations work fine on IPhone and desktop.

