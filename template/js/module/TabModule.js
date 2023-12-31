export default function TabModule() {
    let tab = document.querySelectorAll('.tabJS');
    if (tab) {
        tab.forEach((t) => {
            let tBtn = t.querySelectorAll('.tabBtn');
            let tPanel = t.querySelectorAll('.tabPanel');
            let tLink = t.querySelectorAll('.qr-it');

            // for tab
            if (tBtn.length !== 0 && tPanel.length === tBtn.length) {
                tBtn[0].classList.add('active');
                tPanel[0].classList.add('open');
                if (tLink[0]) {
                    tLink[0].classList.add('open');
                }

                for (let i = 0; i < tBtn.length; i++) {
                    tBtn[i].addEventListener('click', showPanel);

                    function showPanel(e) {
                        // e.preventDefault();
                        for (let a = 0; a < tBtn.length; a++) {
                            tBtn[a].classList.remove('active');
                            tPanel[a].classList.remove('open');
                            if (tLink[a]) {
                                tLink[a].classList.remove('open');
                            }
                        }
                        tBtn[i].classList.add('active');
                        tPanel[i].classList.add('open');
                        if (tLink[i]) {
                            tLink[i].classList.add('open');
                        }
                    }
                }
            }
        });
    }
    // tab in tab 
    let tabPr = document.querySelectorAll(".tabParent");

    if (tabPr) {
        tabPr.forEach((t) => {
            let tBtn = t.querySelectorAll(".tabParentBtn");
            let tPanel = t.querySelectorAll(".tabParentPanel");
            // for tab
            if (tBtn.length !== 0 && tPanel.length === tBtn.length) {
                tBtn[0].classList.add("active");
                tPanel[0].classList.add("open");
                for (let i = 0; i < tBtn.length; i++) {
                    tBtn[i].addEventListener("click", showPanel);
                    function showPanel(e) {
                        e.preventDefault();
                        for (let a = 0; a < tBtn.length; a++) {
                            tBtn[a].classList.remove("active");
                            tPanel[a].classList.remove("open");
                        }
                        tBtn[i].classList.add("active");
                        tPanel[i].classList.add("open");
                        flag = i;
                        tab(flag)
                    }
                }
            }
            const tabChild = t.querySelectorAll('.tabChild');

            tabChild.forEach(t => {
                let tBtnchild = t.querySelectorAll(".tabChildBtn");
                let tPanelchild = t.querySelectorAll(".tabChildPanel");
                if (tBtnchild.length !== 0 && tPanelchild.length === tBtnchild.length) {
                    tBtnchild[0].classList.add("active");
                    tPanelchild[0].classList.add("open");

                    for (let i = 0; i < tBtnchild.length; i++) {
                        tBtnchild[i].addEventListener("click", showPanel);

                        function showPanel(e) {
                            e.preventDefault();
                            for (let a = 0; a < tBtnchild.length; a++) {
                                tBtnchild[a].classList.remove("active");
                                tPanelchild[a].classList.remove("open");
                            }
                            tBtnchild[i].classList.add("active");
                            tPanelchild[i].classList.add("open");
                        }
                    }
                }
            })
        });
    }
}