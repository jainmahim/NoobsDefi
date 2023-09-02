# LoanFusionX

This repository consists of 3 folders, as below-

Loan- Consists of react frontend of the LoanFusionX defi application.

Loan_Backend- Consists of backend of the website in nodejs.

Smart_Contract- Consists of the smart contract of the defi application.

# Smart Contract

## Smart Contract has been deployed on binance testnet with the folowing address - 0x04160607a777257C04FA90c078eF28cC2ee25448.

To deploy the smart contract run the following commands after adding api url of binance test net and private key of wallet in .env file.

```
npm i
npx hardhat run --network bsc scripts/deploy.js
```

Smart Contract consists of the following function, along with the parameters they take-

### lend
```
    Due Date
    Lender Wallet Address
    Borrower Wallet Address
    Principle
    Interest Rate
```

### addCollateral

```
      Loan Id
      Borrower Wallet Address
```

### borrow

```
      Loan Id
      Borrower Wallet Address
      Amount
```

### repay

```
      Loan Id
      Borrower Wallet Address
      Amount
```

### counter

```
# takes no parameters
```


# Backend

To run the backend run the following commands after adding the private key for the below address to .env file.

```
npm i
node app.js
```

## Backend calls the smart contract using the following address for doing the transactions using web3.js library - 0x214fAA934A1C36808b9Ee2462f2A86487C705571

Backend consists of following RESTful API's-

### /lend
This api is called to lend money to the borrower. It takes the following parameters-

```
    Name
    Due Date
    Lender Wallet Address
    Borrower Wallet Address
    Principle
    Interest Rate
```

### /borrow

This route is called to borrow money. It first calls the addCollateral function of the smart contract and then the borrow function and then send back the loan id back to the user by calling the counter funciton of the smart contract.

```
    LoanId
    Borrower Wallet Address
    Collateral Amount
```

### /repay

Thisw route is called to repay back the loan amount by the borrower.

```
    LoanId
    Borrower Wallet Address
    Amount
```


# Frontend

To run the frontend run the following commands-

```
npm  i
npm run start
```

Frontend consists of three forms which takes the following parameters

Lend - This form can be used to lend money to others. On submitting the form, entries are sent tot the nodejs backend which then call the function of the smart contract.

```
    Name
    Due Date
    Lender Wallet Address
    Borrower Wallet Address
    Principle
    Interest Rate
```

Borrow- This form can be used to borrrow money that was lend to him. On submitting the form, backend calls two functions of the smart contract one for adding the collateral and then for borrowing the money from the borrower.

```
    LoanId
    Borrower Wallet Address
    Amount
    Collateral Amount
```

Repay- This form can be used to repay the loan amount that was borrowed back to the lender. The backend calls the appropriate function of the smart contract for repaying the loan.

```
    LoanId
    Amount
    Borrower Wallet Address    
```

## Made with ❤️ from mahim jain

