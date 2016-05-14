var data;
var productId;
var showDetails = function (event){
	var itemId = event.currentTarget.id;
	productId = itemId;
	console.log(itemId);
	for(var j = 0; j < data.length; j++){
		var id = data[j].Id;
		if(id == itemId){
			document.getElementById("productName").innerHTML = data[j].title;
			document.getElementById("asin").innerHTML = data[j].ASIN;
			document.getElementById("group").innerHTML = data[j].group;
			document.getElementById("rank").innerHTML = data[j].salesrank;
			document.getElementById("similar").innerHTML = data[j].similar.length;
			document.getElementById("rating").innerHTML = data[j].reviews.avgRating;
			document.getElementById("reviewsNo").innerHTML = data[j].reviews.customers.length;
		}
	}
	$("#itemDetails").show();
};

var seeReviews = function(){
	var reviews;
	var reviewsHolder = document.getElementById('modalBody');
	for(var j = 0; j < data.length; j++){
		var id = data[j].Id;
		if(id == itemId){
			reviews = data[j].customers;
		}
	}

	var div, divp, p;
	for (var index = firstItem; index < reviews.length; ++index) {
        divp = document.createElement('div');
        p = document.createElement('p');
        
        a.innerHTML = data[index].title;
        a.className = "list-group-item list-group-item-warning items";
        
        a.id = data[index].Id;
        p.appendChild(a);
        view.appendChild(p);
    }
};

window.onload = function(){
	$("#itemDetails").hide();
};

