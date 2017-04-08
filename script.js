

function openJobOfferList() {
    document.getElementById("job-offer-list").style.height = "100%";
}

function openMajorsList(){
     document.getElementById("majors-list").style.height = "30%";
      document.getElementById("majors-list").style.width = "30%";
}

function closeJobOfferList() {
    document.getElementById("job-offer-list").style.height = "0%";
}

function closeJobMajorsList(){
    document.getElementById("majors-list").style.height = "0%";
}

function toggleNav() {
    $('.employer-navbar').toggleClass('nav-collapsed');
    $('#hamburger').css('visibility','hidden');
    $('.wrapper').css('margin-left','160px');
      $('.main-content').css('margin-left','0px');
      $('.wrapper').css('transition','all 0.5s');
//     $('.wrapper').css('transform-style','flat');
    
  
}

function closeNav() {
    $('.employer-navbar').addClass('nav-collapsed');
    $('#hamburger').css('visibility','visible');
     $('.wrapper').css('margin-left','0px');
     $('.main-content').css('margin-left','65px');
}

function updateSectionCheck(target) {
    var holder = $(target).closest('.my-section');
    var emptyElements = holder.find('input[required], select[required], textarea').filter(function (idx, val) {
            /*if (val.type == 'radio' || val.type == 'checkbox') {
             return !val.checked;
             } else {*/
            return !isValid(val.name, val.value);
            // }
        });
    var checkmarkEl = $('#' + holder[0].id + 'Btn .fields-validation-check');

    if (holder[0].id == 'schedule') {
            var main = $('[name^=av-]').filter(':checked');
            var todAs = $('[name=tod-a]').filter(':visible:checked');
            var otherTods = $('[name=tod-m], [name=tod-n], [name=tod-e]').filter(':visible:checked');
            if (main.length != 0 && (todAs.length != 0 || otherTods.length != 0)) {
                checkmarkEl.show();
            } else {
                checkmarkEl.hide();
            }
        } else {
                if (emptyElements.length == 0) {
                    checkmarkEl.show();
                } else {
                    checkmarkEl.hide();
                }
            }
}
$(document).ready(function(){
    
     $('.jobsSubItems').toggle();
    $('.workersSubItems').toggle();

    var gradEl = $('select[name=graduation]');
    if (gradEl) {
        var content = '<option>Still attending</option>';
        for (var i=1950; i <= new Date().getFullYear(); i++) {
            content += "<option>" + i + "</option>";
        }
        gradEl.html(content);
    }

    $(function() {
        $("#uploadFile").on("change", function()
        {
            var files = !!this.files ? this.files : [];
            if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support

            if (/^image/.test( files[0].type)){ // only image file
                var reader = new FileReader(); // instance of the FileReader
                reader.readAsDataURL(files[0]); // read the local file

                reader.onloadend = function(){ // set image data as background of div
                    $("#imagePreview").css("background-image", "url("+this.result+")");
                }
            }
        });
    });

    $('input[type="checkbox"]').click(function(){
        var inputValue = $(this).attr("value");
        $("." + inputValue).toggle();
    });

    $('form input, form select, form textarea').on('change', function(e){
        e = e || window.event;
        var target = e.target || e.srcElement;

        updateSectionCheck(target);

        var allChecks = $('form .fields-validation-check');
        var allUnchecks = allChecks.filter(function(idx,val) {
            return $(val).is(":hidden");
        });
        if (allUnchecks && allUnchecks.length == 0) {
            // activate create an account button
            $('.submit-signup-form').prop('disabled', '');
        }

        var bar = $('.progress-bar');
        var count = allUnchecks.length;
        bar.removeClass(bar.prop('class').replace('progress-bar', ''));
        if (count == 5) {
            bar.addClass('progress-0');
        } else if (count == 4) {
            bar.addClass('progress-20');
            $('.progress-bar').css('display', 'block');
        } else if (count == 3) {
            bar.addClass('progress-40');
        } else if (count == 2) {
            bar.addClass('progress-60');
        } else if (count == 1) {
            bar.addClass('progress-80');
        } else {
            bar.addClass('progress-100');
        }
    });

    $('.datepicker').datepicker({
        onSelect: function(value, ui) {
            var today = new Date(),
                dob = new Date(value),
                age = new Date(today - dob).getFullYear() - 1970;

            $('#age').text(age);
        },
        maxDate: '+0d',
        yearRange: '1920:2010',
        changeMonth: true,
        changeYear: true
    });
    


    // $('.experience-input, .yoe-input').selectmenu();
});


