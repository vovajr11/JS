import transactionHistory from './transaction-history.js';

// console.log(transactionHistory);

const table = document.querySelector('.transaction-table');

const markup = createTableRows(transactionHistory);

table.insertAdjacentHTML('beforeend', markup);

console.log(createTableRows(transactionHistory));

function createTableRows(transactions) {
  return transactions
    .map(transaction => createTableRowMarkup(transaction))
    .join('');

  //   return transactions.reduce(
  //     (markup, transaction) => (markup += createTableRowMarkup(transaction)),
  //     '',
  //   );
}

function createTableRowMarkup({ type, amount, date, business }) {
  const row = `
    <tr>
        <td>${type}</td>
        <td>${amount}</td>
        <td>${date}</td>
        <td>${business}</td>
    </tr>
    `;
  return row;
}
