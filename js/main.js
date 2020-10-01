import {$} from './utils.js';
import UICtrl from './UICtrl.js';

let log = console.log;

let Dom = UICtrl.getDom();

Array.from($(Dom.contactType_btn)).forEach(ct => {
  ct.addEventListener('click', e => {
    // get currently displayed contact_type List
    let curContactList = $('.contact_typeShow');

    // remove if it exist 
    if (curContactList)
      curContactList.classList.toggle('contact_typeShow');

    // display the new contact_type List
    ct.classList.toggle('contact_typeShow');
  });
});

$(Dom.contact_list).addEventListener('scroll', e => {
  let contact_list_scrollTop = e.target.scrollTop;

  if (contact_list_scrollTop > 20) {
    
  }

  log(e.target.scrollTop);  
  // e.target.scrollTop += 20;


  let ctL = $(Dom.contact_orderKey);
  ctL.style.position = "absolute";
  ctL.style.left = "0%";

  let ct_text = $(Dom.contact_orderValues);

  if (!(Array.from(ct_text.classList).includes('scrolled_list'))) {
    log(ct_text.classList);
    ct_text.classList.toggle('scrolled_list');
  }

  // if (ct_text.classList);
  
});