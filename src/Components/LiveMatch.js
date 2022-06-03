import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system'
import './LiveMatch.css';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import Header from './Header';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { actionCreators } from '../State'
import { bindActionCreators } from 'redux'

// const mapStateToProps = state => ({
//     host: state.host,
//     visitor: state.visitor,
//     over: state.over,
//     toss: state.toss,
//     striker: state.striker,
//     nonstriker: state.nonstriker,
//     bowler: state.bowler,
//     run: state.run,
// });
// const mapDispatchToProps = (dispatch) => ({
//     action: bindActionCreators(actionCreators, dispatch)
// })
const LiveMatch = (props) => {
    // const host = props.host
    // const visitor = props.visitor
    // const striker = props.striker;
    // const nonstriker = props.nonstriker;
    // const bowler = props.bowler;
    // const run = props.run
    // console.log("host:", run)

    const dispatch = useDispatch();
    // const {run,striker,nonstriker,host,visitor} = useSelector(state => {state.striker,
    // state.run,state.nonstriker,state.host,state.visitor});

    const striker = useSelector(state => state.striker);
    const nonstriker = useSelector(state => state.nonstriker);
    const strikerRun = useSelector(state => state.strikerRun);
    const nonstrikerRun = useSelector(state => state.nonstrikerRun);
    const host = useSelector(state => state.host);
    const totalruns = useSelector(state => state.totalruns);
    const visitor = useSelector(state => state.visitor);
    const over = useSelector(state => state.over);
    const ball = useSelector(state => state.ball);
    const strikerball = useSelector(state => state.strikerball);
    const nonstrikerball = useSelector(state => state.nonstrikerball);
    const { handleStrikerRun, handleAllRuns,handleNonstrikerRun,handleBalls,handleStrikerballs,handleNonstrikerballs,handleOver} = bindActionCreators(actionCreators, dispatch);

    // const [totalRuns, setTotalRuns] = useState(0)
    const [currentRunRate, setCurrentRunRate] = useState();
    const [wide, setWide] = useState(false);
    const [noball, setNoball] = useState(false);
    const [legbyes, setLegbyes] = useState(false);
    const [wicket, setWicket] = useState(false);
    const [byes, setByes] = useState(false);
    const [extrarun, setExtraerun] = useState("");
    const [runs, setRuns] = useState([]);
    const [changestriker, setChangestriker] = useState(false);
    console.log("runs :", runs);
    // const [totalruns, setTotalruns] = useState(extrarun + runs);

    const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
        ({ theme, checked }) => ({
            '.MuiFormControlLabel-label': checked && {
                color: theme.palette.primary.main,
            },
        }),
    );

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));


    const handleOnExtra = (event) => {
        setExtraerun(event.target.value);
        console.log("handleOnExtra work");
        console.log(extrarun);
    }
    function createData(
        Batsman,
        R,
        B,
        Four,
        Six,
        SR,
    ) {
        return { Batsman, R, B, Four, Six, SR };
    }

    const rows = [
        createData(striker, strikerRun, strikerball, 24, 4.0, 300),
        createData(nonstriker, nonstrikerRun, nonstrikerball, 37, 4.3, 250),
    ];

    const handleExtras = (e) => {
        var name = e.target.name;
        var values = e.target.value
        console.log("handleExtras clicked name :", name, "value :", values)
        if (name === "wide") {
            setWide(!wide);
            setNoball(false);
            console.log("!wide")
        }
        else if (name === "noball") {
            setNoball(!noball);
            setWide(false)
            // setWide(true)
            console.log("noballfalse")
        }
        else if (name === "legbyes") {
            setLegbyes(!legbyes);
            setWide(false)
            setByes(false)
            console.log("noballfalse")
        }
        else if (name === "byes") {
            setByes(!byes);
            setLegbyes(false)
            console.log("noballfalse")
        }
        else if (name === "wicket") {
            setWicket(!wicket);
            // setWide(false)
            // setByes(false)
            console.log("noballfalse")
        }
        else {
            console.log("error")
        }
    }
    const handleruns = (e) => {

        var name = e.target.name;

        var value = Number(e.target.value);
        if(runs.length === 5){
            handleOver(1)
        }
        else if (runs.length === 6) {
            // handleOver(1)
            setRuns([])
        }
        function currentRun() {
            if (changestriker === false) {
                console.log("changestriker is false")
                if (name === "zero") {
                    handleStrikerRun(value)
                    // var joined = runs.concat(value);
                    handleBalls(1);
                    handleStrikerballs(1)
                    setRuns(runs => [...runs, value])
                    console.log("runs:", runs)
                    handleAllRuns(value)
                }
                else if (name === "one") {
                    handleStrikerRun(value)
                    handleBalls(1)
                    handleStrikerballs(1)
                    setRuns(runs => [...runs, value])
                    handleAllRuns(value)
                    setChangestriker(!changestriker)
                }
                else if (name === "two") {
                    handleStrikerRun(value)
                    handleBalls(1)
                    handleStrikerballs(1)
                    setRuns(runs => [...runs, value])
                    handleAllRuns(value)
                }
                else if (name === "three") {
                    handleStrikerRun(value)
                    handleBalls(1)
                    handleStrikerballs(1)
                    setRuns(runs => [...runs, value])
                    handleAllRuns(value)
                    setChangestriker(!changestriker)
                }
                else if (name === "four") {
                    handleStrikerRun(value)
                    handleBalls(1)
                    handleStrikerballs(1)
                    setRuns(runs => [...runs, value])
                    handleAllRuns(value)
                }
                else if (name === "five") {
                    handleStrikerRun(value)
                    handleBalls(1)
                    handleStrikerballs(1)
                    setRuns(runs => [...runs, value])
                    handleAllRuns(value)
                    setChangestriker(!changestriker)
                }
                else {
                    handleStrikerRun(value)
                    handleBalls(1)
                    handleStrikerballs(1)
                    setRuns(runs => [...runs, value])
                    handleAllRuns(value)
                }
            }
            else{
                console.log("changestriker is true")
                if(name === "zero" ){
                    handleNonstrikerRun(value)
                    handleBalls(0)
                    handleNonstrikerballs(0)
                    // var joined = runs.concat(value);
                    setRuns(runs => [...runs,value])
                    console.log("runs:",runs)
                    handleAllRuns(value)
                }
                else if(name === "one"){
                    setChangestriker(!changestriker)
                    handleNonstrikerRun(value)
                    handleBalls(1)
                    handleNonstrikerballs(1)
                    setRuns(runs => [...runs,value])
                    handleAllRuns(value)
                }
                else if(name === "two"){
                    handleNonstrikerRun(value)
                    handleBalls(1)
                    handleNonstrikerballs(1)
                    setRuns(runs => [...runs,value])
                    handleAllRuns(value)
                }
                else if(name === "three"){
                    setChangestriker(!changestriker)
                    handleNonstrikerRun(value)
                    handleBalls(1)
                    handleNonstrikerballs(1)
                    setRuns(runs => [...runs,value])
                    handleAllRuns(value)
                }
                else if(name === "four"){
                    handleNonstrikerRun(value)
                    handleBalls(1)
                    handleNonstrikerballs(1)
                    setRuns(runs => [...runs,value])
                    handleAllRuns(value)
                }
                else if(name === "five"){
                    setChangestriker(!changestriker)
                    handleNonstrikerRun(value)
                    setRuns(runs => [...runs,value])
                    handleAllRuns(value)
                    handleBalls(1)
                    handleNonstrikerballs(1)
                }
                else{
                    handleNonstrikerRun(value)
                    handleBalls(1)
                    handleNonstrikerballs(1)
                    setRuns(runs => [...runs,value])
                    handleAllRuns(value)
                }
            }
        }
        currentRun()
        // if(ball === 0){
        //     handleOver(0);
        //     handleBalls(0);  
        // }
        // else if(ball/6 === 0){
        //     handleOver(1);
        //     handleBalls(0);
        //     console.log(`balls is ${ball} and over is compleate`)
        // }
        // else{
        //     console.log("errror")
        // }
        console.log("handleruns clicked", name, value)

    }
    return (
        <div >
            <Header />
            {/* <Box className="TeamsHeader">
                <h4>{host} v/s {visitor}</h4>
            </Box>  */}
            {/* <button value='1' onClick={() => handleOver(2)}>handleBallss</button> */}
            <Box className="scorecard">
                <Box className="teamname">
                    <Typography variant="h5">{host}, ist inning </Typography>
                    <Typography variant="h5">CRR</Typography>
                </Box>
                <Box className="score">
                    <Box className="score_runs">
                        <Typography variant="h4">{totalruns > 0 ? totalruns : "00"}-0</Typography>
                        <Typography variant='h6' sx={{alignSelf:"flex-end",mx:3}}>{over}.{ball}</Typography>
                        <br />
                        {/* <Typography variant="h4" sx={{ px: 3 }}>0-0</Typography>
                        <Typography variant="h6" sx={{ px: 0, alignSelf: "end" }}>(0.0)</Typography> */}
                    </Box>
                    <Box className="score_runs">
                        <Typography variant="h5">{currentRunRate > 0 ? currentRunRate : "00.00"}</Typography>
                    </Box>
                </Box>
            </Box>
            <Box className="scoretable">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Batsman</StyledTableCell>
                                <StyledTableCell align="right">R</StyledTableCell>
                                <StyledTableCell align="right">B&nbsp;</StyledTableCell>
                                <StyledTableCell align="right">4s&nbsp;</StyledTableCell>
                                <StyledTableCell align="right">6s&nbsp;</StyledTableCell>
                                <StyledTableCell align="right">SR&nbsp;</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.Batsman}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.R}</StyledTableCell>
                                    <StyledTableCell align="right">{row.B}</StyledTableCell>
                                    <StyledTableCell align="right">{row.Four}</StyledTableCell>
                                    <StyledTableCell align="right">{row.Six}</StyledTableCell>
                                    <StyledTableCell align="right">{row.SR}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box className="this_over">
                <Typography variant="h6">This over:</Typography>
                {/* <Typography variant="h6" sx={{ mx: 2 }} className="overruns">{run.map=(runs =><p>{runs.value}</p>)}</Typography> */}
                {runs.map((item, index) => (
                    <Box key={index} className="overruns">
                        <Typography variant="h6" sx={{ mx: 2 }} >{item}</Typography>
                    </Box>
                ))}
            </Box>
            <Box className="this_over_extras">
                <FormGroup>
                    <Box className="extraoptions">
                        <Box><FormControlLabel name="wide" value={wide.value} control={<Checkbox checked={wide} onClick={handleExtras} />} label="Wide" /></Box>
                        <Box><FormControlLabel name="noball" control={<Checkbox checked={noball} onClick={handleExtras} />} label="Noball" /></Box>
                        <Box><FormControlLabel name="legbyes" control={<Checkbox checked={legbyes} onClick={handleExtras} />} label="Leg Byes" /></Box>
                        <Box><FormControlLabel name="byes" control={<Checkbox checked={byes} onClick={handleExtras} />} label="Byes" /></Box>
                        <Box><FormControlLabel name="wicket" control={<Checkbox checked={wicket} onClick={handleExtras} />} label="Wicket" /></Box>
                        <Box><Button variant="contained" sx={{ mx: 3 }} >Retire</Button></Box>
                        <Box><Button variant="contained" sx={{ mx: 3 }}>Swap Batsman</Button></Box>
                    </Box>
                </FormGroup>
            </Box>
            <Box className="buttons_runs_box">
                <Box className="buttons">
                    <Button variant="contained" sx={{ width: "100%", borderRadius: "10px", my: 1 }}>Undo</Button>
                    <br />
                    <Button variant="contained" sx={{ width: "100%", borderRadius: "10px" }}>Partnerships</Button>
                    <br />
                    <Button variant="contained" sx={{ width: "100%", borderRadius: "10px", my: 1 }}>Extras</Button>
                </Box>
                <Box className="runs">
                    <Box className="runset">
                        <Button id="zero" name="zero" value='0' onClick={handleruns} className="onerun">0</Button>
                        <Button id="one" name="one" value="1" onClick={handleruns} className="onerun">1</Button>
                        <Button id="two" name="two" value="2" onClick={handleruns} className="onerun">2</Button>
                        <Button id="three" name="three" value="3" onClick={handleruns} className="onerun">3</Button>
                    </Box>
                    <Box className="runset">
                        <Button value="4" name="four" onClick={handleruns} className="onerun">4</Button>
                        <Button value="5" name="five" onClick={handleruns} className="onerun">5</Button>
                        <Button value="6" name="six" onClick={handleruns} className="onerun">6</Button>
                        <Button value="..." className="onerun">...</Button>
                    </Box>
                </Box>
            </Box>
        </div >
    )
}


// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(LiveMatch);
export default LiveMatch;