const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
}

function createTransaction(transaction){
  user.transactions.push(transaction)

  if (transaction.type == 'credit'){
  user.balance = user.balance + transaction.value
  } 
  else{
    user.balance = user.balance - transaction.value
  }
}

function getHigherTransactionByType (type){
  let higherValue = 0
  let higherTransaction = 0
  
  for(let transaction of user.transactions){
    if (transaction.type == type && transaction.value > higherValue){
      higherValue = transaction.value
      higherTransaction = transaction
    }
  }
  return higherTransaction
}

function getAverageTransactionValue (){
  let sum = 0
  for(let transaction of user.transactions){
    sum = sum + transaction.value
  }
  return sum / user.transactions.length
}

function getTransactionsCount(){
  let transactionsCount = {
  credit: 0,
  debit: 0
  } 
  for( let transaction of user.transactions){
    if (transaction.type == 'credit') {
      transactionsCount.credit++
    }
    else {
      transactionsCount.debit++
    }
  }
  return transactionsCount
}

createTransaction({type: 'credit', value: 50})
createTransaction({type: 'credit', value: 120})
createTransaction({type: 'debit', value: 80})
createTransaction({type: 'debit', value: 30})

console.log(user.balance)

console.log(getHigherTransactionByType('credit'))
console.log(getHigherTransactionByType('debit'))

console.log(getAverageTransactionValue())

console.log(getTransactionsCount())