function openOfferPopup() {
//        $.post("send-job-offer.html", function(data){
//               $("#mask").html(data).fadeIn();
//               });
        $('#mask').show();
        $('#job-offer-popup').show();
    }


function saveWorker() {

    var theForm = document.theForm;
    window.worker = {};

    // Account section
    var hasErrors = false;
    if (isValid('email', theForm.email.value)) {
        worker['email'] = theForm.email.value;
    } else {
        hasErrors = true;
    }

    if (isValid('password', theForm.password.value)) {
        worker['password'] = theForm.password.value;
    } else {
        hasErrors = true;
    }

    if (hasErrors) {
        $('#account').collapse('show');
        alert('Please fill in required Account details');
        return false;
    }

    // Profile section
    if (isValid('firstName', theForm.firstName.value)) {
        worker['firstName'] = theForm.firstName.value;
    } else {
        hasErrors = true;
    }

    if (isValid('lastName', theForm.lastName.value)) {
        worker['lastName'] = theForm.lastName.value;
    } else {
        hasErrors = true;
    }

    if (isValid('address', theForm.address.value)) {
        worker['address'] = theForm.address.value;
    } else {
        hasErrors = true;
    }

    if (isValid('city', theForm.city.value)) {
        worker['city'] = theForm.city.value;
    } else {
        hasErrors = true;
    }

    if (isValid('zip', theForm.zip.value)) {
        worker['zip'] = theForm.zip.value;
    } else {
        hasErrors = true;
    }

    if (isValid('state', theForm.state.value)) {
        worker['state'] = theForm.state.value;
    } else {
        hasErrors = true;
    }

    if (isValid('phone', theForm.phone.value)) {
        worker['phone'] = theForm.phone.value;
    } else {
        hasErrors = true;
    }

    if (theForm.gender.value == 'M' || theForm.gender.value=='F') {
        worker['gender'] = theForm.gender.value;
    } else {
        hasErrors = true;
    }

    if (theForm.profilePic.files[0]) {
        worker['profilePic'] = $('.profile-pic-image')[0].src;
    } else {
        hasErrors = true;
    }

    if (hasErrors) {
        $('#profile').collapse('show');
        alert('Please fill in required Profile details');
        return false;
    }

    // Experience section
    if (isValid('category', theForm.category.value)) {
        worker['category'] = theForm.category.value;
    } else {
        hasErrors = true;
    }

    if (isValid('yoe', theForm.yoe.value)) {
        worker['yoe'] = theForm.yoe.value;
    } else {
        hasErrors = true;
    }

    worker['degree'] = theForm.degree.value;

    worker['graduation'] = theForm.graduation.value;

    if (isValid('salary', theForm.expectedSalary.value)) {
        worker['expectedSalary'] = theForm.expectedSalary.value;
    } else {
        hasErrors = true;
    }

    worker['avgSalary'] = $('#expectedSalary').html();

    if (isValid('whyHire', theForm.whyHire.value) && theForm.whyHire.value.split(' ').length >= 100) {
        worker['whyHire'] = theForm.whyHire.value;
    } else {
        hasErrors = true;
    }

    if (hasErrors) {
        $('#experience').collapse('show');
        alert('Please fill in required Experience details');
        return false;
    }

    // Schedule section
    var availableDays = $('input[name^=av-]').filter(':checked');
    if (availableDays.length > 0) {
        worker['schedule'] = {};
        availableDays.each(function(idx, val) {
            worker['schedule'][val.value] = [];
            var checks = $('.' + val.name + ' input[type=checkbox]:checked');
            for (var i=0; i<checks.length; i++) {
                worker['schedule'][val.value].push(checks[i].name);
            }
        });
    } else {
        hasErrors = true;
    }

    if (hasErrors) {
        $('#schedule').collapse('show');
        alert('Please fill in required Schedule details');
        return false;
    }

    // Payment section
    if (isValid('ccNumber', theForm.ccNumber.value)) {
        worker['ccNumber'] = theForm.ccNumber.value;
    } else {
        hasErrors = true;
    }

    if (isValid('expDate', theForm.expDate.value)) {
        worker['expDate'] = theForm.expDate.value;
    } else {
        hasErrors = true;
    }

    if (isValid('cvv', theForm.cvv.value)) {
        worker['cvv'] = theForm.cvv.value;
    } else {
        hasErrors = true;
    }

    if (hasErrors) {
        $('#payment').collapse('show');
        alert('Please fill in required Payment details');
        return false;
    }

    var workers = sessionStorage.getItem('workers');
    if (workers && workers.length != 0) {
        workers = JSON.parse(workers);
    } else {
        workers = [];
    }

    worker.id = workers.length;
    workers.push(worker);
    sessionStorage.setItem('workers', JSON.stringify(workers));
    return true;
}

