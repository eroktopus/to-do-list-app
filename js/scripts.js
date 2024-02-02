function newItem(){
//add item
  let li = $('<li></li>');
  let inputValue = $("#input").val();
  li.append(inputValue);
  //alert
  if (inputValue === '') {
        alert("You must write something!");
      } else {
        $('#list').append(li);
      }
//cross out
$(li).on("dblclick", function(){ 
    li.toggleClass("strike");
 });
//delete button
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  $(li).append(crossOutButton);

  crossOutButton.on("click", deleteListItem);
  function deleteListItem(){
		$(li).addClass("delete")
	}
    //sorting
   $('#list').sortable();

}
 

//   