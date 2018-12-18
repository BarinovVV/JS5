 function tabs() {
     let tab = document.getElementsByClassName('glazing_block'),
         link = document.querySelectorAll('.glazing_block > a'),
         tabContent = document.getElementsByClassName('tabs_content');

     function hideTabContent(a) {
         for (let i = a; i < tabContent.length; i++) {
             tabContent[i].classList.remove('show');
             tabContent[i].classList.add('hide');
             link[i].classList.remove('active');
         }
     }

     hideTabContent(1);

     function showTabContent(b) {
         if (tabContent[b].classList.contains('hide')) {
             hideTabContent(0);
             tabContent[b].classList.remove('hide');
             tabContent[b].classList.add('show');
             link[b].classList.add('active');
         }
     }

     for (let i = 0; i < tab.length; i++) {
         tab[i].addEventListener('click', ()=> {
             showTabContent(i);
         })
     }



     let noClick = document.querySelectorAll('.no_click'),
         decor = document.querySelector('.decoration'),
         decorLink = document.querySelectorAll('.no_click>a'),
         decorContent = document.querySelectorAll('.tabs-finishing-content');

     function showTabClass(a) {
         for (let t = 0; t < noClick.length; t++) {
             noClick[t].classList.remove('after_click');
             decorContent[t].style.display = 'none';
         }
         noClick[a].classList.add('after_click');
         decorContent[a].style.display = 'block';
     }

     decor.addEventListener('click', (event) => {
         let target = event.target;
         if (target.parentElement.classList.contains('no_click')) {
             for (let i = 0; i < decorLink.length; i++) {
                 if (target == decorLink[i]) {
                     showTabClass(i);
                     break;
                 }
             }
         }
     });
 }

 module.exports = tabs;