function isValid(type, value) {
    if (type == 'email') {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
    } else if (type == 'password') {
        return /(?=.*?[0-9])(?=.*?[a-z]).{8,}/.test(value);
    } else if (type == 'phone') {
        return /^\d{10}$/.test(value);
    } else if (type == 'ccNumber') {
        return /(?=.*?[0-9]).{13}/.test(value);
    } else if (type == 'cvv') {
        return /^\d{3}$/.test(value);
    } else if (type == 'expectedSalary') {
        return value > 0 && value <= 100;
    } else if (type == 'firstName'
        || type == 'lastName'
        || type == 'address'
        || type == 'city'
        || type == 'zip'
        || type == 'state'
        || type == 'category'
        || type == 'yoe'
        || type == 'whyHire'
        || type == 'expDate'
        || type == 'degree'
        || type == 'profilePic') {
        return value && value.length > 0;
    }
    return true;
}

function addWorker(worker) {
    var content = '<div class="col-md-4">'
        + '<div class=" worker-search-info workers-search">'
        + '<div class="profile-picture-worker-search">'
        + '<li class="worker-search-info">'
        + '<img src=' + worker.profilePic + ' class="img-responsive" alt="Worker Profile Picture">'
//        + '<a class="message-worker" href="#" onclick="openChat">'
//        + '<i class="fa fa-envelope open-message-icon"'
//        + 'aria-hidden="true"></i>Message</a>'
        + '</li>'
        + '</div>'
        + '<li class="worker-search-info worker-name">'
        + worker.firstName + ' ' + worker.lastName
        + '</li>'
        + '<li class="worker-search-info"><i class="fa fa-star" aria-hidden="true"></i>'
        + '<i class="fa fa-star" aria-hidden="true"></i>'
        + '<i class="fa fa-star" aria-hidden="true"></i>'
        + '<i class="fa fa-star" aria-hidden="true"></i>'
        + '<i class="fa fa-star-o" aria-hidden="true"></i></li>'
        /*+ '<li class="worker-search-info availability-status">Available for requested dates</li>'*/
        + '<li class="worker-search-info">'
        + worker.category
        + '</li>'
        + '<li class="worker-search-info">'
        + Object.keys(worker.schedule).reduce(function(acc, val) {return acc + ' ' + val.substr(val.indexOf('-')+1, 3)}, '')
        + '</li>'
        + '<button type="button" class ="btn btn-default"><li class="worker-search-info"><a onclick="setSelectedWorker(' + worker.id + ')" href="worker-search-selected-profile.html">See more details</a></li></button>'
        + '<li class="worker-search-info">'
//        + '<button type="button" class="btn btn-default">Send request</button>'
        + '</li>'
        + '</div>'
        + '</div>'
        + '</div>';

    $('.workers-list > div.row').append($(content));
}

function setSelectedWorker(id) {
    sessionStorage.setItem('selectedWorkerId', id);
}

