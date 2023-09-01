// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LendingPlatform {
    struct Loan {
        address borrower;
        uint256 principal;
        uint256 interestRate;
        uint256 dueDate;
        bool isClosed;
        uint256 collateral;
        address lender;
        bool isLent;
    }

    mapping(uint256 => Loan) public loans;
    uint256 public loanCounter;

    function lend(uint256 _principal, uint256 _interestRate, uint256 _dueDate, address payable borrower, address payable lender) external payable {
        require(_principal > 0, "Principal must be greater than zero");
        require(_interestRate > 0, "Interest rate must be greater than zero");
        require(_dueDate > block.timestamp, "Due date must be in the future");

        loans[loanCounter] = Loan({
            borrower: borrower,
            principal: _principal,
            interestRate: _interestRate,
            dueDate: _dueDate,
            isClosed: false,
            isLent: false,
            collateral: 0,
            lender: lender
        });
        loanCounter++;
    }

    function addCollateral(uint256 _loanId, address payable borrower, uint256 _collateral) external payable {
        Loan storage loan = loans[_loanId];
        require(borrower == loan.borrower, "Only borrower can add collateral");
        require(!loan.isClosed, "Loan is already closed");
        loan.collateral += _collateral;
        require(loan.collateral >= loan.principal, "Insufficient collateral");
    }
   function borrow(uint256 _loanId, address payable borrower) external {
        Loan storage loan = loans[_loanId];
        require(!loan.isLent, "Loan is already lent");
        require(borrower == loan.borrower, "Only borrower can borrow");
        loan.isLent = true;
    }
    function repay(uint256 _loanId, address payable borrower, uint256 amount) external payable {
        Loan storage loan = loans[_loanId];
        require(!loan.isClosed, "Loan is already closed");
        require(borrower == loan.borrower, "Only borrower can repay");
        require(amount == loan.principal + calculateInterest(_loanId), "Incorrect repayment amount");
        loan.isClosed = true;
    }

    function calculateInterest(uint256 _loanId) internal view returns (uint256) {
        Loan storage loan = loans[_loanId];
        uint256 timeElapsed = block.timestamp - loan.dueDate;
        return (loan.principal * loan.interestRate * timeElapsed) / 365 days;
    }
    function counter() public view returns(uint256){
        return(loanCounter);
    }
}
