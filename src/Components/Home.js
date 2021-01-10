import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Cards from './Cards/Card'
import Charts from './Chart/Chart'
import Nav from './Nav'
import './Home.css'
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(5),
        minWidth: 150
    }
}))
const Home = () => {
    const classes = useStyles()
    const [data, setData] = useState([])
    const [hasError, setErrors] = useState(false)
    const [selectedCountry, setCountry] = useState("")
    const [show, setShow] = useState()
    async function fetchData() {
        try {
            const resp = await fetch("https://disease.sh/v3/covid-19/countries")
            const covidData = await resp.json()
            setData(covidData)
        } catch (err) {
            setErrors(true)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    const handleChange = (e) => {
        e.preventDefault()
        setCountry(e.target.value)
        setShow(true)
    }
    console.log(data)

    const filtered = data.filter(countryArr => countryArr.country === selectedCountry)
    const filteredCountry = filtered.map(item => item.country)
    const filteredConfirm = filtered.map(item => item.cases)
    const filteredRecovered = filtered.map(item => item.recovered)
    const filtereddeaths = filtered.map(item => item.deaths)
    return (
        <div>
            <Nav />
            <FormControl className={classes.formControl}>
                <InputLabel>Select Country</InputLabel>
                <Select
                    native
                    onChange={handleChange}
                >
                    <option aria-label="None" value="" />
                    {data.map((coronaData, i) => <option key={i} value={coronaData.country}>{coronaData.country}</option>)}
                </Select>
            </FormControl>
            {show &&
                <>
                    <div className='cards'>
                        <Cards name={filteredCountry} confirmedValue={filteredConfirm} recoveredValue={filteredRecovered} deathValue={filtereddeaths} />
                    </div>
                    <div>
                        <Charts name={filteredCountry} confirmedValue={filteredConfirm} recoveredValue={filteredRecovered} deathValue={filtereddeaths} />
                    </div>

                </>}
            <br />
            {hasError && <p>Sorry Please try again</p>}
        </div>
    )
}

export default Home
