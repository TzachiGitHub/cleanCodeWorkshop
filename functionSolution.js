//1 - each function should do one thing -
const emailActiveClients = (clients) =>
  clients.filter(isActiveClient).forEach((client) => email(client));

const isActiveClient = (client) => {
  const clientRecord = database.lookup(client);
  return clientRecord.isActive();
};

//2 - make the least amount of side effects -
const splitIntoFirstAndLastName = (userName) => userName.split(" ");

const userName = "Ryan McDermott";
const newName = splitIntoFirstAndLastName(userName);

//3 - don't change the state of a global variable unless you explicitly mean to -
const addItemToCart = (cart, item) => [...cart, { item, date: Date.now() }];

//4 - don't use unneeded conditions - shorten the code if possible
const handleSelectNamePhycianCheckbox = (e) =>
  setUserPhycianNameCheckboxChecked(e.target.checked);

//5 - use guardians!
const getPatientEmails = (hospital, region) => {
  if (!hospital || !region) return;

  // ...
  // ...
  // ...
  // ...
  // ...
};

//6 - Functions should only be one level of abstraction
const getMortgage = (amount, patient) => {
  validateMortgagePriviliges(patient);

  return calculateAllowedMortgage(amount, patient.accountBalance);
};

const validateMortgagePriviliges = (patient) => {
  if (!patient || !patient.hasBadCredit || patient.accountBalance <= 0)
    throw new Error("no mortgage priviliges");
};

const calculateAllowedMortgage = (amount, accountBalance) => {
  const maxAmount = accountBalance * 3;
  const stateInterest = 0.05;
  const bankProfit = 0.03;
  const amountPercentageWithInterest = 1 + stateInterest + bankProfit;
  const approvedAmuount = maxAmount >= amount ? amount : maxAmount;

  const years = 20;
  const months = 12 * years;
  const extraCommision = 50;
  const monthlyReturns =
    (maxAmount * amountPercentageWithInterest) / months + extraCommision;

  const allowedMortgate = {
    amount: approvedAmuount,
    interest: 0.05,
    monthlyReturns,
  };
  return allowedMortgate;
};
