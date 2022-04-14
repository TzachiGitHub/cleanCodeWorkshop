//Functions task

const emailClients = (clients) => {
  clients.forEach((client) => {
    const clientRecord = database.lookup(client);
    if (clientRecord.isActive()) {
      email(client);
    }
  });
};

let userName = "Ryan McDermott";
const splitIntoFirstAndLastName = () => {
  userName = userName.split(" ");
};
splitIntoFirstAndLastName();

const addItemToCart = (cart, item) => {
  cart.push({ item, date: Date.now() });
};

const handleSelectNamePhycianCheckbox = (e) => {
  if (e.target.checked) {
    setUserPhycianNameCheckboxChecked(true);
  } else {
    setUserPhycianNameCheckboxChecked(false);
  }
};

const getPatientEmails = (hospital, region) => {
  if (hospital) {
    if (region) {
      // ...
      // ...
      // ...
      // ...
      // ...
    }
  }
};

const getMortgage = (amount, patient) => {
  if (patient) {
    if (!patient.hasBadCredit) {
      if (patient.accountBalance > 0) {
        const allowedMortgate = {
          amount: patient.accountBalance * 3,
          interest: 0.05,
          monthlyReturns:
            (patient.accountBalance * 3 * (1 + 0.05 + 0.03)) / (12 * 20) + 50,
        };
        console.log("got mortgage!");
        return allowedMortgate;
      } else {
        console.log("failed to get mortgage");
      }
    } else {
      console.log("failed to get mortgage");
    }
  } else {
    console.log("failed to get mortgage");
  }
};
