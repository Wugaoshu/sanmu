
$(function() {
    $('.middle-2').on('click','.sub',function(){
        $('#mid-1').show()
        $('#mid-2').hide()
       
    })
    $('.middle-2').on('click','.sup',function(){
        $('#mid-2').show()
        $('#mid-1').hide()
       
    })

})
