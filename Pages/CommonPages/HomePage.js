class HomePage {
    constructor(page) {
        this.page=page
        this.PatientModule = page.locator('xpath=//div[@data-testid="Patients"]//div[@class="MuiBox-root css-1l4w6pd"]')
    }
}
module.exports = HomePage