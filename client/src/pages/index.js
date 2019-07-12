import React from 'react'
import { BrowserRouter as Router,Switch,Route} from "react-router-dom"

// 页面
import Detail from './detail/index'
import login from './login/index'
import NotFoundPage from './404/index'

class Sixpence extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <Switch>
                    {/* <Route exact path="/" component={Detail}/> */}
                    <Route path="/login" component={Login} />
                    {/* <Route path="/about/:userId" component={About} /> */}
                    {/* <Route path="/about" component={About} /> */}
                    {/* <Route path="/accounts" component={Accounts}/> */}
                    {/* <Route path="/search/:content" component={Search}/> */}
                    {/* <Route path="/search" component={Search}/> */}
                    <Route component={NotFoundPage} />
                </Switch>
            </Router>
        )
    }
}