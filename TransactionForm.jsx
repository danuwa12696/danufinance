import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from 'lucide-react';

const TransactionForm = ({ onAddTransaction }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('expense');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!description || !amount) return;
        onAddTransaction({
            id: Date.now(),
            description,
            amount: parseFloat(amount),
            type,
            date: new Date().toISOString()
        });
        setDescription('');
        setAmount('');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 mb-8 transition-transform hover:scale-[1.01]">
            <h2 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                Add New Entry
            </h2>

            <div className="flex gap-4 mb-6">
                <label className="flex-1 cursor-pointer">
                    <input
                        type="radio"
                        name="type"
                        value="income"
                        checked={type === 'income'}
                        onChange={() => setType('income')}
                        className="hidden peer"
                    />
                    <div className="text-center py-3 rounded-xl border-2 border-transparent bg-gray-50 text-gray-500 peer-checked:border-emerald-500 peer-checked:bg-emerald-50 peer-checked:text-emerald-700 font-medium transition-all duration-200 flex items-center justify-center gap-2">
                        <PlusIcon size={20} /> Income
                    </div>
                </label>

                <label className="flex-1 cursor-pointer">
                    <input
                        type="radio"
                        name="type"
                        value="expense"
                        checked={type === 'expense'}
                        onChange={() => setType('expense')}
                        className="hidden peer"
                    />
                    <div className="text-center py-3 rounded-xl border-2 border-transparent bg-gray-50 text-gray-500 peer-checked:border-rose-500 peer-checked:bg-rose-50 peer-checked:text-rose-700 font-medium transition-all duration-200 flex items-center justify-center gap-2">
                        <MinusIcon size={20} /> Expense
                    </div>
                </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder="Description (e.g., Salary, Food)"
                    className="p-3 bg-gray-50 border-none rounded-xl w-full focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Amount"
                    className="p-3 bg-gray-50 border-none rounded-xl w-full focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>

            <button
                type="submit"
                className="mt-6 w-full bg-indigo-600 text-white py-3.5 rounded-xl font-bold hover:bg-indigo-700 active:scale-[0.98] transition-all shadow-md shadow-indigo-200"
            >
                Add Transaction
            </button>
        </form>
    );
};
export default TransactionForm;
