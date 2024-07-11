import PieChartVisit from './chart/PieChartVisit';
import LineChartWeight from './chart/LineChartWeight';
import RadarChartCategory from './chart/RadarChartCategory';
import RadialChart from './chart/RadialChart';
import AreaChartTest from './chart/AreaChart';

const Stats = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Statistiques</h2>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <div className="col-span-1 text-gray-100 rounded-lg">
          <PieChartVisit />
        </div>
        <div className="col-span-1 text-gray-100 rounded-lg">
          <LineChartWeight />
        </div>
        <div className="col-span-1 text-gray-100 rounded-lg">
          <RadarChartCategory />
        </div>
        <div className="col-span-1 text-gray-100 rounded-lg">
          <RadialChart
            title="Objectif Cardio"
            subtitle="Course à pied - 50km"
            value={40}
            max={50}
            unit="km atteints"
            trend="En hausse de 5% ce mois-ci"
            description="Objectif de course à pied pour le mois de juillet"
            color="hsl(12, 88%, 59%)"
          />
        </div>
        <div className="col-span-1 text-gray-100 rounded-lg">
          <RadialChart
            title="Objectif Calories"
            subtitle="5000 kcal brûlées"
            value={3800}
            max={5000}
            unit="kcal atteintes"
            trend="En hausse de 7% ce mois-ci"
            description="Objectif de calories brûlées pour le mois de juillet"
            color="hsl(var(--chart-2))"
          />
        </div>
        <div className="col-span-1 text-gray-100 rounded-lg">
          <RadialChart
            title="Objectif Entraînement"
            subtitle="20 séances"
            value={15}
            max={20}
            unit="séances effectuées"
            trend="En hausse de 10% ce mois-ci"
            description="Nombre de séances d'entraînement pour le mois de juillet"
            color="hsl(var(--chart-3))"
          />
        </div>
      </div>
      <AreaChartTest />
    </div>
  );
}

export default Stats;
