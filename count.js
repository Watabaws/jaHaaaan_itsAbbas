var allCircles = d3.selectAll("circle").data([5,8,4])

allCircles.attr("r",
  function(d){
    return d * 10;
  });
