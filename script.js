var  employeeInfo = [];
var yearlyCosts = 0;
var monthlyTotals = 0;

//store the information
// ** Why do the fields get cleared?

$(document).ready(onReady);
function onReady() {
    console.log('ready');

    //event listeners
    $('#submitButton').click(handleClick);
    //a'Submit' button should collect the form information
}


function handleClick() {
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
    appendDOM(this);
    addCosts(this);
    employeeInfo.push(this);
}
//Create an application that records employee salaries and adds salaries up to report monthly costs. 

function appendDOM(employeeObject) {
    
    var addEmployeeName = '<p>' + employeeObject.firstName + ' ' + employeeObject.lastName + '</p>';
    var addEmployeeId = '<p>' + employeeObject.idNumber + '</p>';
    var addEmployeejobTitle = '<p>' + employeeObject.jobTitle + '</p>';
    var addEmployeeAnnualSalary = '<p>' + employeeObject.annualSalary + '</p>';
    
    $('main').append(
        '<div>' + addEmployeeName + addEmployeeId + addEmployeejobTitle + addEmployeeAnnualSalary + '</div>'
    );
    
    console.log('append');
}

function addCosts(employeeObject) {

    console.log('addCosts');

    yearlyCosts += employeeObject.annualSalary;

    monthlyTotals = Math.round(yearlyCosts / 12);

    $('.total').html('<h2>'+ monthlyTotals + '</h2>');
}

// A 'Submit' button should collect the form information, store the information to calculate monthly costs, append information to the DOM and clear the input fields. Using the stored information, calculate monthly costs and append this to the to DOM.