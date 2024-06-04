/* eslint-disable no-console */

const checkingCountry = {
  billing: '',
  shipping: '',
  address: ''
};

function validationField(fieldName: string, fieldValue: string): string {
  let returnValue: string = '';
  if (fieldName === 'email') {
    const requirements =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!requirements.test(fieldValue.toLowerCase())) {
      returnValue = 'should be a valid email address';
    } else {
      returnValue = 'empty';
    }
  }
  if (fieldName === 'firstName') {
    const requirements = /^[A-Za-z]{3,16}$/;
    if (!requirements.test(fieldValue)) {
      returnValue =
        'first name should be 3-16 characters and should not include any special character';
    } else {
      returnValue = 'empty';
    }
  }
  if (fieldName === 'lastName') {
    const requirements = /^[A-Za-z]{3,16}$/;
    if (!requirements.test(fieldValue)) {
      returnValue =
        'last name should be 3-16 characters and should not include any special character';
    } else {
      returnValue = 'empty';
    }
  }
  if (fieldName === 'dateOfBirth') {
    const today = new Date();
    const diffInMilliSeconds = today.getTime() - new Date(fieldValue).getTime();
    const diffInYears = diffInMilliSeconds / 1000 / 60 / 60 / 24 / 365.32;
    const age = Math.abs(diffInYears);
    if (age <= 13) {
      returnValue = 'you must be > 13 y.o';
    } else {
      returnValue = 'empty';
    }
  }
  if (fieldName === 'cityShipping' || fieldName === 'cityBilling' || fieldName === 'city') {
    const requirements = /^[A-Za-z0-9- ]{3,16}$/;
    if (!requirements.test(fieldValue)) {
      returnValue = 'should be 3-16 characters and should not include any special character';
    } else {
      returnValue = 'empty';
    }
  }
  if (
    fieldName === 'streetShipping' ||
    fieldName === 'streetBilling' ||
    fieldName === 'streetName'
  ) {
    const requirements = /^[A-Za-z0-9- ]{3,16}$/;
    if (!requirements.test(fieldValue)) {
      returnValue = 'should be 3-16 characters and should not include any special character';
    } else {
      returnValue = 'empty';
    }
  }

  if (fieldName === 'password' || fieldName === 'newPassword') {
    const requirements = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*])(?!.*[^a-zA-Z0-9!@#$%^&*])(.{8,15})$/;
    if (!requirements.test(fieldValue)) {
      returnValue =
        'minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter, and 1 number. (allowed char: latin char and !@#$%^&*)';
    } else {
      returnValue = 'empty';
    }
  }
  if (fieldName === 'postalCodeShipping') {
    let requirements: RegExp;
    switch (checkingCountry.shipping) {
      case 'United States':
        requirements = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
        break;
      case 'Canada':
        requirements = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
        break;
      case 'Belarus':
      case 'Russia':
        requirements = /^[0-9]{6}$/;
        break;
      case 'Ukraine':
      case 'Germany':
        requirements = /^[0-9]{5}$/;
        break;
      case 'Austria':
        requirements = /^[0-9]{4}$/;
        break;
      default:
        requirements = /^[A-Za-z0-9]{15,16}$/;
        break;
    }
    if (!requirements.test(fieldValue)) {
      returnValue = 'postal code not valid for this country';
    } else {
      returnValue = 'empty';
    }
  }
  if (fieldName === 'postalCodeBilling') {
    let requirements: RegExp;
    switch (checkingCountry.billing) {
      case 'United States':
        requirements = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
        break;
      case 'Canada':
        requirements = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
        break;
      case 'Belarus':
      case 'Russia':
        requirements = /^[0-9]{6}$/;
        break;
      case 'Ukraine':
      case 'Germany':
        requirements = /^[0-9]{5}$/;
        break;
      case 'Austria':
        requirements = /^[0-9]{4}$/;
        break;
      default:
        requirements = /^[A-Za-z0-9]{15,16}$/;
        break;
    }
    if (!requirements.test(fieldValue)) {
      returnValue = 'postal code not valid for this country';
    } else {
      returnValue = 'empty';
    }
  }
  if (fieldName === 'postalCode') {
    let requirements: RegExp;
    console.log(`logging address: ${checkingCountry.address}`);
    switch (checkingCountry.address) {
      case 'United States':
        requirements = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
        break;
      case 'Canada':
        requirements = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
        break;
      case 'Belarus':
      case 'Russia':
        requirements = /^[0-9]{6}$/;
        break;
      case 'Ukraine':
      case 'Germany':
        requirements = /^[0-9]{5}$/;
        break;
      case 'Austria':
        requirements = /^[0-9]{4}$/;
        break;
      default:
        requirements = /^[A-Za-z0-9]{15,16}$/;
        break;
    }
    if (!requirements.test(fieldValue)) {
      returnValue = 'postal code not valid for this country';
    } else {
      returnValue = 'empty';
    }
  }
  return returnValue;
}

export { validationField, checkingCountry };
