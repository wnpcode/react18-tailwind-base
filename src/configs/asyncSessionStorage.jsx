const prefix = "POSTKI_";

export const setSessionStorage = async (name, value) => {
  return new Promise((resolve, reject) => {
    try {
      sessionStorage.setItem(`${prefix}${name}`, value);
      setTimeout(() => {
        resolve();
      }, 1000);
    } catch (error) {
      reject();
    }
  });
};

export const getSessionStorage = (name) => {
  return sessionStorage.getItem(`${prefix}${name}`);
};

// export const getSessionStorage = async (name) => {
//   return new Promise((resolve, reject) => {
//     let value = "";
//     try {
//       value = sessionStorage.getItem(`${prefix}${name}`);
//       if (_.isObject(JSON.parse(value)))
//         setTimeout(() => {
//           resolve(value);
//         }, 1000);
//     } catch (error) {
//       reject();
//     }
//   });
// };

export const removeSessionStorage = async (name) => {
  return new Promise((resolve, reject) => {
    try {
      sessionStorage.removeItem(`${prefix}${name}`);
      setTimeout(() => {
        resolve();
      }, 1000);
    } catch (error) {
      reject();
    }
  });
};
