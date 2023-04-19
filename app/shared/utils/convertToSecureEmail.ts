export const convertToSecureEmail = (email: string) => {
  const emailList = email.split('@');
  const firstStep = emailList[0]
    ?.split('')
    .map((sym, index) => (index > 1 ? '*' : sym))
    .join('');
  const secondStep = emailList[1];

  return firstStep + '@' + secondStep;
};
