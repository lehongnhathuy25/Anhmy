export default function RangeModule() {
  const rangeBlock = document.querySelectorAll(".range-block");
  if (rangeBlock) {
    rangeBlock.forEach((range) => {
      const rangeInputs = range.querySelectorAll(".range-input input");
      const progress = range.querySelector(".range-slider .progress");
      const priceMinHtml = range.querySelector(".range-item.min .price");
      const priceMaxHtml = range.querySelector(".range-item.max .price");
      const priceMin = priceMinHtml.dataset.minPrice;
      const priceMax = priceMaxHtml.dataset.maxPrice;


      let priceString = priceMin.toString().split('');

      priceMinHtml.innerHTML = parseInt(priceMin).toLocaleString('it-IT', {style : 'currency', currency : 'VND'});


      let priceStrings = priceMax.toString().split('');

      priceMaxHtml.innerHTML = parseInt(priceMax).toLocaleString('it-IT', {style : 'currency', currency : 'VND'});


      let priceGap = 100000;
      if (rangeInputs && progress) {
        let minVal = parseInt(rangeInputs[0].value);
        let maxVal = parseInt(rangeInputs[1].value);
        progress.style.left = (minVal / rangeInputs[0].max) * 100 + "%";
        progress.style.right = 100 - (maxVal / rangeInputs[1].max) * 100 + "%";

        rangeInputs.forEach((item) => {
          item.addEventListener("input", (e) => {
            let minVal = parseInt(rangeInputs[0].value);
            let maxVal = parseInt(rangeInputs[1].value);
            if (maxVal - minVal < priceGap) {
              if (e.target.className === "range-min") {
                rangeInputs[0].value = maxVal - priceGap;
              } else {
                rangeInputs[1].value = minVal + priceGap;
              }
            } else {
              progress.style.left = (minVal / rangeInputs[0].max) * 100 + "%";
              progress.style.right =
                100 - (maxVal / rangeInputs[1].max) * 100 + "%";
            }
          });
        });
        rangeInputs[0].addEventListener("input", () => {
          let minVal = parseInt(rangeInputs[0].value);
          let priceString = minVal.toString().split('');
          priceMinHtml.innerHTML = minVal.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        });
        rangeInputs[1].addEventListener("input", () => {
          let maxVal = parseInt(rangeInputs[1].value);
          let priceStrings = maxVal.toString().split('');
          priceMaxHtml.innerHTML = maxVal.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        });
      }
    });
  }
  const btnRs = document.querySelector('.btn-rs')
  if (btnRs) {
    btnRs.addEventListener('click', () => {
      $(btnRs).closest('form').find('.recheck-item').removeClass('active')
    })
  }
}
