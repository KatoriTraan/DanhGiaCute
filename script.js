document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const characterImg = document.getElementById('character-img');
    const feedbackMessage = document.getElementById('feedback-message');
    const starsContainer = document.getElementById('stars-container');

    // **KIỂM TRA: Đảm bảo tên file ảnh GIF của bạn trùng khớp**
    const characterImages = {
        0: 'cute_0_stars.gif', 
        1: 'cute_1_star.gif',
        2: 'cute_2_stars.gif',
        3: 'cute_3_stars.gif',
        4: 'cute_4_stars.gif',
        5: 'cute_5_stars.gif'
    };

    const feedbackMessages = {
        0: 'Hãy chọn số sao để mình biết cảm xúc của bạn nhé! 🥰',
        1: 'Ôi... 🥺 Bạn có muốn nói cho mình biết điều gì chưa ổn không? Mình sẽ cố gắng thật nhiều! 💪',
        2: 'À... 🤔 Cảm ơn bạn đã đánh giá. Mình sẽ cố gắng hơn nữa! 💪',
        3: 'Hì hì. 😊 Cảm ơn bạn nhiều nhé! Mình sẽ tiếp tục nỗ lực! 💖',
        4: 'Yay! Vui quá! ✨ Cảm ơn bạn rất nhiều vì đánh giá của bạn! 💖',
        5: 'Cực phẩm! I Love You! 🥰 Cảm ơn bạn cực kỳ luôn! 5 sao của bạn là động lực lớn nhất của mình đó! Chúc bạn một ngày thật vui nha! 😘'
    };

    let currentRating = 0; // Số sao đã chọn sau khi click

    // Hàm chính: Thay đổi EMOJI, đổi ảnh linh vật và tin nhắn
    function updateStarDisplay(ratingValue) {
        stars.forEach(star => {
            const starValue = parseInt(star.dataset.value);
            
            // THUẬT TOÁN ĐỔI MÀU MỚI: Thay thế Emoji
            if (starValue <= ratingValue) {
                star.textContent = '★'; // Ngôi sao ĐẶC (màu vàng)
                star.classList.add('selected'); // Giữ lại class cho hiệu ứng CSS khác
            } else {
                star.textContent = '☆'; // Ngôi sao RỖNG (màu xám)
                star.classList.remove('selected');
            }
        });
        
        // Cập nhật hình ảnh linh vật và thông báo
        characterImg.src = characterImages[ratingValue];
        feedbackMessage.textContent = feedbackMessages[ratingValue];
    }

    // Xử lý sự kiện khi di chuột/chạm (xem trước)
    starsContainer.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('star')) {
            const hoverValue = parseInt(e.target.dataset.value);
            updateStarDisplay(hoverValue); 
        }
    });

    // Xử lý sự kiện khi rời chuột/chạm (quay về trạng thái đã chọn)
    starsContainer.addEventListener('mouseout', () => {
        updateStarDisplay(currentRating); 
    });

    // Xử lý sự kiện khi click/chạm (CHỌN)
    starsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('star')) {
            const clickedValue = parseInt(e.target.dataset.value);
            currentRating = clickedValue; // Cập nhật số sao đã chọn
            updateStarDisplay(currentRating); 
        }
    });

    // Khởi tạo trạng thái ban đầu (0 sao)
    updateStarDisplay(0); 
});