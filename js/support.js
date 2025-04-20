// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
    // 스크롤 애니메이션
    const cards = document.querySelectorAll('.card, .support-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });

    // 링크 클릭 이벤트 처리
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // 외부 링크인 경우 새 탭에서 열기
            if (this.href.startsWith('http')) {
                e.preventDefault();
                window.open(this.href, '_blank');
            }
        });
    });

    // 전화 링크 클릭 시 확인
    const phoneLink = document.querySelector('a[href^="tel:"]');
    if (phoneLink) {
        phoneLink.addEventListener('click', function(e) {
            if (!confirm('전화 상담을 시작하시겠습니까?')) {
                e.preventDefault();
            }
        });
    }
}); 