var $count = document.getElementById('count'),
    $textarea = document.getElementById('textarea'),
    $maxLength = $textarea.getAttribute('maxlength');

    $textarea.oninput = function () {

        $count.innerHTML = $maxLength - this.value.length;

        if ($count.innerHTML == 0) {
            
            $count.classList.add('toRed');

        } else {

            $count.classList.remove('toRed');

        }
    }
