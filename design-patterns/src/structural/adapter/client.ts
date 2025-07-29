import isEmail from 'validator/lib/isEmail';

const email = 'email@email.com';

if (isEmail(email)) {
    console.log('É válido');
} else {
    console.log('É inválido');
}