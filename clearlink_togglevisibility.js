/* window.onload = clearCurrentLink; */

// Collapsible menu script
/*
Creating a Website: The Missing Manual, Third Edition
By Matthew MacDonald
This code is illustrated in Chapter-15 p451
http://www.oreilly.com/pub/missingmanuals/caw3
*/
function ToggleVisibility(image, element){
   // Find the image.
   var image = document.getElementById(image)
   // Find the element to hide/unhide.
   var element = document.getElementById(element)
   // Check the element's current state.
   if (element.style.display == "none"){
      // If hidden, unhide it.
	  element.style.display = "block"
	  image.src = "figs/open.png"
   }
   else {
      // If not hidden, hide it.
	  element.style.display = "none"
	  image.src = "figs/closed.png"
   }
}

// Clear current link
/*
CLCP v2.1 Clear Links to Current Page
Jonathan Snook
This code is offered unto the public domain
http://www.snook.ca/jonathan/
*/
function clearCurrentLink(){
   var a = document.getElementsByTagName("A");
   for(var i=0;i<a.length;i++){
      if(a[i].href.split("#")[0] == window.location.href.split("#")[0]){
	  removeNode(a[i]);
      }
   }
}
function removeNode(n){
   if(n.hasChildNodes()){
   for(var i=0;i<n.childNodes.length;i++){
      n.parentNode.insertBefore(n.childNodes[i].cloneNode(true),n);
   }
   }
   n.parentNode.removeChild(n);
}

// Enlarge image
function enlargeImage(figNo){
   var nodeList = document.querySelectorAll('#ContentBox .Figs');
   var myNode = nodeList[figNo-1]; /* FigN => index=N-1 */
   
   //create a new element
   var myOverlay = document.createElement('div');
   myOverlay.id = 'overlay';
   document.body.appendChild(myOverlay);
   //set up overlay styles
   myOverlay.style.position = 'absolute';
   myOverlay.style.top = 0;
   myOverlay.style.backgroundColor = 'rgba(0,0,0,0.7)';
   myOverlay.style.cursor = 'zoom-out';
   //resize and position overlay
   myOverlay.style.width = window.innerWidth + 'px';
   myOverlay.style.height = window.innerHeight + 'px';
   myOverlay.style.top = window.pageYOffset + 'px';
   myOverlay.style.left = window.pageXOffset + 'px';
   //set up image on-top of the overlay
   var largeImage = document.createElement('img');
   largeImage.id = 'largeImage';
   largeImage.src = myNode.getElementsByTagName('IMG')[0].src;
   largeImage.style.display = 'block';
   largeImage.style.position = 'absolute';
   
   //wait until the image has loaded
   largeImage.addEventListener('load',function(){
      resizeImage(this); //resize to fit window
	  centerImage(this); //center largeImage by calling function
	  myOverlay.appendChild(largeImage); //now add the image by appending
   }); //image has loaded
   
   //remove image when overlay image is clicked
   largeImage.addEventListener('click',function(){
      if(myOverlay){
	     //making sure window is no longer listening to events created
		 window.removeEventListener('resize', window, false);
		 window.removeEventListener('scroll', window, false);
		 //remove image overlay
		 myOverlay.parentNode.removeChild(myOverlay);
      }
   }, false);
   //remove image when overlay is clicked
   myOverlay.addEventListener('click',function(){
      if(myOverlay){
	     //making sure window is no longer listening to events created
		 window.removeEventListener('resize', window, false);
		 window.removeEventListener('scroll', window, false);
		 //remove image overlay
		 myOverlay.parentNode.removeChild(myOverlay);
      }
   }, false);
   
   //fit overlay with scroll
   window.addEventListener('scroll',function(){
      if(myOverlay){
	     myOverlay.style.top = window.pageYOffset + 'px';
		 myOverlay.style.left = window.pageXOffset + 'px';
      }
   }, false);
   
   //fit window
   window.addEventListener('resize',function(){
      if(myOverlay){
	     myOverlay.style.width = window.innerWidth + 'px';
		 myOverlay.style.height = window.innerHeight + 'px';
		 myOverlay.style.top = window.pageYOffset + 'px';
		 myOverlay.style.left = window.pageXOffset + 'px';
		 resizeImage(largeImage);
		 centerImage(largeImage); //center image with changing window size
      }
   }, false);  
}

//function for resizing the image
function resizeImage(theImage){
   //resize if wider to 95% for some room left and right
   if (theImage.height > window.innerHeight && theImage.width > window.innerWidth){
      if(theImage.height < theImage.width) {
	     theImage.ratio = 0.95 * window.innerWidth / theImage.width;
	     theImage.height = theImage.height * theImage.ratio;
	     theImage.width = theImage.width * theImage.ratio;
	  }
	  else {
	     theImage.ratio = 0.95 * window.innerHeight / theImage.height;
	     theImage.height = theImage.height * theImage.ratio;
	     theImage.width = theImage.width * theImage.ratio;
	  }
   }
   //resize if wider to 95% for some room left and right
   else if (theImage.width > window.innerWidth && theImage.height < window.innerHeight){
      theImage.ratio = 0.95 * window.innerWidth / theImage.width;
	  theImage.height = theImage.height * theImage.ratio;
	  theImage.width = theImage.width * theImage.ratio;
   }
   //resize if taller to 95% for some room above and below
   else if (theImage.height > window.innerHeight && theImage.width < window.innerWidth){
      theImage.ratio = 0.95 * window.innerHeight / theImage.height;
	  theImage.height = theImage.height * theImage.ratio;
	  theImage.width = theImage.width * theImage.ratio;
   }
}

//function for centering the above image
function centerImage(theImage){
   var myDifX = (window.innerWidth - theImage.width)/2;
   var myDifY = (window.innerHeight - theImage.height)/2;
   theImage.style.top = myDifY + 'px';
   theImage.style.left = myDifX + 'px';
   return theImage;
}