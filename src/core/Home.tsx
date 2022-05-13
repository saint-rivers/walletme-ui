import React, { useEffect, useState } from "react";
import { Transaction } from "../model/Transaction";
import * as transactionService from "../transactions/services/transaction.service";

interface Page {
  content: Transaction[];
  numberOfElements: number;
  totalElements: number;
  totalPages: number;
  size: number;
  empty: false;
}

export default function Home() {
  const [transactions, setTransactions] = useState<Page>();

  useEffect(() => {
    async function fetchTransactions() {
      return await transactionService.getRecentTransactions(0, 5);
    }

    fetchTransactions().then((res) => {
      setTransactions(res);
    });
  }, []);

  return (
    <div>
      <div className='overflow-hidden overflow-x-auto border border-gray-100 rounded'>
        <table className='min-w-full text-sm divide-y divide-gray-200'>
          <thead>
            <tr className='bg-gray-50'>
              <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>
                Category
              </th>
              <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>
                Payment Method
              </th>
              <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>
                Amount
              </th>
              <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>
                Date
              </th>
            </tr>
          </thead>

          <tbody className='divide-y divide-gray-100'>
            {transactions &&
              transactions.content.map((transaction) => (
                <tr>
                  <td className='px-4 py-2 font-medium text-gray-900 whitespace-nowrap'>
                    {transaction.category.name}
                  </td>
                  <td className='px-4 py-2 text-gray-700 whitespace-nowrap'>
                    {transaction.paymentType}
                  </td>
                  <td className='px-4 py-2 text-gray-700 whitespace-nowrap'>
                    {transaction.amount} {transaction.currency}
                  </td>
                  <td className='px-4 py-2 text-gray-700 whitespace-nowrap'>
                    {transaction.paymentTimestamp.toString()}
                    {/* {format(transaction.paymentTimestamp, "dd-MMM-yyyy")} */}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <button>Dummy</button>
    </div>
  );
}
