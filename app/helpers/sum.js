import Ember from 'ember';

export function sum(params/*, hash*/) {
  return params.reduce((a, b) => {
    console.log(params);
    return a + b;
  });
}

export default Ember.Helper.helper(sum);
