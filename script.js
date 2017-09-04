var employeeInfo = [];

//store the information
// ** WHy do the fields get cleared?

$(document).ready(onReady);
function onReady() {
    console.log('ready');

    //event listeners

    $('#submitButton').on('click', addItem);
    $('#submitButton').on('click', AppendDOM);
    //a'Submit' button should collect the form information,
    // $('#submit').on('click', AppendInfo);
    // $('#submit').on('click', ClearInput);
    // $('#submit').on('click', AppendDOM)

}

function addItem() {
    new Item( $('#firstNameIn').val(), $('#lastNameIn').val(), $('#idNumberIn').val(), $('#jobTitleIn').val(), $('#annualSalaryIn').val());
   $('#firstNameIn').val('');
   $('#lastNameIn').val('');
   $('#idNumberIn').val('');
   $('#jobTitleIn').val('');
   $('#annualSalaryIn').val('');   
}

function Item (firstName, lastName, idNumber, jobTitle, annualSalary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = idNumber;
    this.jobTitle = jobTitle;
    this.annualSalary = annualSalary;
    employeeInfo.push(this);
}
//Create an application that records employee salaries and adds salaries up to report monthly costs. 

function AppendDOM() {
    var $employeeArticle = $('<article>').data('employeeInfo');

    $('main').append($employeeArticle);
}

function Costs (employeeInfo) {

var monthlyCosts = 0;

    for(var i = 0; i < employeeInfo.length; i++){

    monthlyCosts += Number(employeeInfo.annualSalary / 12);

var objectToReturn = {
    monthlyCosts : monthlyCosts
};

return objectToReturn;
}
}

// A 'Submit' button should collect the form information, store the information to calculate monthly costs, append information to the DOM and clear the input fields. Using the stored information, calculate monthly costs and append this to the to DOM.