/**
 * Generates a random integer between 1 and 9 (inclusive).
 *
 * @returns {number} - A random integer between 1 and 9.
 */
function getRandomNumber() {
  return Math.floor(Math.random() * 9) + 1;
}

/**
 * Alert Function
 * @param {*} msg
 * @param {*} type
 * @returns
 */
const creatAlert = (msg, type = "danger") => {
  return `<p class="alert-${type} alert d-flex justify-content-between"> ${msg} <button class="btn-close" data-bs-dismiss="alert"></button> </p>`;
};

/**
 * New Generate ID
 * @returns
 */
function CreatedId() {
  const timestamp = Date.now().toString(36); // Convert current time to a base-36 string
  const randomValue = Math.random().toString(36).substring(2, 15); // Generate a random string in base-36
  return timestamp + randomValue;
}

/**
 * Timeing Function
 *
 * @param {*} timestamp
 * @returns
 */
const timeAgo = (timestamp) => {
  const now = new Date();
  const secondsPast = Math.floor((now - new Date(timestamp)) / 1000);

  if (secondsPast < 60) {
    return `Just now`;
  }
  if (secondsPast < 3600) {
    const minutes = Math.floor(secondsPast / 60);
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  }
  if (secondsPast < 86400) {
    const hours = Math.floor(secondsPast / 3600);
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  }
  if (secondsPast < 2592000) {
    const days = Math.floor(secondsPast / 86400);
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  }
  if (secondsPast < 31536000) {
    const months = Math.floor(secondsPast / 2592000);
    return `${months} month${months !== 1 ? "s" : ""} ago`;
  }
  const years = Math.floor(secondsPast / 31536000);
  return `${years} year${years !== 1 ? "s" : ""} ago`;
};

// resul function

/**
 * Check a Email is Email
 * @param {*} email
 * @returns
 */
const isEmail = (email) => {
  const pattern = /^[a-z0-9\._]{1,}@[a-z0-9]{2,}\.[a-z]{2,4}$/;
  return pattern.test(email);
};

/**
 * Check a Email is Email
 * @param {*} email
 * @returns
 */
const isMobile = (mobile) => {
  const pattern = /^(\+8801|8801|01)[0-9]{9}$/;
  return pattern.test(mobile);
};

const createID = () => {
  const timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
  const machineId = "xxxxxxxxxxxx".replace(/[x]/g, function () {
    return ((Math.random() * 16) | 0).toString(16);
  });
  const processId = (Math.floor(Math.random() * 1000) % 1000)
    .toString(16)
    .padStart(3, "0");
  const counter = ((Math.random() * 16777216) | 0)
    .toString(16)
    .padStart(6, "0");

  return timestamp + machineId + processId + counter;
};

const timeSayed = (postDate) => {
  const currentDate = new Date();
  const diff = currentDate - postDate;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 7) {
    return postDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } else if (days > 1) {
    return `${days} days ago`;
  } else if (days === 1) {
    return "Yesterday";
  } else if (hours >= 1) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes >= 1) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return "Just now";
  }
};

// ****************

const getGradeAndGPA = (mark) => {
  let grade;
  let gpa;

  if (mark >= 0 && mark < 33) {
    grade = "F";
    gpa = 0;
  } else if (mark >= 33 && mark < 40) {
    grade = "D";
    gpa = 1;
  } else if (mark >= 40 && mark < 50) {
    grade = "C";
    gpa = 2;
  } else if (mark >= 50 && mark < 60) {
    grade = "B";
    gpa = 3;
  } else if (mark >= 60 && mark < 70) {
    grade = "A-";
    gpa = 3.5;
  } else if (mark >= 70 && mark < 80) {
    grade = "A";
    gpa = 4;
  } else if (mark >= 80 && mark <= 100) {
    grade = "A+";
    gpa = 5;
  } else {
    grade = "invalid";
    gpa = "invalid";
  }

  return {
    gpa: gpa,
    grade: grade,
  };
};

const resultSystemPro = (marks) => {
  const { bangla, english, math, islamic, ict, carer, pychical, since } = marks;

  const totalGpaAvg = (
    (getGradeAndGPA(bangla).gpa +
      getGradeAndGPA(english).gpa +
      getGradeAndGPA(math).gpa +
      getGradeAndGPA(islamic).gpa +
      getGradeAndGPA(ict).gpa +
      getGradeAndGPA(carer).gpa +
      getGradeAndGPA(pychical).gpa +
      getGradeAndGPA(since).gpa) /
    8
  ).toFixed(2);

  if (
    bangla >= 33 &&
    english >= 33 &&
    math >= 33 &&
    islamic >= 33 &&
    ict >= 33 &&
    carer >= 33 &&
    pychical >= 33 &&
    since >= 33
  ) {
    if (totalGpaAvg >= 0 && totalGpaAvg < 1) {
      return {
        gpa: totalGpaAvg,
        grade: "F",
      };
    } else if (totalGpaAvg >= 1 && totalGpaAvg < 2) {
      return {
        gpa: totalGpaAvg,
        grade: "D",
      };
    } else if (totalGpaAvg >= 2 && totalGpaAvg < 3) {
      return {
        gpa: totalGpaAvg,
        grade: "C",
      };
    } else if (totalGpaAvg >= 3 && totalGpaAvg < 3.5) {
      return {
        gpa: totalGpaAvg,
        grade: "B",
      };
    } else if (totalGpaAvg >= 3.5 && totalGpaAvg < 4) {
      return {
        gpa: totalGpaAvg,
        grade: "A-",
      };
    } else if (totalGpaAvg >= 4 && totalGpaAvg < 5) {
      return {
        gpa: totalGpaAvg,
        grade: "A",
      };
    } else if (totalGpaAvg >= 5) {
      return {
        gpa: totalGpaAvg,
        grade: "A+",
      };
    }
  } else {
    return {
      gpa: 0,
      grade: "F",
    };
  }
};
