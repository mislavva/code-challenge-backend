const logIn = (email: string, password: string): string => {
  if (
    email === 'optimus.prime@autobots.com' &&
    password === 'validPassword1234!'
  ) {
    return 'xyz0987654321';
  }

  return '';
};

export default {
  logIn,
};
