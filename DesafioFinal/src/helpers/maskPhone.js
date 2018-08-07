import VMasker from 'vanilla-masker';

export const maskPhone = value => VMasker.toPattern(value, '(99)99999-9999');
