/* eslint-disable no-console */

function validationField(fieldName: string, fieldValue: string): string {
  let returnValue = '';
  if (fieldName === 'email') {
    const requirements =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!requirements.test(fieldValue.toLowerCase())) {
      returnValue = 'errorEmail';
    } else {
      returnValue = 'cleanErrorEmail';
    }
  }
  if (fieldName === 'firstName') {
    const requirements = /^[A-Za-z0-9]{3,16}$/;
    if (!requirements.test(fieldValue)) {
      returnValue = 'errorFirstName';
    } else {
      returnValue = 'cleanErrorFirstName';
    }
  }
  if (fieldName === 'lastName') {
    const requirements = /^[A-Za-z0-9]{3,16}$/;
    if (!requirements.test(fieldValue)) {
      returnValue = 'errorLastName';
    } else {
      returnValue = 'cleanErrorLastName';
    }
  }
  if (fieldName === 'lastName') {
    const requirements = /^[A-Za-z0-9]{3,16}$/;
    if (!requirements.test(fieldValue)) {
      returnValue = 'errorLastName';
    } else {
      returnValue = 'cleanErrorLastName';
    }
  }
  if (fieldName === 'dateOfBirth') {
    const today = new Date();
    const diffInMilliSeconds = today.getTime() - new Date(fieldValue).getTime();
    console.log(diffInMilliSeconds);
    const diffInYears = diffInMilliSeconds / 1000 / 60 / 60 / 24 / 365.32;
    const age = Math.abs(diffInYears);
    if (age <= 13) {
      returnValue = 'errorBirthday';
    } else {
      returnValue = 'cleanErrorBirthday';
    }
  }
  if (fieldName === 'city') {
    const requirements = /^[A-Za-z0-9]{3,16}$/;
    if (!requirements.test(fieldValue)) {
      returnValue = 'errorCity';
    } else {
      returnValue = 'cleanErrorCity';
    }
  }
  if (fieldName === 'street') {
    const requirements = /^[A-Za-z0-9]{3,16}$/;
    if (!requirements.test(fieldValue)) {
      returnValue = 'errorStreet';
    } else {
      returnValue = 'cleanErrorStreet';
    }
  }
  if (fieldName === 'password') {
    const requirements = /^(?=.*\d)(?=.*[A-Z])(?!.*[^a-zA-Z0-9@#$^+=])(.{8,15})$/;
    console.log(fieldValue);
    if (!requirements.test(fieldValue)) {
      returnValue = 'errorPassword';
    } else {
      returnValue = 'cleanErrorPassword';
    }
  }
  if (fieldName === 'postalCode') {
    const requirements = /^[A-Za-z0-9]{3,16}$/;
    if (!requirements.test(fieldValue)) {
      returnValue = 'errorPostalCode';
    } else {
      returnValue = 'cleanErrorPostalCode';
    }
  }

  // if (fieldName === 'country') {
  //   if (!fieldValue) {
  //     returnValue = 'errorCountry';
  //     console.log(fieldValue);
  //   } else {
  //     returnValue = 'cleanErrorCountry';
  //     console.log(fieldValue);
  //   }
  // }
  return returnValue;
}

export default validationField;