function signupPageSetup() {
    $('.expiration-date-input').datepicker({
        minDate: '+0d',
        yearRange: new Date().getFullYear() + ':2050',
        changeMonth: true,
        changeYear: true
    });

    $('.dob-input').datepicker({
        maxDate: '+0d',
        yearRange: '1920:' + new Date().getFullYear(),
        changeMonth: true,
        changeYear: true
    });

    $('input[name^=av-]').on('change', function(e) {
        e = e || window.event;
        var target = e.target || e.srcElement;

        var el = $(target);
        var val = el.val().substr(0, 3).toLowerCase();
        if (el.prop('checked')) {
            var tod = $('.av-' + val + '.time-of-day');
            var todA = tod.find('input[name=tod-a]');
            todA.prop('checked', 'checked');
            todA.closest('label').show();
            // $('.av-' + val + '.time-of-day input[type=checkbox]').prop('disabled', '');
        } else {
            var tods = $('.av-' + val + '.time-of-day input[type=checkbox]');
            tods.prop({
                // 'disabled': 'disabled',
                'checked': ''
            });
            tods.closest('label').hide();
        }
        updateSectionCheck(target);
    });

    $('.time-of-day input[name=tod-a]').on('change', function(e) {
        e = e || window.event;
        var target = e.target || e.srcElement;

        var el = $(target);
        if (el.prop('checked')) {
            el.closest('.time-of-day').find('[name=tod-m], [name=tod-n], [name=tod-e]').each(function(idx,val) {
                $(val).parent().hide();
            });
        } else {
            el.closest('.time-of-day').find('[name=tod-m], [name=tod-n], [name=tod-e]').each(function(idx,val) {
                $(val).parent().show();
            });
        }
        updateSectionCheck(target);
    });

    $('input[required], textarea[required], select[required]').filter(':not(input[type=radio])').on('blur', function(e) {
        e = e || window.event;
        var target = e.target || e.srcElement;

        if (!isValid(target.name, target.value)) {
            var content = $('#errmsgcontent');
            content.html("");
            content.html($(target).data('errmsg'));
            var errmsg = $('#errmsg');
            $(target).parent().append(errmsg);
            errmsg.show();
        }
    });

    $(document).on('click', function(e) {
        $('#errmsg').hide();
    });

    $(document).on('keydown', function(e) {
        $('#errmsg').hide();
    });
}

function employerPageSetup() {
    var worker = {
        email: "jane.doe@yopmail.com",
        password: "welcome",
        firstName: "Jane",
        lastName: "Doe",
        address: "223-B Bakers Street",
        city: "London",
        zip: "06330",
        state: "England",
        phone: "9898298982",
        dob: "01-01-1990",
        gender: "F",
        profilePic: "images/12080057_10206075733424857_1178354056710554146_o.jpg",
        category: "Waitress",
        yoe: "More than 2 years",
        degree: "Paul Bocuse",
        graduation: "Still attending",
        expectedSalary: 24,
        avgSalary: 14,
        whyHire: "Coz I'm the best of the best of the best. Period.",
        schedule: {
            Monday: ["tod-a"],
            Thursday: ["tod-n", "tod-e"]
        },
        ccNumber: "5523 0000 0000 0001",
        expDate: "01/19",
        cvv: "123",
        id: 0
     };
    var data = sessionStorage.getItem('workers');
    if (data && data.length > 0) {
        var workers = JSON.parse(data);

        $.each(workers, function (idx, val) {
            addWorker(val);
        });
    } else {
        addWorker(worker);
    }
}

