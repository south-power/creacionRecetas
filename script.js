window.onload = function(){

  let counterStep=1;
  let counterIngredient=1;

  $('#addIngredient').click(function(ev) {
    ev.preventDefault();
    if (($(`#quantity${counterIngredient-1}`).val()!="") &&
        ($(`#ingredient${counterIngredient-1}`).val()!="")){
      $(this).before(`<div class="ingredient">
                      <input class="quantity${counterIngredient}" type="text" placeholder="Cantidad">
                      <input class="ingredient${counterIngredient}" type="text" placeholder="Ingrediente">
                    </div>`);
    }
  });

  $('#addStep').click(function(ev) {
    ev.preventDefault();
    if ($(`#step${counterStep-1}`).val() !=""){
      $(this).before(`<div class='step'>
                        <textarea id="step${counterStep}" placeholder="Paso ${++counterStep}" rows="5"></textarea>
                      </div>`);
    }
  });
}