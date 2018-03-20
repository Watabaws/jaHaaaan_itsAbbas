// Adam Abbas, Ibnul Jahan
// SoftDev2 pd7
// K12 -- Medallions ...of Data!
// 2018-03-20


//Initial Setup is for Korea
var allCircles = d3.selectAll("circle").data([5,8,4]);  //,11,8,10])
//this sets all the radii to the data points multiplied by 10
allCircles.attr("r",
  function(d){
    return d * 10;
  });


var country = document.getElementById("country");
var change = document.getElementById("change");

//Function to switch between countries
var changeCountry = function(){
    if (country.innerHTML == "Korea"){
	//values for Canada
	var allCircles = d3.selectAll("circle").data([11,8,10]);
	allCircles.attr("r",function(d){
	    return d * 10;
	});
	country.innerHTML = "Canada";
	change.innerHTML = "Switch to Korea";
    } else if (country.innerHTML == "Canada"){
	//values for Korea
	var allCircles = d3.selectAll("circle").data([5,8,4]);
	allCircles.attr("r",function(d){
	    return d * 10;
	});
	country.innerHTML = "Korea";
	change.innerHTML = "Switch to Canada";
    } else { //hopefully, this never runs
	country.innerHTML = "Click this for God knows what";
    }
}

//Clicking the button calls the changeCountry function
change.addEventListener("click",changeCountry);
