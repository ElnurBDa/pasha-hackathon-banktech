// src/components/TransactionsTable.tsx
import React from "react";
import { Transaction } from "../types";

interface TransactionsTableProps {
  transactions: Transaction[];
}

const TransactionsTable: React.FC<TransactionsTableProps> = ({ transactions }) => {
  return (
    <div style={{ marginTop: "1.5rem", overflowX: "auto" }}>
      <h2 style={{ marginBottom: "1rem", color: "#0B3D2E", fontFamily: "Arial, sans-serif" }}>
        Transactions
      </h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontFamily: "Arial, sans-serif",
          minWidth: "600px",
        }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: "#0B3D2E",
              color: "white",
              textAlign: "left",
            }}
          >
            <th style={{ padding: "0.75rem 1rem" }}>ID</th>
            <th style={{ padding: "0.75rem 1rem" }}>Date</th>
            <th style={{ padding: "0.75rem 1rem" }}>Amount</th>
            <th style={{ padding: "0.75rem 1rem" }}>Currency</th>
            <th style={{ padding: "0.75rem 1rem" }}>Status</th>
            <th style={{ padding: "0.75rem 1rem" }}>Type</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr
              key={tx.id}
              style={{
                borderBottom: "1px solid #ddd",
                transition: "background-color 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget.style.backgroundColor = "#F7E8A4"); // golden yellow light
              }}
              onMouseLeave={(e) => {
                (e.currentTarget.style.backgroundColor = "transparent");
              }}
            >
              <td style={{ padding: "0.75rem 1rem" }}>{tx.id}</td>
              <td style={{ padding: "0.75rem 1rem" }}>{tx.date}</td>
              <td style={{ padding: "0.75rem 1rem" }}>{tx.amount}</td>
              <td style={{ padding: "0.75rem 1rem" }}>{tx.currency}</td>
              <td style={{ padding: "0.75rem 1rem" }}>{tx.status}</td>
              <td style={{ padding: "0.75rem 1rem" }}>{tx.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
