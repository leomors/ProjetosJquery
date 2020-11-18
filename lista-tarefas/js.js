$('document').ready(function(){
	// Declaracoes
	let $texto = $('.tarefa-entrada');
	let $btnAddTarefa = $('.addTarefa');
	let $listaTarefas = $('.lista-tarefas');
	$itemLista = $('.texto-tarefa');
	$btnRemoveTarefa = $('.remove-item');
	$chkList = $('.chkList');
	$btnRemoveAll = $('.remove-todos');
	$btnRemoveSelection = $('.remove-selecao');

	
	;// Main
	$texto.focus();
	$btnAddTarefa.on('click', function(e){
		e.preventDefault();
		if($texto.val()){
			$listaTarefas.append(getTemplate($texto.val()));
		}
		$texto.val('');
	});

	$listaTarefas.on('click','.remove-item', function(e){
			e.preventDefault();
			$item = $(this).closest('.item-lista');
			$selecaoInput = $(this).parent().children('label').children('[type="checkbox"]').is(':checked');
			if($selecaoInput)
				$item.fadeOut(500, function(){
					$(this).remove();
				});
		});

	$listaTarefas.on('change','[type="checkbox"]', e=>{
		$item = $(e.target).siblings('.texto-tarefa');
		temClasse($item, 'tarefa-marcada');
	});

	$btnRemoveAll.on('click', function(){
		$('.item-lista').fadeOut(500, function(){
			$(this).remove();
		});
		$texto.focus();
	});

	$btnRemoveSelection.on('click', function(){
		$selecoes = $('[type="checkbox"]:checked').closest('.item-lista');
		$selecoes.fadeOut(500, function(){
			$(this).remove();
		});
		$texto.focus();
	})

	// Functions
	function getTemplate(texto){
		return `<div class="item-lista">
         <form>
            <label class="selecao-tarefa">
               <input type="checkbox" name="selecao-tarefa" class="chkList"><span class="texto-tarefa">${texto}</span>
            </label>
            <button class="remove-item">Apagar</button>
         </form>
      </div>`;
	}

	function temClasse(item, classe){
		if(!item.hasClass(classe)){
				item.addClass(classe);
			}else{
				item.removeClass(classe);
			}
	}
});