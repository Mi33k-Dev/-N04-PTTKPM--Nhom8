import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import "../../styles/admin.scss";
import '../../components/Admin/Admin.scss';

const data = [
  { month: "Jan", orders: 50 },
  { month: "Feb", orders: 80 },
  { month: "Mar", orders: 120 },
];

const Dashboard = () => {
  return (
    <div className="admin-content">
      <h1>Dashboard</h1>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="orders" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </div>
  );
};

export default Dashboard;