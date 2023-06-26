import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)

const Chart = ({employees=0}) =>{
    const data = {
        labels: ["Jan", "Feb", "March", "April", "May", "June"],
        datasets: [{
            labels: "Sales of the Week",
            data: [0,0,0,0,0,employees],
            backgroundColor: 'black',
            borderColor: '#0086FF',
            pointBorderColor: 'black',
            fill: true,
            tension: 0.4
        }]
    }

    const options = {
        plugins: {
            legend: true
        },
        scales: {
            y:{
                min: 0,
                max: 9
            }
        }
    }
    return(
        <div>
            <Line data={data} options={options}></Line>
            <div className="p-10 flex items-center justify-between w-[30%]">
                <div className="bg-blue-400 w-[10px] h-[2px]"></div>
                <p className="text-[12px]">Employees</p>
            </div>
        </div>
    )
}

export default Chart;