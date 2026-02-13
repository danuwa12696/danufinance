import React, { useMemo } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import SummaryCards from './components/SummaryCards';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import ReportChart from './components/ReportChart';
import { LayoutDashboard, Download } from 'lucide-react';

function App() {
  const [transactions, setTransactions] = useLocalStorage('transactions', []);

  const { income, expense, balance } = useMemo(() => {
    let income = 0;
    let expense = 0;
    transactions.forEach(t => {
      if (t.type === 'income') income += t.amount;
      else expense += t.amount;
    });
    return { income, expense, balance: income - expense };
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  const downloadReport = () => {
    const headers = "Date,Description,Type,Amount\n";
    const csv = transactions.map(t =>
      `${new Date(t.date).toISOString().split('T')[0]},"${t.description}",${t.type},${t.amount}`
    ).join("\n");

    const blob = new Blob([headers + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `financial_report_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 font-sans selection:bg-indigo-100 selection:text-indigo-700">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
              <LayoutDashboard className="text-indigo-600" size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Finance Dashboard</h1>
              <p className="text-gray-500 font-medium">Overview of your cash flow</p>
            </div>
          </div>

          <button
            onClick={downloadReport}
            className="flex items-center gap-2 bg-white text-gray-700 px-5 py-2.5 rounded-xl border border-gray-200 font-semibold shadow-sm hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-95"
          >
            <Download size={20} />
            <span className="hidden sm:inline">Export Report</span>
          </button>
        </header>

        <SummaryCards income={income} expense={expense} balance={balance} />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-1 space-y-8">
            <TransactionForm onAddTransaction={addTransaction} />
            <div className="h-[350px]">
              <ReportChart income={income} expense={expense} />
            </div>
          </div>

          <div className="xl:col-span-2">
            <TransactionList transactions={transactions} onDelete={deleteTransaction} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
