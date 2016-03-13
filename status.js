function addStatus() {
	// add tooltip icons next to all statuses unless we're on the item select page or the MARC display page
	if( $('.itemSelect').length == 0 && $('pre').length == 0) {
		$('.bibItemsEntry td:last-child').append('<a href="#" onclick="return false;" onmouseover="statustip(this); return false;"><i class="fa fa-question-circle"></i></a>');
	}
}

function statustip(statuslink) {
	if(statuslink.id != "set") {
		statuslink.id = "current";
		
		// get status text
		var td = statuslink.parentNode;
		var status_text = td.innerHTML;
		status_text = jQuery(status_text).text();
		status_text = status_text.trim();

		// check for "+ [X] HOLD(S)/RECALL(S)"
		var plus = status_text.indexOf("+");		
		if(plus != -1) {
			status_text = status_text.substring(0, plus-1);
		}
		
		// get briefcitActions div and briefcitRequest div for this item
		var div = jQuery(td).closest('div');
		var parent_div = div[0].parentNode;
		var main_div = parent_div.previousElementSibling;
		var main_div_children = main_div.childNodes;
		for(i = 0; i < main_div_children.length; i++) {
			if(main_div_children[i].className == "briefcitActions") {
				var actions_div = main_div_children[i];
			}
			else if(main_div_children[i].className == "briefcitRequest") {
				var request_div = main_div_children[i];
			}
		}

		// get resource link for briefcit
		if(actions_div) {
			var resource_link = actions_div.firstElementChild.href;
		}
		
		// get resource link for bib_display
		else {
			var resource_link = "";
			
			// if there's a resource link, grab it
			if(document.getElementById('bib_links')) {
				var links = document.getElementById('bib_links').getElementsByTagName('A');
				if(links[0]) {
					resource_link = links[0].href;
				}
			}
		}
		
		// get Request link for briefcit
		if(request_div) {
			if(request_div.firstElementChild != null) {
				var req_url = request_div.firstElementChild.href;
			}
		}
		
		// get Request link for bib_display
		else if(document.getElementById('requestButton')) {
			var req_url = document.getElementById('requestButton').parentElement.href;
		}

		statuslink.className = "statustip";	

		// set text for different statuses
		if(status_text == "SHELF") {
			content = "This copy is not checked out and should be on the shelf indicated by the call number and location.";
		}
				
		else if(status_text == "AT BINDERY") {
			content = "This copy is out for binding repair. Use the <a href='" + req_url +"'>Request</a> link to place a hold on this copy.";
		}
		
		else if(status_text == "BILLED") {
			content = "This copy has been billed and is not requestable.";
		}
		
		else if(status_text == "BOOKING HOLD") {
			content = "This copy is currently on hold for a media booking. Use the <a href='" + req_url +"'>Request</a> link to be added to the queue.";
		}	
		
		else if(status_text == "DAMAGED/PAID") {
			content = "This copy is damaged and is not requestable.";
		}
		
		else if(status_text.substr(0,3) == "DUE") {
			content = "This copy is checked out.";
			if(req_url){
				content += " Use the <a href='" + req_url +"'>Request</a> link to recall this copy.";
			}
		}
		
		else if(status_text == "IN TRANSIT") {
			content = "This copy is in transit to the owning branch or the requested pick up location and should arrive in 1 to 2 business days. Use the <a href='" + req_url +"'>Request</a> link to place a hold on it.";
		}
		
		else if(status_text == "LIB USE ONLY") {
			content = "This copy does not circulate (check out). It may be used within the library.";
		}
		
		else if(status_text == "LOST AND PAID") {
			content = "This copy has been billed and paid for and is not requestable.";
		}
		
		else if(status_text == "MENDING") {
			content = "This copy is currently out for repairs. Use the <a href='" + req_url +"'>Request</a> link to place a hold on this copy.";
		}	
		
		else if(status_text == "MISSING" || status_text == "MISSING (T)") {
			content = "This copy is missing and is not requestable.";
		}	
		
		else if(status_text == "MUSIC WORKROOM") {
			content = "This copy is being bound and labelled. Use the <a href='" + req_url +"'>Request</a> link to place a hold.";
		}	
		
		else if(status_text == "NEW IN TRANSIT") {
			content = "This copy is new to the collection. Check the shelf location or use the <a href='" + req_url +"'>Request</a> link to place a hold.";
		}	
		
		else if(status_text == "ON EXHIBIT") {
			content = "This copy is part of an exhibit/display and is not requestable.";
		}	
		
		else if(status_text == "ON HOLD") {
			content = "A user has requested this copy. Use the <a href='" + req_url +"'>Request</a> link to be added to the queue.";
		}	
		
		else if(status_text == "ON SEARCH") {
			content = "This copy could not be found on the shelf and is being searched for. Use the <a href='" + req_url +"'>Request</a> link to be added to the queue.";
		}	
		
		else if(status_text == "ONLINE ACCESS") {
			content = "This item is available online and can be viewed using the <a href='" + resource_link + "'>link provided</a>.";
		}
		
		else if(status_text == "OUT FOR REPAIR") {
			content = "This copy is currently out for repairs. Use the <a href='" + req_url +"'>Request</a> link to place a hold on this copy.";
		}
		
		else if(status_text == "PROC DMG BOOKS") {
			content = "This copy was damaged and is being repaired. Use the <a href='" + req_url +"'>Request</a> link to place a hold on this copy.";			
		}
		
		else if(status_text == "UNAVAILABLE") {
			content = "This copy is currently not available.";
		}	
		
		else if(status_text == "WITHDRAWN") {
			content = "This copy has been removed from the collection.";
		}	
		
		else if(status_text.indexOf("HOLD") != -1) {
			content = "A user has requested this copy. Use the <a href='" + req_url +"'>Request</a> link to be added to the queue.";
		}
		
		// default text if no other match 
		else {
			content = "Contact library staff for information about this item.";
		}
		
		// adjustment for direction problem on some small screens
		if(window.innerWidth > 1180) {
			pos = "right";
		}
		else {
			pos = "left";
		}
		
		$('#current').tooltipster({interactive: true, minWidth: 150, maxWidth: 350, position: pos, contentAsHTML: true, content: content});

	}
	
	$('#current').tooltipster('show');
	statuslink.id = "set";
}