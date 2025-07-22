import { generateYAxis } from '@/app/lib/utils';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue } from '@/app/lib/data';
import styles from './revenue-chart.module.css';
 
// ...
 
export default async function RevenueChart() { // Make component async, remove the props
  const revenue = await fetchRevenue(); // Fetch data inside the component
 
  const chartHeight = 350;
  const { yAxisLabels, topLabel } = generateYAxis(revenue);
 
  if (!revenue || revenue.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }
 
  return (
    <div>
      <h2 className={`${lusitana.className} mb-4 text-xl`}>
        <CalendarIcon className="inline-block w-5 h-5 mr-2" />
        Revenue Chart
      </h2>
      <div className="chartContainer">
        {/* Render your chart here using revenue, yAxisLabels, and topLabel */}
        <pre>{JSON.stringify(revenue, null, 2)}</pre>
      </div>
    </div>
  );
}
 

