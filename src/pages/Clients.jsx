import React from "react";

const clients = [
  { name: "John Doe", goal: "Weight Loss" },
  { name: "Jane Smith", goal: "Muscle Gain" },
  { name: "Alex Roy", goal: "Endurance" },
];

export default function Clients() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Client List</h1>
      <ul className="bg-white p-4 rounded shadow space-y-2">
        {clients.map((client, index) => (
          <li key={index} className="border-b pb-2">
            <strong>{client.name}</strong> - {client.goal}
          </li>
        ))}
      </ul>
    </div>
  );
}
