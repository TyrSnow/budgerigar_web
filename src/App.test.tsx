import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

before(function(){

  if(typeof window !== 'undefined') {
    console.log('window is defined');
    global = window;
  }

  function mockStorage() {
      var storage = {};
      return {
          setItem: function(key, value) {
              storage[key] = value || '';
          },
          getItem: function(key) {
              return storage[key];
          },
          removeItem: function(key) {
              delete storage[key];
          },
          get length () {
              return Object.keys(storage).length;
          },
          key: function(i) {
              var keys = Object.keys(storage);
              return keys[i] || null;
          }
      };
  }

  global['localStorage'] = mockStorage();
  global['sessionStorage'] = mockStorage();

});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
