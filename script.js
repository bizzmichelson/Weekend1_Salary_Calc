var employeeInfo = [];
var yearlyCosts = 0;
var monthlyTotals = 0;

//store the information
// ** WHy do the fields get cleared?

$(document).ready(onReady);
function onReady() {
    console.log('ready');

    //event listeners

    $('#submitButton').on('click', addItem);
    $('#submitButton').on('click', AppendDOM);
    $('#submitButton').on('click', addCosts);
    //a'Submit' button should collect the form information,
    // $('#submit').on('click', AppendInfo);
    // $('#submit').on('click', ClearInput);
    

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
    //var $employeeArticle = $('<article>').data('employeeInfo');

    $('#employee-display').append(
        '<p>' + $('#firstNameIn').val() + ' ' + $('#lastNameIn').val() + '</p>'
    );

    console.log('append');
}

function addCosts (employeeInfo) {
    console.log('addCosts');

    yearlyCosts += Number(employeeInfo.annualSalary);

    monthlyTotals = Math.round(yearlyCosts / 12);

    $('.total').html(monthlyTotals);
}

// A 'Submit' button should collect the form information, store the information to calculate monthly costs, append information to the DOM and clear the input fields. Using the stored information, calculate monthly costs and append this to the to DOM.