import { EmailValidatorClassAdapter } from "./validation/email-validator-class-adapter";
import { emailValidatorFunctionAdapter } from "./validation/email-validator-func-adapter";

const email = 'email@email.com';

const emailValidator = new EmailValidatorClassAdapter();
if (emailValidator.isEmail(email)) {
    console.log('É válido - classe');
} else {
    console.log('É inválido - classe');
}

if (emailValidatorFunctionAdapter(email)) {
    console.log('É válido - função');
} else {
    console.log('É inválido - função');
}
