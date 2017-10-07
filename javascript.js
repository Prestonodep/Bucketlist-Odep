// $(document).ready(function(){
//     var next = 1;
//     $(".add-more").click(function(e){
//         e.preventDefault();
//         var addto = "#field" + next;
//         var addRemove = "#field" + (next);
//         next = next + 1;
//         var newIn = '<input autocomplete="off" class="input form-control" id="field' + next + '" name="field' + next + '" type="text">';
//         var newInput = $(newIn);
//         var removeBtn = '<button id="remove' + (next - 1) + '" class="btn btn-danger remove-me" >-</button></div><div id="field">';
//         var removeButton = $(removeBtn);
//         $(addto).after(newInput);
//         $(addRemove).after(removeButton);
//         $("#field" + next).attr('data-source',$(addto).attr('data-source'));
//         $("#count").val(next);  
        
//             $('.remove-me').click(function(e){
//                 e.preventDefault();
//                 var fieldNum = this.id.charAt(this.id.length-1);
//                 var fieldID = "#field" + fieldNum;
//                 $(this).remove();
//                 $(fieldID).remove();
//             });
//     });
    

    
// });
  $(document).ready(function() {
 
	//here first get the contents of the div with name class copy-fields and add it to after "after-add-more" div class.
      $(".add-more").click(function(){ 
          var html = $(".copy-fields").html();
          $(".after-add-more").after(html);
      });
//here it will remove the current value of the remove button which has been pressed
      $("body").on("click",".remove",function(){ 
          $(this).parents(".control-group").remove();
      });
 
    });
