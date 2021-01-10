import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';

const useStyles = makeStyles({
    root: {
        maxWidth: 150,
        minHeight: 150,
        margin: 15
    }
});

export default function Cards(props) {
    const classes = useStyles();
    const cardsArr = [
        props.confirmedValue,
        props.recoveredValue,
        props.deathValue
    ]
    const mainHead = [
        "Confirmed",
        "Recovered",
        "Deaths"
    ]

    return cardsArr.map((item, index) => (
        <div >
            <Card key={index} elevation={3} className={classes.root} >
                <CardContent>
                    <Typography
                        className={classes.title}
                    >
                        {mainHead[index]} Cases In {props.name}
                    </Typography>
                    <Typography variant="h5" component="h2" className={classes.pos}>
                        <CountUp end={item} duration={3} />
                    </Typography>
                </CardContent>
            </Card>
        </div>
    ))
}