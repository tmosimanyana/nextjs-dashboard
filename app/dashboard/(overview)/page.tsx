import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchLatestInvoices, fetchCardData, fetchRevenue } from '@/app/lib/data';
 
export default async function Page() {
  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();
 
  return (
    <div>
      {/* Replace with your actual dashboard components */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Collected"
          value={totalPaidInvoices}
          type="collected"
        />
        <Card
          title="Pending"
          value={totalPendingInvoices}
          type="pending"
        />
        <Card
          title="Invoices"
          value={numberOfInvoices}
          type="invoices"
        />
        <Card
          title="Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <RevenueChart revenue={revenue} />
      <LatestInvoices latestInvoices={latestInvoices} />
    </div>
  );
}
