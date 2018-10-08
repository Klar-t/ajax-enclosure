var $tabs = $('.tabs>li');
        var $panels = $('.panels');
        $tabs.on('click', function() {
            var $this = $(this);
            var index = $this.index();
            $this.addClass('active').siblings().removeClass('active');
            $this.parents('.mod-tab')
                .find('.panels')
                .animate({
                    left: (-100 * index) + '%'
                }, function() {
                    console.log(1);
                });
        });