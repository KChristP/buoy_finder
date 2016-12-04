let string = "November 22, 2016 4:50 pm EST        Location: 40.251N 73.164W or 17 nautical miles NNW of search location of 40N 73W...."

function locationFinder(string){
	let nLoc = string.search(/\d/)
	console.log(nLoc)
}

locationFinder(string)