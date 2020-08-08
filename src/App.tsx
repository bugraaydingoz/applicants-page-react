import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

// Pages
import { ApplicantsPage } from './pages/applicants'

// Components
import { Header } from './components/header'
import { Footer } from './components/footer'

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/applicants">
            <ApplicantsPage />
          </Route>
          <Redirect from="*" to="/applicants" />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
