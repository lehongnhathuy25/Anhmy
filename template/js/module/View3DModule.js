export default function View3DModule() {
    if($('.prod-detail-3d').length > 0) {
        console.log(true)
        $(function () {
            let pic_X = $('.prod-detail-3d .list').offset().left;
            let pic_Y = $('.prod-detail-3d .list').offset().top;
            let pic_W = $('.prod-detail-3d .list').width() / 2;
            let pic_H = $('.prod-detail-3d .list').height() / 2;
            let center_X = pic_X + pic_W;
            let center_Y = pic_Y + pic_H;
            let movestop = pic_W / 10;
    
            const wrapper = document.querySelector('.prod-detail-3d .list')
            let isDown = false;
            if (wrapper) {
                wrapper.addEventListener("mousedown", (e) => {
                    isDown = true;
                });
                wrapper.addEventListener("mouseleave", () => {
                    isDown = false;
                });
                wrapper.addEventListener("mousemove", (e) => {
                    if (!isDown) return;
                    e.preventDefault();
                    console.log(e);
    
                    var mouse_X = e.pageX;
                    var mouse_Y = e.pageY;
                    if (mouse_X - center_X <= 0) {
                        moveImg(mouse_X, mouse_Y, 'left')
                    } else {
                        moveImg(mouse_X, mouse_Y)
                    }
                });
                wrapper.addEventListener("mouseup", (e) => {
                    isDown = false;
                });
            }
            if (wrapper) {
                wrapper.addEventListener("touchmove", (e) => {
                    console.log(e);
                    // if (!isDown) return;
                    e.preventDefault();
    
                    var mouse_X = e.touches[0].pageX;
                    var mouse_Y = e.touches[0].pageY;
                    if (mouse_X - center_X <= 0) {
                        moveImg(mouse_X, mouse_Y, 'left')
                    } else {
                        moveImg(mouse_X, mouse_Y)
                    }
                });
            }
            const lengthS = document.querySelectorAll('.prod-detail-3d .list li').length
            function moveImg(m_X, m_Y, dir) {
                var index = Math.ceil(Math.abs(m_X - center_X) / movestop);
                if (dir) {
                    $('.prod-detail-3d .list li').eq(index).show().siblings().hide();
                } else {
                    $('.prod-detail-3d .list li').eq(lengthS - index).show().siblings().hide();
                }
            }
    
    
            const zoomCursor = document.querySelector('.circle-zoom');
            const zone3d = document.querySelector('.prod-detail-3d .inner')
            // zone3d.addEventListener("mousemove", function (event) {
            //     // Lấy vị trí chuột
            //     var mouseX = event.clientX;
            //     var mouseY = event.clientY;
    
            //     // Cập nhật vị trí của mũi tên
            //     zoomCursor.style.left = mouseX + "px";
            //     zoomCursor.style.top = mouseY + "px";
            // });
            // zone3d.addEventListener("mouseleave", function (event) {
            //     zoomCursor.style.opacity = '0'
            // });
            // zone3d.addEventListener("mouseenter", function (event) {
            //     zoomCursor.style.opacity = '1'
            // });
            if(zoomCursor) {
                let toggle = 'plus';
                zoomCursor.addEventListener("mousedown", function (event) {
                    if (toggle == 'plus') {
                        toggle = 'min'
                        zoomCursor.querySelector('i').classList.remove("fa-magnifying-glass-plus")
                        zoomCursor.querySelector('i').classList.add("fa-magnifying-glass-minus")
                        zone3d.querySelector('.list').classList.add('zooms')
                    } else {
                        toggle = 'plus'
                        zoomCursor.querySelector('i').classList.remove("fa-magnifying-glass-minus")
                        zoomCursor.querySelector('i').classList.add("fa-magnifying-glass-plus")
                        zone3d.querySelector('.list').classList.remove('zooms')
                    }
                });
            }
        })
    }
}