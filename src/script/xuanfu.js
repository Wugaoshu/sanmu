  $(window).on('scroll', function () {
        let $top = $(window).scrollTop();
        if ($top >= 300) {
            // console.log($('.xuanfu'))
            $('.xuanfu').show()
        } else if($top <= 300) {
            $('.xuanfu').hide()
           
        }
    });