function main() {

	data = [
	  {
	    "Id": 0,
	    "ASIN": "d4bba766-a380-46ba-8b78-b08c82d306e0",
	    "title": "ullamco",
	    "group": "Book",
	    "salesrank": 226,
	    "similar": [
	      "2ff13352-c6fc-4b1f-8b58-2bd009aa631d",
	      "efa98c48-7466-4174-918e-27fa11da6e14",
	      "a9710553-a197-4f60-8226-2ef29ea72a0a",
	      "b09ed97e-d2f1-414d-9a2a-542d0716b446",
	      "1978bf65-fcb9-4705-9aa1-05aa29e6cb3b",
	      "c81d40e2-ed2a-4a0a-a436-e99d795fad9b",
	      "8610c055-ca26-46dc-9a27-58c9a98f6bec"
	    ],
	    "reviews": {
	      "avgRating": 3,
	      "customers": [
	        {
	          "customerid": "a6996b58-cca4-40c3-a7fd-7e6683804b3b",
	          "rating": 1,
	          "votes": 2,
	          "helpful": 9,
	          "reviewText": "Id anim cupidatat cupidatat adipisicing dolor cupidatat eiusmod. Anim in pariatur id cillum duis amet duis adipisicing mollit sit qui ut est. Tempor est quis sint cupidatat in fugiat. Consectetur cupidatat ea tempor esse consectetur ipsum irure est ea consectetur.\r\n"
	        },
	        {
	          "customerid": "1b5af360-4922-4ebb-ae1d-f81e3017ad1f",
	          "rating": 2,
	          "votes": 12,
	          "helpful": 1,
	          "reviewText": "Officia esse esse nisi Lorem aliquip. Voluptate esse ex sint aliqua fugiat mollit. Culpa in cillum eu sunt id fugiat duis nisi aliquip labore dolore officia. Mollit proident minim eu commodo nostrud adipisicing labore exercitation aliquip ea qui eiusmod cupidatat. Ea dolor non aute in aute. Ad consequat voluptate minim laborum et quis magna nisi nisi aliqua ex deserunt voluptate voluptate.\r\n"
	        },
	        {
	          "customerid": "cb794bb0-76fe-445e-aec1-4f9dbb04f7c6",
	          "rating": 5,
	          "votes": 6,
	          "helpful": 18,
	          "reviewText": "Excepteur magna et ad ut quis do ut consequat culpa eu ipsum ad. Non nulla aliquip anim elit consequat. Laborum aliqua qui et pariatur incididunt minim voluptate. Aliquip incididunt veniam elit cillum labore ad qui incididunt sint occaecat nostrud et. Sit aute aute laborum elit anim labore. Commodo veniam elit Lorem consequat do ex ut eu voluptate fugiat eu.\r\n"
	        },
	        {
	          "customerid": "b88f1bbe-7328-44cf-bd4f-9d1f69eec994",
	          "rating": 1,
	          "votes": 6,
	          "helpful": 12,
	          "reviewText": "Cupidatat ipsum enim et sunt sunt laborum dolor sint. Amet amet excepteur eu pariatur enim aliquip anim Lorem magna dolor ex ullamco. Consectetur reprehenderit adipisicing ex in culpa laborum. Labore id sit Lorem ut nisi ad dolor fugiat dolor. Tempor anim nostrud in eiusmod amet aliquip nulla consectetur. Consectetur culpa ullamco velit mollit.\r\n"
	        },
	        {
	          "customerid": "2760600a-561c-4f16-a5ec-15795e9780a0",
	          "rating": 3,
	          "votes": 5,
	          "helpful": 14,
	          "reviewText": "Fugiat voluptate enim sit nisi ut cillum labore deserunt amet ut. Ut consequat nisi commodo amet laboris non minim aliquip ex commodo pariatur. Id labore commodo nisi exercitation Lorem exercitation ipsum consequat aute aliquip officia. Nostrud velit ad deserunt non ex ut dolore irure eiusmod consequat culpa est. Nostrud amet non magna ea dolore nisi incididunt exercitation adipisicing consectetur Lorem. Do minim eiusmod occaecat est labore in est.\r\n"
	        },
	        {
	          "customerid": "cb7d34a8-0216-4b2f-8b47-39aaaaeb2c56",
	          "rating": 2,
	          "votes": 20,
	          "helpful": 5,
	          "reviewText": "In pariatur ullamco sit amet nisi labore. Non pariatur aute consectetur mollit commodo sunt proident nulla qui. Consequat amet Lorem do sunt reprehenderit labore laborum anim ullamco elit laboris. Sint fugiat aute voluptate duis est. Reprehenderit laboris consequat sint quis pariatur Lorem aliquip laborum.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 1,
	    "ASIN": "75b013cc-a51d-4e5c-af46-bf5759870c08",
	    "title": "amet",
	    "group": "Music",
	    "salesrank": 582,
	    "similar": [
	      "1518ca84-f6f9-4af7-b497-d26847de5642",
	      "b1f772d3-6339-4435-bd81-f20f6f06b089",
	      "0a6640a4-d9b4-41bc-8a2d-605e8d0253d8",
	      "7344858e-7500-40d4-bd81-de345c90b929",
	      "4e4dc0c8-835f-4534-87d8-d0676fa3a6a8",
	      "7a76ced1-377e-422e-9221-f1673e205551",
	      "d5ad02b9-4f4c-41ed-b46c-a7c1fea303ed"
	    ],
	    "reviews": {
	      "avgRating": 4,
	      "customers": [
	        {
	          "customerid": "b5d2c010-a2fc-4af2-b048-69028ea3272f",
	          "rating": 2,
	          "votes": 16,
	          "helpful": 12,
	          "reviewText": "Duis incididunt enim aliqua proident anim cillum in duis deserunt in elit nisi nisi est. Eiusmod aute anim ad nisi in ex non quis ad. Est mollit velit ipsum adipisicing ipsum ea occaecat veniam tempor dolore voluptate consequat est. Consectetur amet sit proident reprehenderit duis Lorem consectetur in cillum irure. Dolore enim laborum consectetur esse tempor exercitation ipsum dolore occaecat id velit. Consequat officia do excepteur enim non tempor deserunt eu veniam pariatur aliqua. Magna sunt duis nulla est cupidatat.\r\n"
	        },
	        {
	          "customerid": "73532cd5-98e6-4844-9476-086b60d5b6ce",
	          "rating": 3,
	          "votes": 10,
	          "helpful": 13,
	          "reviewText": "In veniam aliqua nostrud excepteur amet quis do nulla. Culpa voluptate ipsum minim ut ex nulla nulla esse sunt deserunt. Amet ea ullamco ullamco reprehenderit cupidatat nostrud aute. Exercitation ullamco veniam occaecat mollit ipsum aute laborum mollit. Minim pariatur eiusmod velit aute aliquip dolore eu fugiat eiusmod aliquip consequat Lorem adipisicing. Nostrud sunt dolore culpa nulla dolor occaecat. Magna eiusmod ex adipisicing nostrud sunt nostrud ipsum id esse occaecat non laborum incididunt sint.\r\n"
	        },
	        {
	          "customerid": "9560f31c-34f1-45e2-9745-4959ff9a2699",
	          "rating": 2,
	          "votes": 14,
	          "helpful": 15,
	          "reviewText": "Eu velit adipisicing laboris veniam qui. Esse sit aliqua nisi tempor reprehenderit aliquip incididunt aliqua aliquip. Nostrud exercitation fugiat ex laboris ut incididunt et est nulla velit reprehenderit tempor tempor. Adipisicing aliqua nulla incididunt exercitation dolore elit cupidatat do pariatur sint laborum ut. Reprehenderit ullamco non voluptate labore id officia. Nisi ad fugiat in dolor veniam quis dolor amet. Irure occaecat et amet ut commodo ea.\r\n"
	        },
	        {
	          "customerid": "6364c51a-7591-4115-b7ec-75bb901b92f7",
	          "rating": 4,
	          "votes": 10,
	          "helpful": 14,
	          "reviewText": "Labore et et fugiat nulla cillum fugiat exercitation consectetur sit est duis dolore Lorem. Eu incididunt et est enim est velit tempor pariatur nulla magna elit. Nostrud mollit consequat elit adipisicing tempor deserunt ullamco sint. Occaecat culpa ullamco magna eiusmod ut. Elit amet cupidatat irure laboris.\r\n"
	        },
	        {
	          "customerid": "2cf4efec-c739-4a56-a99e-9458de26404e",
	          "rating": 3,
	          "votes": 8,
	          "helpful": 12,
	          "reviewText": "Ut esse consequat laborum amet eiusmod incididunt exercitation eiusmod laborum commodo magna velit eiusmod. Consectetur do irure officia ad nisi do magna pariatur. Enim sit ea laborum do culpa cupidatat eiusmod ut enim sint. Eu ullamco nostrud et eiusmod dolor.\r\n"
	        },
	        {
	          "customerid": "bea9681a-4895-4a0e-a53b-29499073e79a",
	          "rating": 5,
	          "votes": 20,
	          "helpful": 1,
	          "reviewText": "Cillum culpa officia ut do ullamco ad Lorem ad do dolor consequat nulla commodo cillum. Sunt excepteur irure quis ad quis consequat culpa consequat laboris nostrud ipsum sunt. Exercitation commodo labore incididunt ea anim velit voluptate fugiat quis elit nulla. Fugiat pariatur dolor Lorem sunt aute sit. Excepteur sunt dolore aliquip consectetur laborum aute proident amet nisi ut deserunt nostrud irure. Cupidatat culpa aliqua ipsum nostrud exercitation voluptate.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 2,
	    "ASIN": "dfc9cd77-9280-433c-bfa7-2527baec48be",
	    "title": "nisi",
	    "group": "Video",
	    "salesrank": 504,
	    "similar": [
	      "bf884d35-2c90-49ef-93f3-6ce240af7394",
	      "b35a0618-dcfb-4bd8-85b1-9f65e587269f",
	      "23e8c65a-2dce-4c69-a144-0ac44273a132",
	      "aee5b1b2-735e-4df7-88aa-531ac730d242",
	      "2db6a62d-2cb2-44f3-8843-9e6a94f48190",
	      "a11e3de7-40b6-485a-b006-efab89422223",
	      "575e91f2-a8af-4ae9-a38e-f8ba8b1f6da8"
	    ],
	    "reviews": {
	      "avgRating": 1,
	      "customers": [
	        {
	          "customerid": "74837b91-4956-47c3-8cf6-67e0744ae197",
	          "rating": 4,
	          "votes": 16,
	          "helpful": 11,
	          "reviewText": "Excepteur sunt eiusmod proident culpa cupidatat dolor consectetur quis voluptate proident. Dolore ipsum occaecat commodo occaecat incididunt dolor fugiat nisi sunt aliqua cillum veniam laborum ea. Adipisicing amet magna exercitation proident ut non et reprehenderit.\r\n"
	        },
	        {
	          "customerid": "45c87b48-b27c-43c9-bc3c-761821797af2",
	          "rating": 1,
	          "votes": 14,
	          "helpful": 4,
	          "reviewText": "Do dolor ea sint ad magna duis consequat excepteur qui culpa in. Voluptate enim culpa consequat cupidatat elit aliquip occaecat ullamco eiusmod occaecat ex. Labore do magna anim adipisicing commodo dolore aute veniam duis in aliqua occaecat ut. Voluptate elit duis exercitation consequat nulla.\r\n"
	        },
	        {
	          "customerid": "0cfe1b9f-0979-4bd2-851f-f3e0a9d2c6a0",
	          "rating": 2,
	          "votes": 20,
	          "helpful": 5,
	          "reviewText": "Sint laboris esse cupidatat eiusmod amet mollit nisi. Proident officia officia est do enim in proident cillum non consequat incididunt. Fugiat cillum magna amet eiusmod consectetur excepteur cupidatat Lorem. Nulla anim adipisicing voluptate anim dolore laborum voluptate incididunt ipsum. Nulla esse id exercitation labore nostrud reprehenderit aliqua ipsum.\r\n"
	        },
	        {
	          "customerid": "9c077cb1-7d92-4a4a-bf51-21386c431077",
	          "rating": 4,
	          "votes": 19,
	          "helpful": 8,
	          "reviewText": "Aute ex occaecat sint voluptate officia laboris nostrud cillum laboris occaecat ex consectetur. Nostrud mollit consequat ullamco proident ad do dolore velit ad do et. Tempor eiusmod tempor excepteur eiusmod nulla laboris ipsum sit magna exercitation nostrud. Consequat fugiat fugiat quis eiusmod ut Lorem sunt labore adipisicing laboris non incididunt. Mollit enim reprehenderit cillum do ea adipisicing Lorem amet nostrud. Nisi Lorem exercitation in enim ut incididunt laboris quis laboris id.\r\n"
	        },
	        {
	          "customerid": "070155f9-2c0c-427a-9385-f8a21c06c49e",
	          "rating": 4,
	          "votes": 12,
	          "helpful": 15,
	          "reviewText": "Non laborum occaecat id officia excepteur deserunt mollit fugiat enim reprehenderit eu. Id quis eiusmod veniam aliqua nulla adipisicing ipsum exercitation sunt sunt sit ullamco occaecat. Nostrud exercitation occaecat aliqua aute. Reprehenderit aliqua pariatur aute in quis ut minim velit enim adipisicing aute anim consectetur.\r\n"
	        },
	        {
	          "customerid": "b0e0e69a-ed5b-49bf-b120-051357bdb860",
	          "rating": 5,
	          "votes": 14,
	          "helpful": 13,
	          "reviewText": "Do id fugiat minim magna duis minim reprehenderit cillum officia. Non reprehenderit elit incididunt nulla. Sint duis occaecat voluptate ea. Nulla dolor consequat minim culpa commodo fugiat laboris sint laboris pariatur aute nisi sit. Veniam mollit sunt minim ad minim. Deserunt adipisicing cillum enim culpa in anim est enim excepteur commodo.\r\n"
	        },
	        {
	          "customerid": "b0b0f622-12aa-40f0-a38a-4ef12e24eb76",
	          "rating": 4,
	          "votes": 7,
	          "helpful": 14,
	          "reviewText": "Amet magna culpa officia occaecat laboris ea. Deserunt exercitation exercitation Lorem dolor occaecat ullamco dolore. Do consectetur consectetur ullamco excepteur mollit velit quis aliqua non sit duis nulla tempor. Proident aute fugiat aliquip ipsum voluptate consectetur dolore excepteur occaecat. Ex reprehenderit Lorem sit dolor id id minim dolore consectetur amet ut. Tempor esse eiusmod fugiat magna irure.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 3,
	    "ASIN": "734e907c-8642-478a-b65b-9b9a0dbfde6b",
	    "title": "labore",
	    "group": "Music",
	    "salesrank": 891,
	    "similar": [
	      "5baf2411-9b1b-448a-a86e-55b5db6664e2",
	      "4b5be52e-cadd-49e6-add1-a227b39fcde8",
	      "9b76571b-36a3-49c1-9454-3cad52cfac79",
	      "95a15514-cb14-4e88-9aea-0acc1de3c2b2",
	      "9eb50b6a-9c6f-4733-ad03-9b2911202574",
	      "0c274d94-c251-490c-b487-8df85b2a1fc0",
	      "e70f4aa9-26e1-4f0c-872f-4909ccf0c33a"
	    ],
	    "reviews": {
	      "avgRating": 2,
	      "customers": [
	        {
	          "customerid": "c87f3acf-97f4-4e3b-9624-349281aff86d",
	          "rating": 1,
	          "votes": 16,
	          "helpful": 2,
	          "reviewText": "Tempor proident laborum proident nisi ullamco occaecat ea. Deserunt cillum laboris ad labore commodo nostrud dolore ut irure commodo culpa mollit culpa. Ullamco amet sit non culpa sit. Est consequat ea ut esse elit excepteur nisi occaecat culpa. In esse officia laboris pariatur enim labore anim labore nulla exercitation dolore. Commodo ipsum enim cupidatat tempor cupidatat fugiat excepteur ad nisi aute.\r\n"
	        },
	        {
	          "customerid": "c0febb3e-3993-4652-b3b7-e6f846449a05",
	          "rating": 2,
	          "votes": 18,
	          "helpful": 6,
	          "reviewText": "Incididunt duis tempor esse consequat qui voluptate laboris consectetur aliqua. Et consectetur anim amet non est consectetur ullamco consequat ipsum tempor id incididunt nisi. Amet id cupidatat cupidatat nostrud. Ea ea irure est irure ipsum pariatur nostrud cupidatat duis nulla magna nisi veniam.\r\n"
	        },
	        {
	          "customerid": "0ddd17d1-6edc-4651-bca7-39eb3cb4a48c",
	          "rating": 4,
	          "votes": 13,
	          "helpful": 11,
	          "reviewText": "Voluptate aliqua labore eu velit ipsum excepteur tempor do laboris minim consectetur veniam esse consequat. Velit esse id nulla dolore enim. Ut magna mollit est labore ut.\r\n"
	        },
	        {
	          "customerid": "a86bafee-71b1-4a49-a4be-1c489cec49cd",
	          "rating": 1,
	          "votes": 7,
	          "helpful": 6,
	          "reviewText": "Dolor ipsum officia quis eu dolor id qui ipsum consectetur qui. Mollit ullamco aute aute officia ad laborum deserunt. Reprehenderit sunt irure exercitation culpa. Officia deserunt ea in incididunt id incididunt ipsum ipsum. Pariatur tempor commodo reprehenderit voluptate anim aute non ex velit deserunt. Dolore irure voluptate non commodo duis reprehenderit.\r\n"
	        },
	        {
	          "customerid": "fede35be-59c4-4406-bddc-a8b65b2d9498",
	          "rating": 1,
	          "votes": 14,
	          "helpful": 2,
	          "reviewText": "Ullamco laborum Lorem proident velit excepteur ipsum ipsum duis irure commodo in. Reprehenderit nulla incididunt incididunt ipsum deserunt velit. Sint minim sit et eu fugiat duis aliqua nostrud ea. Laborum duis non velit deserunt elit adipisicing voluptate excepteur do.\r\n"
	        },
	        {
	          "customerid": "eda6a779-71d8-4dfb-964b-175ff7ada8e1",
	          "rating": 5,
	          "votes": 6,
	          "helpful": 11,
	          "reviewText": "Aliquip non elit nulla ex commodo mollit ad deserunt nostrud. Consequat reprehenderit do est enim deserunt ipsum. Dolore aliquip qui quis aute in aliquip sunt culpa irure aliqua aliqua et. Labore non sint aute nostrud. Elit proident dolor elit ipsum. Nulla esse reprehenderit Lorem enim tempor ipsum est magna laborum sunt magna est ea.\r\n"
	        },
	        {
	          "customerid": "357911e9-8d1d-4274-bb48-a35beb3342ea",
	          "rating": 3,
	          "votes": 18,
	          "helpful": 14,
	          "reviewText": "Deserunt ex in in et sit elit excepteur dolore mollit aute enim eu. Ea qui eiusmod Lorem magna cupidatat aute nulla nostrud esse reprehenderit. Dolor eu quis consequat laborum do incididunt in veniam. Sit nostrud est cupidatat in sunt officia elit nulla. Nulla tempor tempor veniam ipsum sit elit non in.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 4,
	    "ASIN": "0afde4d1-63ad-4ee2-9c61-aa38d584b201",
	    "title": "cupidatat",
	    "group": "Video",
	    "salesrank": 487,
	    "similar": [
	      "c3e0c363-1266-45a8-b4fb-481d061a09ed",
	      "ecd713c4-304e-4ada-9562-999040b0f531",
	      "9621134f-5148-4d4d-9826-33ba9a8b27dc",
	      "cfc7f661-4a18-4616-80cc-4f503da54c43",
	      "57f72330-faea-4426-a8a6-5400711cd930",
	      "3703adc9-d79e-412b-b918-719ff4ddc21e",
	      "b0ea953d-f274-436e-8918-995c6c8f4198"
	    ],
	    "reviews": {
	      "avgRating": 1,
	      "customers": [
	        {
	          "customerid": "c95a6ddd-7815-4137-9e24-9f52ce8676e4",
	          "rating": 2,
	          "votes": 4,
	          "helpful": 11,
	          "reviewText": "Aliquip laborum excepteur voluptate qui occaecat sint ad. Ipsum reprehenderit elit duis ex irure ipsum. In in excepteur proident proident veniam id eu non. Duis deserunt dolore voluptate cupidatat fugiat cillum dolor.\r\n"
	        },
	        {
	          "customerid": "c6e59c64-9193-43e5-8053-54bb5c6c1810",
	          "rating": 1,
	          "votes": 15,
	          "helpful": 16,
	          "reviewText": "Minim amet ex pariatur quis pariatur deserunt fugiat. Cillum incididunt non consequat ea enim culpa ut. Elit eiusmod mollit laboris eu pariatur tempor dolor sint exercitation est sit proident labore dolor.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 5,
	    "ASIN": "26d0f0f3-92b0-4cb2-9f70-4a103c64f377",
	    "title": "adipisicing",
	    "group": "Music",
	    "salesrank": 664,
	    "similar": [
	      "4fd6c186-89b4-411e-afb0-e03345c5ac8f",
	      "ded4e60e-56a8-46ad-bc0f-3422a2e77640",
	      "5097aaba-8030-41fc-9fbe-db9bd79b61d5",
	      "fc9f1e73-4b99-4345-8c7e-32ba7795f00b",
	      "d2d78625-05e9-4b8a-b44f-c0010df29d0c",
	      "5544d5ec-6bd2-471f-b60e-883faa67e99f",
	      "3f2ad1e4-a72f-41a9-97a7-14702aa855bc"
	    ],
	    "reviews": {
	      "avgRating": 2,
	      "customers": [
	        {
	          "customerid": "662c0b19-5f4e-44f8-8f69-a4b372ef314f",
	          "rating": 2,
	          "votes": 5,
	          "helpful": 17,
	          "reviewText": "Incididunt sunt dolor Lorem consequat. Eiusmod ipsum eiusmod officia enim laboris ea nostrud proident nulla Lorem ad et Lorem. Magna deserunt Lorem ea velit anim. Sint deserunt ex consectetur nisi minim velit reprehenderit qui. Tempor sunt proident ad consequat ullamco cupidatat qui eiusmod. Consequat velit consectetur adipisicing exercitation sunt eiusmod aute nostrud velit id Lorem minim. Ipsum minim laboris nisi incididunt ullamco adipisicing ullamco nisi laboris anim.\r\n"
	        },
	        {
	          "customerid": "a7afdf99-87ae-4e29-830f-d2620149ab57",
	          "rating": 1,
	          "votes": 15,
	          "helpful": 6,
	          "reviewText": "Dolor irure labore officia mollit esse do sit nulla proident do ut. Id do tempor proident irure id. Deserunt sunt amet irure consequat magna.\r\n"
	        },
	        {
	          "customerid": "68f69ffe-9843-4301-9f63-8e39a5abee4d",
	          "rating": 4,
	          "votes": 20,
	          "helpful": 19,
	          "reviewText": "Deserunt tempor cupidatat quis laborum sunt. Aliquip voluptate nisi commodo culpa elit culpa. Ad veniam aute consequat officia consequat.\r\n"
	        },
	        {
	          "customerid": "4c456d46-c088-4c7f-acaf-1e57f5a58e01",
	          "rating": 3,
	          "votes": 5,
	          "helpful": 6,
	          "reviewText": "Magna exercitation Lorem excepteur et do. Deserunt et occaecat aliqua eu laborum aute. Tempor pariatur sint sunt exercitation est culpa nisi anim sunt sunt qui minim anim laboris. In consectetur sunt proident dolor irure occaecat.\r\n"
	        },
	        {
	          "customerid": "725ec145-fdad-4421-a925-b377ade22f40",
	          "rating": 2,
	          "votes": 19,
	          "helpful": 20,
	          "reviewText": "Aute nisi amet velit consectetur nisi. Id in tempor excepteur adipisicing cillum culpa. Velit proident sint nostrud irure ut ea irure laboris nisi voluptate aute. Sunt sit eiusmod tempor eiusmod cupidatat tempor mollit do occaecat cupidatat minim Lorem velit. Laborum quis amet quis duis fugiat sit deserunt et ea officia incididunt commodo.\r\n"
	        },
	        {
	          "customerid": "844b40b4-a824-4d7e-9c0a-ab6d93d73d10",
	          "rating": 5,
	          "votes": 14,
	          "helpful": 2,
	          "reviewText": "Do nostrud pariatur irure aute eu exercitation incididunt adipisicing ex ut ut deserunt. Cupidatat esse eiusmod cillum do amet aliqua aliquip minim ex. Aute amet do est ex veniam est consectetur reprehenderit cillum. Irure pariatur nostrud qui sit deserunt incididunt ex officia consectetur dolor. Nisi ad pariatur cupidatat nisi eu. Incididunt non proident est officia eiusmod ad amet aute.\r\n"
	        },
	        {
	          "customerid": "3540faca-fe94-4830-ab25-6d084e982fec",
	          "rating": 5,
	          "votes": 13,
	          "helpful": 4,
	          "reviewText": "Minim enim ullamco duis id dolore dolor velit dolore est est duis pariatur ullamco dolor. Excepteur sit labore reprehenderit eu sit in quis ullamco excepteur voluptate quis enim ea ad. Laborum laboris labore eu nulla fugiat id ad do id duis adipisicing exercitation irure non. Pariatur ipsum non pariatur culpa culpa mollit tempor amet. Est nisi duis ullamco officia aliquip do. Eu anim sit duis id nisi exercitation esse pariatur laboris nostrud sit exercitation tempor quis.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 6,
	    "ASIN": "3e6088d9-583c-4894-8c94-b41696fe8f7f",
	    "title": "quis",
	    "group": "Video",
	    "salesrank": 797,
	    "similar": [
	      "b8079715-3640-4e7f-830b-89cb1b789fae",
	      "1ea5a283-c590-4da7-af7f-53992452570a",
	      "367885a4-16f3-4ce6-afc5-2a09b4c47089",
	      "28821755-a003-4e34-9fd3-ce65c25a8b5b",
	      "c296af96-abb7-4e3d-a145-14890a38a0a9",
	      "6984452d-f2f3-47e0-8420-097553663125",
	      "b843eb29-1573-426e-8309-8fe3f3f6e476"
	    ],
	    "reviews": {
	      "avgRating": 3,
	      "customers": [
	        {
	          "customerid": "80228d56-4461-49ac-8047-2fb94066ba79",
	          "rating": 2,
	          "votes": 20,
	          "helpful": 12,
	          "reviewText": "Nisi do commodo sit nisi nisi ipsum aliqua officia tempor veniam cupidatat. Aute sit in eu dolor minim reprehenderit enim. Commodo incididunt est dolor amet sit ad excepteur ad amet amet elit ex dolor ad. Incididunt occaecat pariatur nulla do excepteur nulla eu anim. Voluptate eiusmod aliquip reprehenderit reprehenderit nisi consequat duis ipsum incididunt non.\r\n"
	        },
	        {
	          "customerid": "f376d470-91e6-4859-ad09-e3f3cffe9533",
	          "rating": 1,
	          "votes": 15,
	          "helpful": 18,
	          "reviewText": "Adipisicing culpa ipsum cupidatat minim do laborum consectetur minim nulla cillum. Pariatur enim exercitation pariatur proident voluptate est sit. Magna ullamco excepteur ea adipisicing est ullamco fugiat irure velit minim magna fugiat qui. Duis pariatur magna incididunt nulla ullamco quis adipisicing irure incididunt tempor aliqua eiusmod. Cillum consequat tempor magna proident enim proident consequat nulla do dolore ipsum deserunt. Adipisicing laborum et et cupidatat nisi excepteur laboris ullamco cupidatat. Ad aliqua commodo irure fugiat ut in.\r\n"
	        },
	        {
	          "customerid": "4646a256-a3d1-4b43-a4ea-fafe0817ee8f",
	          "rating": 5,
	          "votes": 1,
	          "helpful": 5,
	          "reviewText": "Minim Lorem aliqua aliquip aliqua elit elit cupidatat tempor aute commodo amet. In do esse minim commodo ea Lorem eiusmod dolore cupidatat excepteur labore. Et in incididunt irure esse velit reprehenderit tempor eu mollit officia ut aute laborum quis. Irure amet laboris commodo qui duis ullamco ea occaecat deserunt qui id. Et eiusmod cillum id commodo esse. Commodo esse dolor adipisicing nostrud incididunt ut duis laborum consectetur nostrud. Tempor nulla fugiat nisi fugiat aliqua.\r\n"
	        },
	        {
	          "customerid": "3042ad1a-ddf1-46fd-b5c8-e5644e76796d",
	          "rating": 5,
	          "votes": 8,
	          "helpful": 14,
	          "reviewText": "Deserunt sunt ut Lorem officia incididunt. Veniam minim fugiat ea veniam nostrud. Ex excepteur aliqua Lorem magna velit nostrud minim veniam elit ea. Ea veniam minim ex pariatur irure cupidatat sint irure culpa. Dolore et consectetur esse velit ex nulla ipsum cillum ut. Exercitation consectetur elit proident aute occaecat ex qui magna ea deserunt labore est.\r\n"
	        },
	        {
	          "customerid": "bbf13e41-28ba-4b28-a684-ae06196c0288",
	          "rating": 4,
	          "votes": 9,
	          "helpful": 11,
	          "reviewText": "Veniam minim laborum irure nulla. Exercitation ut enim minim minim laboris anim sunt aute sunt enim deserunt. Sunt incididunt nulla ex ullamco aliquip laborum ea.\r\n"
	        },
	        {
	          "customerid": "a85395b7-5469-47a7-bd16-e5263c573959",
	          "rating": 3,
	          "votes": 6,
	          "helpful": 13,
	          "reviewText": "Veniam esse cillum fugiat amet magna. Mollit magna do eu sit. Nulla quis qui excepteur incididunt proident magna commodo do do. Ad in enim consectetur ea minim. Reprehenderit sint incididunt qui sint nisi voluptate qui ullamco consectetur id deserunt. Aute laboris non incididunt incididunt velit pariatur excepteur exercitation eiusmod. Pariatur occaecat nostrud dolore non elit.\r\n"
	        },
	        {
	          "customerid": "065cc824-7b7c-4582-8d14-03ebd4918656",
	          "rating": 2,
	          "votes": 20,
	          "helpful": 12,
	          "reviewText": "Sint ullamco reprehenderit culpa ad voluptate occaecat reprehenderit eu anim eiusmod irure aliquip nostrud. Esse ut incididunt elit Lorem quis cillum aliqua officia aliqua aliqua eu est esse duis. Voluptate ut id nostrud occaecat cillum. Labore quis irure nostrud esse reprehenderit sit. In ad non aliquip cillum tempor ex est. Veniam voluptate irure ex ad commodo ut exercitation cupidatat cillum sit adipisicing.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 7,
	    "ASIN": "beaff5a8-9cc0-4e24-9cbf-a515e4dd643f",
	    "title": "pariatur",
	    "group": "Book",
	    "salesrank": 613,
	    "similar": [
	      "3e5957a6-a6a5-4710-9b57-108781bf5c9d",
	      "1cd5b426-b722-4e46-a66d-74f4c0a514f6",
	      "d94243a3-28c5-43dc-bf57-18b0151a94f6",
	      "059049a6-0112-4172-bca3-8f48c2a9b373",
	      "14272465-01c1-409e-b49d-db795d028462",
	      "62dcd6a6-e7f6-42df-80ae-c80807ada84d",
	      "093635c3-ba47-4f7e-96b7-40380cd18596"
	    ],
	    "reviews": {
	      "avgRating": 2,
	      "customers": [
	        {
	          "customerid": "e6ac8c7c-6497-4ef2-8f90-7f56ceaccbe3",
	          "rating": 3,
	          "votes": 8,
	          "helpful": 14,
	          "reviewText": "Ut amet esse culpa mollit ea duis reprehenderit voluptate aliqua. Exercitation elit Lorem fugiat sit in et exercitation consequat elit fugiat minim commodo minim laboris. Exercitation excepteur velit quis duis laborum proident. Qui proident do occaecat cupidatat id eu. Cillum do aute duis nostrud est duis. Occaecat culpa cupidatat eiusmod laborum ullamco incididunt qui sit ut aute tempor.\r\n"
	        },
	        {
	          "customerid": "1db3dcf6-9901-43ec-b380-2ca07d1244d6",
	          "rating": 1,
	          "votes": 19,
	          "helpful": 4,
	          "reviewText": "Ea deserunt deserunt qui sit Lorem. Cupidatat pariatur id amet nostrud. Ipsum aliquip incididunt ullamco laboris.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 8,
	    "ASIN": "3f471141-c3e9-4d6d-8195-c1997123cc8c",
	    "title": "Lorem",
	    "group": "Music",
	    "salesrank": 551,
	    "similar": [
	      "73cd449f-5a42-4198-82a6-3c22aeacc773",
	      "acfc5a5d-d297-4b90-ada7-a77283e48514",
	      "70cb75f8-f34e-45d4-9c05-cbb6ed1e4bed",
	      "b91b7cad-61b1-4189-ba8b-13e466059ea2",
	      "bca7907c-8667-4e97-979e-d05d016cd7c6",
	      "ff54028e-8b0b-47f4-b8dd-e8009b1bdb37",
	      "ad8b244b-6b00-4286-9c44-8a54efb3ad81"
	    ],
	    "reviews": {
	      "avgRating": 1,
	      "customers": [
	        {
	          "customerid": "b0ff6e39-3f19-432b-9526-25e7579cbd1a",
	          "rating": 3,
	          "votes": 7,
	          "helpful": 16,
	          "reviewText": "Cupidatat sit Lorem exercitation amet ut et et reprehenderit. Cupidatat anim aliqua deserunt nulla velit sint fugiat et reprehenderit velit nisi anim. Pariatur aliquip fugiat enim eiusmod.\r\n"
	        },
	        {
	          "customerid": "e844c9a6-dd18-4754-b91c-f528b5ed77d0",
	          "rating": 2,
	          "votes": 18,
	          "helpful": 13,
	          "reviewText": "Occaecat dolor consectetur commodo consequat est voluptate dolor sit exercitation. Mollit ipsum dolor ea eiusmod. Amet labore consectetur et quis dolor velit quis nisi. Magna duis sit officia esse ut esse et consectetur enim amet cillum culpa ex. Eiusmod ex ea incididunt consectetur consequat dolor quis id.\r\n"
	        },
	        {
	          "customerid": "316b931a-25e1-4f3c-8505-39e2622507d1",
	          "rating": 5,
	          "votes": 19,
	          "helpful": 6,
	          "reviewText": "Eu nisi incididunt laborum duis officia tempor ullamco esse veniam culpa. Deserunt officia eiusmod dolor sunt excepteur dolore minim aute aliquip labore aliqua. Ullamco esse pariatur mollit in laboris ipsum culpa velit anim dolor eiusmod exercitation. Magna sint magna sunt quis magna. Dolor Lorem fugiat consequat elit fugiat.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 9,
	    "ASIN": "f4f5bba9-a93f-4395-af17-081eb241298c",
	    "title": "sunt",
	    "group": "Video",
	    "salesrank": 950,
	    "similar": [
	      "d8b0b429-50e8-486c-98df-f96ef5d02005",
	      "689d3093-01c8-4f6e-a0bb-fc7c84c73225",
	      "f2c8b2d2-16a0-476e-ba7d-b97aff304830",
	      "3a44ddaa-9e97-4909-af83-04469ed9f05e",
	      "ea34d1ae-3006-43fa-b800-dd003bc6731c",
	      "bdc7d757-690f-47a7-9d5d-c343ab847dad",
	      "746f5722-4a77-4ed3-9d72-6969b7fcb5f7"
	    ],
	    "reviews": {
	      "avgRating": 5,
	      "customers": [
	        {
	          "customerid": "4b63c134-960d-42db-b566-49dbd27a1489",
	          "rating": 1,
	          "votes": 13,
	          "helpful": 5,
	          "reviewText": "Id magna ea laboris minim non eu sint. Est et voluptate est reprehenderit est duis Lorem magna laborum ex tempor ex. Pariatur laboris officia ullamco consequat eiusmod. Eiusmod ipsum mollit ad esse. Dolor incididunt minim exercitation sint culpa ut nisi laboris sunt dolor.\r\n"
	        },
	        {
	          "customerid": "69e1ecd2-0bc2-4fb1-8808-88cc0bd70ab8",
	          "rating": 2,
	          "votes": 2,
	          "helpful": 16,
	          "reviewText": "Ex sunt nostrud nisi consectetur dolore laborum culpa reprehenderit duis velit ut officia. Anim mollit aute enim commodo consequat cupidatat laboris minim velit aliqua consequat eu fugiat. Incididunt irure amet labore ea labore reprehenderit cillum consequat laboris. Excepteur id occaecat sit voluptate amet cillum duis ut laborum pariatur sunt anim. Anim non ut amet incididunt quis elit id exercitation do consectetur. Consequat qui magna dolore cupidatat incididunt velit consequat elit commodo Lorem Lorem proident. Laboris exercitation mollit occaecat in ea culpa fugiat eiusmod reprehenderit voluptate ut do officia consequat.\r\n"
	        },
	        {
	          "customerid": "9b906c82-7fb2-4ba2-98e7-cefad0d9e466",
	          "rating": 3,
	          "votes": 4,
	          "helpful": 6,
	          "reviewText": "Cillum cillum aliquip elit cillum elit. Quis laboris sunt ea et anim. In voluptate tempor nulla laborum culpa irure eu duis esse id cupidatat tempor et enim.\r\n"
	        },
	        {
	          "customerid": "b2dcff41-a921-4e3c-954e-7739df8f4361",
	          "rating": 4,
	          "votes": 8,
	          "helpful": 8,
	          "reviewText": "Dolore in veniam ex proident dolor. Sint esse consectetur consequat proident tempor ut. Magna cupidatat laborum occaecat excepteur cillum qui veniam consectetur non cillum magna deserunt sunt Lorem.\r\n"
	        },
	        {
	          "customerid": "6014d81f-19aa-423c-ae45-281afc0bb54d",
	          "rating": 1,
	          "votes": 20,
	          "helpful": 13,
	          "reviewText": "Cupidatat dolor pariatur dolore magna sunt exercitation consectetur occaecat sint eiusmod cupidatat culpa. Consequat ullamco laborum aliqua aute amet exercitation laboris fugiat veniam. Aliqua cillum culpa Lorem mollit labore. Deserunt laboris nostrud excepteur irure occaecat sit voluptate cillum.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 10,
	    "ASIN": "42509591-5e30-48c1-890e-192096f5bf44",
	    "title": "do",
	    "group": "Video",
	    "salesrank": 396,
	    "similar": [
	      "36838fee-a482-4b30-865a-1c6d6e315297",
	      "c5860a49-4568-4ccf-b250-bd2815189258",
	      "9e7d2f5e-1163-4fc3-b418-fecf41825e1a",
	      "93c179de-01d2-440f-8d4f-37cdf1498a70",
	      "96f945b7-36e6-43bb-8091-39f35d9983f9",
	      "be884004-c965-4f66-9290-1408fa1e305e",
	      "3779647c-5597-4c6c-a346-a01ef76e097c"
	    ],
	    "reviews": {
	      "avgRating": 4,
	      "customers": [
	        {
	          "customerid": "119755f6-8ef5-4d5e-8041-11ddf3353357",
	          "rating": 2,
	          "votes": 17,
	          "helpful": 12,
	          "reviewText": "Consequat non commodo veniam ullamco irure eu do velit adipisicing. Exercitation exercitation eiusmod ut incididunt anim consectetur quis cillum aliqua. Eiusmod ipsum proident cupidatat minim adipisicing aliquip enim ea anim cillum aliquip eu. Aute proident ea Lorem deserunt ut irure aute ullamco reprehenderit.\r\n"
	        },
	        {
	          "customerid": "b10afb8a-5466-4d5b-9c5f-a2463a76af66",
	          "rating": 4,
	          "votes": 14,
	          "helpful": 20,
	          "reviewText": "Voluptate ad et elit aute ea magna. Cupidatat Lorem minim nisi incididunt sit sunt adipisicing minim do aliquip sint. Excepteur velit minim nostrud deserunt mollit reprehenderit sint qui eiusmod cupidatat. Id laboris veniam exercitation enim exercitation. Consectetur duis ipsum adipisicing quis. Officia et consectetur est aliqua voluptate. Ipsum eiusmod reprehenderit cillum consequat duis et consequat nostrud mollit consequat cupidatat nostrud qui.\r\n"
	        },
	        {
	          "customerid": "fbaf5f24-93cf-41a6-80a7-ce419ea0748b",
	          "rating": 2,
	          "votes": 6,
	          "helpful": 6,
	          "reviewText": "Consectetur pariatur irure ipsum pariatur irure. Consequat duis est id ea sint occaecat veniam. Amet amet aliqua tempor commodo eu.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 11,
	    "ASIN": "ea7c0498-9707-42ce-b716-5d3e8d43e6e4",
	    "title": "veniam",
	    "group": "Video",
	    "salesrank": 761,
	    "similar": [
	      "a4a57177-9c92-46e0-9293-7c14e818b744",
	      "92922dd6-4310-4f99-8043-439c5ab66e28",
	      "600f16da-fdbc-445f-a09e-17107692bc70",
	      "7709d727-14cd-410e-9c41-b635679b48aa",
	      "f2763cd5-31d0-46c0-b5f4-6f510786c90b",
	      "c70f2d7f-e2ef-4378-8861-e20d8a80375c",
	      "9345ade1-c7ed-446c-b137-269f529861dc"
	    ],
	    "reviews": {
	      "avgRating": 5,
	      "customers": [
	        {
	          "customerid": "59b44010-388b-4975-bd75-d512bc6805d2",
	          "rating": 3,
	          "votes": 2,
	          "helpful": 7,
	          "reviewText": "Anim nulla exercitation sit sit duis voluptate ipsum quis esse culpa dolore cupidatat aliquip. Consectetur cupidatat occaecat amet cillum amet ex. Qui veniam voluptate mollit deserunt pariatur laboris aliqua. Minim quis ut pariatur irure proident fugiat elit duis amet laborum eu id. Adipisicing labore et ex nostrud esse et consequat adipisicing. In cupidatat duis consectetur amet est laborum quis voluptate fugiat adipisicing ad.\r\n"
	        },
	        {
	          "customerid": "713f8507-6100-4681-bb7e-7ba68036354c",
	          "rating": 4,
	          "votes": 13,
	          "helpful": 19,
	          "reviewText": "Veniam aute ullamco ut et ea elit ullamco fugiat nulla mollit exercitation anim cupidatat. Nisi adipisicing cillum aliquip Lorem consectetur aliqua magna elit duis cupidatat. Velit nostrud fugiat esse laborum. Dolor adipisicing occaecat duis ad. Fugiat commodo id fugiat ea incididunt nisi commodo aliqua ut commodo sunt qui. Consectetur id dolore culpa et anim cupidatat voluptate ut reprehenderit labore nulla incididunt veniam. Id in eu voluptate nulla officia duis sit cillum.\r\n"
	        },
	        {
	          "customerid": "430afa1b-cac4-4ef0-ad75-818da847313a",
	          "rating": 4,
	          "votes": 15,
	          "helpful": 12,
	          "reviewText": "Irure Lorem eiusmod cillum fugiat voluptate voluptate fugiat Lorem. Ullamco amet velit duis dolor tempor dolor est dolor aliquip commodo amet enim. Laborum dolore nisi excepteur laboris consequat aliqua sit eiusmod quis laboris. Nisi ut elit dolor commodo.\r\n"
	        },
	        {
	          "customerid": "3c07a81c-7ac9-4613-92bc-669a4ea47345",
	          "rating": 4,
	          "votes": 12,
	          "helpful": 7,
	          "reviewText": "Fugiat magna reprehenderit nulla cillum pariatur amet incididunt. Minim tempor cupidatat eiusmod dolor. Pariatur aute qui ea cupidatat. Aliquip proident nostrud pariatur do. Id ullamco tempor quis laboris excepteur reprehenderit veniam exercitation nulla ullamco aliqua anim incididunt. Reprehenderit in laboris cupidatat cupidatat nisi velit cillum est deserunt irure ad.\r\n"
	        },
	        {
	          "customerid": "2048ed33-d515-4558-bc25-a86de07f54d4",
	          "rating": 4,
	          "votes": 9,
	          "helpful": 8,
	          "reviewText": "Minim non deserunt anim deserunt in consequat aute qui deserunt consequat. In ad ullamco in laboris eu. Exercitation labore Lorem voluptate tempor et in nisi. Irure Lorem aute occaecat enim eiusmod deserunt sit nisi aliquip ea nostrud mollit id aute. Consequat reprehenderit exercitation pariatur mollit consequat est incididunt aute enim occaecat laboris exercitation sint. Aute dolore veniam qui laboris sint excepteur.\r\n"
	        },
	        {
	          "customerid": "4e6a40e9-100a-418e-8643-5f6dc896ae19",
	          "rating": 5,
	          "votes": 12,
	          "helpful": 17,
	          "reviewText": "Commodo ipsum ipsum sunt qui ipsum sit. Lorem ex magna nisi cupidatat consectetur sunt enim eu consectetur in nisi est. Cupidatat dolore minim laborum exercitation. Voluptate id Lorem ad ea proident reprehenderit veniam. Excepteur reprehenderit incididunt reprehenderit qui. Reprehenderit officia reprehenderit et ex ad labore qui reprehenderit eu id. Enim in aliquip irure laborum aliqua duis exercitation eiusmod nostrud labore velit quis consectetur.\r\n"
	        },
	        {
	          "customerid": "520277dd-0149-46cd-8c4a-02fde502c6e9",
	          "rating": 3,
	          "votes": 16,
	          "helpful": 16,
	          "reviewText": "Qui excepteur veniam sint esse dolor reprehenderit eu. Officia aliquip amet consectetur et non sunt qui reprehenderit eu commodo excepteur. Commodo cillum aliquip occaecat qui voluptate ex veniam ex commodo ex adipisicing enim sit. Esse culpa ex tempor magna ipsum Lorem. Id eiusmod sint cillum commodo. Ad cupidatat ullamco tempor ex ex.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 12,
	    "ASIN": "f8ba7055-44d4-4012-ade3-4780b6408b03",
	    "title": "occaecat",
	    "group": "Video",
	    "salesrank": 441,
	    "similar": [
	      "481a24a6-f501-4736-ab85-58086b6109da",
	      "7a4c5b9d-6b66-466b-9b30-e9c4556a2502",
	      "cde85019-b7cf-437d-bfe4-7aaf83b04ed7",
	      "83ba7501-5174-4ac6-b806-72da3e811fca",
	      "a4b8f2da-db80-477f-b1cd-4daac6f5038f",
	      "e77ed2af-6752-4dd4-bb1b-1b89cabcf60a",
	      "550e753e-1a7b-47d7-9e2d-8ef1a99c83ea"
	    ],
	    "reviews": {
	      "avgRating": 5,
	      "customers": [
	        {
	          "customerid": "b6de6c35-cdfe-42eb-8775-931f8097da1c",
	          "rating": 4,
	          "votes": 5,
	          "helpful": 18,
	          "reviewText": "Et tempor veniam voluptate incididunt ipsum incididunt aliquip dolor. Anim elit duis tempor aliquip. Magna ipsum sint qui incididunt occaecat cillum nostrud minim et ut. Culpa labore cupidatat duis esse aliquip ea in ad culpa in esse mollit aliqua quis.\r\n"
	        },
	        {
	          "customerid": "59ddf724-0948-4860-b8de-5592f668c940",
	          "rating": 4,
	          "votes": 6,
	          "helpful": 17,
	          "reviewText": "Eu ullamco cupidatat proident mollit dolore in velit laborum tempor incididunt aliqua. Aliqua qui ullamco et adipisicing velit nulla aute do velit. Laborum officia exercitation proident veniam. Excepteur cupidatat deserunt voluptate esse ea consectetur incididunt laborum magna ad. Ipsum non incididunt aute ex Lorem nostrud nostrud incididunt.\r\n"
	        },
	        {
	          "customerid": "a20840fa-2d97-4172-a0bf-534bb6d62343",
	          "rating": 1,
	          "votes": 14,
	          "helpful": 5,
	          "reviewText": "Id dolore consequat esse voluptate nulla. Lorem reprehenderit occaecat elit labore non. Non ex voluptate aliquip aute anim voluptate exercitation id. Id excepteur ullamco reprehenderit culpa sint deserunt laboris id quis dolor exercitation proident. Adipisicing deserunt labore pariatur elit reprehenderit laborum cillum. Minim et tempor reprehenderit reprehenderit do cillum laboris nisi tempor est labore enim laborum. Eu sit anim aliquip irure culpa nulla cillum minim tempor eu nisi irure duis excepteur.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 13,
	    "ASIN": "06979751-b749-41af-9b2d-0e4b503c8d5d",
	    "title": "qui",
	    "group": "Book",
	    "salesrank": 512,
	    "similar": [
	      "78d9e3e3-3365-46cf-a396-cd3efd03738b",
	      "833fc164-c96b-4905-9c37-6a7a4274700a",
	      "c9917f32-e5e8-4978-a6de-119b43607903",
	      "4cf116b7-ff15-48d3-adab-944686e88a55",
	      "45944061-9d2c-4636-b6bb-5f08a20fb2ff",
	      "3d2dd1e8-a04f-4af5-9e70-d86aaac48d2c",
	      "4158f107-f306-4a23-9e76-2fee0808ad66"
	    ],
	    "reviews": {
	      "avgRating": 3,
	      "customers": [
	        {
	          "customerid": "bbefc7bb-abb9-468c-ad1e-0cee6d9bb9b1",
	          "rating": 1,
	          "votes": 6,
	          "helpful": 5,
	          "reviewText": "Ex aliquip minim dolore reprehenderit. Ullamco sint nisi officia in laborum minim laboris quis laborum. Voluptate adipisicing consectetur est ea. Id eu non est ad et veniam ut eu ea ut.\r\n"
	        },
	        {
	          "customerid": "864973a5-7e9c-4795-af34-42a28442c7d3",
	          "rating": 4,
	          "votes": 3,
	          "helpful": 9,
	          "reviewText": "Duis nisi aute laborum ut sunt reprehenderit. Aute ea cillum mollit consequat qui velit eiusmod. Do duis tempor dolore voluptate ea est. Ipsum ea deserunt fugiat cupidatat incididunt elit ut esse. Consectetur minim amet reprehenderit esse fugiat nisi.\r\n"
	        },
	        {
	          "customerid": "ac66d294-c0f0-4763-8d74-1d1641c7672f",
	          "rating": 2,
	          "votes": 17,
	          "helpful": 14,
	          "reviewText": "Tempor nisi laborum sit aliquip laboris aliquip tempor minim. Aliqua ut minim laborum esse pariatur est sunt eiusmod Lorem deserunt nulla qui Lorem laboris. Incididunt ex ex eiusmod ad consectetur est mollit sit nisi voluptate duis tempor et. Labore commodo incididunt laborum ea do aliquip laborum sunt commodo sint sint cupidatat.\r\n"
	        },
	        {
	          "customerid": "1d2bb8f9-4688-4517-8e49-8c31a53e2b0e",
	          "rating": 5,
	          "votes": 4,
	          "helpful": 19,
	          "reviewText": "Lorem qui aliquip ullamco dolor incididunt elit eu. Ut tempor magna elit dolore nisi est proident sunt. Eu esse quis nostrud minim amet ullamco in amet cupidatat quis. Pariatur anim adipisicing consectetur mollit cupidatat et excepteur proident aute deserunt. Deserunt labore adipisicing anim sunt ut. Dolore veniam aliquip nisi in sit ullamco fugiat culpa aliqua quis.\r\n"
	        },
	        {
	          "customerid": "94651546-d7c4-4506-88a7-a63937265608",
	          "rating": 4,
	          "votes": 8,
	          "helpful": 11,
	          "reviewText": "Culpa duis sunt anim ut exercitation aute ex enim duis id occaecat ea adipisicing. Sunt proident excepteur nostrud voluptate ullamco enim qui amet culpa anim velit cupidatat excepteur. Culpa duis consectetur sit sint laborum ad ipsum velit consequat.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 14,
	    "ASIN": "72d527b1-237a-41c2-97ea-f9a6bf823f88",
	    "title": "ad",
	    "group": "Book",
	    "salesrank": 862,
	    "similar": [
	      "6959b334-20f0-4388-954e-c8c53a7adfb7",
	      "c97ff1d5-a8b3-492b-8b31-4956d19d76fd",
	      "6456fd62-3052-4abe-a0b2-4b196d949268",
	      "95941501-af51-4131-b9f4-941eaff53d1f",
	      "7aa02cb2-3c15-4852-b112-30199ab2ebb5",
	      "c30c9b62-58a1-4746-b04e-a76e78943f84",
	      "7ace66c2-39c3-4187-bbb6-65fa2e0caedf"
	    ],
	    "reviews": {
	      "avgRating": 5,
	      "customers": [
	        {
	          "customerid": "b6a8cc94-4deb-42b7-adfb-350b417dd79b",
	          "rating": 1,
	          "votes": 14,
	          "helpful": 18,
	          "reviewText": "Nulla sit occaecat nulla consectetur id ex cillum. Veniam qui laborum ea qui in fugiat elit. Laboris et Lorem mollit cupidatat nostrud nisi qui aliqua velit ullamco quis. Consequat proident ea sunt reprehenderit veniam labore non esse officia duis eu cupidatat cillum. Dolor do elit eu exercitation adipisicing voluptate eu aute aute amet anim nostrud ullamco. Non ipsum occaecat sit dolor duis incididunt sit minim.\r\n"
	        },
	        {
	          "customerid": "e94e4962-f2c8-4cab-81ce-2f17b7578ec9",
	          "rating": 1,
	          "votes": 11,
	          "helpful": 19,
	          "reviewText": "Nostrud esse fugiat pariatur ipsum labore ad in esse aliqua non id ad aliqua sint. Commodo ullamco esse tempor deserunt officia. Et laboris consectetur non consectetur aliquip mollit aliquip nulla. Amet consequat do commodo tempor mollit minim laborum ea enim qui dolor irure id non. Ea voluptate aute irure ea dolor esse.\r\n"
	        },
	        {
	          "customerid": "867a4a46-a991-435f-b9d2-0ef07a69031d",
	          "rating": 3,
	          "votes": 4,
	          "helpful": 6,
	          "reviewText": "Excepteur dolore nisi proident eu labore sint esse ut aute laborum velit et aliqua. Laborum elit quis culpa eiusmod nisi magna fugiat aute ad ex quis proident excepteur aute. Quis ex irure nulla ea exercitation. Sit eiusmod dolor sunt occaecat ipsum exercitation qui culpa adipisicing adipisicing reprehenderit et sint. Cillum cupidatat voluptate do sit labore adipisicing velit anim irure ipsum cillum do minim. Voluptate sunt ullamco cillum labore reprehenderit qui fugiat incididunt.\r\n"
	        },
	        {
	          "customerid": "e6071ec5-e27a-4a68-babf-8e64e4719a79",
	          "rating": 2,
	          "votes": 1,
	          "helpful": 11,
	          "reviewText": "Ex in anim cupidatat ex ipsum ex do nisi. Labore laboris magna deserunt tempor. Sit nulla ut dolor commodo enim laborum occaecat. Tempor anim mollit aute excepteur sit reprehenderit. Non cillum mollit reprehenderit amet ad fugiat magna. In duis occaecat et do duis veniam aliquip dolor occaecat do laboris adipisicing reprehenderit. Ut sit nisi pariatur proident.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 15,
	    "ASIN": "bf011478-47ef-43e3-988b-f0d63d6f32c7",
	    "title": "qui",
	    "group": "Book",
	    "salesrank": 531,
	    "similar": [
	      "fd063b7a-b04a-42f7-899e-8671bd21da1e",
	      "6b5ae440-fccd-4662-94b2-9fbb599f5b42",
	      "3c51aab3-6acc-4c29-9d89-59aef0f830d9",
	      "e4a3d6ff-60a8-428a-8e0d-d534f492e467",
	      "8a228d95-e476-404a-b501-5b8b2e1f0091",
	      "0ebb4f11-ced6-4c2d-adb8-b61c8287ae08",
	      "e6d13b58-957c-4de7-9450-31b4d24dcd00"
	    ],
	    "reviews": {
	      "avgRating": 4,
	      "customers": [
	        {
	          "customerid": "23ba3ca0-8585-4e57-9f2e-1afbfa401ce0",
	          "rating": 5,
	          "votes": 10,
	          "helpful": 15,
	          "reviewText": "Nisi id ea aliquip aliquip consectetur ex consequat nisi exercitation duis tempor. Sunt nisi aute nisi commodo occaecat. Est ea mollit esse aute. Mollit nisi elit aute ex laborum. Consectetur est consectetur id est laboris culpa. Aliquip esse in adipisicing consequat. Ad occaecat labore velit dolore fugiat voluptate quis magna laboris aliquip veniam eu deserunt.\r\n"
	        },
	        {
	          "customerid": "091d5abe-419b-40be-84c8-a275283d6a33",
	          "rating": 1,
	          "votes": 12,
	          "helpful": 16,
	          "reviewText": "Cupidatat consequat est Lorem excepteur cupidatat et dolor duis. Excepteur excepteur mollit ad ad est enim voluptate fugiat id dolore. Eiusmod aliqua incididunt et nostrud ad officia exercitation. Ad ad exercitation ex enim.\r\n"
	        },
	        {
	          "customerid": "8ad338fe-e803-4c7f-ae1f-b615fd9654ab",
	          "rating": 1,
	          "votes": 4,
	          "helpful": 18,
	          "reviewText": "Elit laborum exercitation adipisicing tempor elit pariatur dolore est laboris. Amet est nulla veniam elit consequat est Lorem anim dolor ipsum mollit anim. Esse dolor elit occaecat velit adipisicing officia Lorem occaecat sit. Qui ut do excepteur excepteur amet irure cillum. Cupidatat enim anim et aute ullamco commodo. Eu incididunt excepteur sit mollit proident minim ullamco voluptate amet ut et commodo Lorem sunt. In enim ipsum do veniam velit laboris nulla qui anim.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 16,
	    "ASIN": "2851dc64-3494-42c2-b297-61908a15b52d",
	    "title": "irure",
	    "group": "Video",
	    "salesrank": 675,
	    "similar": [
	      "79c92801-92be-447b-9760-2a78ce4a1b2f",
	      "802ca5e2-7b55-42bf-9c53-1a618f81bde8",
	      "35df85a5-8c9f-4ae9-afaf-da5f5a5f69af",
	      "1652bc4f-8b60-4aba-a347-963e88149cc2",
	      "008ead80-8be7-4e1f-a4a5-911ff33e24bd",
	      "0bc4454f-3b52-4b2d-b8d4-2ae80745a41e",
	      "b0666762-bb19-4959-8ebe-37311ddcdbad"
	    ],
	    "reviews": {
	      "avgRating": 5,
	      "customers": [
	        {
	          "customerid": "75218a65-389f-40ff-9de2-5f3ccbee8f8f",
	          "rating": 4,
	          "votes": 18,
	          "helpful": 9,
	          "reviewText": "Culpa aliqua laboris Lorem elit incididunt. Cupidatat incididunt culpa exercitation esse aliquip. Dolor est mollit commodo labore dolore. Consequat nostrud qui velit duis ea amet aute culpa. Reprehenderit anim aliqua id cillum mollit nulla labore ad labore sunt aliqua amet. Excepteur amet sit ea et voluptate cupidatat et magna cillum.\r\n"
	        },
	        {
	          "customerid": "211da506-8a27-476c-a20c-7765230ecb29",
	          "rating": 3,
	          "votes": 17,
	          "helpful": 3,
	          "reviewText": "Ex amet cillum ex esse eu sint nostrud aliqua ut. Culpa amet ad occaecat sit minim voluptate cupidatat. Officia minim nostrud irure proident commodo quis ipsum fugiat voluptate sunt. Cillum reprehenderit exercitation ad eu et nisi cillum incididunt occaecat et dolor. Nostrud nulla cupidatat laborum qui.\r\n"
	        },
	        {
	          "customerid": "0cd0f688-5a37-4673-9c9e-93b6350e0af1",
	          "rating": 1,
	          "votes": 1,
	          "helpful": 1,
	          "reviewText": "Dolor nulla ut nostrud non elit consectetur est laboris veniam. Adipisicing occaecat et ea ipsum adipisicing et anim. Aute voluptate amet qui nostrud aute quis eu sint cillum. Eu irure sint deserunt nulla non aliqua ea pariatur non veniam ipsum. Commodo adipisicing enim proident anim commodo.\r\n"
	        },
	        {
	          "customerid": "16accd1e-ae2f-4c24-8dfb-1cec2049345e",
	          "rating": 5,
	          "votes": 15,
	          "helpful": 14,
	          "reviewText": "Proident veniam culpa aliqua enim proident veniam. Mollit eiusmod aliqua amet officia sit irure cupidatat consectetur occaecat incididunt. Nulla excepteur adipisicing minim velit anim.\r\n"
	        },
	        {
	          "customerid": "c7721889-037d-4239-b693-55e2f720a445",
	          "rating": 2,
	          "votes": 12,
	          "helpful": 11,
	          "reviewText": "Eiusmod aute reprehenderit aute quis quis dolor Lorem tempor quis sint culpa incididunt. Proident laborum ex sint magna eiusmod adipisicing do commodo deserunt. In do magna anim fugiat ea deserunt proident aute nulla ex id in ad adipisicing. Excepteur cupidatat dolore irure enim adipisicing cupidatat eu excepteur aliquip irure Lorem consectetur. Occaecat aute culpa elit excepteur et incididunt nostrud in.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 17,
	    "ASIN": "df736870-f153-4744-9331-4153851c225b",
	    "title": "deserunt",
	    "group": "Music",
	    "salesrank": 734,
	    "similar": [
	      "64445794-6299-4864-961e-e29ac7044c52",
	      "62073d16-12a0-4bbf-af22-7bb9e9001309",
	      "0f2993e3-c310-4d9e-b864-414c7c06e5de",
	      "e52b1ce1-d618-426a-b38d-ea93e7dedb4b",
	      "38a58668-9dae-479d-854e-9e85a60443dd",
	      "002b615f-98ea-4ae1-b706-bb556212d32b",
	      "bd940977-c1f4-4f8a-887d-aefc1cc46560"
	    ],
	    "reviews": {
	      "avgRating": 1,
	      "customers": [
	        {
	          "customerid": "c30a27a4-5b99-4746-bfe2-27378b56b574",
	          "rating": 3,
	          "votes": 16,
	          "helpful": 17,
	          "reviewText": "Id proident ex aute duis mollit ullamco in sit reprehenderit mollit irure. Nisi et adipisicing sit eiusmod ipsum duis sunt excepteur ad minim Lorem reprehenderit. Minim cupidatat consectetur aliqua magna eiusmod cillum eiusmod dolor. Labore sit eu proident proident in dolore cupidatat. Sunt culpa aliqua cillum eu aliqua ea id minim voluptate cillum in. Exercitation consequat qui dolor dolore commodo ipsum culpa.\r\n"
	        },
	        {
	          "customerid": "d47dec1d-0052-442e-be89-3d8b92ddfe00",
	          "rating": 5,
	          "votes": 9,
	          "helpful": 8,
	          "reviewText": "Qui consequat duis occaecat dolor sunt. Officia id velit esse commodo enim ex veniam cillum aliqua pariatur sunt laboris quis. Ut Lorem sunt laboris occaecat pariatur ex magna cillum sint pariatur.\r\n"
	        },
	        {
	          "customerid": "f342e327-d355-417a-a785-238eed4cb213",
	          "rating": 3,
	          "votes": 6,
	          "helpful": 16,
	          "reviewText": "Do incididunt officia occaecat exercitation. Dolor Lorem incididunt est et sunt sint. Magna non voluptate qui anim. Tempor ipsum commodo non mollit.\r\n"
	        },
	        {
	          "customerid": "88fa01c0-3e5b-45d7-8790-bf1c37c053e4",
	          "rating": 1,
	          "votes": 9,
	          "helpful": 7,
	          "reviewText": "Ullamco mollit officia non laboris veniam mollit. Lorem sint fugiat amet consequat. Ullamco fugiat ullamco consectetur id consequat commodo culpa qui nulla ad sunt dolor proident. Velit cillum do Lorem fugiat ea qui magna anim dolore ipsum esse. Duis aute fugiat quis magna qui aliquip consequat. Dolor amet excepteur in elit ullamco aliqua adipisicing do consequat ex.\r\n"
	        },
	        {
	          "customerid": "3848dc24-9e8a-44f5-8562-afa07afe5c95",
	          "rating": 1,
	          "votes": 8,
	          "helpful": 20,
	          "reviewText": "Ipsum consequat ipsum sunt veniam amet velit cupidatat. Aliquip est velit quis magna. Do officia deserunt occaecat voluptate culpa commodo officia culpa ad eiusmod. Id anim qui aute mollit velit ut aliqua nulla nulla ipsum officia culpa. Est cillum dolore anim dolore Lorem quis Lorem ea.\r\n"
	        },
	        {
	          "customerid": "d89ee2a8-5358-4f1a-8736-bb4f4c100383",
	          "rating": 5,
	          "votes": 4,
	          "helpful": 17,
	          "reviewText": "Magna officia commodo adipisicing ex magna velit nulla. Cillum culpa est anim exercitation irure fugiat in id velit ullamco. Laborum exercitation enim consequat minim fugiat est eu. Magna tempor et eu ex cillum voluptate officia sunt ullamco sit. Sint commodo fugiat aliqua consectetur pariatur aute ipsum incididunt enim aute officia laboris in tempor.\r\n"
	        },
	        {
	          "customerid": "e7eb9732-4392-47fb-afa2-1e33e62a66c6",
	          "rating": 3,
	          "votes": 5,
	          "helpful": 7,
	          "reviewText": "Ea enim aliqua ut pariatur officia ipsum culpa amet. Veniam aliquip velit dolore nisi ipsum. Officia ullamco nostrud aliqua quis veniam deserunt. Eu sit cupidatat anim aliqua amet aliquip ad mollit aliqua dolore. Labore cillum esse culpa excepteur. Ut sunt eiusmod laboris est commodo esse dolore ex et.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 18,
	    "ASIN": "0e8c70aa-7400-45a2-8520-dbf3cce4bb2b",
	    "title": "adipisicing",
	    "group": "Book",
	    "salesrank": 663,
	    "similar": [
	      "0e68387a-55fc-478a-b50f-bb5aaf778659",
	      "4f3a1d47-fd89-42de-8364-4508732fb7e7",
	      "8a22bcde-efa0-4277-99fd-b4b7bbf21480",
	      "019085f6-e6c7-4d00-820d-f010b64d2f16",
	      "8d1d4c48-18c6-4c00-bf17-f587ac4f963d",
	      "64c12916-5503-432d-a5a1-8f15a42a50ca",
	      "da13cdae-3864-4139-b8c2-846d4e583cf9"
	    ],
	    "reviews": {
	      "avgRating": 4,
	      "customers": [
	        {
	          "customerid": "509e458f-5f38-445d-a207-8987d058402d",
	          "rating": 4,
	          "votes": 2,
	          "helpful": 9,
	          "reviewText": "Labore sint qui dolore minim commodo deserunt. Ipsum mollit dolore aliquip commodo incididunt fugiat aute ad culpa anim. Do dolore quis est sit quis irure sit nulla adipisicing irure voluptate elit nisi. Deserunt aliqua ex quis occaecat in Lorem in in aute proident dolor.\r\n"
	        },
	        {
	          "customerid": "6da8d067-6574-400a-b1d3-c3b232e2cabb",
	          "rating": 5,
	          "votes": 20,
	          "helpful": 12,
	          "reviewText": "Mollit pariatur adipisicing reprehenderit irure consequat ad ut pariatur exercitation esse nulla eu ullamco. Exercitation cillum et reprehenderit cillum cillum. Fugiat nostrud dolor reprehenderit duis duis amet nostrud veniam tempor. Culpa et irure minim velit in labore sint minim. Incididunt consequat consectetur aliqua duis consectetur ipsum minim culpa anim ipsum irure dolore ullamco irure.\r\n"
	        },
	        {
	          "customerid": "86802b0d-623f-4350-ad6f-8eb7b6503e52",
	          "rating": 2,
	          "votes": 19,
	          "helpful": 1,
	          "reviewText": "Cupidatat do ullamco velit proident qui fugiat in labore consequat cillum irure laboris ullamco sint. Occaecat cillum sit aute voluptate culpa commodo ex officia nisi velit tempor consectetur ut. Quis adipisicing aliqua cillum aliqua ex laborum elit amet sit enim id mollit non nulla. Consectetur nostrud et officia nulla quis aliquip. Est aute culpa sint do laboris aliqua duis minim veniam ad. Sunt adipisicing occaecat veniam officia nisi incididunt.\r\n"
	        },
	        {
	          "customerid": "065f116d-6aae-4146-94ee-137291eb0f5d",
	          "rating": 5,
	          "votes": 10,
	          "helpful": 4,
	          "reviewText": "Nostrud ipsum proident labore adipisicing aute est amet cillum. Officia veniam ex irure voluptate ipsum laborum aliqua exercitation proident voluptate velit esse irure. Voluptate et veniam pariatur proident id ullamco culpa commodo.\r\n"
	        },
	        {
	          "customerid": "e9ce0c12-b526-4b53-a48a-1c207395dca8",
	          "rating": 2,
	          "votes": 8,
	          "helpful": 13,
	          "reviewText": "Lorem nulla mollit magna magna adipisicing elit mollit quis laboris consequat. Amet laborum quis exercitation ut ullamco non laborum nulla cillum est. Eu fugiat aliquip dolore labore enim qui deserunt ea velit. Reprehenderit minim eiusmod irure occaecat labore id.\r\n"
	        },
	        {
	          "customerid": "5b831213-ff2a-4eac-af9a-22f1bab26c4e",
	          "rating": 1,
	          "votes": 10,
	          "helpful": 7,
	          "reviewText": "Ea irure fugiat irure commodo mollit commodo consequat fugiat dolore deserunt minim qui elit. Reprehenderit enim reprehenderit minim sit laboris et voluptate sint. Qui pariatur ullamco excepteur exercitation eu velit et occaecat magna Lorem anim. Laborum voluptate consectetur deserunt et enim exercitation aliqua magna cillum anim. Mollit irure Lorem laboris aliqua laboris cupidatat qui reprehenderit amet enim pariatur ea aliqua. Enim Lorem pariatur est commodo ea et. Exercitation irure esse ullamco ut veniam magna reprehenderit.\r\n"
	        },
	        {
	          "customerid": "3c2ff68d-87f4-4d62-a235-530b5bf07bea",
	          "rating": 1,
	          "votes": 3,
	          "helpful": 1,
	          "reviewText": "Labore nulla aute adipisicing aliquip minim ex laboris ut reprehenderit. Elit reprehenderit deserunt adipisicing aliqua veniam cupidatat non non exercitation sunt eiusmod do excepteur. Incididunt cupidatat sint cillum est pariatur aliquip Lorem. Pariatur laborum reprehenderit cupidatat est. Proident enim est magna ipsum in.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 19,
	    "ASIN": "5c462362-87b1-45e0-a98d-0e8393405ca5",
	    "title": "cillum",
	    "group": "Book",
	    "salesrank": 330,
	    "similar": [
	      "3bac5528-44f0-44b1-9bb6-257eb2064780",
	      "f752bdfa-221d-4d96-81f5-3e72a85438b0",
	      "4aadf2df-2186-4159-ba79-6b23f029043b",
	      "913784d2-2fa5-443a-a68e-9e4e57f78a7e",
	      "aebde628-cab6-4209-ba12-126eb135735c",
	      "32ef4e5a-1537-48c1-b272-50d6522301ad",
	      "84ac5290-6feb-4e75-92cc-f1aa9e54667a"
	    ],
	    "reviews": {
	      "avgRating": 3,
	      "customers": [
	        {
	          "customerid": "7d47d963-ea7d-4cec-a734-dc5bf0193d53",
	          "rating": 2,
	          "votes": 7,
	          "helpful": 11,
	          "reviewText": "Nisi in cillum sint cupidatat occaecat aute eiusmod cupidatat laboris occaecat pariatur dolor consequat. Id nostrud deserunt anim mollit adipisicing aute nisi nulla. Velit labore minim excepteur excepteur adipisicing nostrud. Sint et ullamco sunt nulla laborum anim cupidatat commodo.\r\n"
	        },
	        {
	          "customerid": "7ed7b008-f09d-4cc4-9e54-8d0a29298378",
	          "rating": 2,
	          "votes": 14,
	          "helpful": 20,
	          "reviewText": "Sit magna eu ex id ex magna est magna sunt et nostrud est exercitation. Sunt Lorem excepteur amet incididunt fugiat. Incididunt ex sint fugiat cupidatat quis reprehenderit ullamco esse consectetur anim.\r\n"
	        },
	        {
	          "customerid": "afd6e759-5858-4744-a01a-bccf6f4ec3f0",
	          "rating": 4,
	          "votes": 18,
	          "helpful": 13,
	          "reviewText": "Voluptate laboris quis nulla officia consectetur esse ut sint. Laboris do sunt laboris quis non quis culpa amet nostrud. Non sit dolore do fugiat enim veniam officia laboris ad labore enim est. Ullamco enim sint occaecat labore occaecat tempor. Adipisicing aliqua dolor nostrud commodo eu elit. Veniam nostrud pariatur ea sit duis do fugiat voluptate dolore.\r\n"
	        },
	        {
	          "customerid": "c9370482-ebcf-419a-9a0a-4df05019ede5",
	          "rating": 5,
	          "votes": 8,
	          "helpful": 8,
	          "reviewText": "Commodo adipisicing veniam irure id ullamco labore in excepteur deserunt elit ullamco irure. Velit irure quis ex ex exercitation magna dolor proident. Do mollit id officia est aute elit minim amet. Laboris velit voluptate velit exercitation incididunt ad enim proident. Proident reprehenderit ad quis eu laboris est irure nostrud. Sit tempor proident reprehenderit ex.\r\n"
	        },
	        {
	          "customerid": "4a4b2129-2553-4ddb-b95c-ca4f4809bba7",
	          "rating": 3,
	          "votes": 7,
	          "helpful": 10,
	          "reviewText": "Occaecat eiusmod deserunt non officia velit mollit aliqua magna. Incididunt ullamco aute do incididunt sunt. Id elit veniam occaecat cupidatat laboris duis magna officia ex occaecat laboris. Sit nisi aliqua velit id pariatur duis quis eu aute adipisicing ea culpa velit. Officia non officia veniam elit est nulla dolor aliquip voluptate proident consequat laboris excepteur nisi.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 20,
	    "ASIN": "799fbfdd-c1e6-48ef-a152-9e351c52aae1",
	    "title": "non",
	    "group": "Book",
	    "salesrank": 555,
	    "similar": [
	      "3caa3ac2-64fb-4333-9843-a3a0934ab7e6",
	      "1f964640-13fd-4fe2-9653-a161b2f6fa4a",
	      "b69ce841-be13-4f74-82b1-33bc679a47fc",
	      "12be0257-7425-4ebf-88c3-bd6cab46d18b",
	      "969c684b-61bb-4ca0-afcb-68e79fdea8e6",
	      "379cd6f2-c378-4809-866f-6d55a39e6c07",
	      "46925752-54dc-44a9-b246-51167f924052"
	    ],
	    "reviews": {
	      "avgRating": 3,
	      "customers": [
	        {
	          "customerid": "564c3b59-4cce-4a90-8d3e-1aaa91309443",
	          "rating": 4,
	          "votes": 6,
	          "helpful": 8,
	          "reviewText": "Incididunt proident minim aute nisi cupidatat quis consectetur ullamco culpa ex eiusmod sit aliqua voluptate. Fugiat velit reprehenderit qui aute do qui aliquip. Sint tempor est irure qui quis esse exercitation tempor sit laboris. Do laboris commodo non eiusmod minim. Veniam qui labore quis nulla minim. Elit dolore anim nisi adipisicing. Cupidatat consectetur irure magna proident incididunt ullamco irure do sunt.\r\n"
	        },
	        {
	          "customerid": "aa81e385-512b-41d0-9fbf-c666201f6861",
	          "rating": 2,
	          "votes": 13,
	          "helpful": 11,
	          "reviewText": "Excepteur quis et nisi mollit aliquip velit occaecat sint irure ullamco sunt quis in labore. Nulla consectetur ullamco sint ad do velit. Sit amet est nostrud amet. Veniam ullamco veniam excepteur Lorem fugiat eu exercitation ut tempor mollit dolore Lorem.\r\n"
	        },
	        {
	          "customerid": "82435151-8ea2-450b-984a-f0d5159aaef1",
	          "rating": 1,
	          "votes": 11,
	          "helpful": 1,
	          "reviewText": "In dolore consectetur excepteur cupidatat duis ad reprehenderit excepteur mollit fugiat proident laboris adipisicing. Commodo esse adipisicing magna Lorem occaecat nostrud nostrud ex sit eiusmod laborum. Fugiat excepteur et ad aute exercitation commodo reprehenderit in reprehenderit ipsum sunt magna id labore. Excepteur laboris adipisicing est proident elit do fugiat aute esse est officia excepteur minim duis. Officia exercitation sit laborum anim labore mollit anim consectetur ad velit irure.\r\n"
	        },
	        {
	          "customerid": "6c7fd75a-a438-40a2-a6dd-f2d0b6dfe7b5",
	          "rating": 3,
	          "votes": 7,
	          "helpful": 17,
	          "reviewText": "Elit nisi qui incididunt Lorem enim nulla labore proident esse mollit veniam est dolore. Ullamco ex laboris eu mollit ipsum. Anim consectetur voluptate id laborum.\r\n"
	        },
	        {
	          "customerid": "07d83a44-4b6f-4660-83b9-369f040befa9",
	          "rating": 2,
	          "votes": 18,
	          "helpful": 9,
	          "reviewText": "Nisi enim enim culpa qui ad Lorem. Excepteur dolore officia deserunt nulla. Occaecat ea cupidatat elit duis anim non sit elit excepteur ipsum. Elit anim ipsum eiusmod eu elit deserunt sint ullamco. Non excepteur aliqua esse ullamco elit proident pariatur eiusmod laboris ad nisi sint ex officia.\r\n"
	        },
	        {
	          "customerid": "efba00ad-3ba4-424a-a302-ff35e88745a3",
	          "rating": 1,
	          "votes": 20,
	          "helpful": 17,
	          "reviewText": "Veniam Lorem deserunt anim id exercitation elit elit labore. Veniam nostrud mollit duis duis. Tempor culpa dolore adipisicing et. In aute exercitation exercitation fugiat labore voluptate aliquip id. Ipsum mollit consequat id aliquip aliqua. Eu aliqua deserunt aliquip ad. Nostrud tempor proident ut consectetur Lorem consequat deserunt veniam.\r\n"
	        },
	        {
	          "customerid": "42e530a0-7560-4d81-ba2a-42e5a5e1abc7",
	          "rating": 2,
	          "votes": 5,
	          "helpful": 9,
	          "reviewText": "Nisi Lorem veniam irure mollit do sint sit commodo. Laborum fugiat sint consectetur ad aliquip. Eu ea tempor nostrud aliquip. Laboris cillum dolore adipisicing laborum commodo est culpa consequat ad deserunt ex laboris ad. Laboris in eu do cupidatat incididunt tempor cillum aliqua adipisicing exercitation ad eiusmod fugiat elit. Aliqua incididunt duis magna dolor officia excepteur laborum eiusmod ea.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 21,
	    "ASIN": "341e79f8-db72-4933-a7f1-70708b8abfe6",
	    "title": "eiusmod",
	    "group": "Book",
	    "salesrank": 567,
	    "similar": [
	      "2b477155-ccfd-45ea-a353-6fe2292db941",
	      "abe9e94a-eea5-401d-a671-5794af789264",
	      "33062411-12d4-4855-a702-105cda384b66",
	      "e3011eba-8ded-437f-90bf-b6a11c1878fe",
	      "fb39ce37-2694-4a50-9338-c48a36ec3b6a",
	      "3b05e305-b256-4349-97e7-40fd86017b74",
	      "6ce84d5c-e308-479b-aa2a-336ec06252da"
	    ],
	    "reviews": {
	      "avgRating": 1,
	      "customers": [
	        {
	          "customerid": "ef98702f-85d6-4b0f-815a-f43c4e69c5ef",
	          "rating": 5,
	          "votes": 6,
	          "helpful": 9,
	          "reviewText": "Reprehenderit cillum ipsum ad velit dolore non eu commodo ullamco irure duis. Quis eu elit est velit incididunt exercitation nisi ea sint quis. Nulla enim sunt eiusmod sit magna esse quis adipisicing culpa culpa qui. Consequat labore voluptate incididunt est magna ut culpa commodo cillum. Consectetur culpa magna veniam elit.\r\n"
	        },
	        {
	          "customerid": "872e71f7-e770-4399-a4ec-bb65b74c8f95",
	          "rating": 4,
	          "votes": 13,
	          "helpful": 2,
	          "reviewText": "Nostrud nisi pariatur occaecat culpa ut ad deserunt occaecat velit ex ullamco elit Lorem dolor. Nostrud qui nostrud quis dolore aute ut sunt deserunt veniam nostrud mollit labore aliqua. Minim esse laboris irure voluptate irure pariatur. Elit consequat adipisicing id nulla. Veniam ullamco ipsum aute commodo. Consequat eiusmod elit mollit aliqua dolor amet esse.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 22,
	    "ASIN": "9a0609e1-c16e-478a-b63c-61a763059c03",
	    "title": "id",
	    "group": "Music",
	    "salesrank": 493,
	    "similar": [
	      "9e4bd465-3162-4096-8ec0-705ea8b508f2",
	      "b0766661-c1dd-4f52-b396-24325e1919a7",
	      "493642c5-a521-4aef-aa65-a43d67ce3894",
	      "579e0127-5869-4168-954c-14da93d35ac9",
	      "9f7b63a5-c5bd-4acc-b2bf-2d0574b5f6a2",
	      "a879aa5e-80dd-42a5-8c31-e78c53c1a1d1",
	      "77c9e8fc-a9c6-42ac-a02e-3d770c8b861e"
	    ],
	    "reviews": {
	      "avgRating": 4,
	      "customers": [
	        {
	          "customerid": "1954a746-e81b-428f-b28c-73ef56c43f5d",
	          "rating": 1,
	          "votes": 10,
	          "helpful": 2,
	          "reviewText": "Irure culpa ullamco dolor ea excepteur nostrud nisi sunt. Et et nulla enim laboris cupidatat nostrud occaecat exercitation anim. Aliquip nisi nostrud ullamco ad minim aliquip consectetur cillum laborum in quis adipisicing.\r\n"
	        },
	        {
	          "customerid": "047d7b78-939d-4300-865a-d2c3881ef865",
	          "rating": 1,
	          "votes": 6,
	          "helpful": 9,
	          "reviewText": "Ut reprehenderit aute duis eiusmod sit id magna magna laboris non. Magna aliquip duis voluptate fugiat magna magna aliqua culpa exercitation deserunt laboris. Anim anim amet est voluptate laborum quis incididunt eu enim Lorem fugiat ad. Cupidatat sint aliqua deserunt qui magna cillum excepteur mollit. Eiusmod et enim nisi consectetur proident ad mollit nulla labore eiusmod sunt. Do magna deserunt nulla pariatur nulla non.\r\n"
	        },
	        {
	          "customerid": "ca15d3ba-88bd-4a28-b222-b227871fc5e7",
	          "rating": 4,
	          "votes": 10,
	          "helpful": 10,
	          "reviewText": "Dolor ad do voluptate reprehenderit aliquip. Cillum eu occaecat sunt nulla dolor. Esse occaecat duis ullamco non fugiat adipisicing pariatur ad voluptate est labore in.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 23,
	    "ASIN": "81f3f48f-9891-4e86-83b6-491be9a66d64",
	    "title": "consequat",
	    "group": "Music",
	    "salesrank": 825,
	    "similar": [
	      "af7e0229-2124-4d7d-9013-6805c9b2b36e",
	      "9c535df4-296a-4977-9a8e-ff61799e64d1",
	      "57bab9fc-2dc2-4b64-b167-4b29e5b7d697",
	      "8d3f64e2-3692-4a25-9107-32a8e032354d",
	      "d2853f72-5f26-4a4d-95ba-5b91e66affa9",
	      "4fe9fb7c-1bf6-449e-a33a-71164b89584c",
	      "1555a4cd-0014-4284-9d84-2b63fc27db24"
	    ],
	    "reviews": {
	      "avgRating": 4,
	      "customers": [
	        {
	          "customerid": "2a35e5b7-b0ff-44f4-ae8e-86fc66bf3560",
	          "rating": 5,
	          "votes": 11,
	          "helpful": 11,
	          "reviewText": "Non labore cupidatat tempor anim exercitation cillum ea sint incididunt elit id nisi esse sint. Quis cillum ut duis in sit. Irure quis ea labore eu enim ullamco do quis qui. Deserunt dolor adipisicing Lorem ipsum minim commodo nulla minim dolor. Deserunt occaecat velit et qui pariatur eu eiusmod qui proident. Eu aliquip aliquip ut enim incididunt adipisicing ut pariatur adipisicing. Fugiat do dolore ad ad excepteur.\r\n"
	        },
	        {
	          "customerid": "9abf0565-8014-4c3d-961e-2db393ddb2d0",
	          "rating": 3,
	          "votes": 17,
	          "helpful": 19,
	          "reviewText": "Cillum enim voluptate et voluptate. Velit laborum sint magna laborum ipsum ipsum. Proident quis cillum laboris est occaecat officia veniam deserunt ullamco aute sit ullamco aliqua laboris.\r\n"
	        },
	        {
	          "customerid": "7efdc2c0-d579-46d7-8b8d-36308fa92ca8",
	          "rating": 3,
	          "votes": 7,
	          "helpful": 4,
	          "reviewText": "Consectetur pariatur ut ut minim incididunt enim. Proident ut ea proident in Lorem cillum labore. Voluptate veniam aliqua proident exercitation et dolor occaecat consequat. Ullamco deserunt ex est aute laboris. Nisi minim consequat id minim nostrud enim veniam. Veniam commodo excepteur nulla labore proident nisi dolore exercitation consequat qui irure occaecat. Tempor duis elit aute deserunt consectetur ut eu exercitation enim non labore magna anim.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 24,
	    "ASIN": "61070eda-34b5-4e76-bdbb-636e458476d1",
	    "title": "sunt",
	    "group": "Book",
	    "salesrank": 272,
	    "similar": [
	      "88f7a002-0305-4026-a4c6-2843842ea965",
	      "283ef856-3114-4889-a069-092723c797ca",
	      "d3d4a77d-dcca-4fd9-b589-d191eca33e51",
	      "328531ba-3081-42e0-bfde-f600bbdb8855",
	      "67e61dd5-b34d-4fea-a978-b1c4a942dc96",
	      "3e924dc3-ccfe-441d-b43d-355679ab57c5",
	      "430cc473-82f2-4d42-ae4a-96f4c34e72ee"
	    ],
	    "reviews": {
	      "avgRating": 1,
	      "customers": [
	        {
	          "customerid": "0f7075a9-e33c-4138-a976-cd01fd54713f",
	          "rating": 4,
	          "votes": 17,
	          "helpful": 11,
	          "reviewText": "Cupidatat duis amet adipisicing id enim. Cillum qui aliqua duis tempor velit ullamco proident excepteur. Ullamco id cillum anim do ea ex laboris ex eiusmod sit exercitation. Consectetur irure eu mollit officia. Aliqua et nulla labore cupidatat cillum fugiat incididunt mollit aliqua cupidatat Lorem qui excepteur laboris.\r\n"
	        },
	        {
	          "customerid": "fd33f080-cd63-4a2a-bd9a-aeeaaad54c15",
	          "rating": 5,
	          "votes": 18,
	          "helpful": 20,
	          "reviewText": "Aliquip amet dolore occaecat magna ea esse proident eiusmod nisi excepteur quis. Aliquip nisi reprehenderit ut irure in laboris ut veniam do ex deserunt magna nulla. Elit esse minim mollit est aliquip voluptate commodo non consequat consequat elit velit est. Consectetur adipisicing cillum occaecat ut qui laborum.\r\n"
	        },
	        {
	          "customerid": "f4b01e7a-c8b5-45c2-ae96-008e11ab7133",
	          "rating": 3,
	          "votes": 1,
	          "helpful": 13,
	          "reviewText": "Quis quis ex cupidatat esse. Pariatur amet id mollit quis aute. Commodo Lorem esse consectetur labore ut commodo. Id pariatur qui sint incididunt voluptate quis exercitation sit aute sit. Aliquip aliqua laboris esse in nostrud qui nostrud. Elit est sunt eiusmod ex eu non aliqua pariatur.\r\n"
	        },
	        {
	          "customerid": "5152a6bd-7f86-4b83-8b74-fbb366276892",
	          "rating": 3,
	          "votes": 18,
	          "helpful": 20,
	          "reviewText": "Laboris officia nostrud fugiat nulla exercitation sit. Aliqua dolor incididunt magna Lorem cupidatat incididunt deserunt excepteur. Sit adipisicing velit sint id. Lorem ad laborum proident adipisicing deserunt officia exercitation consequat laboris laborum cillum dolor commodo. Ea consequat nostrud dolor nostrud laboris veniam do quis. Veniam nulla eiusmod ex quis aliqua eu esse.\r\n"
	        },
	        {
	          "customerid": "8b10e54c-9997-41b7-b672-9721fb417e6e",
	          "rating": 3,
	          "votes": 1,
	          "helpful": 16,
	          "reviewText": "Ex in commodo voluptate magna irure sit. Cupidatat consequat laborum proident voluptate magna eiusmod adipisicing aliquip sint elit laborum. Ut in veniam eu anim amet qui labore aute anim. Elit anim velit enim ea cillum adipisicing nostrud aliquip pariatur mollit ea cupidatat esse quis. Ullamco velit irure consequat cupidatat veniam laboris id duis veniam non tempor in. Dolor et aliqua pariatur excepteur incididunt irure fugiat ea labore est mollit nisi cupidatat.\r\n"
	        },
	        {
	          "customerid": "d5405a54-9ea4-48c6-b727-aec60771ae3b",
	          "rating": 5,
	          "votes": 4,
	          "helpful": 20,
	          "reviewText": "Et non sit duis minim commodo dolore consequat et officia cillum quis. Culpa ex ad dolor tempor est ex ut. Cillum nulla minim sit aliquip amet do incididunt est incididunt laborum irure proident. Pariatur et aliquip labore pariatur magna dolore occaecat aliquip cillum duis incididunt consequat ad laboris. In do sit ipsum consectetur reprehenderit est est tempor ut dolore mollit aute reprehenderit. Eu aliquip occaecat cillum ullamco culpa id excepteur pariatur.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 25,
	    "ASIN": "256c2bd5-f06b-4497-a49f-787df45d12e6",
	    "title": "pariatur",
	    "group": "Book",
	    "salesrank": 616,
	    "similar": [
	      "f6618c92-bec0-4774-815f-0bb6e94ebc13",
	      "77a0e268-1672-4423-b2d0-14f463c0a212",
	      "aeea1fff-1ca8-4140-8551-05be2049a65a",
	      "f0f29f60-a6ab-4b9b-9e9f-3d39d3ed32e7",
	      "44652989-3aa0-47eb-b661-54176561e6ac",
	      "f960ab08-66e9-4fd2-8d56-fc84671df1a1",
	      "3c2a5907-4558-40f8-9f52-79a6287509fc"
	    ],
	    "reviews": {
	      "avgRating": 2,
	      "customers": [
	        {
	          "customerid": "539f41bd-f6f5-4725-892f-7ec424a262f4",
	          "rating": 1,
	          "votes": 10,
	          "helpful": 18,
	          "reviewText": "Consequat commodo sint ex excepteur elit sunt nisi consectetur ad aliqua anim. Sint sunt non officia cupidatat. Nisi nostrud ut eu amet consequat duis id deserunt sint cupidatat mollit consequat labore. Incididunt adipisicing ullamco aliquip mollit sint sunt nulla adipisicing ipsum sunt ipsum ad ea.\r\n"
	        },
	        {
	          "customerid": "9ee7d121-0ea2-46d9-804f-2945ff46e036",
	          "rating": 1,
	          "votes": 11,
	          "helpful": 7,
	          "reviewText": "Excepteur ea mollit non occaecat in nisi excepteur quis minim. Lorem magna amet labore mollit labore laboris aliqua incididunt cillum in. Occaecat excepteur aliquip mollit quis proident adipisicing elit commodo aute voluptate velit id minim ea. Dolore qui Lorem veniam cupidatat laborum consectetur incididunt adipisicing. Sit magna aliquip commodo amet anim aliqua nulla. Commodo fugiat qui Lorem incididunt amet laboris ad exercitation. Ullamco officia reprehenderit mollit dolore aliquip.\r\n"
	        },
	        {
	          "customerid": "41f30f43-915c-46b2-8d24-302c2b26408a",
	          "rating": 1,
	          "votes": 19,
	          "helpful": 14,
	          "reviewText": "In duis esse laborum officia. Aliquip reprehenderit ut eu Lorem. Veniam culpa exercitation irure consectetur. Qui ea qui deserunt sit reprehenderit occaecat ullamco qui ad officia non labore. Elit in officia duis ut cillum consectetur esse ea labore.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 26,
	    "ASIN": "1550f33e-aa3f-45f2-83dc-b0c3a3e6ce56",
	    "title": "nisi",
	    "group": "Music",
	    "salesrank": 542,
	    "similar": [
	      "83781064-7b13-4029-8464-4d2cef70fb85",
	      "3b4c7537-fb91-4218-b234-fbe813a3b325",
	      "6d469bcb-0ef8-4c16-b618-a066704737b0",
	      "31e7d8b4-86d1-4eb2-8f19-5bad530bbd03",
	      "10a85864-3903-4b02-a6a1-b813e9af81ac",
	      "5ec0e315-9881-42c6-a378-dda0c92216af",
	      "f893b743-ce3f-4a73-b63d-e9f66b00b75d"
	    ],
	    "reviews": {
	      "avgRating": 1,
	      "customers": [
	        {
	          "customerid": "1341fc46-d4b5-440d-81db-ce325011bffa",
	          "rating": 5,
	          "votes": 18,
	          "helpful": 6,
	          "reviewText": "Sint exercitation nostrud ut commodo cillum dolore veniam sit ullamco minim. Culpa duis exercitation qui incididunt irure. Mollit exercitation fugiat minim ipsum incididunt eu deserunt velit nisi eu nostrud qui. Excepteur magna reprehenderit sunt anim labore nulla ut consectetur dolor eiusmod consectetur cupidatat aliquip. Voluptate ullamco pariatur excepteur quis ut consequat ipsum id sit excepteur veniam mollit qui nisi.\r\n"
	        },
	        {
	          "customerid": "11abd4f1-22a8-4807-8210-12da1542e560",
	          "rating": 3,
	          "votes": 19,
	          "helpful": 16,
	          "reviewText": "Laboris consectetur aliquip aliquip fugiat esse ipsum cillum laboris sit reprehenderit et. Nulla aliqua do deserunt eu culpa fugiat do anim dolor ea dolore. Consequat pariatur pariatur eiusmod laborum consectetur mollit exercitation. Enim laborum exercitation Lorem pariatur in eu fugiat. In labore officia ullamco dolor ipsum enim adipisicing.\r\n"
	        },
	        {
	          "customerid": "51ae7b08-2e59-4402-89db-e8004774cdf3",
	          "rating": 2,
	          "votes": 10,
	          "helpful": 8,
	          "reviewText": "Incididunt elit labore dolore consectetur occaecat cupidatat eu enim non incididunt nulla. Et voluptate minim amet duis proident non exercitation nostrud eu. Incididunt sit ea nulla tempor nisi non ad id dolor enim pariatur excepteur magna labore. Ea voluptate nostrud ex voluptate nisi ea. Occaecat aute cillum laborum id in culpa ut anim. Laborum pariatur minim quis commodo sit ut aute reprehenderit ad non.\r\n"
	        },
	        {
	          "customerid": "23edf00f-8b85-4980-a41e-06695024b292",
	          "rating": 2,
	          "votes": 9,
	          "helpful": 7,
	          "reviewText": "Officia officia ullamco ea adipisicing eiusmod sit deserunt aliquip consectetur aliquip deserunt cupidatat nisi. Consectetur voluptate ut laboris veniam occaecat ad consequat dolor aliqua do aliquip elit sint voluptate. Veniam eu mollit elit nostrud cupidatat ad aliquip Lorem mollit non aute. Veniam fugiat incididunt esse eiusmod irure mollit mollit aliquip. Voluptate sunt cupidatat minim eu irure aliquip.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 27,
	    "ASIN": "3fcb6f96-05e7-467a-ae16-9c082cff97ea",
	    "title": "sint",
	    "group": "Book",
	    "salesrank": 528,
	    "similar": [
	      "e4cba62b-2697-48a1-bc85-d91d05d8e267",
	      "ebf2de33-c120-4560-9a5e-318215e4bb28",
	      "bf1f5dea-9278-4dc9-9749-2669e54002ea",
	      "a9bc0971-0812-4f7a-acaa-9c16c58eeb87",
	      "ffe1f08c-968b-48d8-89f5-cadf1199f725",
	      "b4f51b2e-f014-4b56-91fc-25548cf7581e",
	      "2b92ffd8-1c2a-4ea8-9554-455e1fd6b0c5"
	    ],
	    "reviews": {
	      "avgRating": 2,
	      "customers": [
	        {
	          "customerid": "19d97e93-73d8-4a7d-bc71-41c522edff5f",
	          "rating": 3,
	          "votes": 19,
	          "helpful": 20,
	          "reviewText": "Laborum ea cillum ad ipsum veniam ullamco. Ea id cillum est sint dolor eu in consequat culpa elit dolor fugiat magna. Eu exercitation minim quis sunt. Culpa sunt eu labore cillum consequat aliquip labore veniam incididunt nulla qui. Nisi velit minim sint qui nostrud consequat dolor.\r\n"
	        },
	        {
	          "customerid": "917b0b55-7609-4101-a8a9-8166fe1affba",
	          "rating": 3,
	          "votes": 2,
	          "helpful": 17,
	          "reviewText": "Est eu est tempor fugiat est cillum sit veniam voluptate laboris. Officia proident pariatur elit voluptate amet laboris tempor nisi laboris eiusmod mollit. Consequat exercitation laborum dolore laborum.\r\n"
	        },
	        {
	          "customerid": "4312503b-fb55-4a2e-b3a3-4723332dd072",
	          "rating": 1,
	          "votes": 14,
	          "helpful": 12,
	          "reviewText": "Do ad sint cupidatat magna sint. Adipisicing pariatur elit tempor dolor commodo eu et est esse. Est laborum dolor elit labore duis voluptate Lorem et sunt sit et commodo cillum dolore. Sit irure eiusmod nisi nisi culpa enim et incididunt ullamco aliqua. Ipsum officia exercitation qui qui elit eiusmod duis consectetur. Voluptate qui in in nostrud enim voluptate magna.\r\n"
	        },
	        {
	          "customerid": "e8186ee9-9f6d-4702-aaf6-268a2fa07e82",
	          "rating": 4,
	          "votes": 2,
	          "helpful": 6,
	          "reviewText": "Qui elit eiusmod irure minim. Ad fugiat non laboris esse dolor occaecat cillum commodo enim pariatur deserunt sunt tempor. Do nisi adipisicing ad sunt consequat id commodo aute pariatur fugiat. Proident ut ut id voluptate laboris proident officia quis minim ut. Non nostrud cupidatat non aliqua incididunt excepteur excepteur Lorem.\r\n"
	        },
	        {
	          "customerid": "0c4a4e3f-03ac-4b66-a275-1c381d6cf363",
	          "rating": 2,
	          "votes": 14,
	          "helpful": 11,
	          "reviewText": "Sit occaecat qui ex cupidatat velit enim. Exercitation sit eu enim mollit aute fugiat amet cupidatat qui ea elit adipisicing cillum. Non adipisicing cillum dolor eiusmod.\r\n"
	        },
	        {
	          "customerid": "be090320-deeb-45c3-abc8-4339db4c1e1d",
	          "rating": 1,
	          "votes": 7,
	          "helpful": 6,
	          "reviewText": "Commodo deserunt eiusmod et anim ex ipsum velit qui tempor dolor dolore aliquip. Sint in pariatur ad veniam esse minim in incididunt. Consequat proident esse dolor est non eiusmod ipsum magna velit tempor. Proident in fugiat exercitation adipisicing incididunt. Adipisicing mollit in sunt exercitation. Sit eiusmod velit irure excepteur cillum amet amet anim qui proident exercitation do culpa in.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 28,
	    "ASIN": "3b272cb5-b179-448b-82b9-1df6d9783d1b",
	    "title": "sit",
	    "group": "Book",
	    "salesrank": 714,
	    "similar": [
	      "1f00c212-f126-49f7-a932-55b4e8ac1ca3",
	      "de287b89-a074-4fb5-81a9-1448199119c8",
	      "cd52d825-efaf-41d0-bf5a-280642c17585",
	      "b6b02624-b941-4249-a53a-a917f3d124f5",
	      "c69a82bb-b88d-4333-88e7-cfeed4336b6b",
	      "051c94f7-c9a2-4756-9962-f61a248ded84",
	      "726ea908-1446-4f37-8a81-7f0bcdf54122"
	    ],
	    "reviews": {
	      "avgRating": 4,
	      "customers": [
	        {
	          "customerid": "1253e5c2-09a7-425d-aac9-ff0ed72b39f5",
	          "rating": 5,
	          "votes": 17,
	          "helpful": 15,
	          "reviewText": "In est ipsum nostrud elit consequat aute do excepteur. Exercitation excepteur culpa aliquip elit non non. Adipisicing ipsum officia ad commodo esse esse sint minim commodo do aliqua irure culpa id. Ea duis sint aute consectetur esse est dolore do enim magna eu consectetur fugiat cupidatat. Elit deserunt anim nulla minim culpa culpa nostrud reprehenderit irure eu do commodo pariatur veniam.\r\n"
	        },
	        {
	          "customerid": "969723bd-09f0-4e4f-936e-5137108861fb",
	          "rating": 3,
	          "votes": 7,
	          "helpful": 3,
	          "reviewText": "Sit commodo est magna nisi duis exercitation. Tempor et sit veniam do exercitation aute consequat. Mollit est aliqua in dolor fugiat esse minim ex consectetur qui et. Elit ullamco aute laboris deserunt nostrud dolore.\r\n"
	        },
	        {
	          "customerid": "01d6b976-2ad3-4a14-bc45-e041f46db1f3",
	          "rating": 4,
	          "votes": 5,
	          "helpful": 2,
	          "reviewText": "Commodo ullamco laborum amet ad consectetur fugiat enim et. Nostrud adipisicing cupidatat et est est deserunt ipsum exercitation. Commodo sunt minim ullamco incididunt enim commodo quis aliquip aliqua sint id pariatur aliqua. Est consequat fugiat nostrud tempor cillum eu ullamco consectetur aute ut fugiat nisi sunt. Occaecat proident adipisicing est in do commodo. Id reprehenderit aliquip magna voluptate veniam magna enim labore veniam occaecat ex eu.\r\n"
	        },
	        {
	          "customerid": "bffc9db6-f673-4dfc-8e55-cdfe0811a271",
	          "rating": 3,
	          "votes": 15,
	          "helpful": 3,
	          "reviewText": "Qui sit fugiat ex nostrud non sunt sunt nulla. Cupidatat mollit sit labore quis voluptate exercitation culpa mollit in esse nisi nostrud. Occaecat nulla proident commodo sunt eiusmod velit dolor sint veniam ipsum enim. Ipsum adipisicing laborum nostrud ipsum culpa laboris Lorem occaecat ullamco. Lorem elit adipisicing esse consectetur nisi culpa. Duis laboris laborum pariatur sunt officia exercitation aliquip minim exercitation.\r\n"
	        },
	        {
	          "customerid": "5a2509c4-fc5b-4ade-9596-2c565f73f5de",
	          "rating": 1,
	          "votes": 18,
	          "helpful": 8,
	          "reviewText": "Eiusmod enim do dolore occaecat dolor fugiat irure qui non commodo qui labore culpa cillum. Incididunt laboris id anim duis est amet voluptate ullamco aute nisi proident. Eu deserunt sint commodo quis. Esse incididunt veniam minim nisi. Labore voluptate proident cillum aute labore. Laboris esse esse commodo aliquip enim anim qui reprehenderit do occaecat do.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 29,
	    "ASIN": "c00722b9-f7a4-4002-90c0-11dae1d09b68",
	    "title": "fugiat",
	    "group": "Music",
	    "salesrank": 644,
	    "similar": [
	      "2d242077-cce3-4139-83b7-10ffedf92fec",
	      "8b3a7563-8b95-4a4b-bf86-4de5520d381a",
	      "08932e2f-a5fe-42a8-8c4e-82269b78d2bb",
	      "bf4daf2a-b49b-4fed-918a-b95242e4cf9c",
	      "baf5f626-60c7-4ce6-9805-18f43c5b3640",
	      "cff85d6d-e0e5-4810-8972-60373dbbc555",
	      "ce900206-b226-4ff8-a64b-259b2a8d9235"
	    ],
	    "reviews": {
	      "avgRating": 4,
	      "customers": [
	        {
	          "customerid": "16781e01-2160-4820-958a-e76a06ca3b37",
	          "rating": 1,
	          "votes": 13,
	          "helpful": 1,
	          "reviewText": "Ea eiusmod elit sint Lorem consequat eiusmod duis esse ipsum et labore aliquip occaecat proident. Id amet reprehenderit labore veniam eiusmod ea amet aliqua culpa aliqua. Laboris labore sunt occaecat irure commodo voluptate qui consectetur do consectetur nulla nulla officia aute.\r\n"
	        },
	        {
	          "customerid": "a73a5495-bb89-4202-b3e2-487e233ddd3c",
	          "rating": 3,
	          "votes": 15,
	          "helpful": 17,
	          "reviewText": "Excepteur officia sunt labore cupidatat sint consequat ex laborum ullamco do deserunt. Voluptate excepteur veniam adipisicing fugiat proident excepteur. Irure officia quis enim ad aliquip voluptate. Non excepteur tempor qui cillum sint nisi dolore adipisicing esse commodo ex non.\r\n"
	        },
	        {
	          "customerid": "68fb50a4-9094-4573-9791-493292b0bd76",
	          "rating": 1,
	          "votes": 1,
	          "helpful": 19,
	          "reviewText": "Do dolore pariatur non nostrud ex qui fugiat fugiat non et mollit labore ut. Laborum cillum laborum occaecat ut pariatur amet sit sint nisi reprehenderit. Sunt ullamco ipsum laboris nostrud occaecat occaecat ullamco culpa qui occaecat consequat sit reprehenderit voluptate. Anim pariatur ex proident do ex deserunt est id. Consequat exercitation cillum voluptate deserunt commodo reprehenderit. Qui adipisicing id duis laborum eu do duis do est elit ex elit ex sint.\r\n"
	        },
	        {
	          "customerid": "1020c565-c357-4dd5-ad8d-5a6a784a9b19",
	          "rating": 3,
	          "votes": 4,
	          "helpful": 3,
	          "reviewText": "Laboris ad sint consectetur aliquip est consectetur enim. Anim incididunt dolore in proident aliqua reprehenderit incididunt proident sunt tempor pariatur ad. Duis anim nisi ullamco esse.\r\n"
	        },
	        {
	          "customerid": "bc8fa586-558f-4d9e-8f29-e2f503171f5e",
	          "rating": 5,
	          "votes": 8,
	          "helpful": 20,
	          "reviewText": "Ad eu occaecat amet incididunt irure aliqua aliquip dolor exercitation. Reprehenderit consequat adipisicing adipisicing velit quis. Deserunt dolor pariatur elit aute do deserunt fugiat laborum ad. Ex minim laboris cillum Lorem est ut magna nulla exercitation labore in est duis duis. Id dolor est consequat excepteur amet ut consequat magna. Sint officia qui proident anim anim. Eiusmod occaecat id sint aliqua.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 30,
	    "ASIN": "04b01749-2f11-474d-ab04-e415977593fa",
	    "title": "amet",
	    "group": "Video",
	    "salesrank": 598,
	    "similar": [
	      "fa637451-1e50-45f8-8129-5327cd7a8561",
	      "32b5ddd4-0d2b-4e32-b6a7-7297b2836479",
	      "9cb6d0f9-15a6-4c3e-8882-23b45e0a7182",
	      "10c40418-d196-490d-b39a-261117f5a022",
	      "de8ccf68-3dc0-4ce1-9710-3553a8cb62ba",
	      "bdebd8e0-02f6-4551-8cd2-888767a2e90f",
	      "313e35c2-8465-4f53-9cfa-d72354a18875"
	    ],
	    "reviews": {
	      "avgRating": 2,
	      "customers": [
	        {
	          "customerid": "1ed9d4f0-a1b4-4195-82be-dea9796b255d",
	          "rating": 3,
	          "votes": 16,
	          "helpful": 20,
	          "reviewText": "Anim pariatur eiusmod aute et id mollit esse et veniam. Non sit fugiat laboris deserunt cillum. Cillum et culpa et officia pariatur.\r\n"
	        },
	        {
	          "customerid": "9b675ac0-7e4a-47f4-9ec5-d8848743f18c",
	          "rating": 5,
	          "votes": 10,
	          "helpful": 5,
	          "reviewText": "Commodo veniam sunt minim do. Duis laboris tempor enim veniam aute. Fugiat anim culpa cupidatat culpa. Ea labore adipisicing pariatur culpa commodo ex elit consectetur.\r\n"
	        },
	        {
	          "customerid": "946d4688-c2cf-4352-ba00-5ebfebaaa399",
	          "rating": 1,
	          "votes": 5,
	          "helpful": 6,
	          "reviewText": "Eiusmod irure ut proident in qui voluptate consectetur. Ad cillum qui eiusmod minim consectetur incididunt officia Lorem duis commodo. Eiusmod et deserunt minim mollit laboris qui non minim adipisicing exercitation ad officia velit sunt. Consequat labore sunt id labore dolore voluptate eu enim ut voluptate nulla culpa.\r\n"
	        },
	        {
	          "customerid": "a248a1da-48dd-4e2d-b467-aa18087fc82a",
	          "rating": 4,
	          "votes": 9,
	          "helpful": 16,
	          "reviewText": "Laborum fugiat nisi cupidatat quis. Cillum ut veniam mollit officia pariatur labore pariatur aliqua. Fugiat consectetur reprehenderit elit ut commodo officia. Consequat ex sint veniam consequat ea sit laborum laborum anim nisi officia sint quis ea.\r\n"
	        },
	        {
	          "customerid": "31d65f1b-bf1d-4839-a645-49fcb212af15",
	          "rating": 3,
	          "votes": 1,
	          "helpful": 2,
	          "reviewText": "Lorem voluptate proident et pariatur enim fugiat reprehenderit culpa aliqua. Dolor dolor velit dolore culpa adipisicing consectetur in laboris cillum aliqua do do magna. Tempor minim duis minim ipsum dolor qui proident occaecat Lorem amet sit. In sint sint magna dolor consequat. Magna nulla veniam quis eiusmod sit amet consequat est dolor magna veniam.\r\n"
	        },
	        {
	          "customerid": "1100cf28-27b9-48e0-a814-e5d3545ed0f6",
	          "rating": 1,
	          "votes": 12,
	          "helpful": 7,
	          "reviewText": "Eiusmod officia commodo enim ea Lorem incididunt aliquip. Velit culpa ad irure pariatur id culpa nostrud consectetur nulla sint tempor irure elit. Veniam duis enim pariatur sit. Ut adipisicing nisi enim est enim adipisicing aute ut non officia cillum dolore cupidatat anim.\r\n"
	        },
	        {
	          "customerid": "bc254ae8-c91b-412b-a80d-bf6dfafaaa2a",
	          "rating": 2,
	          "votes": 12,
	          "helpful": 4,
	          "reviewText": "Et ut amet ipsum sunt aliquip tempor aute voluptate eiusmod labore commodo eiusmod minim pariatur. Consectetur occaecat eiusmod excepteur quis veniam adipisicing consectetur veniam. Officia consequat esse amet magna eu velit fugiat cillum qui eu laborum mollit amet. Proident duis laborum veniam elit voluptate laborum sunt quis laborum cillum ullamco incididunt nulla. Proident veniam eiusmod et mollit quis pariatur consectetur non occaecat mollit aliqua nisi occaecat non. Est tempor amet voluptate ut tempor Lorem cupidatat veniam duis adipisicing esse tempor.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 31,
	    "ASIN": "d2069e0d-84ce-438f-832f-05758e6a10ca",
	    "title": "in",
	    "group": "Music",
	    "salesrank": 739,
	    "similar": [
	      "1f398a47-11cb-4749-b8b8-0efbe093b5f5",
	      "256e80ee-3c83-438c-b11b-12ef9fb933c7",
	      "a4482284-ecdc-4bab-b61e-b144e7afae48",
	      "89e321a2-652e-4a44-9de7-e2da44916fc6",
	      "774029d7-059d-47ad-b575-f2b5b870aae1",
	      "3d363da4-56de-4db6-ba6d-eb391b5a2afd",
	      "c18f85ae-ab07-472f-aae7-b134762b0405"
	    ],
	    "reviews": {
	      "avgRating": 4,
	      "customers": [
	        {
	          "customerid": "af5effc7-3837-44a4-b14b-a5d5b444ba4a",
	          "rating": 4,
	          "votes": 8,
	          "helpful": 20,
	          "reviewText": "Elit sint nisi id consequat aliqua est mollit magna. Laboris Lorem amet aliqua tempor. Excepteur consectetur labore laborum sint esse cupidatat id tempor ad duis veniam. Do sint elit mollit id ipsum labore esse anim cillum do. Commodo enim labore laboris cillum aliquip fugiat exercitation veniam consequat ullamco ipsum irure ut.\r\n"
	        },
	        {
	          "customerid": "65a49eeb-4f74-401b-b35b-a86addd1cd0b",
	          "rating": 4,
	          "votes": 17,
	          "helpful": 8,
	          "reviewText": "Voluptate nulla excepteur est exercitation elit aute qui veniam proident aute sit. Sunt dolor ea in in ea mollit aute nisi fugiat. Deserunt culpa ullamco pariatur commodo magna esse est amet elit velit nostrud. In sint sunt laborum exercitation est reprehenderit culpa ut dolore sit eiusmod.\r\n"
	        },
	        {
	          "customerid": "201e70ab-d90b-47c4-9465-8f24b3f28b18",
	          "rating": 5,
	          "votes": 6,
	          "helpful": 6,
	          "reviewText": "Qui nulla ex in non aliqua. Quis ea officia eiusmod ex nostrud ad velit in irure ea duis ut irure. Est amet elit labore sit id nulla consectetur excepteur. Fugiat mollit aute eiusmod fugiat ullamco. Laborum est eu et aliqua cillum dolor dolore. Dolor nostrud adipisicing ea labore aliquip do aliquip cillum aliquip officia id.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 32,
	    "ASIN": "1c8cb217-008e-4763-b9bf-a200965539c8",
	    "title": "consectetur",
	    "group": "Music",
	    "salesrank": 166,
	    "similar": [
	      "f725c22f-fbd9-4cbe-988b-cb688805712c",
	      "076081b5-94eb-44bb-a2da-023f3f519798",
	      "18cc1ea8-c393-48d1-a6dc-fe8e7bd6f587",
	      "1d5e37b7-4048-496c-97e8-c49b3d7c7f09",
	      "dcb6cf35-6903-45c1-9fb8-6768d90bb270",
	      "90f70628-a25c-4bfe-91ad-5934b5f28e3a",
	      "013844f2-b55d-44ad-a8a0-c2213adf8d17"
	    ],
	    "reviews": {
	      "avgRating": 1,
	      "customers": [
	        {
	          "customerid": "727fa652-7234-49d8-9bba-b65afa86f737",
	          "rating": 4,
	          "votes": 2,
	          "helpful": 8,
	          "reviewText": "Aute eu mollit nisi anim amet veniam ex aute minim ad amet. Esse deserunt aliquip sunt est duis. Culpa ea deserunt velit sint amet consequat ipsum minim culpa excepteur. Tempor dolore ad adipisicing aliqua labore sunt proident sunt sunt in culpa nisi ea. Enim adipisicing esse eiusmod reprehenderit elit aliquip ad magna duis nisi eiusmod reprehenderit nostrud. Non exercitation aute minim voluptate velit ipsum velit. Adipisicing qui veniam eu laboris ad laboris.\r\n"
	        },
	        {
	          "customerid": "9c29f684-81ef-47ad-897a-0f90a52d311a",
	          "rating": 2,
	          "votes": 8,
	          "helpful": 18,
	          "reviewText": "Aute tempor ullamco ut aute non. Lorem laborum duis id cillum dolore adipisicing amet exercitation amet ipsum laboris. Esse exercitation pariatur est voluptate consectetur fugiat ut minim non mollit deserunt irure. Aliquip culpa ex non occaecat tempor adipisicing commodo Lorem tempor enim aute cupidatat qui. Id qui consectetur exercitation aute elit. Culpa voluptate eiusmod ullamco enim irure. Nisi cillum adipisicing anim eiusmod velit elit exercitation eu nostrud laborum labore aliqua.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 33,
	    "ASIN": "02e3a2b4-4ea1-42ef-adf7-dbc83b5a5d1f",
	    "title": "Lorem",
	    "group": "Video",
	    "salesrank": 745,
	    "similar": [
	      "38147245-b69b-472e-9b3b-45ab9b3c3976",
	      "40aa3e32-7397-4b92-81c6-66bfcf561db6",
	      "5c960749-04c7-4e71-82f0-58079867f4b8",
	      "144e2037-aa64-4e66-bf41-b9c0adb2f470",
	      "3a03e57d-9182-4de6-9c6d-e5d2280324df",
	      "27d09583-2545-4b24-90a4-5d8739b60de1",
	      "7784a322-34b7-436c-8804-e33285c28796"
	    ],
	    "reviews": {
	      "avgRating": 1,
	      "customers": [
	        {
	          "customerid": "3f6faaa0-671e-4880-b0fd-73b3e25aa584",
	          "rating": 1,
	          "votes": 15,
	          "helpful": 1,
	          "reviewText": "Dolor aliqua esse qui ullamco dolor ut consectetur nulla voluptate adipisicing ut id magna consectetur. Aute eu ad minim fugiat. Eu irure fugiat aliquip ea est. Labore quis mollit pariatur eiusmod minim occaecat ullamco commodo aliqua sint sint deserunt enim anim. Exercitation non commodo adipisicing adipisicing aliquip reprehenderit laborum aute qui reprehenderit incididunt.\r\n"
	        },
	        {
	          "customerid": "a9db8026-cac9-4fb1-8025-b0fcf46bd5d6",
	          "rating": 1,
	          "votes": 1,
	          "helpful": 14,
	          "reviewText": "Eiusmod deserunt ipsum do laboris nisi culpa proident laboris ut exercitation excepteur magna voluptate amet. Lorem culpa sint nulla eiusmod consectetur quis duis ad laboris est consequat est nisi. Reprehenderit elit consectetur excepteur consequat magna. Nisi cillum laborum veniam pariatur ut consectetur eu irure dolore et adipisicing adipisicing. Enim nulla culpa eu consequat ad aliqua voluptate amet fugiat.\r\n"
	        },
	        {
	          "customerid": "3b68bec3-d4b4-4ede-a9ba-b56fe3dec7cb",
	          "rating": 4,
	          "votes": 7,
	          "helpful": 6,
	          "reviewText": "Nisi officia anim id ex deserunt quis quis anim do ex nulla aute quis occaecat. Sit consequat duis elit est consequat dolor reprehenderit nostrud incididunt amet non. Irure velit enim proident voluptate dolor elit aliquip ad. Consequat ipsum dolore mollit laboris consequat eiusmod est officia ullamco aliqua aliqua duis officia irure.\r\n"
	        },
	        {
	          "customerid": "685e62ff-077c-404e-94ee-e4e48152c8da",
	          "rating": 3,
	          "votes": 13,
	          "helpful": 3,
	          "reviewText": "Officia laborum ex in nisi ex ut. Labore incididunt excepteur consectetur eiusmod laboris qui officia labore. Laboris dolore voluptate veniam magna dolore excepteur nostrud reprehenderit sint cillum magna magna. Consequat eiusmod sint mollit velit pariatur do excepteur est ut excepteur esse Lorem. Ad aute quis consequat anim magna eu excepteur incididunt amet ullamco incididunt cupidatat qui esse. Quis cillum duis anim et magna ipsum ex aute in proident laborum amet est. Fugiat laboris labore excepteur occaecat occaecat.\r\n"
	        },
	        {
	          "customerid": "d43607f1-9438-47a3-9597-c7a51dbb4fd9",
	          "rating": 3,
	          "votes": 8,
	          "helpful": 19,
	          "reviewText": "Aliqua Lorem consectetur mollit excepteur anim incididunt pariatur adipisicing id officia dolore culpa. Do proident sit commodo eiusmod sit incididunt. Ipsum id anim aute nisi in veniam dolore ad sunt nostrud nostrud labore.\r\n"
	        },
	        {
	          "customerid": "c7851ee2-ff3e-4003-9ed8-3a0ff53b6694",
	          "rating": 4,
	          "votes": 16,
	          "helpful": 3,
	          "reviewText": "Et excepteur sunt ex reprehenderit deserunt. Excepteur reprehenderit id consectetur cupidatat consectetur nostrud eu consequat cillum adipisicing ex et. Incididunt Lorem elit veniam incididunt esse aute veniam irure ea aliqua mollit. Nostrud fugiat elit in consequat nisi incididunt nisi. Anim culpa qui excepteur occaecat in magna nulla commodo eu est aliquip ad. Deserunt anim laboris cupidatat aliquip sit quis ullamco aliqua exercitation enim voluptate quis. Est sunt qui incididunt aute ex aliquip laborum laboris nulla enim laboris excepteur.\r\n"
	        },
	        {
	          "customerid": "978c50ee-ecd4-48fd-bca6-a3af8654c81a",
	          "rating": 1,
	          "votes": 19,
	          "helpful": 10,
	          "reviewText": "Mollit nulla dolore minim eiusmod esse sit. Cupidatat ut eu aliqua ipsum sint esse culpa commodo occaecat nulla ex ex qui. Lorem ea ad ut nostrud. Enim adipisicing in fugiat irure Lorem tempor in duis culpa et ut veniam nostrud. Nisi nisi tempor amet laboris occaecat ipsum excepteur aliquip commodo anim aliqua consectetur. Occaecat do commodo laborum ad officia mollit velit culpa excepteur sit nulla pariatur velit sunt. Non aliqua adipisicing ullamco laboris.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 34,
	    "ASIN": "4145b023-eaac-406b-b806-9556ce479db1",
	    "title": "fugiat",
	    "group": "Video",
	    "salesrank": 597,
	    "similar": [
	      "42dd9826-10f6-4c5d-8dca-f0ea89aa23bd",
	      "94497fc9-356c-48b7-bf47-9e8bffe28004",
	      "e167ff62-326a-435f-8a7a-52a7662d9524",
	      "50576ecd-e7d2-4e89-b97d-02a34be1cadb",
	      "a6bc9835-a5d2-4d3a-a4e0-cd80caf4b536",
	      "b7285d0e-e5c0-46b2-bcb5-8c9cf1222ec8",
	      "41cf70f4-ba02-4806-8def-4befe56a35ad"
	    ],
	    "reviews": {
	      "avgRating": 4,
	      "customers": [
	        {
	          "customerid": "2e6e9f55-d356-4813-a415-533c0507b8d5",
	          "rating": 4,
	          "votes": 17,
	          "helpful": 2,
	          "reviewText": "Do proident do nisi exercitation sunt Lorem pariatur consectetur labore qui labore nisi veniam. Mollit pariatur qui ex minim aliquip veniam minim quis sint adipisicing. Dolor dolor duis nostrud ipsum elit nisi Lorem consequat officia. Ut velit incididunt commodo officia. In cupidatat irure in amet ipsum excepteur exercitation adipisicing qui. Duis adipisicing anim nostrud incididunt sint Lorem amet fugiat aute anim ad. Irure ex voluptate exercitation ipsum ad ex eu proident Lorem occaecat et nostrud ex eiusmod.\r\n"
	        },
	        {
	          "customerid": "1e6b44b4-576f-4e68-88fb-b9fcb0b4fdff",
	          "rating": 1,
	          "votes": 11,
	          "helpful": 19,
	          "reviewText": "Laboris tempor sint occaecat quis proident reprehenderit adipisicing veniam occaecat enim ad aute sit nisi. Laborum deserunt exercitation eu cillum incididunt. Minim do labore veniam velit exercitation non voluptate enim. Tempor ex elit proident cupidatat labore non veniam laboris ea amet aliquip minim tempor aliqua.\r\n"
	        },
	        {
	          "customerid": "ca13879a-e71c-4e23-8ea8-60b6da87dbb0",
	          "rating": 2,
	          "votes": 14,
	          "helpful": 14,
	          "reviewText": "Ea nisi nulla fugiat eiusmod voluptate id nostrud reprehenderit ut labore labore. Ullamco do minim consequat consectetur elit amet eu incididunt veniam nisi minim adipisicing aliquip. Enim ea mollit ea laborum pariatur et cillum.\r\n"
	        },
	        {
	          "customerid": "30e63107-acc3-437f-af5c-f21769c8c2c1",
	          "rating": 1,
	          "votes": 5,
	          "helpful": 15,
	          "reviewText": "Aliqua consequat irure anim aliqua excepteur excepteur officia exercitation eiusmod do aute. Ullamco non tempor fugiat velit excepteur dolore velit. Occaecat est culpa velit aliqua tempor eiusmod incididunt eu consequat eu Lorem ipsum fugiat consequat. Ea nulla in ullamco eu nulla non. Commodo laborum nostrud occaecat laboris.\r\n"
	        },
	        {
	          "customerid": "7e17989f-d26b-4c0e-9393-6af3e2b33208",
	          "rating": 5,
	          "votes": 7,
	          "helpful": 11,
	          "reviewText": "Voluptate aliqua elit aliqua id sit et quis sunt dolore quis consequat reprehenderit. Officia quis in in incididunt enim eiusmod ullamco laborum. Id velit laborum dolor anim in veniam ullamco culpa et.\r\n"
	        },
	        {
	          "customerid": "717a33cf-8690-4baf-80ac-3fc49c44b757",
	          "rating": 1,
	          "votes": 19,
	          "helpful": 12,
	          "reviewText": "Enim adipisicing et duis sint ad eiusmod. Eu id id consequat occaecat pariatur nisi ut voluptate veniam. Anim sint non irure proident. Sint laboris veniam consequat et incididunt veniam ex sint exercitation minim pariatur reprehenderit et.\r\n"
	        },
	        {
	          "customerid": "0cbba4dc-8666-4830-af7c-ceed12bc88e8",
	          "rating": 4,
	          "votes": 19,
	          "helpful": 2,
	          "reviewText": "In enim commodo ad ex minim adipisicing quis velit. Labore ut laboris sint velit. Ea adipisicing dolore adipisicing adipisicing amet ullamco pariatur ut cillum aliqua.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 35,
	    "ASIN": "16b3de79-7699-4f53-8735-7a1ccd47edba",
	    "title": "duis",
	    "group": "Book",
	    "salesrank": 849,
	    "similar": [
	      "b72ab143-ec55-4d78-ab49-838f55419c53",
	      "ba7b138a-f4c3-48a3-8600-fbe99814c55e",
	      "d4f57d95-2cb7-407c-ad00-e49803dc9c23",
	      "40eff542-0141-4a3d-9b91-8fb52e65ff5c",
	      "388add89-73b8-456c-8df4-f82a829b3d5d",
	      "9ce84dec-f1ee-4578-a327-97e98a63435d",
	      "ee36c9a9-c77f-4fb9-a799-3294c1c0190d"
	    ],
	    "reviews": {
	      "avgRating": 2,
	      "customers": [
	        {
	          "customerid": "0256a4b5-ab75-43fd-a403-9e0e7942c85e",
	          "rating": 4,
	          "votes": 17,
	          "helpful": 18,
	          "reviewText": "Mollit adipisicing minim enim fugiat deserunt est nostrud ipsum consectetur. Id nisi aliqua aliqua aute. Laboris Lorem minim mollit adipisicing tempor reprehenderit.\r\n"
	        },
	        {
	          "customerid": "808209be-6086-4c3a-a7ad-57e449ca7669",
	          "rating": 1,
	          "votes": 5,
	          "helpful": 15,
	          "reviewText": "Enim qui anim et amet in veniam. Deserunt consectetur est ullamco ad commodo elit ea culpa nulla adipisicing. Ad ut pariatur magna pariatur labore reprehenderit cillum quis ex pariatur. Reprehenderit excepteur do nisi sunt ad aliqua exercitation.\r\n"
	        },
	        {
	          "customerid": "a0497342-a69c-4ada-9863-3166033ca7fd",
	          "rating": 5,
	          "votes": 12,
	          "helpful": 17,
	          "reviewText": "Sit pariatur adipisicing dolor officia aliqua ullamco velit minim sint minim non. Nostrud esse nisi nisi adipisicing anim cupidatat Lorem laborum aliqua officia veniam consectetur. Laboris qui tempor exercitation esse pariatur fugiat mollit ex commodo qui sit commodo minim magna. Fugiat anim cillum esse dolor. Minim consectetur dolor sunt sit laborum ullamco amet ea id adipisicing adipisicing voluptate. Anim est ad nostrud fugiat officia.\r\n"
	        },
	        {
	          "customerid": "b9734633-f56e-4f3c-9341-3501e5d8b17d",
	          "rating": 2,
	          "votes": 7,
	          "helpful": 3,
	          "reviewText": "Qui duis Lorem adipisicing elit labore est ex nisi voluptate ea mollit do commodo. Nisi elit elit reprehenderit nostrud reprehenderit nulla ex deserunt. Et sit anim fugiat tempor tempor nulla irure. Fugiat ullamco magna anim duis excepteur sit mollit. Esse quis tempor magna nostrud minim enim dolore cupidatat mollit irure duis.\r\n"
	        },
	        {
	          "customerid": "84eeee7f-600b-4ab6-a4c5-cfb0050e4665",
	          "rating": 3,
	          "votes": 14,
	          "helpful": 20,
	          "reviewText": "Et enim nulla officia in deserunt ex veniam. Eu mollit dolor excepteur officia do nulla officia ex veniam magna aliqua fugiat. In in quis nostrud ea elit non dolore. Voluptate velit mollit nostrud voluptate. Adipisicing quis mollit tempor ad ad aliqua incididunt cupidatat do qui.\r\n"
	        },
	        {
	          "customerid": "132117f0-33d3-4232-b5e2-97fcdc8dc66a",
	          "rating": 4,
	          "votes": 13,
	          "helpful": 1,
	          "reviewText": "Consequat et proident anim nisi. Esse nostrud magna duis culpa duis occaecat voluptate. Exercitation sunt commodo culpa ex veniam culpa quis nisi nulla. Minim mollit magna enim elit esse sit et reprehenderit eiusmod occaecat consectetur. Amet culpa laboris laborum et amet ipsum commodo sint minim.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 36,
	    "ASIN": "5828e3ec-8bec-4c7d-b577-381d2f8646f5",
	    "title": "officia",
	    "group": "Video",
	    "salesrank": 959,
	    "similar": [
	      "b733b124-61b8-4b7f-8f4b-db4f7a487cb5",
	      "54c76030-49cf-47da-b149-358aee338dbd",
	      "f3d37efe-aca6-40a2-a072-1a2a54a59277",
	      "9ad7b885-906f-4ac9-8859-8d7dee6e1663",
	      "7ac64036-dcfa-4808-ae73-6a06d8d56920",
	      "1bbdc3d7-1505-4ace-90a2-21d80a13a66b",
	      "8a759ed6-55f1-4322-a7e1-785b214c5755"
	    ],
	    "reviews": {
	      "avgRating": 4,
	      "customers": [
	        {
	          "customerid": "675bb7ed-d216-45e8-b4fe-69a06a7e20bc",
	          "rating": 2,
	          "votes": 3,
	          "helpful": 5,
	          "reviewText": "Labore ipsum cillum nisi cupidatat ex proident laborum nostrud sit aliquip mollit eiusmod Lorem. Minim consequat non adipisicing ipsum et dolore mollit adipisicing nostrud tempor dolor labore. Aliquip fugiat veniam dolore laborum do. Eu deserunt consectetur reprehenderit ut laboris duis laborum magna laborum voluptate magna aliqua dolore est. Laborum magna nostrud cupidatat culpa dolore qui laboris eu laborum sunt quis nulla.\r\n"
	        },
	        {
	          "customerid": "3cbb5263-6acb-4bb8-8d2c-e3df3df9c0e3",
	          "rating": 3,
	          "votes": 9,
	          "helpful": 2,
	          "reviewText": "Lorem et qui ad labore laboris magna elit. Eu officia amet velit commodo esse do magna proident excepteur eu anim ad. Velit commodo nisi ut mollit culpa id exercitation ullamco. Adipisicing excepteur do irure ex amet est. Do in ullamco cillum enim nulla mollit.\r\n"
	        },
	        {
	          "customerid": "a7a20668-afe7-4c60-af3c-3815eb574302",
	          "rating": 3,
	          "votes": 19,
	          "helpful": 1,
	          "reviewText": "Ea sint qui magna do qui officia labore dolor. Sint amet sit Lorem sunt nisi culpa officia eiusmod eu proident consequat consectetur. Nulla adipisicing commodo labore consectetur sit duis deserunt. Minim ea sint excepteur culpa non cupidatat anim quis. Velit minim est consectetur anim qui enim ut irure et ipsum laboris ut sunt occaecat. Veniam reprehenderit aliqua commodo laboris. Esse aute minim in eiusmod voluptate.\r\n"
	        },
	        {
	          "customerid": "a4820a62-63d6-4900-b861-460231008103",
	          "rating": 3,
	          "votes": 4,
	          "helpful": 10,
	          "reviewText": "Ea quis sunt mollit dolore ipsum aute id magna commodo ad cillum aliquip. Cupidatat et ipsum minim laborum. Consequat fugiat eu qui labore irure cillum minim velit incididunt. Minim dolor sit commodo enim amet cupidatat voluptate culpa enim eiusmod dolore ipsum.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 37,
	    "ASIN": "eb43754f-696e-4ffd-80ed-bef7257ffc97",
	    "title": "ullamco",
	    "group": "Book",
	    "salesrank": 633,
	    "similar": [
	      "f381976a-5f71-4006-b505-1b26633e3367",
	      "86a6c011-b87a-4b5a-be5a-d4e8738bab22",
	      "5fafd62d-8d20-436c-9964-b206491fe5ff",
	      "15afa9a0-742e-454d-93ec-d5878779a928",
	      "8f03f0e0-d95c-4bdf-9c31-ae4285cb7b7e",
	      "ebab71f9-8ded-4cb1-8158-ab89635f6b00",
	      "b4ac2aca-5223-4df5-afdc-f7fd524c3b2d"
	    ],
	    "reviews": {
	      "avgRating": 2,
	      "customers": [
	        {
	          "customerid": "9d757e47-62eb-4e37-bb40-4039a6031c15",
	          "rating": 3,
	          "votes": 1,
	          "helpful": 14,
	          "reviewText": "Lorem aliqua eu aliqua non enim veniam est consectetur adipisicing culpa amet ut. Ut ex irure Lorem dolor id voluptate exercitation. Sunt laborum consequat enim ea mollit. Reprehenderit laboris ullamco ex aute do velit ut pariatur est enim. Nostrud amet laboris eu veniam reprehenderit deserunt tempor laboris.\r\n"
	        },
	        {
	          "customerid": "ef61f7db-9b41-4e7c-9db6-d95b4e37a0a2",
	          "rating": 2,
	          "votes": 13,
	          "helpful": 20,
	          "reviewText": "Ex occaecat ad nostrud sit enim excepteur culpa mollit nisi do. Deserunt occaecat excepteur est adipisicing sunt in laboris voluptate ea dolor velit tempor amet. In commodo duis cupidatat mollit.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 38,
	    "ASIN": "cdfa2675-f47a-4b11-98f5-97a316513c2d",
	    "title": "minim",
	    "group": "Music",
	    "salesrank": 987,
	    "similar": [
	      "98a6d487-828c-4af0-ab53-ee96f54e8153",
	      "2da4bd06-ab4f-4b48-a7d0-dcab08857b36",
	      "ff677d4f-68db-4d61-affa-26be7413c209",
	      "9437d883-fa74-43cf-b243-a80cb3dbc16a",
	      "8a17b5a3-e4c0-41c6-9e2f-4141bef132fa",
	      "842a00b1-440c-416b-bb46-679e1cd16bd2",
	      "b46b7958-3abd-4877-9833-b58c07f1715f"
	    ],
	    "reviews": {
	      "avgRating": 1,
	      "customers": [
	        {
	          "customerid": "8d15efae-a77d-4ea1-8085-3c8cf98ea925",
	          "rating": 2,
	          "votes": 20,
	          "helpful": 2,
	          "reviewText": "Elit excepteur quis dolor ut consectetur laborum id dolor sint voluptate sit esse excepteur ex. Ea incididunt elit reprehenderit ipsum in laborum est. Velit cupidatat laborum commodo pariatur laborum veniam dolore.\r\n"
	        },
	        {
	          "customerid": "a8120d3f-762d-45b9-aeb7-1511a84d7021",
	          "rating": 3,
	          "votes": 13,
	          "helpful": 8,
	          "reviewText": "Est non sit dolore magna non aliqua consequat velit nostrud ex. Eu et elit occaecat incididunt officia et veniam ad Lorem reprehenderit adipisicing Lorem exercitation ea. Enim proident ex aliqua aliqua. Dolore deserunt anim aliquip tempor aute veniam aute eiusmod fugiat laboris. Sunt ut dolor anim amet in tempor anim. Do qui cupidatat dolor cillum proident consequat aliqua.\r\n"
	        },
	        {
	          "customerid": "d7b1a79f-cf3a-4953-b8a6-6c6a7ad49499",
	          "rating": 5,
	          "votes": 10,
	          "helpful": 15,
	          "reviewText": "Magna labore eiusmod fugiat aliquip enim occaecat aliqua incididunt ad ut aliqua incididunt. Qui nisi ipsum dolore labore occaecat cupidatat. Eiusmod dolore incididunt nulla aliquip pariatur enim deserunt magna sint. Sit ex dolor dolore non ad amet do minim voluptate aute.\r\n"
	        }
	      ]
	    }
	  },
	  {
	    "Id": 39,
	    "ASIN": "5a1717d2-a363-41a3-acb8-5d827b1f31bf",
	    "title": "cupidatat",
	    "group": "Book",
	    "salesrank": 306,
	    "similar": [
	      "b46d054d-2e5d-4717-b693-219168aba1b0",
	      "377f6eee-b89a-4593-a0ef-57fee240bcc7",
	      "40cdf1bc-129a-4519-9c1e-660cea274909",
	      "3ef68e97-84cc-4aa1-8d80-1217f3694ea2",
	      "7a23535a-c4c1-4904-b308-a6df174a841c",
	      "ac12cab5-1a20-419b-bf07-c36fd71a174f",
	      "dac022c1-e8cd-4282-9d27-fab45290558c"
	    ],
	    "reviews": {
	      "avgRating": 4,
	      "customers": [
	        {
	          "customerid": "7bc0ef80-1e50-4447-bf53-378a4a822c4d",
	          "rating": 3,
	          "votes": 18,
	          "helpful": 4,
	          "reviewText": "Esse tempor veniam commodo irure sit sit non sint. Et laborum est esse officia do do non ea est. Voluptate mollit cillum ea Lorem fugiat irure ut qui ipsum. Ut eu ut do magna cupidatat nostrud aliqua dolore aliqua magna commodo minim laboris excepteur.\r\n"
	        },
	        {
	          "customerid": "70fdfa1b-e925-4e34-8bbc-b09e55f651c5",
	          "rating": 3,
	          "votes": 11,
	          "helpful": 4,
	          "reviewText": "Labore Lorem ut magna do enim occaecat. Laborum laborum esse exercitation aute aliquip quis consequat commodo consequat do quis officia incididunt. Ut reprehenderit dolor sit adipisicing voluptate cillum in ipsum do do laborum in. Ad esse laboris dolore laborum. Aute ipsum tempor cupidatat aute ex irure do Lorem.\r\n"
	        }
	      ]
	    }
	  }
	];
	
	//alert("This is the Data: "+ data[39].title);
    
    //var hidescrollbar = true;
    //var numberofitems = 10;
    $("#itemDetails").hide();
    var holder = document.getElementById('listHolder');
    var view = null;
    var paginate = null;
    
    /*var items = Array(numberofitems);
    //fill it in with data
    for (var index = 0; index < items.length; ++index){
        items[index] = 'item-' + index;
    }*/

    //displays the items
    function refreshWindow() {
        //remove old view
        if (view != null){
            holder.removeChild(view);
        	//holder.removeChild(paginate);
        }
        //create new view
        //holder.className = "col-lg-4 well"
        view = holder.appendChild(document.createElement('div'));
        //view = holder.insertBefore(document.createElement('div'), holder.firstChild);
        
        var firstItem = Math.floor(holder.scrollTop);
        var lastItem = 10;
        
        //position view in users face
        view.id = 'view';
        view.className = 'list-group';
        //view.style.top = (firstItem * itemHeight) + 'px';
        
        var p, a;
        //add the items
        for (var index = firstItem; index < lastItem; ++index) {
        	
            p = document.createElement('p');
            a = document.createElement('a');
            a.innerHTML = data[index].title;
            a.className = "list-group-item list-group-item-warning items";
            //a.href = "#";
            a.id = data[index].Id;
            p.appendChild(a);
            view.appendChild(p);
        }

        console.log('viewing items ' + firstItem + ' to ' + lastItem);
    }
    refreshWindow();

    function addEvents(){
    	var clicks = document.getElementsByClassName("items");

    	for (var i = 0; i < clicks.length; i++) {
    		clicks[i].addEventListener('click', showDetails);
		}
    }
    addEvents();
};









