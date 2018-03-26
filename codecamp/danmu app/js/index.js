$(document).ready(function () {
    var $showScreen=$('#showScreen'),
        $input=$('#showNav').find('input'),
        $shot=$('#shot'),
        $clear=$('#clear');
    $shot.click(function () {
        var val = $input.val();
        console.log(val);
        $showScreen.html('<div>'+val+'</div>')
        $.ajax({
            url:'json/nav.json',
            method:'post',
            data:'afaf1' ,
            dataType:'json',
            cache:false,
            success:function (res) {
                
                console.log(val);
            }
        })
    })

})
