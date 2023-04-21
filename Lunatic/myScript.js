//All pop-up bellow work the same way. 
//Created ID "PopUpMenu" is taken by the element and then with onclick function "openMenu() it allows the menu to be open "addPopUpMenu"
//"PopUpMenu" and "openPopUpMenu" are styled with CSS

// Home Menu popup

  let PopUpMenu = document.getElementById("PopUpMenu");

    function openMenu(){
      PopUpMenu.classList.add("openPopUpMenu")
    }

    function closeMenu(){
      PopUpMenu.classList.remove("openPopUpMenu")
    }

// Investigate popup

    let InvestigatePopup = document.getElementById("InvestigatePopup");

    function openInvestigate(){
      InvestigatePopup.classList.add("openInvestigatePopup")
    }
    
    function closeInvestigate(){
      InvestigatePopup.classList.remove("openInvestigatePopup")
    }

 // Backpack popup

 let BackpackPopup = document.getElementById("BackpackPopup");

 function openBackpack(){
  BackpackPopup.classList.add("openBackpackPopup")
 }
 
 function closeBackpack(){
  BackpackPopup.classList.remove("openBackpackPopup")
 }
 
 // array of images in the photo gallery

const PhotoGallery = [ 
  'images/Photo1.png',
  'images/Photo2.png',
  'images/Photo3.png',
  'images/Photo4.png',
  'images/Photo5.png',
  'images/Photo5.png'
];

const firstPhoto = 0;
const lastPhoto = PhotoGallery.length -1;
let currentPhoto = 0;

const nextBtn = document.getElementById('next');
nextPhoto.addEventListener('click',()=>{

  const imageTag = document.getElementById('photo');
  currentPhoto++;
  if(currentPhoto >= lastPhoto){
    currentPhoto = 0;

  }
  imageTag.src = PhotoGallery[currentPhoto]
});

//This photo gallery, which changes an image upon click of a button, was developed with few steps.
//First, all images had to be pasted into "Photogallery", then "firstPhoto" and "lastPhoto" was defined to specify beginning and end of the gallery.
//"CurrentPhoto" labels a image, that the gallery begins with. Next, "nextPhoto" symbolizes a button, which on click evokes a function.
//This function makes 'photo' increase by one on click "currentPhoto++". If the gallery reaches the end "currentPhoto >= lastPhoto", gallery
//will restart from the beginning and starts on the first image.


function speakText() {
  if ('speechSynthesis' in window) {
    var msg = new SpeechSynthesisUtterance();
    var text = document.getElementById('text-to-speak').innerText;
    msg.text = text;
    window.speechSynthesis.speak(msg);
  } else {
    console.log('SpeechSynthesis is not supported by this browser.');
  }
}

//This function makes the text spoken when tapping the icon. "SpeechSynthesisUtterance" is web speech API that represents a speech request.
//Variable looks for ID "text-to-speak" in the HTML, that can be translated into the speech.
//If the speaker doesn't produce any sound, it is likely the browser doesn't support this function.


