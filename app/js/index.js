var data, sortedData;
var productId;
var view = null, pageInfo = null, info = null;
var currentPage = 1, firstItem, lastItem;

//function to display products list every time
var refreshList = function() {
	var holder = document.getElementById('listHolder');

	if (view != null){
		holder.removeChild(view);
		holder.removeChild(pageInfo);
		holder.removeChild(info);
	}

	var pager = document.getElementById('paginate');
	pageInfo = document.createElement('p');
	pageInfo.innerHTML = (firstItem+1) +" - "+ (lastItem) +" of "+ sortedData.length;
	info = document.createElement('p');
	info.innerHTML = "Click product to see details.";
	view = document.createElement('div');
	view.id = 'view';
	view.className = 'list-group';

	holder.insertBefore(view, pager);
	holder.insertBefore(info, view);
	holder.insertBefore(pageInfo, info);

	var p, a;
	for (var index = firstItem; index < lastItem; ++index) {
		p = document.createElement('p');
		a = document.createElement('a');
		a.innerHTML = sortedData[index].title.charAt(0).toUpperCase() + sortedData[index].title.slice(1);
		a.className = "list-group-item list-group-item-warning items";
		a.id = sortedData[index].Id;
		p.appendChild(a);
		view.appendChild(p);
	}
	$("#paginate").show();
};

//pagination function
var paginateNext = function(){
	var prevPage = document.getElementById("prevPage");
	var nextPage = document.getElementById("nextPage");
	currentPage += 1;
	if(currentPage != 1){
		prevPage.className = "previous";
		document.getElementById('prevPage').style.pointerEvents = 'auto';
	}
	firstItem += 10;
	lastItem += 10;
	refreshList();
	addEvents();
	if(currentPage == sortedData.length/10){
		nextPage.className = "next disabled";
		document.getElementById('nextPage').style.pointerEvents = 'none';
	}
};

//pagination function
var paginatePre = function(){
	var prevPage = document.getElementById("prevPage");
	var nextPage = document.getElementById("nextPage");
	currentPage -= 1;
	if(currentPage == 1){
		prevPage.className = "previous disabled";
		document.getElementById('prevPage').style.pointerEvents = 'none';
	}
	firstItem -= 10;
	lastItem -= 10;
	refreshList();
	addEvents();
	if(currentPage != Math.floor(sortedData.length/10)){
		nextPage.className = "next";
		document.getElementById('nextPage').style.pointerEvents = 'auto';
	}
};

//adding eventHandler to list
var addEvents = function(){
	var clicks = document.getElementsByClassName("items");

	for (var i = 0; i < clicks.length; i++) {
		clicks[i].addEventListener('click', showDetails);
	}

};

//function to display product details
var showDetails = function(event){
	var itemId = event.currentTarget.id;
	productId = itemId;
	for(var j = 0; j < sortedData.length; j++){
		var id = sortedData[j].Id;
		if(id == itemId){
			document.getElementById("productName").innerHTML = sortedData[j].title.charAt(0).toUpperCase() + sortedData[j].title.slice(1);;
			document.getElementById("asin").innerHTML = sortedData[j].ASIN;
			document.getElementById("group").innerHTML = sortedData[j].group;
			document.getElementById("rank").innerHTML = sortedData[j].salesrank;
			document.getElementById("similar").innerHTML = sortedData[j].similar.length;
			document.getElementById("rating").innerHTML = sortedData[j].reviews.avgRating;
			document.getElementById("reviewsNo").innerHTML = sortedData[j].reviews.customers.length;
			break;
		}
	}
	$("#itemDetails").show();
};

//function to display product reviews in modal window
var seeReviews = function(){
	$("#modalBody").empty();
	var reviews, id;
	var reviewsHolder = document.getElementById('modalBody');
	var reviewsView = null;

	if (reviewsView != null){
		reviewsHolder.removeChild(reviewsView);
	}
	for(var j = 0; j < sortedData.length; j++){
		id = sortedData[j].Id;
		if(id == productId){
			reviews = sortedData[j].reviews.customers;
			break;
		}
	}

	reviewsView = reviewsHolder.appendChild(document.createElement('div'));
	var div, p1, p2, p3;
	for (var index = 0; index < reviews.length; ++index) {
		div = document.createElement('div');
		div.id = "review"+index;
		p0 = document.createElement('p');
		p1 = document.createElement('p');
		p2 = document.createElement('p');
		p3 = document.createElement('p');
		p1.innerHTML = "CUSTOMER ID: " + reviews[index].customerid;
		p2.innerHTML = "RATING: " + reviews[index].rating;
		p3.innerHTML = "REVIEW: " + reviews[index].reviewText;
		p0.innerHTML = index+1+".";

		div.appendChild(p0);
		div.appendChild(p1);
		div.appendChild(p2);
		div.appendChild(p3);
		div.appendChild(document.createElement('hr'));

		reviewsView.appendChild(div);
	}
};

var sortProducts = function(opt){
	if(opt.value == "Sales Rank"){
		sortedData.sort(function(b, a){
			return a.salesrank-b.salesrank;
		});
		refreshList();
		addEvents();
	} else if(opt.value == "Average Rating"){
		sortedData.sort(function(b, a){
			return a.reviews.avgRating-b.reviews.avgRating;
		});
		refreshList();
		addEvents();
	} else if(opt.value == "Product Name"){
		sortedData.sort(function(a, b){
			var titleA=a.title.toLowerCase(), titleB=b.title.toLowerCase();
		 if (titleA < titleB)
		 	return -1;
		 if (titleA > titleB)
		 	return 1;
		 return 0;
		});
		refreshList();
		addEvents();
	}
};

window.onload = function(){
	$("#itemDetails").hide();
	$("#paginate").hide();
	$("#sortBy").hide();
};

//function to display product list initially
var main = function() {
	$("#itemDetails").hide();
	$("#paginate").hide();
	$("#sortBy").show();
	$.ajax({
            type:"get",
            dataType:"json",
            url: "data/generated2.json",
            success: function(productData) {
                successmessage = 'Data was succesfully captured';
                data = productData;
                sortedData = data;
                document.getElementById('prevPage').style.pointerEvents = 'none';
				currentPage = 1;
				firstItem = 0, lastItem = 10;
				refreshList();
				addEvents();
            },
            error: function(data) {
                successmessage = 'Error';
                alert(successmessage);
            },
        });
};