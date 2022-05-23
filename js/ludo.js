    $(document).ready(function(){
        var bl = '<div class=" piece piece_bl" style="background-color: blue;border-radius: 50%;height: 32px;width: 32px;"></div>';
        var yl = '<div class="piece piece_yl" style="background-color: yellow;border-radius: 50%;height: 32px;width: 32px;"></div>';
        var rd = '<div class="piece piece_rd" style="background-color: red;border-radius: 50%;height: 32px;width: 32px;"></div>';
        var gr = '<div class="piece piece_gr" style="background-color: greed;border-radius: 50%;height: 32px;width: 32px;"></div>';
        $('.gitti.bl').append(bl);
        $('.gitti.yl').append(yl);
        $('.gitti.rd').append(rd);
        $('.gitti.gr').append(gr);
    })

    $(document).on('click','.piece_bl',function(){
        var bl = '<div class="move_piece_bl" style="background-color: blue;border-radius: 50%;height: 25px;width: 25px;margin:auto;"></div>';

        $(this).hide();
        $('.main_bl').append(bl);
    })
    
    $(document).on('click','.move_piece_bl',function(){
        
        var n_plus = ($(this).parent().attr('id')).replace("n_",'');

        var bl = '<div class="move_piece_bl" style="background-color: blue;border-radius: 50%;height: 25px;width: 25px;margin-top:auto;margin-bottom:auto;"></div>';

        $(this).hide();
        console.log($(this));
        var n = 4+parseInt(n_plus),i = 1+parseInt(n_plus);
        console.log(n)

        function movePiece() {
            setTimeout(function() {
                $(('#n_'+i)).append(bl);
                $('#n_'+(i-1)).find('.move_piece_bl').remove();
                if (i < n) {
                    i++;
                    movePiece();
                }
            }, 500)
        }
        movePiece()
    })
