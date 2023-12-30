export default class Validation {
    
  validateNotNullData(data) {
    for (const key in data) {
      if (!data[key]) {
        return false;
      }
    }

    return true;
  }

  validateNotNullArray(array) {
    if (array.length > 0) {
      for (const key in array) {
        if (!array[key]) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }
}
