import AppPage from "./app/AppPage"
import { ContainerListPage, ContainerDetailsPage } from "./containers"
import { ServiceListPage, ServiceDetailsPage, ServiceCreatePage } from "./services"
import { StackListPage, StackDetailsPage,	StackCreatePage } from "./stacks"
import { VolumeListPage, VolumeCreatePage, VolumeDetailsPage } from "./volumes"
import WelcomePage from "./welcome/WelcomePage"
import OverviewPage from "./overview/OverviewPage"
import PageNotFoundPage from "./pagenotfound/PageNotFoundPage"
import { CatalogListPage, CatalogDetailsPage } from "./catalog"
import FirewallPage from "./firewalls/FirewallPage"
import LoginPage from "./login/LoginPage"
import SignupPage from "./signup/SignupPage"

export {
	AppPage,
	ContainerListPage, ContainerDetailsPage,
	ServiceListPage, ServiceDetailsPage, ServiceCreatePage,
 	StackListPage, StackDetailsPage,	StackCreatePage,
	VolumeListPage, VolumeCreatePage, VolumeDetailsPage,
	FirewallPage,
	WelcomePage,
	CatalogListPage, CatalogDetailsPage,
	OverviewPage,
	PageNotFoundPage,
	LoginPage, SignupPage
}