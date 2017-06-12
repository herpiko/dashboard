import React from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import {
	VolumeCreateConnected
} from "../containers";

import {
	AppPage,
	PageNotFoundPage,
	WelcomePage,
	OverviewPage,
	CatalogListPage,
	StackListPage, StackDetailsPage, StackCreatePage,
	ServiceListPage, ServiceCreatePage, ServiceDetailsPage,
	ContainerListPage, ContainerDetailsPage,
	VolumeListPage, VolumeDetailsPage,
	FirewallPage,
	LoginPage, SignupPage
} from "../pages";

export default class Routes extends React.Component {

	scrollToTop() {
	  window.scrollTo(0, 0);
	}

	render() {
		return (
			<Router history={ browserHistory }>
				<Route path={ "/" } component= { AppPage }>
					<IndexRoute component={ WelcomePage } onEnter={this.scrollToTop} />
					<Route path={ "/overview" } component={ OverviewPage } onEnter={this.scrollToTop} />
					<Route path={ "/catalog" } component={ CatalogListPage } onEnter={this.scrollToTop} />
					<Route path={ "/stacks" } component={ StackListPage } onEnter={this.scrollToTop} />
					<Route path={ "/stacks/new" } component={ StackCreatePage } onEnter={this.scrollToTop} />
					<Route path={ "/stacks/:Id" } component={ StackDetailsPage } onEnter={this.scrollToTop} />
					<Route path={ "/services" } component={ ServiceListPage } onEnter={this.scrollToTop} />
					<Route path={ "/services/new" } component={ ServiceCreatePage } onEnter={this.scrollToTop} />
					<Route path={ "/services/:Id" } component={ ServiceDetailsPage } onEnter={this.scrollToTop} />
					<Route path={ "/containers" } component={ ContainerListPage } onEnter={this.scrollToTop} />
					<Route path={ "/containers/:Id" } component={ ContainerDetailsPage } onEnter={this.scrollToTop} />
					<Route path={ "/volumes" } component={ VolumeListPage } onEnter={this.scrollToTop} />
					<Route path={ "/volumes/new" } component={ VolumeCreateConnected } onEnter={this.scrollToTop} />
					<Route path={ "/volumes/:volumeName" } component={ VolumeDetailsPage } onEnter={this.scrollToTop} />
					<Route path={ "/firewalls" } component={ FirewallPage } onEnter={this.scrollToTop} />
				</Route>
				<Route path={ "/signin" } component={ LoginPage } onEnter={this.scrollToTop} />
				<Route path={ "/signup" } component={ SignupPage } onEnter={this.scrollToTop} />
				<Route path={ "*" } component={ PageNotFoundPage } onEnter={this.scrollToTop} />
			</Router>
		);
	}
}

