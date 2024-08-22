class SideMenu {
    constructor(page) {
        this.page = page
        this.homeDashboardButton = page.getByTestId('homeDashboard')
        
    }
}
module.exports = SideMenu