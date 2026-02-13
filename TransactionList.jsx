import React from 'react';
import { TrashIcon, ArrowUpIcon, ArrowDownIcon } from 'lucide-react';

const TransactionList = ({ transactions, onDelete }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 mb-8 transition-transform hover:border-gray-200">
            <h2 className="text-xl font-bold mb-6 text-gray-800 flex items-center justify-between">
                Recent Activity
                <span className="text-sm font-normal text-gray-500">{transactions.length} entries</span>
            </h2>
            <div className="space-y-3 max-h-[400px] overflow-y-auto custom-scrollbar pr-2">
                {transactions.length > 0 ? (
                    transactions.map((t) => (
                        <div key={t.id} className="flex items-center justify-between p-4 bg-gray-50/50 rounded-xl hover:bg-white hover:shadow-md border border-transparent hover:border-gray-100 transition-all group">
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-full ${t.type === 'income' ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>
                                    {t.type === 'income' ? <ArrowUpIcon size={20} /> : <ArrowDownIcon size={20} />}
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">{t.description}</p>
                                    <p className="text-xs text-gray-500">{new Date(t.date).toLocaleDateString()}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className={`font-bold ${t.type === 'income' ? 'text-emerald-600' : 'text-rose-600'}`}>
                                    {t.type === 'income' ? '+' : '-'} {parseFloat(t.amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </span>
                                <button
                                    onClick={() => onDelete(t.id)}
                                    className="text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 p-2 rounded-full hover:bg-red-50"
                                    aria-label="Delete transaction"
                                >
                                    <TrashIcon size={18} />
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-12 text-gray-400 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                        <p className="text-lg font-medium">No transactions yet</p>
                        <p className="text-sm">Add your first income or expense above!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TransactionList;
