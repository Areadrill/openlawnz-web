import React, { Component } from "react";
import { withRouter, BrowserRouter as Router, Route } from "react-router-dom";
import { hot } from "react-hot-loader";
import MainNav from "./components/MainNav.jsx";
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import News from "./pages/News.jsx";
import SingleNews from "./pages/SingleNews.jsx";
import SingleCase from "./pages/SingleCase.jsx";
import Plugins from "./pages/Plugins.jsx";
import Developers from "./pages/Developers.jsx";
import About from "./pages/About.jsx";
import NewsContext from "./NewsContext.jsx";

import "normalize.css";
import "../scss/App.scss";

class App extends Component {
	constructor(props) {
		super(props);
		this.updateNewsData = this.updateNewsData.bind(this);

		this.state = {
			news: null
		};
	}

	updateNewsData(news) {
		this.setState({ news });
	}

	render() {
		const MainNavWithRouter = withRouter(props => <MainNav {...props} />);

		return (
			<Router>
				<div>
					<MainNavWithRouter />
					<div className="content-wrapper">
						<NewsContext.Provider value={{ data: this.state.news, updateData: this.updateNewsData }}>
							<Route exact path="/" component={Home} />
							<Route exact path="/news" component={News} />
							<Route exact path="/news/:id" component={SingleNews} />
						</NewsContext.Provider>
						<Route exact path="/search" component={Search} />
						<Route exact path="/case/:id" component={SingleCase} />
						<Route exact path="/developers" component={Developers} />
						<Route exact path="/plugins" component={Plugins} />
						<Route exact path="/about" component={About} />
					</div>
				</div>
			</Router>
		);
	}
}

export default hot(module)(App);
