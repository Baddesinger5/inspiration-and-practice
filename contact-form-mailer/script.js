"use strict"

document.addEventListener('DOMContentLoaded', function() {
    const from = document.getElementById('form');
    from.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);
        formData.append('image', formImage.files[0]);

        if (error === 0) {
            form.classList.add('_sending'); //add class for set overlay while form sending

            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                formPreview.innerHTML=''; // if form send - reset form
                form.reset();
                form.classList.remove('_sending'); //remove overlay if form send
            } else {
                alert('error') // if form not send - show error
                form.classList.remove('_sending');
            }
        } else {
            alert('zapolni')
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req'); //add class for required inputs

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if(input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if(input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }

    //add error class for incorrect input value
    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    //remove error class if input value is correct
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    //check email input
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
    }

    //photo preview in form
    const formImage = document.getElementById('formImage');
    const formPreview = document.getElementById('formPreview');

    formImage.addEventListener('change', function() {
        uploadFile(formImage.files[0]);
    });

    function uploadFile(file) {
        //check type file
        if(!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
            alert('only images');
            formImage.value = '';
            return;
        }

        //check file size (not more than 2Mb)
        if (file.size > 2 * 1024 * 1024) {
            alert('not more than 2Mb image!');
            return;
        }

        //show previes
        var reader = new FileReader();
        reader.onload = function(e) {
            formPreview.innerHTML = `<img src="${e.target.result}" alt="Photo">`;
        };
        //if error
        reader.onerror = function(e) {
            alert('error')
        }

        reader.readAsDataURL(file);
    }
})