function updateItems(doc) {
	numChecked = getChecked(doc.menuForm);
	theMenu = doc.menuForm.actionMenu1
	theMenu2 = doc.menuForm.actionMenu2
	theDelete = doc.menuForm.deleteButton
	theDelete2 = doc.menuForm.deleteButton2
	theAccount = doc.menuForm.accountButton
	theAccount2 = doc.menuForm.accountButton2
	nonesel = "To use this function, you must first use the checkboxes to select one or more user accounts."
	toomanysel = "Only one user account can be selected to use this function. Please de-select all but one of the selected items"
	deltip = "Delete One or More User Accounts"
	acctip = "View Activity on a Selected User Account"
	if (numChecked == 0) {
		changeState(theMenu.options[1], 0, "MnuJmpOptDis", 0);
		changeState(theMenu.options[2], 0, "MnuJmpOptDis", 0);
		changeState(theMenu.options[3], 0, "MnuJmpOptDis", 0);
		changeState(theMenu.options[4], 0, "MnuJmpOptDis", 0);
		changeState(theMenu2.options[1], 0, "MnuJmpOptDis", 0);
		changeState(theMenu2.options[2], 0, "MnuJmpOptDis", 0);
		changeState(theMenu2.options[3], 0, "MnuJmpOptDis", 0);
		changeState(theMenu2.options[4], 0, "MnuJmpOptDis", 0);
		changeState(theDelete, 0, "Btn2Dis", nonesel);
		changeState(theDelete2, 0, "Btn2Dis", nonesel);
		changeState(theAccount, 0, "Btn2Dis", nonesel);
		changeState(theAccount2, 0, "Btn2Dis", nonesel);
	} else if (numChecked == 1) {
		changeState(theMenu.options[1], 1, "MnuJmpOpt", 0);
		changeState(theMenu.options[2], 1, "MnuJmpOpt", 0);
		changeState(theMenu.options[3], 1, "MnuJmpOpt", 0);
		changeState(theMenu.options[4], 1, "MnuJmpOpt", 0);
		changeState(theMenu2.options[1], 1, "MnuJmpOpt", 0);
		changeState(theMenu2.options[2], 1, "MnuJmpOpt", 0);
		changeState(theMenu2.options[3], 1, "MnuJmpOpt", 0);
		changeState(theMenu2.options[4], 1, "MnuJmpOpt", 0);
		changeState(theDelete, 1, "Btn2", deltip);
		changeState(theDelete2, 1, "Btn2", deltip);
		changeState(theAccount, 1, "Btn2", acctip);
		changeState(theAccount2, 1, "Btn2", acctip);
	} else {
		changeState(theMenu.options[1], 1, "MnuJmpOpt", 0);
		changeState(theMenu.options[2], 1, "MnuJmpOpt", 0);
		changeState(theMenu.options[3], 1, "MnuJmpOpt", 0);
		changeState(theMenu.options[4], 0, "MnuJmpOptDis", 0);
		changeState(theMenu2.options[1], 1, "MnuJmpOpt", 0);
		changeState(theMenu2.options[2], 1, "MnuJmpOpt", 0);
		changeState(theMenu2.options[3], 1, "MnuJmpOpt", 0);
		changeState(theMenu2.options[4], 0, "MnuJmpOptDis", 0);
		changeState(theDelete, 1, "Btn2", deltip);
		changeState(theDelete2, 1, "Btn2", deltip);
		changeState(theAccount, 0, "Btn2Dis", toomanysel);
		changeState(theAccount2, 0, "Btn2Dis", toomanysel);
	}
}


function changeState (element, state, classname, title) {
	if (state == 0) {
		 element.disabled = true;
		} else {
		 element.disabled = false;
		}
 	element.className = classname;
 	if (title != 0) {
 		element.title = title;
 		}
} 	 


function getChecked(theForm) {
	theCount = 0;
	for (i=0; i<theForm.elements.length; i++) {
		var theElement = theForm.elements[i] ;
		if (theElement.type == "checkbox" && theElement.checked == true) {
			theCount = theCount + 1;
		}
	}
	return theCount;
}
	
function validate (type, numchecked) {
	if (numchecked == 0) {
		alert('No Item Selected\nYou must first use the checkboxes to select one or more user accounts.');
	} else if (type == 'single' & numchecked > 1) {
		alert('Too Many Items Selected\nOnly one user account can be selected to use this function. Please de-select all but one of the selected items');
    } else {
   		alert('Clicked');
	} 
}
	

function MM_jumpMenu(targ,selObj,restore){ //v3.0
 if (selObj.options[selObj.selectedIndex].value != 0) {
  	eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
 	if (restore) selObj.selectedIndex=0;
  } else {
  alert("Clicked");
  } 
}

function MM_jumpMenuStat(targ,selObj,restore,checked) { //v3.0
 if (checked == 0) {
 	alert('No Item Selected\nYou must first use the checkboxes to select one or more user accounts.');
 } else if (checked == 1) {
	  if (selObj.options[selObj.selectedIndex].value != 0) {
   		eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  	  } else {
  	 	alert("Clicked");
      } 
 } else {
	if (selObj.selectedIndex == 4) {
		alert('Too Many Items Selected\nOnly one user account can be selected to use this function. Please de-select all but one of the selected items');
	} else {
	  if (selObj.options[selObj.selectedIndex].value != 0) {
   		eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  	  } else {
  	 	alert("Clicked");
      } 
    }
  }
 if (restore) selObj.selectedIndex=0;
}

