Function.prototype.MyBind = function (obj, ...rest) {
  if(obj === null || typeof obj === "undefined") {
    obj = global;
  }
  else if(typeof obj != "object") {
    obj = Object(obj);
  }
  let that = this;
  return F = function () {
    if(this instanceof F) {
      return that.MyCall(this, ...rest);
    }

    return that.MyCall(obj, ...rest);
  }
}

Function.prototype.MyApply = function (obj, list) {
  if(obj === null || typeof obj === "undefined") {
    obj = global;
  }
  else if(typeof obj != "object") {
    obj = Object(obj);
  }
  let _f = Symbol();
  obj[_f] = this;
  let res = obj[_f](...list);
  delete obj[_f];
  return res;
}

Function.prototype.MyCall = function (obj, ...rest) {
  if(obj === null || typeof obj === "undefined") {
    obj = global;
  }
  else if(typeof obj != "object") {
    obj = Object(obj);
  }
  let _f = Symbol();
  obj[_f] = this;
  let res = obj[_f](...rest);
  delete obj[_f];
  return res;
}

