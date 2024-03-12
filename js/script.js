$(function () {
    $('#toggle').click(function () {
        $('#toggle .bar').toggleClass('animate');
        $('#page').toggleClass('overlay');
    });

    $('#overlay nav ul li a').click(function () {
        $('#toggle .bar').toggleClass('animate');
        $('#page').toggleClass('overlay');
    });

    // 이하 마우스 애니메이션
        const link = document.querySelectorAll('.btn_effect, .effect img, #toggle, #overlay>nav>ul>li>a, .Wlist_R>a');
        const cursor = document.querySelector('.cursor');
        
        const animateit = function (e) {
            const expand = document.querySelector('.cursor');
            expand.style.transform = "scale(1.5)";
            if (e.type === 'mouseleave') expand.style.transform = '';
            
        };
        
        const editCursor = e => {
              const { clientX: x, clientY: y } = e;
              cursor.style.left = x + 'px';
              cursor.style.top = y + 'px';
        };
        
        link.forEach(b => b.addEventListener('mousemove', animateit));
        link.forEach(b => b.addEventListener('mouseleave', animateit));
        window.addEventListener('mousemove', editCursor);
    // 여기까지 마우스 애니메이션

    $(document).ready(function () {
        const $counters = $(".scroll_on");

        const exposurePercentage = 30;
        const loop = true;

        $(window).on('scroll', function () {
            $counters.each(function () {
                const $el = $(this);

                const rect = $el[0].getBoundingClientRect();
                const winHeight = window.innerHeight;
                const contentHeight = rect.bottom - rect.top;

                if (rect.top <= winHeight - (contentHeight * exposurePercentage / 120) && rect.bottom >= (contentHeight * exposurePercentage / 100)) {
                    $el.addClass('active');
                }

                if (loop && (rect.bottom <= -1300 || rect.top >= window.innerHeight)) {
                    $el.removeClass('active');
                }
            });
        }).scroll();
    });
});
