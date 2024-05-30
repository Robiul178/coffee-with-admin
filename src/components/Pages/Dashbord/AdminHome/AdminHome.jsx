import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Customized,
    Cross,
} from 'recharts';
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const CustomizedCross = (props) => {
    const { width, height, stroke, fill, formattedGraphicalItems } = props;
    // console.log(props);
    // get first series in chart
    const firstSeries = formattedGraphicalItems[0];
    // get any point at any index in chart
    const secondPoint = firstSeries?.props?.points[1];

    // render custom content using points from the graph
    return (
        <Cross
            y={secondPoint?.y}
            x={secondPoint?.x}
            top={5}
            left={50}
            height={height}
            width={width}
            stroke={stroke ?? '#000'}
            fill={fill ?? 'none'}
        />
    );
};


const AdminHome = () => {
    const { user } = useAuth()
    // const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/users')
            return res.data;
        }
    });
    const userRole = users.filter(u => u.email === `${user.email}`);


    //recart
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ]

    return (
        <section>
            <h2 className="text-2xl font-bold font-serif mb-4">HI, WELCOME BACK</h2>
            <div className="stats max-w-full shadow">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Total Revenue</div>
                    <div className="stat-value text-primary">25.6K</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Total User</div>
                    <div className="stat-value text-secondary">{users.length}M</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-value">86%</div>
                    <div className="stat-title">Tasks done</div>
                    <div className="stat-desc text-secondary">31 tasks remaining</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src={user.photoURL} />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">{user.displayName}</div>
                    <div className="stat-title font-bold">Role : {userRole[0]?.role}</div>
                </div>

            </div>
            <div className="mt-6">
                <ResponsiveContainer width="100%" height={500}>
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        <Customized component={CustomizedCross} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
};

export default AdminHome;