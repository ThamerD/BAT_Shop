/* Thamer Start */
checkSelection();
function checkSelection() {
  var sel = document.getElementById("category").selectedIndex;
  // This is for testing and will be deleted later
  // document.getElementById("test").innerHTML = "You've selected " + sel;
  var wrap=document.getElementById("wrapper");
  var wrapR=document.getElementById("wrapperR");
  var carInfo ='<label for="brand">Brand:</label><input name="brand" id="brand" type="text" class="field">\
  <label for="model">Model Year:</label><input name="model" id="model" type="number" class="field">';
  var carInfoR ='<label for="odo">Odo:</label>\
  <div class="km">\
  <input name="odo" type="number" id="odo" class="field"/>\
  </div>\
  <label for="condition">Condition:</label><select class= "wideSelect">\
  <option value="" selected disabled hidden>Choose here</option><option value="used">Used</option><option value="new">New</option></select>';
  var cloInfo ='<label for="size" >Size:</label><select class= "wideSelect">\
  <option value="" selected disabled hidden>Choose here</option><option value="small">Small</option><option value="medium">Medium</option><option value="large">Large</option></select>';
  var cloInfoR ='<label for="brand">Brand:</label><input name="brand" id="brand" type="text" class="field">';
  var bokInfo ='<label for="author">Author:</label><input name="author" id="author" type="text" class="field">\
  <label for="pages">Number of Pages:</label><input name="pages" id="pages" type="number" class="field">';
  var bokInfoR='<label for="isbn">ISBN:</label><input name="isbn" id="isbn" type="text" class="field">\
  <label for="condition">Condition:</label><select class= "wideSelect">\
  <option value="" selected disabled hidden>Choose here</option><option value="vg">Very Good</option><option value="g">Good</option><option value="f">Fair</option><option value="p">Poor</option></select>';
  var movInfo='<label for="genre">Genre:</label><select class= "wideSelect">\
  <option value="" selected disabled hidden>Choose here</option><option value="action">Action</option><option value="comedy">Comedy</option><option value="drama">Drama</option><option value="horror">Horror</option>\
  <option value="romance">Romance</option></select>';
  var movInfoR='<label for="year">Release Year:</label><input name="year" id="year" type="number" class="field">';
  var gamInfo='<label for="genre">Genre:</label><select class= "wideSelect">\
  <option value="" selected disabled hidden>Choose here</option><option value="fighting">Fighting</option><option value="role-playing">Role-playing</option><option value="shooter">Shooter</option>\
  <option value="sport">Sport</option><option value="strategy">Strategy</option></select>';
  var gamInfoR='<label for="platform">Platform:</label><select class= "wideSelect">\
  <option value="" selected disabled hidden>Choose here</option><option value="switch">Nintendo Switch</option><option value="pc">PC</option><option value="playstation">Playstation</option>\
  <option value="xbox">Xbox</option></select>'
  switch(sel){
      case 0:
          wrap.innerHTML=bokInfo;
          wrapR.innerHTML=bokInfoR;
          break;
      case 1:
          wrap.innerHTML=carInfo; 
          wrapR.innerHTML=carInfoR;
          break;
      case 2:
          wrapR.innerHTML=cloInfo;
          wrap.innerHTML=cloInfoR;
          break;
      case 3:
        wrap.innerHTML="";
        wrapR.innerHTML="";
      break;
      case 4:
        wrap.innerHTML=gamInfo;
        wrapR.innerHTML=gamInfoR;
      break;
      case 5:
        wrap.innerHTML=movInfo;
        wrapR.innerHTML=movInfoR;
      break;
      case 6:
      wrap.innerHTML="";
      wrapR.innerHTML="";
    break;
  }
}

function priceEmpty(){
  var p = document.getElementById("currency-field");
  if (p.value==0 ||p.value=="")
  p.classList.add("redBorder");
}
function nameEmpty(){
  var p = document.getElementById("name");
  if (p.value=="")
  p.classList.add("redBorder");
}

$("input[data-type='currency']").on({
    keyup: function() {
      formatCurrency($(this));
    },
    blur: function() { 
      formatCurrency($(this), "blur");
    }
});


function formatNumber(n) {
  // format number 1000000 to 1,234,567
  return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function formatCurrency(input, blur) {
  // appends $ to value, validates decimal side
  // and puts cursor back in right position.
  
  // get input value
  var input_val = input.val();
  
  // don't validate empty input
  if (input_val === "") { return; }
  
  // original length
  var original_len = input_val.length;

  // initial caret position 
  var caret_pos = input.prop("selectionStart");
    
  // check for decimal
  if (input_val.indexOf(".") >= 0) {

    // get position of first decimal
    // this prevents multiple decimals from
    // being entered
    var decimal_pos = input_val.indexOf(".");

    // split number by decimal point
    var left_side = input_val.substring(0, decimal_pos);
    var right_side = input_val.substring(decimal_pos);

    // add commas to left side of number
    left_side = formatNumber(left_side);

    // validate right side
    right_side = formatNumber(right_side);
    
    // On blur make sure 2 numbers after decimal
    if (blur === "blur") {
      right_side += "00";
    }
    
    // Limit decimal to only 2 digits
    right_side = right_side.substring(0, 2);

    // join number by .
    input_val = "$" + left_side + "." + right_side;

  } else {
    // no decimal entered
    // add commas to number
    // remove all non-digits
    input_val = formatNumber(input_val);
    input_val = "$" + input_val;
    
    // final formatting
    if (blur === "blur") {
      // input_val += ".00";
    }
  }
  
  // send updated string to input
  input.val(input_val);

  // put caret back in the right position
  var updated_len = input_val.length;
  caret_pos = updated_len - original_len + caret_pos;
  input[0].setSelectionRange(caret_pos, caret_pos);
}

/* Thamer End */
