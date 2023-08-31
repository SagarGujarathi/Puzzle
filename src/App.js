import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Playground from './components/Playground'
import StartGame from './components/StartGame'
import Round1 from './components/Round1'
import Round21 from './components/Round21'
import Round22 from './components/Round22'
import Round23 from './components/Round23'
import Round24 from './components/Round24'
import Round3 from './components/Round3'
import Round41 from './components/Round41'
import Round42 from './components/Round42'
import Round43 from './components/Round43'
import Round44 from './components/Round44'
import Round5 from './components/Round5'
import Swal from 'sweetalert2'
function App() {
  const [gameData, setGameData] = useState({ points: 0 })
  const [points, setPoints] = useState(0)
  const [round2, setRound2] = useState(0)
  const [round4, setRound4] = useState(0)
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'))
    console.log(data)
    if (data !== null) {
      setGameData(data)
      setPoints(data.points)
    }
    else {
      cat()
    }
  }, [])
  function storeData() {
    setGameData(prev => {
      localStorage.setItem('data', JSON.stringify(prev))
      return prev
    })
  }
  function cat() {
    Swal.fire({
      title: 'Input email address',
      input: 'email',
      inputLabel: 'Your email address',
      inputPlaceholder: 'Enter your email address',
      allowOutsideClick: false
    })
      .then(result => {
        console.log(result)
        setGameData(prev => { return { ...prev, email: result.value } })
        Swal.fire({
          title: 'Enter your username',
          input: 'text',
          inputLabel: 'Your username',
          allowOutsideClick: false
        })
          .then(result => {
            console.log(result)
            setGameData(prev => { return { ...prev, username: result.value } })
            Swal.fire({
              title: 'Enter your password',
              input: 'password',
              inputLabel: 'Password',
              inputPlaceholder: 'Enter your password',
              allowOutsideClick: false,
              inputAttributes: {
                maxlength: 10,
                autocapitalize: 'off',
                autocorrect: 'off'
              }
            })
              .then(result => {
                console.log(result)
                setGameData(prev => { return { ...prev, password: result.value } })
                storeData()
              })
          })
      })
  }
  function storePoints() {
    console.log(points, round2, round4)
    setPoints(points => {
      localStorage.setItem('data', JSON.stringify({ ...gameData, points: points + ((round2 == 4) ? 1 : 0) + ((round4 == 4) ? 1 : 0) }))
      return points + ((round2 == 4) ? 1 : 0) + ((round4 == 4) ? 1 : 0);
    })
  }
  return (
    <>
      <div className="main-container">
        <div className="nav-bar">
          <span>
            {'Dashboard'}
          </span>
          <span>
            {gameData.username}
          </span>
        </div>
        <div className="playground">
          <Routes>
            <Route path='/' element={
              <Playground points={points} setPoints={setPoints} />
            } />
            <Route path='/startgame' element={<StartGame setPoints={setPoints} />} />
            <Route path='/round1' element={<Round1 setPoints={setPoints} />} />
            <Route path='/round2/Q1' element={<Round21 setPoints={setRound2} />} />
            <Route path='/round2/Q2' element={<Round22 setPoints={setRound2} />} />
            <Route path='/round2/Q3' element={<Round23 setPoints={setRound2} />} />
            <Route path='/round2/Q4' element={<Round24 setPoints={setRound2} />} />
            <Route path='/round3' element={<Round3 setPoints={setPoints} />} />
            <Route path='/round4/Q1' element={<Round41 setPoints={setRound4} />} />
            <Route path='/round4/Q2' element={<Round42 setPoints={setRound4} />} />
            <Route path='/round4/Q3' element={<Round43 setPoints={setRound4} />} />
            <Route path='/round4/Q4' element={<Round44 setPoints={setRound4} />} />
            <Route path='/round5' element={<Round5 setPoints={setPoints} storePoints={storePoints} />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App