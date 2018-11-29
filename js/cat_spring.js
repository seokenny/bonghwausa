
$('.clothe_tile_expand').hide();
$(document).ready(function(){
	$('.clothe_tile1').on('click',function(){
		$('.clothe_tile_expand').stop().slideDown();
	});
});