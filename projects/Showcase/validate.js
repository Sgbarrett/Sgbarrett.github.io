
// Radial dial inputs - in donation.html

function radopt(){
    var rad1 = document.getElementById('rad1');
    var rad2 = document.getElementById('rad2');

      if (rad1.checked==true)
        window.open("https://www.paypal.com/us/webapps/mpp/account-selection");
      else if (rad2.checked==true)
        window.open("https://www.paypal.com/us/signin");
      else if (rad3.checked==true)
          window.open("https://www.patreon.com/signup?ru=%2Fcreate");
      else if (rad4.checked==true)
          window.open("https://www.patreon.com/login");
      else if (rad5.checked==true)
          window.open("https://pay.google.com/gp/w/u/0/home/signup");
      else if (rad6.checked==true)
          window.open("https://pay.google.com/gp/w/u/0/home/sendrequestmoney/signup?p2p_action=send");
      else if (rad7.checked==true)
          window.open("https://cash.app/");
      else if (rad8.checked==true)
          window.open("https://cash.app/login?return_to=account.index");
      else
        alert("Please Select a Signup or Login Option");
  }
//   alert("You are now leaving the Showcase site");