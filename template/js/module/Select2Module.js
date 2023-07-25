export default function Select2Module() {
    $(document).ready(function () {
        $('.select-custom-main').select2();
    });

    $(document).ready(function () {
        $('.select-has-icon').select2();
    });

    $('#selectIcon').select2({
        templateResult: function (data) {
            var $result = $('<div></div>');

            $result.text(data.text);

            if (data.element && data.element.dataset.image) {
                $result.prepend('<img src="' + data.element.dataset.image + '" class="select2-result__image">');
            }

            return $result;
        },
        templateSelection: function (data) {
            var $result = $('<div></div>');

            $result.text(data.text);

            if (data.element && data.element.dataset.image) {
                $result.prepend('<img src="' + data.element.dataset.image + '" class="select2-result__image">');
            }

            return $result;
        }
    });


    // ====
    
}