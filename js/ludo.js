p_bl = `<div class="move_piece" data-color="bl" style="background-color: blue;border-radius: 50%;height: 25px;width: 25px;margin:auto;"></div>`;
p_rd = `<div class="move_piece" data-color="rd" style="background-color: red;border-radius: 50%;height: 25px;width: 25px;margin:auto;"></div>`;
p_yl = `<div class="move_piece" data-color="yl" style="background-color: yellow;border-radius: 50%;height: 25px;width: 25px;margin:auto;"></div>`;
p_gr = `<div class="move_piece" data-color="gr" style="background-color: green;border-radius: 50%;height: 25px;width: 25px;margin:auto;"></div>`;

bl_round = rd_round = gr_round = yl_round = 0;

    $(document).ready(function(){
        var bl = '<div class="piece piece_bl" data-color="bl" style="background-color: blue;border-radius: 50%;height: 32px;width: 32px;"></div>';
        var yl = '<div class="piece piece_yl" data-color="yl" style="background-color: yellow;border-radius: 50%;height: 32px;width: 32px;"></div>';
        var rd = '<div class="piece piece_rd" data-color="rd" style="background-color: red;border-radius: 50%;height: 32px;width: 32px;"></div>';
        var gr = '<div class="piece piece_gr" data-color="gr" style="background-color: greed;border-radius: 50%;height: 32px;width: 32px;"></div>';
        $('.gitti.bl').append(bl);
        $('.gitti.yl').append(yl);
        $('.gitti.rd').append(rd);
        $('.gitti.gr').append(gr);
    })

    function pieceColor(color)
    {
        piece = (color == 'bl') ? p_bl : ((color == 'yl') ? p_yl : (color == 'gr') ? p_gr : (color == 'rd') ? p_rd : '');
    }

    $(document).on('click','.piece',function(){
        var color = $(this).data('color');
        pieceColor(color);
        $(this).hide();
        $('.first_'+color).append(piece);
    })
    
    $(document).on('click','.move_piece',function(){
        var color = $(this).data('color');
        
        
        var n_plus = ($(this).parent().attr('id')).replace("n_",'');
        pieceColor(color);
        var n = 6+parseInt(n_plus);
        i = 1+parseInt(n_plus);
        $(this).hide();
        
        new_i = 0;
        function movePiece() {
            setTimeout(function() {
                    if (new_i == 0) {     
                        $(('#n_'+i)).append(piece);
                        $(('#n_'+i)).children('.move_piece').addClass('add_piece');
                        $('#n_'+(i-1)).find('.add_piece').remove();
                    }
                    if (i < n) {

                    if (i>51 && (color == 'yl' || color == 'rd' || color == 'gr')) {
                        
                        if (color == 'yl') {
                            yl_round++;
                        }
                        if (color == 'gr') {
                            gr_round++;
                        }
                        if (color == 'rd') {
                            rd_round++;
                        }
                        i = i-52;
                        n = n-52;
                    }
                    console.log(i,color,bl_round)
                    if (i>11 && color == 'rd' && rd_round > 0) {
                        new_i = i-10;
                        homePiece(color,new_i,color);
                    }
                    else if (i>23 && color == 'gr' && gr_round > 0) {
                        new_i = i-23;
                        homePiece(color,new_i,color);
                    }
                    else if (i>36 && color == 'yl' && yl_round > 0) {
                        new_i = i-36;
                        homePiece(color,new_i,color);
                    }
                    else if (i>49 && color == 'bl' && bl_round == 0) {
                        new_i = i-49;
                        homePiece(color,new_i,color);
                    }
                    
                    movePiece();

                    i++;

                }
            }, 10)
        }
        
        movePiece()
    })

    function homePiece(color,new_i,color) {
        $('#n_'+(i)).find('.add_piece').remove();
        $(('#'+color+'_in_'+new_i)).append(piece);
        $(('#'+color+'_in_'+new_i)).children('.move_piece').addClass('add_piece');
        $('#'+color+'_in_'+(new_i-1)).find('.add_piece').remove();
    }
