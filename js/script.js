$(function () {
    $('#toggle').click(function () {
        $('#toggle .bar').toggleClass('animate');
        $('#page').toggleClass('overlay');
    });

    // 메뉴 항목을 클릭하면 토글되도록 설정
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
        // 클래스가 "scroll_on"인 모든 요소를 선택합니다.
        const $counters = $(".scroll_on");

        // 노출 비율(%)과 애니메이션 반복 여부(true/false)를 설정합니다.
        const exposurePercentage = 80; // ex) 스크롤 했을 때 $counters 컨텐츠가 화면에 100% 노출되면 숫자가 올라갑니다.
        const loop = true; // 애니메이션 반복 여부를 설정합니다. (true로 설정할 경우, 요소가 화면에서 사라질 때 다시 숨겨집니다.)

        // 윈도우의 스크롤 이벤트를 모니터링합니다.
        $(window).on('scroll', function () {
            // 각 "scroll_on" 클래스를 가진 요소에 대해 반복합니다.
            $counters.each(function () {
                const $el = $(this);

                // 요소의 위치 정보를 가져옵니다.
                const rect = $el[0].getBoundingClientRect();
                const winHeight = window.innerHeight; // 현재 브라우저 창의 높이
                const contentHeight = rect.bottom - rect.top; // 요소의 높이

                // 요소가 화면에 특정 비율만큼 노출될 때 처리합니다.
                if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom >= (contentHeight * exposurePercentage / 100)) {
                    $el.addClass('active');
                }
                // 요소가 화면에서 완전히 사라졌을 때 처리합니다.
                if (loop && (rect.bottom <= -1300 || rect.top >= window.innerHeight)) {
                    // 윗부분 -800 원래 수치 0
                    $el.removeClass('active');
                }
            });
        }).scroll();
    });
});
