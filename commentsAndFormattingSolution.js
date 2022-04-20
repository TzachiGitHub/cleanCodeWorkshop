// comments

//1 - remove comments
const add = (a, b) => a + b;

//2 - remove comments
$scope.model = {
  menu: "foo",
  nav: "bar",
};

//3 - move to ES6 - remove the 'function' use, remove comments
const actions = () => {
  // ...
};

//4 - remove unnecessary commented out code
doStuff();

//5 - remove obvious comments
function hashIt(data) {
  let hash = 0;
  const length = data.length;

  for (let i = 0; i < length; i++) {
    const char = data.charCodeAt(i);
    hash = (hash << 5) - hash + char;

    // Convert to 32-bit integer
    hash &= hash;
  }
}

//formatting:
//1
// keep constants all in upper-case
const DAYS_IN_WEEK = 7;
const DAYS_IN_MONTH = 30;

const SONGS = ["Back In Black", "Stairway to Heaven", "Hey Jude"];
const ARTISTS = ["ACDC", "Led Zeppelin", "The Beatles"];

// keep unified camelCase standard for function/variable names
const eraseDatabase = () => {};
const restoreDatabase = () => {};

// components/classes starts with upper-case
class Animal {}
class Alpaca {}

//2 - Function callers and callees should be close -
class PerformanceReview {
  constructor(employee) {
    this.employee = employee;
  }

  perfReview() {
    this.getPeerReviews();
    this.getManagerReview();
    this.getSelfReview();
  }

  getPeerReviews() {
    const peers = this.lookupPeers();
    // ...
  }

  lookupPeers() {
    return db.lookup(this.employee, "peers");
  }

  getManagerReview() {
    const manager = this.lookupManager();
  }

  lookupManager() {
    return db.lookup(this.employee, "manager");
  }

  getSelfReview() {
    // ...
  }
}

const review = new PerformanceReview(employee);
review.perfReview();