function previewFile() {
    var preview = $('.profile-pic-image')[0];
    var file = document.querySelector('input[name=profilePic]').files[0];
    var reader  = new FileReader();

    reader.addEventListener("load", function () {
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}

function experienceLevelChanged(el) {
    if (el.value != '') {
        $('#rel-position').html(document.theForm.category.value);
        var degreeHolder = $('.degree-input');
        var degree = degreeHolder.find('select[name=degree]');
        var content = '';
        switch (document.theForm.category.value) {
            case 'Bartender':
                content += '<option value="">-Select-</option>';
                content += '<option>Paul Bocuse</option>';
                content += '<option>Ecole Du Bar</option>';
                content += '<option>Bartender School</option>';
                content += '<option>None</option>';
                break;
            case 'Waitress':
                content += '<option value="">-Select-</option>';
                content += '<option>Paul Bocuse</option>';
                content += '<option>Vatel</option>';
                content += '<option>Lausane Institute</option>';
                content += '<option>None</option>';
                break;
            case 'DJ':
                content += '<option value="">-Select-</option>';
                content += '<option>DJ School</option>';
                content += '<option>Ecole Des DJ</option>';
                content += '<option>DJ Network</option>';
                content += '<option>None</option>';
                break;
            case 'Security Agent':
                content += '<option value="">-Select-</option>';
                content += '<option>Security Agent School</option>';
                content += '<option>Security Network</option>';
                content += '<option>None</option>';
                break;
        }
        degree.html(content);
        degreeHolder.show();
    }
}

function degreeChanged(el) {
    if (el.value != '') {
        if (el.value != 'None') {
            $('.graduated-in-input').show();
        }
        var salaryExpected = calculateExpectedSalary();
        $('#expectedSalary').html(salaryExpected);
        $('.salary-exp-input, .avg-salary-info').show();
    }
}

function calculateExpectedSalary() {
    var category = document.theForm.category.value;
    var yoe = document.theForm.yoe.value;
    var degree = document.theForm.degree.value;
    var salaryExpected = 6;

    if (category == 'Waitress' || category == 'Bartender') {
        if (yoe == 'No experience' && degree == 'None') {
            salaryExpected = 11;
        } else if (yoe == 'Less than 2 years' && degree == 'None') {
            salaryExpected = 12;
        } else if (yoe == 'More than 2 years' && degree == 'None') {
            salaryExpected = 13;
        } else if (yoe == 'Less than 2 years'
            && (degree == 'Paul Bocuse' || degree == 'Lausane Institute')) {
            salaryExpected = 14;
        } else if (yoe == 'More than 2 years' && degree == 'Paul Bocuse') {
            salaryExpected = 14;
        }
    } else if (category == 'DJ') {
        // Marie to work on this
    } else if (category == 'Security Agent') {
        // Marie to work on this
    }

    return salaryExpected;
}

function checkSalaryLimits() {
    var value = document.theForm.expectedSalary.value;
    if (isNaN(value) || value == 0) {
        $('input[name=expectedSalary]').removeClass('green red');
        return;
    }

    if (Number(value) > Number($('#expectedSalary').html())) {
        $('input[name=expectedSalary]').removeClass('green').addClass('red');
    } else {
        $('input[name=expectedSalary]').removeClass('red').addClass('green');
    }
}

function getAge(dateString)
{
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
    {
        age--;
    }
    return age;
}




var __slice = [].slice;

(function($, window) {
    var Starrr;

    Starrr = (function() {
        Starrr.prototype.defaults = {
            rating: void 0,
            numStars: 5,
            change: function(e, value) {}
        };

        function Starrr($el, options) {
            var i, _, _ref,
                _this = this;

            this.options = $.extend({}, this.defaults, options);
            this.$el = $el;
            _ref = this.defaults;
            for (i in _ref) {
                _ = _ref[i];
                if (this.$el.data(i) != null) {
                    this.options[i] = this.$el.data(i);
                }
            }
            this.createStars();
            this.syncRating();
            this.$el.on('mouseover.starrr', 'i', function(e) {
                return _this.syncRating(_this.$el.find('i').index(e.currentTarget) + 1);
            });
            this.$el.on('mouseout.starrr', function() {
                return _this.syncRating();
            });
            this.$el.on('click.starrr', 'i', function(e) {
                return _this.setRating(_this.$el.find('i').index(e.currentTarget) + 1);
            });
            this.$el.on('starrr:change', this.options.change);
        }

        Starrr.prototype.createStars = function() {
            var _i, _ref, _results;

            _results = [];
            for (_i = 1, _ref = this.options.numStars; 1 <= _ref ? _i <= _ref : _i >= _ref; 1 <= _ref ? _i++ : _i--) {
                _results.push(this.$el.append("<i class='fa fa-star-o'></i>"));
            }
            return _results;
        };

        Starrr.prototype.setRating = function(rating) {
            if (this.options.rating === rating) {
                rating = void 0;
                  $('.review-comment').css('display', 'none');
            }
              $('.review-comment').css('display', 'block');
               
            this.options.rating = rating;
            this.syncRating();
            return this.$el.trigger('starrr:change', rating);
        };

        Starrr.prototype.syncRating = function(rating) {
            var i, _i, _j, _ref;

            rating || (rating = this.options.rating);
            if (rating) {
                for (i = _i = 0, _ref = rating - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
                    this.$el.find('i').eq(i).removeClass('fa-star-o').addClass('fa-star');
                   
                }
            }
            if (rating && rating < 5) {
                for (i = _j = rating; rating <= 4 ? _j <= 4 : _j >= 4; i = rating <= 4 ? ++_j : --_j) {
                    this.$el.find('i').eq(i).removeClass('fa-star').addClass('fa-star-o');
                }
            }
            if (!rating) {
                return this.$el.find('i').removeClass('fa-star').addClass('fa-star-o');
            }
        };

        return Starrr;

    })();
    return $.fn.extend({
        starrr: function() {
            var args, option;

            option = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
            return this.each(function() {
                var data;

                data = $(this).data('star-rating');
                if (!data) {
                    $(this).data('star-rating', (data = new Starrr($(this), option)));
                }
                if (typeof option === 'string') {
                    return data[option].apply(data, args);
                }
            });
        }
    });
})(window.jQuery, window);

function saveReview(){
     $('#review-employer').css('display', 'inline-block');
}

$(function() {
    return $(".starrr").starrr();
});

$( document ).ready(function() {
      
  $('#stars').on('starrr:change', function(e, value){

    $('#count').html(value);
  });
  
});





