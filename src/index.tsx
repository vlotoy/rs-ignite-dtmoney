import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer } from 'miragejs'

createServer({
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transação 1',
          amount: 400,
          type: 'withdraw',
          category: 'Steam',
          createdAt: new Date()
        },
        {
          id: 2,
          title: 'Transação 2',
          amount: 8000,
          type: 'deposit',
          category: 'Salário',
          createdAt: new Date()
        },
        {
          id: 3,
          title: 'Transação 3',
          amount: 900,
          type: 'withdraw',
          category: 'Luz',
          createdAt: new Date()
        },
        {
          id: 4,
          title: 'Transação 4',
          amount: 300,
          type: 'withdraw',
          category: 'Internet',
          createdAt: new Date()
        },
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
