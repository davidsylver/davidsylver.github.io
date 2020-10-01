<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/reset.css"/>
  <link rel="stylesheet" href="css/style.css"/>
  <title>fiaryPhoneBook</title>
</head>
<body>

  <div class="app ct">
    <!--main View-->
    <div class="main_view view">
       <div class="header">
        <div class="header_top fx">
          <div class="col">
            <div class="logo">Contacts</div>
          </div>
          <div class="col fx h_lt_col">
            <div class="searchBar">
              <img src="./img/searchIcon.png" class="searchBar_icon">
            </div>
            <div class="menu_btn">
              <div class="menu_dots">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </div>
  
              <ul class="menu_list">
                <div class="menu_listItem">contacts to display</div>
                <div class="menu_listItem">import/Export</div>
                <div class="menu_listItem">Groups</div>
                <div class="menu_listItem">Blocked numbers</div>
                <div class="menu_listItem">Manage Acconts</div>
                <div class="menu_listItem">Settings</div>
              </ul>
            </div>
          </div>
        </div>
        <div class="header_bottom fx">
          <div class="contact_type favoriteContacts_label"></div>
          <div class="contact_type allContacts_label"></div>
        </div>
       </div>

       <main class="main">
         <div class="contact_list">
           <div class="fav_contact_list">
            <div class="fav_contacts fx">
              <div class="fav_contact">
                <div class="fav_contact_profilePic"><div class="contact_initial">D</div></div>
                <div class="contact_name fav_contact_name">David</div>
              </div>
              <div class="fav_contact">
                <div class="fav_contact_profilePic"><div class="contact_initial">S</div></div>
                <div class="contact_name fav_contact_name">Sam</div>
              </div>
            </div>
            <div class="frequently_contacted">

            </div>
           </div>

           <!-- All contact List-->
           <!-- <div class="all_contact_list">
             <ul class="contact_order">
               <li class="contact_orderItem">
                 <div class="contact_orderKey">A</div>
                 <div class="contact_orderValues">
                   <div class="contact fx">
                     <div class="contact_profilePic"><img src="./img/profilePic.png" class="contact_profilePic_img"></div>
                     <div class="contact_name">David</div>
                   </div>
                   <div class="contact fx">
                     <div class="contact_profilePic"><img src="./img/img3.jpg" class="contact_profilePic_img"></div>
                     <div class="contact_name">Ben</div>
                   </div>
                   <div class="contact fx">
                     <div class="contact_profilePic"><img src="./img/img5.jpg" class="contact_profilePic_img"></div>
                     <div class="contact_name">Uzoma</div>
                   </div>
                 </div>
               </li>
   
               <li class="contact_orderItem">
                 <div class="contact_orderKey">B</div>
                 <div class="contact_orderValues">
                   <div class="contact fx">
                     <div class="contact_profilePic"><img src="./img/images2.jpg" class="contact_profilePic_img"></div>
                     <div class="contact_name">David</div>
                   </div>
                   <div class="contact fx">
                     <div class="contact_profilePic"><img src="./img/img3.jpg" class="contact_profilePic_img"></div>
                     <div class="contact_name">Ben</div>
                   </div>
                   <div class="contact fx">
                     <div class="contact_profilePic"><img src="./img/img4.jpg" class="contact_profilePic_img"></div>
                     <div class="contact_name">Uzoma</div>
                   </div>
                 </div>
               </li>
   
               <li class="contact_orderItem">
                 <div class="contact_orderKey">C</div>
                 <div class="contact_orderValues">
                   <div class="contact fx">
                     <div class="contact_profilePic"></div>
                     <div class="contact_name">David</div>
                   </div>
                   <div class="contact fx">
                     <div class="contact_profilePic"></div>
                     <div class="contact_name">Ben</div>
                   </div>
                   <div class="contact fx">
                     <div class="contact_profilePic"></div>
                     <div class="contact_name">Uzoma</div>
                   </div>
                 </div>
               </li>
               
               <li class="contact_orderItem">
                 <div class="contact_orderKey">D</div>
                 <div class="contact_orderValues">
                   <div class="contact fx">
                     <div class="contact_profilePic"></div>
                     <div class="contact_name">David</div>
                   </div>
                   <div class="contact fx">
                     <div class="contact_profilePic"></div>
                     <div class="contact_name">Ben</div>
                   </div>
                   <div class="contact fx">
                     <div class="contact_profilePic"></div>
                     <div class="contact_name">Uzoma</div>
                   </div>
                 </div>
               </li>
   
             </ul>
           </div> -->
           <!-- End of all contact List-->

         </div>
         <!-- All Contact List-->
        </main>

       <div class="newContact_btn">
         <!-- <img src="#" alt="add"> -->
       </div>
    </div>

    <!--Contacts View-->
    <div class="contact_view view"></div>

    <!--newContacts View-->
    <div class="newContact_view view">
      
    </div>
  </div>
  <script src="./js/main.js" type="module"></script>
</body>
</html>
