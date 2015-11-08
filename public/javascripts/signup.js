$(document).ready(function(){
    var data = {patients:[]};

    var next = 1;
    $(".add-more").click(function(e){
        e.preventDefault();
        var addto = "#field" + next;
        var addRemove = "#field" + (next);
        next = next + 1;
        var newIn = '<input autocomplete="off" class="input" id="field' + next + '" name="field' + next + '" type="text">';
        var newInput = $(newIn);
        var removeBtn = '<button id="remove' + (next - 1) + '" class="btn btn-danger remove-me" >-</button></div><div id="field">';
        var removeButton = $(removeBtn);
        $(addto).after(newInput);
        $(addRemove).after(removeButton);
        $("#field" + next).attr('data-source',$(addto).attr('data-source'));
        $("#count").val(next);

            $('.remove-me').click(function(e){
                e.preventDefault();
                var fieldNum = this.id.charAt(this.id.length-1);
                var fieldID = "#field" + fieldNum;
                $(this).remove();
                $(fieldID).remove();
            });
    });

    function sendData(data) {
      var XHR = new XMLHttpRequest();
      var urlEncodedData = "";
      var urlEncodedDataPairs = [];
      var name;

      // We turn the data object into an array of URL encoded key value pairs.
      for(name in data) {
        urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
      }

      // We combine the pairs into a single string and replace all encoded spaces to
      // the plus character to match the behaviour of the web browser form submit.
      urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

      // We define what will happen if the data is successfully sent
      XHR.addEventListener('load', function(event) {
        // alert('Yeah! Data sent and response loaded.');
      });

      // We define what will happen in case of error
      XHR.addEventListener('error', function(event) {
        // alert('Oups! Something goes wrong.');
      });

      // We setup our request
      XHR.open('POST', '/signup');

      // We add the required HTTP header to handle a form data POST request
      XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      // XHR.setRequestHeader('Content-Length', urlEncodedData.length);

      // And finally, We send our data.
      XHR.send(urlEncodedData);
    }

    // At least, We need to access our form
    var form  = document.getElementById("myForm");

    // to take over the submit event
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        data.email = form.email.value;
        data.password = form.password.value;
        var forms = $("form#myForm input[type=text]");
        for (i=1; i<forms.length; i++){
            data.patients.push(forms[i].value);
        }
        sendData(data);
    });
});