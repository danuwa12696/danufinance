import React from 'react';
import { TrendingUp, TrendingDown, Wallet } from 'lucide-react';

const SummaryCards = ({ income, expense, balance }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex items-center justify-between group">
                <div>
                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">Total Income</p>
                    <p className="text-2xl font-bold text-emerald-600 group-hover:scale-110 transition-transform origin-left">
                        LKR {income.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </p>
                </div>
                <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                    <TrendingUp size={24} />
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex items-center justify-between group">
                <div>
                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">Total Expenses</p>
                    <p className="text-2xl font-bold text-rose-600 group-hover:scale-110 transition-transform origin-left">
                        LKR {expense.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </p>
                </div>
                <div className="p-3 bg-rose-50 rounded-xl text-rose-600 group-hover:bg-rose-100 transition-colors">
                    <TrendingDown size={24} />
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex items-center justify-between group relative overflow-hidden">
                <div className="relative z-10">
                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">Net Balance</p>
                    <p className={`text-2xl font-bold group-hover:scale-110 transition-transform origin-left ${balance >= 0 ? 'text-indigo-600' : 'text-rose-600'}`}>
                        LKR {balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </p>
                </div>
                <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600 relative z-10 group-hover:bg-indigo-100 transition-colors">
                    <Wallet size={24} />
                </div>
                <div className={`absolute top-0 left-0 w-1 h-full ${balance >= 0 ? 'bg-indigo-500' : 'bg-rose-500'}`}></div>
            </div>
        </div>
    );
};

export default SummaryCards;
