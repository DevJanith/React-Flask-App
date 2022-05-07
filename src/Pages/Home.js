import React, { useEffect, useState } from "react";
import {
    HorizontalGridLines, LineSeries, VerticalGridLines, XAxis, XYPlot, YAxis
} from "react-vis";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Home = () => {
    const [currentChartData, setCurrentChartData] = useState([]);

    useEffect(() => {
        fetch("/api/chart_data")
            .then((res) => res.json())
            .then((data) => {
                console.log("chart data is", data);
                setCurrentChartData(data);
            });
    }, []);

    return (
        <div>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Sample Graph
                    </Typography>
                    <Typography>
                        <XYPlot xType="linear" width={300} height={300}>
                            <HorizontalGridLines />
                            <VerticalGridLines />
                            <XAxis title="X Axis" />
                            <YAxis title="Y Axis" />
                            <LineSeries data={currentChartData} />
                        </XYPlot>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Home